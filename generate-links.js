/**
 * Link & Auth Generator for Diwali Gift Web App
 * 
 * - Generates / updates unique unguessable tokens for each friend in config.js
 * - Generates static redirect pages: index/<friend-id>/index.html
 * - Generates links.txt (gitignored) with shareable links
 * - Ensures .gitignore exists and includes links.txt
 */

const fs = require('fs');
const path = require('path');

// 1. Ensure .gitignore includes links.txt
const gitignorePath = path.join(__dirname, '.gitignore');
let gitignoreContent = '';
if (fs.existsSync(gitignorePath)) {
  gitignoreContent = fs.readFileSync(gitignorePath, 'utf8');
}
if (!gitignoreContent.includes('links.txt')) {
  gitignoreContent += (gitignoreContent ? '\n' : '') + '# Private invite links (DO NOT COMMIT)\nlinks.txt\nsecret-links.txt\n';
  fs.writeFileSync(gitignorePath, gitignoreContent, 'utf8');
  console.log('✓ Added links.txt to .gitignore');
}

// 2. Read config.js
const configPath = path.join(__dirname, 'config.js');
let configText = fs.readFileSync(configPath, 'utf8');

// Load window.CONFIG
global.window = {};
eval(configText);

const friends = window.CONFIG.friends;
if (!friends || !friends.length) {
  console.error('No friends found in config.js!');
  process.exit(1);
}

// Fixed or generated secure tokens (slug + 8-char hex)
const tokenMap = {
  'Nayan': 'nayan-7e82b4a1',
  'Karmanya': 'karmanya-3e7d91a2',
  'Saku': 'saku-84c2f1e5',
  'Riya': 'riya-a91b5c3e',
  'Nishthi': 'nishthi-2d7f8e4a',
  'Agrima': 'agrima-6c1e9f82'
};

friends.forEach(f => {
  if (!f.id) {
    f.id = tokenMap[f.displayName] || `${f.displayName.toLowerCase().replace(/[^a-z0-9]/g, '')}-${Math.random().toString(16).substring(2, 10)}`;
  }
});

// Write updated config.js preserving structure
let updatedConfig = `/* ==========================================================
   EDIT THIS FILE to personalise everything.
   - id:          unique token for secret invite links
   - names:       every spelling/nickname that should unlock this gift
                  (case, spaces and punctuation are ignored)
   - food:        "chocolate" | "panipuri" | "pavbhaji" | "dosa" | "cheesecake"
   - foodNote:    your personal handwritten note explaining why this
                  food reminds you of them, our shared memory with it, etc.
   - question:    the personal question + options; \`answer\` is the
                  index of the correct option (0 = first option)
   - memories:    shown in the order pieces are eaten (6 per friend).
                  photo: path like "photos/nayan1.jpg", or "" for none
   - wish:        final message after the last piece is eaten
   ========================================================== */

window.CONFIG = {

  // Optional: put your own photo of the chocolate wrapper in /photos
  // and set its path here, e.g. "photos/wrapper.jpg". Leave "" to use
  // the built-in purple wrapper.
  wrapperImage: ${JSON.stringify(window.CONFIG.wrapperImage || "")},

  friends: [
`;

friends.forEach((f, idx) => {
  updatedConfig += `    {\n`;
  updatedConfig += `      id: ${JSON.stringify(f.id)},\n`;
  updatedConfig += `      displayName: ${JSON.stringify(f.displayName)},\n`;
  updatedConfig += `      names: ${JSON.stringify(f.names)},\n`;
  updatedConfig += `      food: ${JSON.stringify(f.food)},\n`;
  updatedConfig += `      foodNote: ${JSON.stringify(f.foodNote)},\n`;
  updatedConfig += `      question: ${JSON.stringify(f.question)},\n`;
  updatedConfig += `      options: ${JSON.stringify(f.options)},\n`;
  updatedConfig += `      answer: ${f.answer},\n`;
  updatedConfig += `      memories: [\n`;
  f.memories.forEach((m, mIdx) => {
    const comma = mIdx < f.memories.length - 1 ? ',' : '';
    updatedConfig += `        { text: ${JSON.stringify(m.text)}, photo: ${JSON.stringify(m.photo || "")} }${comma}\n`;
  });
  updatedConfig += `      ],\n`;
  updatedConfig += `      wish: ${JSON.stringify(f.wish)}\n`;
  updatedConfig += `    }${idx < friends.length - 1 ? ',' : ''}\n\n`;
});

updatedConfig += `  ]\n};\n`;
fs.writeFileSync(configPath, updatedConfig, 'utf8');
console.log('✓ Updated config.js with unique friend tokens');

// 3. Generate static redirect pages: index/<id>/index.html
const indexBaseDir = path.join(__dirname, 'index');
if (!fs.existsSync(indexBaseDir)) {
  fs.mkdirSync(indexBaseDir, { recursive: true });
}

friends.forEach(f => {
  const friendDir = path.join(indexBaseDir, f.id);
  if (!fs.existsSync(friendDir)) {
    fs.mkdirSync(friendDir, { recursive: true });
  }

  const redirectHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${f.displayName}'s Diwali Surprise 🪔</title>
  <meta http-equiv="refresh" content="0; url=../../index.html?u=${f.id}">
  <script>
    window.location.replace("../../index.html?u=${f.id}" + (window.location.hash || ""));
  </script>
  <style>
    body {
      background: radial-gradient(circle at 50% 30%, #3d1b33 0%, #1a0815 100%);
      color: #ffd54f;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
      text-align: center;
      padding: 20px;
    }
    .box {
      background: rgba(255, 248, 237, 0.08);
      border: 2px solid #ffd54f;
      border-radius: 20px;
      padding: 30px 24px;
      max-width: 420px;
      backdrop-filter: blur(10px);
      box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    }
    h2 { font-size: 1.6rem; margin: 0 0 12px; color: #ffe082; }
    p { margin: 0 0 16px; color: #fff3e0; font-size: 1rem; }
    a { color: #ffd54f; font-weight: bold; text-decoration: underline; }
  </style>
</head>
<body>
  <div class="box">
    <h2>🪔 Opening Diwali Surprise...</h2>
    <p>Opening ${f.displayName}'s special feast! If you are not redirected automatically within 2 seconds:</p>
    <a href="../../index.html?u=${f.id}">Click here to open gift 🎁</a>
  </div>
</body>
</html>
`;

  fs.writeFileSync(path.join(friendDir, 'index.html'), redirectHtml, 'utf8');
});
console.log(`✓ Generated ${friends.length} subpages in index/<hashed-id>/`);

// 4. Generate links.txt (Gitignored)
const hostedBase = 'https://my-website-host.github.io/diwali-gift';
let linksDoc = `========================================================================
🪔 DIWALI GIFT - SECRET INVITE LINKS FOR FRIENDS 🪔
========================================================================
HOSTED SITE:  ${hostedBase}/
CONFIDENTIAL: Keep this file private. It is automatically gitignored.
Share each link only with its respective friend!

When a friend opens their link, they bypass the name gate and go
straight to their personal quiz & custom food feast!
========================================================================

`;

friends.forEach((f, idx) => {
  linksDoc += `------------------------------------------------------------------------\n`;
  linksDoc += `[${idx + 1}] ${f.displayName.toUpperCase()} (${f.food})\n`;
  linksDoc += `------------------------------------------------------------------------\n`;
  linksDoc += `Live Link (Recommended):   ${hostedBase}/?u=${f.id}\n`;
  linksDoc += `Pretty Path Link:          ${hostedBase}/index/${f.id}/\n`;
  linksDoc += `Anchor Hash Link:          ${hostedBase}/#${f.id}\n`;
  linksDoc += `Local Test Link:           file:///${__dirname.replace(/\\/g, '/')}/index.html?u=${f.id}\n\n`;
});

linksDoc += `========================================================================
💡 QUICK SHARING OPTIONS:
1. Open "share-links.html" locally in your browser for 1-click copying and WhatsApp sharing!
2. Copy any of the "Live Link" URLs above and send directly to your friend.
========================================================================\n`;

fs.writeFileSync(path.join(__dirname, 'links.txt'), linksDoc, 'utf8');
console.log('✓ Generated links.txt with all unique invite links');

