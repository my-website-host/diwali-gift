/* ==========================================================
   Realistic Indian Food SVGs with Thematic Tabletop Surroundings
   Includes Pav Bhaji, Dosa, Pani Puri, Chocolate, and Cheesecake.
   ========================================================== */

(function () {

  /* ---------------- Shared SVG Defs & Atmospheric Gradients ---------------- */
  const commonDefs = `
    <defs>
      <!-- Stainless Steel Gradients -->
      <linearGradient id="steelPlateG" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#ffffff"/>
        <stop offset="15%" stop-color="#e2e7ef"/>
        <stop offset="50%" stop-color="#b8c2d1"/>
        <stop offset="85%" stop-color="#e8ecf3"/>
        <stop offset="100%" stop-color="#9ea9b8"/>
      </linearGradient>
      <linearGradient id="steelCavityG" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#8a95a5"/>
        <stop offset="12%" stop-color="#adb7c5"/>
        <stop offset="85%" stop-color="#d6dce5"/>
        <stop offset="100%" stop-color="#eef1f6"/>
      </linearGradient>
      <radialGradient id="steelBowlG" cx="45%" cy="40%" r="65%">
        <stop offset="0%" stop-color="#f8fafd"/>
        <stop offset="60%" stop-color="#c5ccd7"/>
        <stop offset="100%" stop-color="#8e99a8"/>
      </radialGradient>

      <!-- Traditional Brass Gradient -->
      <linearGradient id="brassG" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#ffeaa7"/>
        <stop offset="35%" stop-color="#e1b12c"/>
        <stop offset="75%" stop-color="#c48a12"/>
        <stop offset="100%" stop-color="#7f5305"/>
      </linearGradient>

      <!-- Tabletop Materials -->
      <!-- 1. Warm Rustic Wood Table (for Pav Bhaji) -->
      <linearGradient id="woodTableG" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#4a2511"/>
        <stop offset="30%" stop-color="#5a2f16"/>
        <stop offset="70%" stop-color="#3d1e0d"/>
        <stop offset="100%" stop-color="#2c1407"/>
      </linearGradient>

      <!-- 2. Dark Teak Dining Table (for Dosa) -->
      <linearGradient id="teakWoodG" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#2c1608"/>
        <stop offset="50%" stop-color="#3a1d0b"/>
        <stop offset="100%" stop-color="#1f0f05"/>
      </linearGradient>
      <linearGradient id="juteMatG" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#d4ba96"/>
        <stop offset="50%" stop-color="#c8a87e"/>
        <stop offset="100%" stop-color="#b89363"/>
      </linearGradient>

      <!-- 3. Vintage Chaat Cart Table (for Pani Puri) -->
      <linearGradient id="chaatCartG" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#1e4d46"/>
        <stop offset="45%" stop-color="#245a52"/>
        <stop offset="85%" stop-color="#183e38"/>
        <stop offset="100%" stop-color="#0f2b26"/>
      </linearGradient>

      <!-- 4. Royal Maroon Silk Tablecloth (for Chocolate) -->
      <radialGradient id="silkClothG" cx="50%" cy="40%" r="75%">
        <stop offset="0%" stop-color="#691535"/>
        <stop offset="50%" stop-color="#4e0d26"/>
        <stop offset="100%" stop-color="#2c0515"/>
      </radialGradient>

      <!-- 5. Modern Cafe Marble Table & Cheesecake Gradients -->
      <linearGradient id="marbleTableG" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#f8f9fa"/>
        <stop offset="35%" stop-color="#edf0f3"/>
        <stop offset="70%" stop-color="#e2e6ea"/>
        <stop offset="100%" stop-color="#d3d7dc"/>
      </linearGradient>
      <linearGradient id="cheeseCreamG" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#fffdf7"/>
        <stop offset="35%" stop-color="#fdf4db"/>
        <stop offset="75%" stop-color="#f6e4ba"/>
        <stop offset="100%" stop-color="#ebd096"/>
      </linearGradient>
      <radialGradient id="cheeseBakedG" cx="45%" cy="40%" r="65%">
        <stop offset="0%" stop-color="#fffcf2"/>
        <stop offset="50%" stop-color="#faedd0"/>
        <stop offset="85%" stop-color="#f2d79c"/>
        <stop offset="100%" stop-color="#dda555"/>
      </radialGradient>
      <linearGradient id="crustG" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#c68a4c"/>
        <stop offset="50%" stop-color="#a8692c"/>
        <stop offset="100%" stop-color="#7a4212"/>
      </linearGradient>
      <linearGradient id="porcelainG" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#ffffff"/>
        <stop offset="70%" stop-color="#f4f6f9"/>
        <stop offset="100%" stop-color="#dce1e8"/>
      </linearGradient>

      <!-- Filter Shadow & Soft Glow -->
      <filter id="tableShadow" x="-15%" y="-15%" width="130%" height="130%">
        <feDropShadow dx="0" dy="10" stdDeviation="8" flood-color="#000000" flood-opacity="0.45"/>
      </filter>
      <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="3" result="blur"/>
        <feComposite in="SourceGraphic" in2="blur" operator="over"/>
      </filter>
      <filter id="candleBloom" x="-40%" y="-40%" width="180%" height="180%">
        <feGaussianBlur stdDeviation="6" result="blur"/>
        <feComposite in="SourceGraphic" in2="blur" operator="over"/>
      </filter>
    </defs>`;

  /* ==========================================================
     1. PAV BHAJI (Mumbai Street Cafe Tabletop + Cutting Chai)
     ========================================================== */
  function pavbhaji() {
    return `<svg viewBox="0 0 460 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pav Bhaji on a rustic street cafe table">
      ${commonDefs}
      <defs>
        <radialGradient id="bhajiBaseG" cx="48%" cy="42%" r="70%">
          <stop offset="0%" stop-color="#f05a24"/>
          <stop offset="40%" stop-color="#d33c10"/>
          <stop offset="80%" stop-color="#a72506"/>
          <stop offset="100%" stop-color="#721401"/>
        </radialGradient>
        <linearGradient id="pavCrustG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#f7bb59"/>
          <stop offset="35%" stop-color="#e28c25"/>
          <stop offset="75%" stop-color="#b65e10"/>
          <stop offset="100%" stop-color="#833d06"/>
        </linearGradient>
        <linearGradient id="butterG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#fff8b3"/>
          <stop offset="60%" stop-color="#ffd54f"/>
          <stop offset="100%" stop-color="#f5b300"/>
        </linearGradient>
        <pattern id="ginghamP" width="16" height="16" patternUnits="userSpaceOnUse">
          <rect width="16" height="16" fill="#fcf6ed"/>
          <rect width="8" height="16" fill="#e74c3c" opacity="0.32"/>
          <rect width="16" height="8" fill="#e74c3c" opacity="0.32"/>
        </pattern>
      </defs>

      <!-- 1. TABLETOP: Rustic Wood Planks -->
      <rect x="0" y="0" width="460" height="340" rx="18" fill="url(#woodTableG)"/>
      <line x1="0" y1="112" x2="460" y2="112" stroke="#2a1205" stroke-width="2" opacity="0.6"/>
      <line x1="0" y1="228" x2="460" y2="228" stroke="#2a1205" stroke-width="2" opacity="0.6"/>
      <path d="M0 45 Q120 40 240 48 T460 42" stroke="#683719" stroke-width="1" opacity="0.25" fill="none"/>
      <path d="M0 165 Q180 172 320 162 T460 168" stroke="#683719" stroke-width="1" opacity="0.25" fill="none"/>
      <path d="M0 285 Q140 278 280 286 T460 280" stroke="#683719" stroke-width="1" opacity="0.25" fill="none"/>

      <!-- 2. SURROUNDING PROPS -->
      <g id="table-napkin" transform="rotate(-7 45 15)">
        <rect x="12" y="8" width="125" height="95" rx="5" fill="url(#ginghamP)" stroke="#d9bfa3" stroke-width="1" filter="url(#tableShadow)"/>
      </g>

      <!-- Street Cutting Chai Glass (top-right) -->
      <g id="cutting-chai" transform="translate(415, 62)">
        <ellipse cx="0" cy="55" rx="16" ry="7" fill="rgba(0,0,0,0.4)"/>
        <path d="M-15 -35 L-11 50 Q0 55 11 50 L15 -35 Z" fill="rgba(255,255,255,0.22)" stroke="#ffffff" stroke-width="1.5"/>
        <path d="M-13 -10 L-10 48 Q0 52 10 48 L13 -10 Z" fill="#d35400" opacity="0.9"/>
        <ellipse cx="0" cy="-10" rx="13" ry="5" fill="#f8c471"/>
        <line x1="-7" y1="-30" x2="-5" y2="46" stroke="#ffffff" stroke-width="1" opacity="0.5"/>
        <line x1="0" y1="-30" x2="0" y2="48" stroke="#ffffff" stroke-width="1.2" opacity="0.6"/>
        <line x1="7" y1="-30" x2="5" y2="46" stroke="#ffffff" stroke-width="1" opacity="0.5"/>
        <path d="M-2 -42 Q4 -54 -2 -66 Q-8 -78 0 -88" stroke="#ffffff" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.45"/>
        <path d="M4 -38 Q-2 -50 4 -62" stroke="#ffffff" stroke-width="1.6" stroke-linecap="round" fill="none" opacity="0.35"/>
      </g>

      <!-- Mini Masala Katori with Brass Spoon (bottom-right) -->
      <g id="masala-katori" transform="translate(418, 270)">
        <ellipse cx="0" cy="4" r="22" fill="rgba(0,0,0,0.35)"/>
        <circle cx="0" cy="0" r="22" fill="url(#steelBowlG)" stroke="#7d8898" stroke-width="1.5"/>
        <circle cx="0" cy="0" r="17" fill="#b03a2e"/>
        <path d="M-4 -2 Q8 -16 18 -32" stroke="url(#brassG)" stroke-width="3" stroke-linecap="round" fill="none"/>
        <ellipse cx="-4" cy="-2" rx="6" ry="4" fill="url(#brassG)" transform="rotate(-30 -4 -2)"/>
      </g>

      <!-- Sliced Lime on Table -->
      <g id="table-lime" transform="translate(38, 305) rotate(15)">
        <ellipse cx="0" cy="0" rx="14" ry="9" fill="#ffd600" stroke="#fbc02d" stroke-width="1.5"/>
        <ellipse cx="0" cy="0" rx="11" ry="6.5" fill="#fff9c4"/>
        <circle cx="3" cy="-1" r="1.5" fill="#fffde7"/>
      </g>

      <!-- 3. THE PAV BHAJI STEEL TRAY -->
      <g id="thali-group" transform="translate(10, 10)">
        <rect x="8" y="8" width="372" height="300" rx="24" fill="url(#steelPlateG)" stroke="#8e99a8" stroke-width="3" filter="url(#tableShadow)"/>
        <rect x="14" y="14" width="360" height="288" rx="20" fill="none" stroke="#ffffff" stroke-width="2" opacity="0.6"/>

        <!-- BHAJI COMPARTMENT (Top Left) -->
        <rect x="22" y="22" width="204" height="140" rx="14" fill="url(#steelCavityG)" stroke="#7d8898" stroke-width="2.5"/>
        <rect x="26" y="26" width="196" height="132" rx="12" fill="url(#bhajiBaseG)"/>

        <g id="bhaji-base-textures" opacity="0.85">
          <ellipse cx="70" cy="65" rx="34" ry="22" fill="#bd340b"/>
          <ellipse cx="155" cy="70" rx="38" ry="24" fill="#be370c"/>
          <ellipse cx="110" cy="115" rx="45" ry="23" fill="#a42807"/>
          <ellipse cx="165" cy="120" rx="32" ry="20" fill="#c43d0e"/>
        </g>

        <!-- 6 Progressive Scoops of Bhaji -->
        <g id="bhaji-scoops">
          <ellipse id="bhaji-scoop-0" cx="170" cy="125" rx="26" ry="16" fill="#d84614"/>
          <ellipse id="bhaji-scoop-1" cx="75" cy="122" rx="26" ry="16" fill="#d44212"/>
          <ellipse id="bhaji-scoop-2" cx="124" cy="126" rx="24" ry="15" fill="#de4a16"/>
          <ellipse id="bhaji-scoop-3" cx="165" cy="72" rx="28" ry="18" fill="#e04e18"/>
          <ellipse id="bhaji-scoop-4" cx="72" cy="68" rx="28" ry="18" fill="#d84714"/>
          <ellipse id="bhaji-scoop-5" cx="124" cy="85" rx="32" ry="22" fill="#ea551c"/>
        </g>

        <!-- Cilantro & Onion Bits on Bhaji -->
        <g id="bhaji-garnish">
          <circle cx="65" cy="55" r="3" fill="#2e7d32"/><circle cx="72" cy="52" r="2.5" fill="#388e3c"/>
          <circle cx="150" cy="60" r="3.2" fill="#2e7d32"/><circle cx="158" cy="64" r="2.2" fill="#4caf50"/>
          <circle cx="105" cy="125" r="2.8" fill="#2e7d32"/><circle cx="140" cy="127" r="3" fill="#388e3c"/>
          <rect x="85" y="60" width="4" height="4" rx="1" fill="#ffffff" opacity="0.9"/>
          <rect x="135" y="80" width="4.5" height="4.5" rx="1.2" fill="#fad2e1" opacity="0.95"/>
          <rect x="160" y="112" width="3.5" height="3.5" rx="1" fill="#ffffff" opacity="0.9"/>
          <rect x="72" y="105" width="4" height="4" rx="1" fill="#fad2e1" opacity="0.9"/>
        </g>

        <!-- Butter Slab & Melt Halo -->
        <g id="bhaji-butter-wrap">
          <ellipse id="butter-pool" cx="124" cy="85" rx="30" ry="16" fill="#ffd54f" opacity="0.6" filter="url(#softGlow)"/>
          <rect id="butter-slab" x="110" y="74" width="28" height="18" rx="4" fill="url(#butterG)" stroke="#e6a100" stroke-width="1.5" filter="url(#tableShadow)"/>
        </g>

        <circle id="bhaji-dip-target" cx="124" cy="90" r="2" fill="none"/>

        <!-- SALAD COMPARTMENT (Top Right) -->
        <rect x="234" y="22" width="132" height="140" rx="14" fill="url(#steelCavityG)" stroke="#7d8898" stroke-width="2.5"/>
        <rect x="238" y="26" width="124" height="132" rx="12" fill="#eef2f7"/>

        <g id="lemon-wedge" transform="translate(300, 60)">
          <path d="M-26 18 A30 30 0 0 1 26 18 Z" fill="#ffd600" stroke="#fbc02d" stroke-width="2.5"/>
          <path d="M-22 16 A24 24 0 0 1 22 16 Z" fill="#fff9c4"/>
          <path d="M-18 14 A20 20 0 0 1 -4 2 L-2 14 Z" fill="#fff176"/>
          <path d="M-1 14 L-2 1 A20 20 0 0 1 12 5 Z" fill="#fff176"/>
          <path d="M2 14 L14 7 A20 20 0 0 1 20 14 Z" fill="#fff176"/>
        </g>

        <g id="onion-rings">
          <circle cx="270" cy="115" r="20" fill="none" stroke="#ab3d79" stroke-width="4"/>
          <circle cx="270" cy="115" r="14" fill="none" stroke="#ffffff" stroke-width="2.5"/>
          <circle cx="315" cy="112" r="22" fill="none" stroke="#ab3d79" stroke-width="4"/>
          <circle cx="315" cy="112" r="16" fill="none" stroke="#ffffff" stroke-width="2.5"/>
          <ellipse cx="292" cy="132" rx="5.5" ry="3" fill="#43a047" stroke="#2e7d32" stroke-width="1.5" transform="rotate(-20 292 132)"/>
        </g>

        <!-- PAV COMPARTMENT (Bottom) -->
        <rect x="22" y="170" width="344" height="126" rx="14" fill="url(#steelCavityG)" stroke="#7d8898" stroke-width="2.5"/>
        <rect x="26" y="174" width="336" height="118" rx="12" fill="#edf1f6"/>

        <!-- 6 Golden Buttery Pav Buns -->
        ${[
          { id: 0, x: 36, y: 184 },
          { id: 1, x: 144, y: 184 },
          { id: 2, x: 252, y: 184 },
          { id: 3, x: 36, y: 236 },
          { id: 4, x: 144, y: 236 },
          { id: 5, x: 252, y: 236 }
        ].map(p => `
          <g data-piece data-index="${p.id}" class="pav-piece piece-pulse" style="--d:${p.id * 0.18}s">
            <rect x="${p.x + 3}" y="${p.y + 5}" width="98" height="44" rx="12" fill="rgba(0,0,0,0.18)"/>
            <rect x="${p.x}" y="${p.y}" width="98" height="44" rx="12" fill="url(#pavCrustG)" stroke="#a14e08" stroke-width="1.5"/>
            <rect x="${p.x + 7}" y="${p.y + 6}" width="84" height="32" rx="9" fill="#ffdf99" opacity="0.6"/>
            <ellipse cx="${p.x + 49}" cy="${p.y + 13}" rx="34" ry="6" fill="#ffffff" opacity="0.45"/>
            <path d="M${p.x + 18} ${p.y + 22} q30 -6 60 0" stroke="#ffffff" stroke-width="2.2" stroke-linecap="round" opacity="0.4" fill="none"/>
            <ellipse cx="${p.x + 62}" cy="${p.y + 20}" rx="10" ry="5" fill="#ffe066" opacity="0.85"/>
            <g class="gravy-tip">
              <path d="M${p.x + 4} ${p.y + 26} Q${p.x + 49} ${p.y + 40} ${p.x + 94} ${p.y + 26} L${p.x + 94} ${p.y + 42} Q${p.x + 49} ${p.y + 48} ${p.x + 4} ${p.y + 42} Z" fill="#d84614"/>
              <circle cx="${p.x + 44}" cy="${p.y + 33}" r="2.2" fill="#2e7d32"/>
              <circle cx="${p.x + 65}" cy="${p.y + 35}" r="1.8" fill="#ffd54f"/>
            </g>
          </g>
        `).join('')}
      </g>
    </svg>`;
  }

  /* ==========================================================
     2. DOSA (Teak Dining Table + Brass Filter Coffee & Banana Leaf)
     ========================================================== */
  function dosa() {
    return `<svg viewBox="0 0 460 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Crispy Dosa with South Indian Filter Coffee">
      ${commonDefs}
      <defs>
        <linearGradient id="bananaLeafG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#43a047"/>
          <stop offset="50%" stop-color="#2e7d32"/>
          <stop offset="100%" stop-color="#1b5e20"/>
        </linearGradient>
        <linearGradient id="dosaRoastG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#f5cc76"/>
          <stop offset="25%" stop-color="#e09d32"/>
          <stop offset="60%" stop-color="#c17519"/>
          <stop offset="85%" stop-color="#8d4a0a"/>
          <stop offset="100%" stop-color="#5a2c04"/>
        </linearGradient>
        <linearGradient id="dosaCrustHighlight" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#fff5cc" stop-opacity="0.6"/>
          <stop offset="100%" stop-color="#fff5cc" stop-opacity="0"/>
        </linearGradient>
      </defs>

      <!-- 1. TABLETOP: Dark Teak Wood -->
      <rect x="0" y="0" width="460" height="340" rx="18" fill="url(#teakWoodG)"/>

      <!-- 2. Woven Jute Dining Runner with Stitch Border -->
      <rect x="12" y="10" width="436" height="320" rx="14" fill="url(#juteMatG)" stroke="#b59469" stroke-width="2" filter="url(#tableShadow)"/>
      <rect x="18" y="16" width="424" height="308" rx="10" fill="none" stroke="#7a5528" stroke-width="1.5" stroke-dasharray="4 6" opacity="0.45"/>

      <!-- Traditional White Chalk Kolam in Bottom Left Corner -->
      <g id="kolam-art" transform="translate(30, 305)" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" opacity="0.45" fill="none">
        <path d="M0 0 L10 -10 L20 0 L10 10 Z"/>
        <circle cx="10" cy="0" r="2" fill="#ffffff"/>
        <path d="M-6 0 L26 0 M10 -16 L10 16"/>
      </g>

      <!-- 3. SOUTH INDIAN BRASS FILTER COFFEE (top-right) -->
      <g id="filter-coffee" transform="translate(416, 68)">
        <ellipse cx="0" cy="46" rx="22" ry="9" fill="rgba(0,0,0,0.4)"/>
        <ellipse cx="0" cy="38" rx="24" ry="11" fill="url(#brassG)" stroke="#9c6d05" stroke-width="1.5"/>
        <ellipse cx="0" cy="36" rx="20" ry="8" fill="#5c3803"/>
        <path d="M-13 -22 L-9 35 Q0 39 9 35 L13 -22 Z" fill="url(#brassG)" stroke="#9c6d05" stroke-width="1.5"/>
        <ellipse cx="0" cy="-20" rx="12" ry="5" fill="#783e1c"/>
        <ellipse cx="0" cy="-21" rx="10" ry="4" fill="#dfbe9b"/>
        <circle cx="-3" cy="-21" r="1.5" fill="#ffffff" opacity="0.7"/>
        <circle cx="3" cy="-20" r="1.2" fill="#ffffff" opacity="0.7"/>
        <path d="M-2 -32 Q3 -44 -2 -56 Q-6 -68 1 -78" stroke="#ffffff" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.5"/>
      </g>

      <!-- 4. Brass Saucer with Dried Red Chilies & Curry Leaves (bottom-right) -->
      <g id="chili-saucer" transform="translate(418, 265)">
        <ellipse cx="0" cy="3" rx="18" ry="8" fill="rgba(0,0,0,0.3)"/>
        <ellipse cx="0" cy="0" rx="18" ry="8" fill="url(#brassG)" stroke="#9c6d05" stroke-width="1.2"/>
        <path d="M-10 2 Q-2 -6 8 0" stroke="#c0392b" stroke-width="4" stroke-linecap="round" fill="none"/>
        <circle cx="-10" cy="2" r="1.5" fill="#27ae60"/>
        <path d="M-4 3 Q2 8 8 5" stroke="#2e7d32" stroke-width="2.5" stroke-linecap="round" fill="none"/>
      </g>

      <!-- 5. ROUND STEEL PLATTER WITH BANANA LEAF & DOSA -->
      <g id="dosa-platter" transform="translate(2, 5)">
        <ellipse cx="205" cy="165" rx="188" ry="148" fill="url(#steelPlateG)" stroke="#8e99a8" stroke-width="3" filter="url(#tableShadow)"/>

        <!-- Banana Leaf -->
        <path d="M35 165 C35 78 110 36 205 36 C300 36 375 78 375 165 C375 252 300 294 205 294 C110 294 35 252 35 165 Z" fill="url(#bananaLeafG)"/>
        <path d="M48 165 C130 162 280 162 362 165" stroke="#1b5e20" stroke-width="2.5" stroke-linecap="round" opacity="0.6" fill="none"/>
        <path d="M85 165 L112 118 M150 165 L178 108 M215 165 L242 108 M280 165 L308 115" stroke="#4caf50" stroke-width="1.5" stroke-linecap="round" opacity="0.4" fill="none"/>
        <path d="M95 165 L118 212 M160 165 L182 222 M225 165 L248 222 M290 165 L312 215" stroke="#4caf50" stroke-width="1.5" stroke-linecap="round" opacity="0.4" fill="none"/>

        <!-- THREE KATORI BOWLS -->
        <g id="bowl-sambar" transform="translate(85, 245)">
          <circle cx="0" cy="3" r="32" fill="rgba(0,0,0,0.25)"/>
          <circle cx="0" cy="0" r="32" fill="url(#steelBowlG)" stroke="#7d8898" stroke-width="2"/>
          <circle cx="0" cy="0" r="26" fill="#d85614"/>
          <circle cx="-7" cy="-5" r="1.8" fill="#212121"/><circle cx="10" cy="7" r="1.6" fill="#212121"/>
          <path d="M-5 3 Q4 -3 12 5" stroke="#2e7d32" stroke-width="3" stroke-linecap="round" fill="none"/>
          <circle id="target-sambar" cx="0" cy="0" r="2" fill="none"/>
        </g>

        <g id="bowl-coconut" transform="translate(205, 255)">
          <circle cx="0" cy="3" r="30" fill="rgba(0,0,0,0.25)"/>
          <circle cx="0" cy="0" r="30" fill="url(#steelBowlG)" stroke="#7d8898" stroke-width="2"/>
          <circle cx="0" cy="0" r="24" fill="#fcfbf7"/>
          <circle cx="-5" cy="3" r="1.6" fill="#212121"/><circle cx="7" cy="-3" r="1.8" fill="#212121"/>
          <path d="M-7 -2 Q0 5 8 1" stroke="#388e3c" stroke-width="2.8" stroke-linecap="round" fill="none"/>
          <circle id="target-coconut" cx="0" cy="0" r="2" fill="none"/>
        </g>

        <g id="bowl-tomato" transform="translate(325, 245)">
          <circle cx="0" cy="3" r="32" fill="rgba(0,0,0,0.25)"/>
          <circle cx="0" cy="0" r="32" fill="url(#steelBowlG)" stroke="#7d8898" stroke-width="2"/>
          <circle cx="0" cy="0" r="26" fill="#c0392b"/>
          <circle cx="-6" cy="5" r="1.8" fill="#212121"/><circle cx="8" cy="-4" r="1.6" fill="#212121"/>
          <path d="M-4 -3 Q4 -7 9 -1" stroke="#2e7d32" stroke-width="2.8" stroke-linecap="round" fill="none"/>
          <circle id="target-tomato" cx="0" cy="0" r="2" fill="none"/>
        </g>

        <!-- CONTINUOUS GOLDEN ROAST DOSA ROLL -->
        <g id="dosa-roll" class="dosa-interactive" transform="rotate(-4 205 135)">
          <rect x="42" y="102" width="324" height="72" rx="28" fill="rgba(0,0,0,0.3)" filter="url(#tableShadow)"/>
          ${[
            { id: 0, x: 308, w: 58, hasEnd: true },
            { id: 1, x: 254, w: 58 },
            { id: 2, x: 200, w: 58 },
            { id: 3, x: 146, w: 58 },
            { id: 4, x: 92, w: 58 },
            { id: 5, x: 40, w: 56, hasCap: true }
          ].map(s => `
            <g data-piece data-index="${s.id}" class="dosa-segment">
              <rect x="${s.x}" y="95" width="${s.w + 2}" height="74" rx="${s.hasCap ? '26 0 0 26' : '6'}" fill="url(#dosaRoastG)"/>
              <ellipse cx="${s.x + s.w * 0.4}" cy="112" rx="13" ry="5" fill="#7a3e08" opacity="0.35"/>
              <ellipse cx="${s.x + s.w * 0.7}" cy="144" rx="11" ry="4" fill="#7a3e08" opacity="0.35"/>
              <ellipse cx="${s.x + s.w * 0.3}" cy="154" rx="7" ry="3" fill="#582a03" opacity="0.4"/>
              <rect x="${s.x}" y="99" width="${s.w}" height="10" rx="4" fill="url(#dosaCrustHighlight)"/>
              <path d="M${s.x + 6} 116 Q${s.x + s.w * 0.5} 110 ${s.x + s.w - 6} 118" stroke="#ffe79a" stroke-width="2" stroke-linecap="round" opacity="0.45" fill="none"/>
              ${s.hasEnd ? `
                <g id="dosa-spiral-end">
                  <ellipse cx="366" cy="132" rx="11" ry="36" fill="#ffd57b" stroke="#c07818" stroke-width="2.5"/>
                  <ellipse cx="366" cy="132" rx="5" ry="22" fill="#a75b0b" opacity="0.85"/>
                  <circle cx="366" cy="132" r="2.8" fill="#693402"/>
                </g>
              ` : ''}
              <g class="gravy-tip">
                <ellipse cx="${s.x + s.w * 0.5}" cy="150" rx="15" ry="9" fill="#fcfbf7" stroke="#e0e0d8" stroke-width="1.5"/>
                <circle cx="${s.x + s.w * 0.5 - 4}" cy="148" r="1.6" fill="#212121"/>
                <circle cx="${s.x + s.w * 0.5 + 4}" cy="150" r="1.4" fill="#2e7d32"/>
              </g>
            </g>
          `).join('')}
        </g>
      </g>
    </svg>`;
  }

  /* ==========================================================
     3. PANI PURI (Street Chaat Cart Counter + Leaf Dona Bowls)
     ========================================================== */
  function panipuri() {
    return `<svg viewBox="0 0 460 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pani Puri at a street chaat stall">
      ${commonDefs}
      <defs>
        <radialGradient id="puriCrustG" cx="38%" cy="32%" r="75%">
          <stop offset="0%" stop-color="#ffe699"/>
          <stop offset="45%" stop-color="#f3b33a"/>
          <stop offset="80%" stop-color="#cb7a13"/>
          <stop offset="100%" stop-color="#934d05"/>
        </radialGradient>
        <linearGradient id="copperG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#ff9e56"/>
          <stop offset="30%" stop-color="#d35400"/>
          <stop offset="70%" stop-color="#b03a00"/>
          <stop offset="100%" stop-color="#6e2402"/>
        </linearGradient>
        <radialGradient id="mintPaniG" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stop-color="#b4f058"/>
          <stop offset="50%" stop-color="#6bb81c"/>
          <stop offset="100%" stop-color="#3d720b"/>
        </radialGradient>
      </defs>

      <!-- 1. TABLETOP: Vintage Street-Food Chaat Cart Table -->
      <rect x="0" y="0" width="460" height="340" rx="18" fill="url(#chaatCartG)"/>
      <line x1="0" y1="115" x2="460" y2="115" stroke="#0e2823" stroke-width="2" opacity="0.6"/>
      <line x1="0" y1="230" x2="460" y2="230" stroke="#0e2823" stroke-width="2" opacity="0.6"/>

      <!-- 2. SURROUNDING PROPS -->
      <g id="leaf-donas" transform="translate(42, 52)">
        <ellipse cx="0" cy="18" rx="28" ry="12" fill="rgba(0,0,0,0.3)"/>
        <ellipse cx="0" cy="14" rx="28" ry="11" fill="#5d6d45" stroke="#3e4a2c" stroke-width="1.5"/>
        <path d="M-22 14 Q0 18 22 14" stroke="#7e935c" stroke-width="1.5" fill="none"/>
        <ellipse cx="0" cy="7" rx="27" ry="11" fill="#677a4d" stroke="#3e4a2c" stroke-width="1.5"/>
        <ellipse cx="0" cy="0" rx="26" ry="11" fill="#758c57" stroke="#485734" stroke-width="1.5"/>
        <ellipse cx="0" cy="0" rx="22" ry="8" fill="#4d5c36"/>
        <path d="M-16 0 Q0 3 16 0" stroke="#8ca668" stroke-width="1.2" fill="none"/>
      </g>

      <g id="spice-jar" transform="translate(424, 255)">
        <ellipse cx="0" cy="38" rx="18" ry="8" fill="rgba(0,0,0,0.4)"/>
        <rect x="-14" y="-8" width="28" height="42" rx="6" fill="rgba(255,255,255,0.24)" stroke="#ffffff" stroke-width="1.5"/>
        <rect x="-12" y="6" width="24" height="26" rx="4" fill="#53331b"/>
        <rect x="-15" y="-15" width="30" height="9" rx="3" fill="url(#brassG)" stroke="#9c6d05" stroke-width="1.2"/>
        <line x1="-12" y1="-10" x2="12" y2="-10" stroke="#ffeaa7" stroke-width="1"/>
      </g>

      <g id="table-lemon" transform="translate(422, 95) rotate(-15)">
        <circle cx="0" cy="0" r="14" fill="#ffd600" stroke="#fbc02d" stroke-width="1.5"/>
        <circle cx="0" cy="0" r="11" fill="#fff9c4"/>
        <circle cx="0" cy="0" r="2" fill="#fffde7"/>
        <path d="M0 -11 L0 11 M-11 0 L11 0 M-8 -8 L8 8 M-8 8 L8 -8" stroke="#fbc02d" stroke-width="1"/>
        <path d="M-14 18 Q0 28 14 20" stroke="#2e7d32" stroke-width="4.5" stroke-linecap="round" fill="none"/>
      </g>

      <!-- 3. SIDEWAY SPICED PANI PITCHER (Left) -->
      <g id="pani-pitcher" style="transform-origin: 75px 230px; transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);">
        <ellipse cx="74" cy="252" rx="42" ry="16" fill="rgba(0,0,0,0.3)" filter="url(#tableShadow)"/>
        <path d="M42 156 Q28 196 42 231 Q54 248 74 248 Q94 248 106 231 Q120 196 106 156 Q96 148 74 148 Q52 148 42 156 Z" fill="url(#copperG)" stroke="#5e1f02" stroke-width="2" filter="url(#tableShadow)"/>
        <g fill="#ffb076" opacity="0.35">
          <circle cx="56" cy="176" r="4"/><circle cx="72" cy="171" r="5"/><circle cx="88" cy="178" r="4"/>
          <circle cx="50" cy="201" r="4.5"/><circle cx="68" cy="198" r="5"/><circle cx="86" cy="202" r="4.5"/>
        </g>
        <ellipse cx="74" cy="150" rx="27" ry="11" fill="#872901" stroke="#5e1f02" stroke-width="2"/>
        <ellipse cx="74" cy="149" rx="23" ry="8" fill="url(#mintPaniG)"/>
        <path d="M96 148 Q112 141 116 148 Q108 158 94 156 Z" fill="#d35400" stroke="#5e1f02" stroke-width="1.5"/>
        <circle id="pitcher-spout" cx="114" cy="146" r="3" fill="#8bc34a"/>
        <circle cx="70" cy="149" r="2.8" fill="#ffe066"/>
        <circle cx="82" cy="150" r="2.3" fill="#ffe066"/>
      </g>

      <!-- 4. Dynamic Water Pour Stream -->
      <path id="pour-stream" d="M114 146 Q180 100 230 110" stroke="#76c820" stroke-width="7" stroke-linecap="round" fill="none" opacity="0" filter="url(#softGlow)"/>

      <!-- 5. STEEL PLATTER OF 6 CRISPY PURIS -->
      <g id="puris-platter" transform="translate(15, 0)">
        <ellipse cx="270" cy="165" rx="136" ry="126" fill="url(#steelPlateG)" stroke="#8e99a8" stroke-width="3" filter="url(#tableShadow)"/>
        <ellipse cx="270" cy="165" rx="120" ry="110" fill="#f4f7fb" stroke="#ccd4df" stroke-width="2"/>

        ${[
          { id: 0, cx: 205, cy: 110 },
          { id: 1, cx: 275, cy: 95 },
          { id: 2, cx: 345, cy: 115 },
          { id: 3, cx: 200, cy: 195 },
          { id: 4, cx: 270, cy: 215 },
          { id: 5, cx: 340, cy: 200 }
        ].map(p => `
          <g data-piece data-index="${p.id}" class="puri-piece piece-pulse" style="--d:${p.id * 0.16}s">
            <ellipse cx="${p.cx + 2}" cy="${p.cy + 17}" rx="27" ry="13" fill="rgba(0,0,0,0.2)"/>
            <circle cx="${p.cx}" cy="${p.cy}" r="31" fill="url(#puriCrustG)" stroke="#9c5609" stroke-width="1.5"/>
            <circle cx="${p.cx - 13}" cy="${p.cy + 9}" r="3" fill="#9c5609" opacity="0.45"/>
            <circle cx="${p.cx + 13}" cy="${p.cy + 7}" r="3.2" fill="#9c5609" opacity="0.45"/>
            <path d="M${p.cx - 18} ${p.cy - 10} Q${p.cx - 6} ${p.cy - 22} ${p.cx + 10} ${p.cy - 18}" stroke="#ffffff" stroke-width="2.8" stroke-linecap="round" opacity="0.5" fill="none"/>
            <ellipse cx="${p.cx}" cy="${p.cy - 7}" rx="13" ry="9" fill="#6d3907"/>
            <ellipse cx="${p.cx}" cy="${p.cy - 6}" rx="11" ry="7.5" fill="#c68a4c"/>
            <circle cx="${p.cx - 4}" cy="${p.cy - 7}" r="2.8" fill="#5c2c06"/>
            <circle cx="${p.cx + 3}" cy="${p.cy - 5}" r="2.4" fill="#a0522d"/>
            <path d="M${p.cx - 6} ${p.cy - 6} Q${p.cx} ${p.cy - 10} ${p.cx + 6} ${p.cy - 6}" stroke="#781d06" stroke-width="2.8" stroke-linecap="round" fill="none"/>
            <g class="puri-water-wrap">
              <ellipse class="puri-water" cx="${p.cx}" cy="${p.cy - 7}" rx="12" ry="8.5" fill="url(#mintPaniG)" opacity="0" style="transition: opacity 0.35s ease, transform 0.35s ease; transform-origin: ${p.cx}px ${p.cy - 7}px; transform: scale(0.3);"/>
              <g class="puri-boondi" opacity="0" style="transition: opacity 0.3s ease;">
                <circle cx="${p.cx - 4}" cy="${p.cy - 9}" r="2" fill="#ffeb3b"/>
                <circle cx="${p.cx + 4}" cy="${p.cy - 8}" r="2.3" fill="#ffd54f"/>
                <circle cx="${p.cx}" cy="${p.cy - 5}" r="1.8" fill="#fff59d"/>
              </g>
            </g>
          </g>
        `).join('')}
      </g>
    </svg>`;
  }

  /* ==========================================================
     4. CHOCOLATE (Royal Silk Tablecloth + Glowing Diya & Fairy Lights)
     ========================================================== */
  const chocPiece = (x, y) => `
    <g data-piece class="piece-pulse">
      <rect x="${x + 3}" y="${y + 6}" width="104" height="104" rx="14" fill="rgba(0,0,0,.30)"/>
      <rect x="${x}" y="${y}" width="104" height="104" rx="14" fill="url(#chocG)"/>
      <rect x="${x + 13}" y="${y + 13}" width="78" height="78" rx="8" fill="url(#chocIn)"
            stroke="#a46a3a" stroke-opacity=".55" stroke-width="2"/>
      <path d="M${x + 20} ${y + 24} q18 -11 44 -4" stroke="#fff" stroke-opacity=".28"
            stroke-width="5" stroke-linecap="round" fill="none"/>
    </g>`;

  const sparkle = (x, y, s, o) => `
    <path d="M${x} ${y - s} L${x + s * .28} ${y - s * .28} L${x + s} ${y} L${x + s * .28} ${y + s * .28}
             L${x} ${y + s} L${x - s * .28} ${y + s * .28} L${x - s} ${y} L${x - s * .28} ${y - s * .28} Z"
          fill="#ffe9a8" opacity="${o}"/>`;

  function chocolate(cfg) {
    const wrapper = cfg.wrapperImage
      ? `<clipPath id="wclip"><rect x="40" y="32" width="380" height="276" rx="20"/></clipPath>
         <image href="${cfg.wrapperImage}" x="40" y="32" width="380" height="276"
                preserveAspectRatio="xMidYMid slice" clip-path="url(#wclip)"/>`
      : `<rect x="40" y="32" width="380" height="276" rx="20" fill="url(#wrapG)" filter="url(#tableShadow)"/>
         <rect x="48" y="40" width="364" height="260" rx="15" fill="none" stroke="#ffd36b" stroke-width="2.5" stroke-dasharray="2 7" stroke-linecap="round"/>
         ${sparkle(64, 56, 9, .9)}${sparkle(398, 62, 7, .8)}${sparkle(382, 292, 10, .9)}
         ${sparkle(76, 290, 6, .7)}${sparkle(230, 50, 5, .6)}${sparkle(54, 170, 5, .6)}${sparkle(408, 180, 6, .7)}`;

    let pieces = '';
    for (let r = 0; r < 2; r++) for (let c = 0; c < 3; c++) pieces += chocPiece(66 + c * 112, 62 + r * 112);

    return `<svg viewBox="0 0 460 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Chocolate bar on royal silk with festive fairy lights">
      ${commonDefs}
      <defs>
        <linearGradient id="wrapG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#6d2fb0"/><stop offset="100%" stop-color="#2c0f57"/>
        </linearGradient>
        <linearGradient id="chocG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#8a5130"/><stop offset="100%" stop-color="#4f2711"/>
        </linearGradient>
        <linearGradient id="chocIn" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#6e3a1c"/><stop offset="100%" stop-color="#5a2d14"/>
        </linearGradient>
      </defs>

      <!-- 1. TABLETOP: Royal Maroon Silk Tablecloth -->
      <rect x="0" y="0" width="460" height="340" rx="18" fill="url(#silkClothG)"/>
      <rect x="8" y="8" width="444" height="324" rx="12" fill="none" stroke="#d4af37" stroke-width="1.5" stroke-dasharray="4 8" opacity="0.4"/>

      <!-- 2. SURROUNDING PROPS -->
      <g id="table-diya" transform="translate(42, 48)">
        <ellipse cx="0" cy="18" rx="18" ry="7" fill="rgba(0,0,0,0.4)"/>
        <ellipse cx="0" cy="14" rx="18" ry="8" fill="#d35400" stroke="#a04000" stroke-width="1.2"/>
        <ellipse cx="0" cy="12" rx="14" ry="5.5" fill="#f39c12"/>
        <circle cx="0" cy="-2" r="14" fill="#ffb300" opacity="0.4" filter="url(#candleBloom)"/>
        <path d="M0 10 Q-6 2 0 -12 Q6 2 0 10 Z" fill="#fff176" filter="url(#softGlow)"/>
        <path d="M0 8 Q-3 3 0 -6 Q3 3 0 8 Z" fill="#ffffff"/>
      </g>

      <g id="fairy-lights">
        <path d="M10 300 Q80 330 160 310 T320 318 Q400 332 450 302" stroke="#d4af37" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.6"/>
        ${[
          { cx: 45, cy: 308 },
          { cx: 125, cy: 317 },
          { cx: 205, cy: 311 },
          { cx: 285, cy: 315 },
          { cx: 365, cy: 322 },
          { cx: 435, cy: 305 }
        ].map(b => `
          <circle cx="${b.cx}" cy="${b.cy}" r="8" fill="#ffeb3b" opacity="0.35" filter="url(#softGlow)"/>
          <circle cx="${b.cx}" cy="${b.cy}" r="3.5" fill="#fff9c4"/>
        `).join('')}
      </g>

      <g id="gift-tag" transform="translate(424, 52) rotate(18)">
        <rect x="-14" y="-22" width="28" height="44" rx="4" fill="#fff9e6" stroke="#d4af37" stroke-width="1.2" filter="url(#tableShadow)"/>
        <circle cx="0" cy="-14" r="3" fill="#691535"/>
        <text x="0" y="8" font-family="'Fredoka', sans-serif" font-size="10" font-weight="700" fill="#9c5609" text-anchor="middle">GIFT 🪔</text>
      </g>

      <!-- 3. THE CHOCOLATE BAR -->
      ${wrapper}
      ${pieces}
    </svg>`;
  }

  /* ==========================================================
     5. CHEESECAKE (Full Circle 6-Slice NY Cheesecake on Pedestal)
     ========================================================== */
  function cheesecake() {
    const cx = 210;
    const cy = 152;
    const rx = 98;
    const ry = 72;
    const H = 24;

    // 6 slices from -90 deg to 270 deg
    const angles = [-90, -30, 30, 90, 150, 210, 270];

    let pieces = '';
    for (let i = 0; i < 6; i++) {
      const a1 = angles[i] * Math.PI / 180;
      const a2 = angles[i + 1] * Math.PI / 180;
      const mid = ((angles[i] + angles[i + 1]) / 2) * Math.PI / 180;

      const x1 = cx + rx * Math.cos(a1);
      const y1 = cy + ry * Math.sin(a1);
      const x2 = cx + rx * Math.cos(a2);
      const y2 = cy + ry * Math.sin(a2);

      const mx = cx + (rx - 16) * Math.cos(mid);
      const my = cy + (ry - 12) * Math.sin(mid);

      const hasFrontWall = Math.sin(mid) > -0.25;

      const frontWall = hasFrontWall ? `
        <path d="M ${x1.toFixed(1)} ${y1.toFixed(1)} L ${x1.toFixed(1)} ${(y1 + H).toFixed(1)} A ${rx} ${ry} 0 0 1 ${x2.toFixed(1)} ${(y2 + H).toFixed(1)} L ${x2.toFixed(1)} ${y2.toFixed(1)} A ${rx} ${ry} 0 0 0 ${x1.toFixed(1)} ${y1.toFixed(1)} Z" fill="url(#cheeseCreamG)"/>
        <path d="M ${x1.toFixed(1)} ${(y1 + H - 7).toFixed(1)} L ${x1.toFixed(1)} ${(y1 + H).toFixed(1)} A ${rx} ${ry} 0 0 1 ${x2.toFixed(1)} ${(y2 + H).toFixed(1)} L ${x2.toFixed(1)} ${(y2 + H - 7).toFixed(1)} A ${rx} ${ry} 0 0 0 ${x1.toFixed(1)} ${(y1 + H - 7).toFixed(1)} Z" fill="url(#crustG)"/>
      ` : '';

      pieces += `
        <g data-piece data-index="${i}" class="cheesecake-slice piece-pulse" style="--d:${i * 0.16}s">
          ${frontWall}
          <path d="M ${cx} ${cy} L ${x1.toFixed(1)} ${y1.toFixed(1)} A ${rx} ${ry} 0 0 1 ${x2.toFixed(1)} ${y2.toFixed(1)} Z" fill="url(#cheeseBakedG)" stroke="#faedd0" stroke-width="1"/>
          <path d="M ${x1.toFixed(1)} ${y1.toFixed(1)} A ${rx} ${ry} 0 0 1 ${x2.toFixed(1)} ${y2.toFixed(1)}" stroke="url(#crustG)" stroke-width="4" stroke-linecap="round" fill="none" opacity="0.9"/>
          <ellipse cx="${mx.toFixed(1)}" cy="${my.toFixed(1)}" rx="7.5" ry="5.5" fill="#ffffff" filter="url(#tableShadow)"/>
          <circle cx="${mx.toFixed(1)}" cy="${(my - 1.5).toFixed(1)}" r="3.5" fill="#fff9eb"/>
          <ellipse cx="${(mx + 2.5).toFixed(1)}" cy="${(my - 2.5).toFixed(1)}" rx="2.2" ry="1.5" fill="#4caf50" transform="rotate(-25 ${(mx + 2.5).toFixed(1)} ${(my - 2.5).toFixed(1)})"/>
        </g>
      `;
    }

    return `<svg viewBox="0 0 460 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Classic New York Cheesecake on a porcelain cake stand">
      ${commonDefs}

      <!-- 1. TABLETOP: Chic Cafe Marble Table -->
      <rect x="0" y="0" width="460" height="340" rx="18" fill="url(#marbleTableG)"/>
      <path d="M0 60 Q140 75 220 50 T460 70" stroke="#bcc5cf" stroke-width="1.2" opacity="0.35" fill="none"/>
      <path d="M40 0 Q100 120 180 200 T320 340" stroke="#bcc5cf" stroke-width="1.5" opacity="0.3" fill="none"/>
      <path d="M260 0 Q340 100 420 180" stroke="#d5c7b3" stroke-width="1.2" opacity="0.4" fill="none"/>

      <!-- 2. SURROUNDING PROPS -->
      <g id="table-napkin" transform="translate(45, 30) rotate(-6)">
        <rect x="0" y="0" width="120" height="90" rx="6" fill="#f5ebe0" stroke="#e3d5c4" stroke-width="1" filter="url(#tableShadow)"/>
        <line x1="10" y1="15" x2="110" y2="15" stroke="#d8c4ae" stroke-width="1" stroke-dasharray="3 4"/>
      </g>

      <!-- Steaming Cafe Latte / Cappuccino (top-right) -->
      <g id="cafe-latte" transform="translate(416, 68)">
        <ellipse cx="0" cy="46" rx="22" ry="8" fill="rgba(0,0,0,0.3)"/>
        <ellipse cx="0" cy="42" rx="22" ry="7.5" fill="#ffffff" stroke="#d5dbe2" stroke-width="1.2"/>
        <path d="M-14 -16 L-10 36 Q0 40 10 36 L14 -16 Z" fill="#ffffff" stroke="#d5dbe2" stroke-width="1.5"/>
        <path d="M12 -8 Q22 -8 22 6 Q22 20 8 18" stroke="#ffffff" stroke-width="3" fill="none"/>
        <ellipse cx="0" cy="-14" rx="12" ry="5" fill="#78421f"/>
        <ellipse cx="0" cy="-14.5" rx="10" ry="4" fill="#dfbe9b"/>
        <path d="M0 -14 C-4 -18 -8 -14 0 -10 C8 -14 4 -18 0 -14 Z" fill="#ffffff" opacity="0.9"/>
        <path d="M-2 -26 Q3 -38 -2 -50" stroke="#ffffff" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.45"/>
      </g>

      <!-- Sleek Silver Dessert Fork (bottom-right) -->
      <g id="dessert-fork" transform="translate(418, 260) rotate(-35)">
        <ellipse cx="0" cy="3" rx="22" ry="10" fill="rgba(0,0,0,0.25)"/>
        <path d="M0 -30 L2 15 L-2 15 Z" fill="url(#steelPlateG)" stroke="#8e99a8" stroke-width="1"/>
        <path d="M-5 15 L-5 35 M0 15 L0 35 M5 15 L5 35" stroke="url(#steelPlateG)" stroke-width="2" stroke-linecap="round"/>
        <circle cx="12" cy="10" r="1.8" fill="#a8692c"/>
        <circle cx="-14" cy="12" r="1.5" fill="#c68a4c"/>
        <circle cx="8" cy="-5" r="1.2" fill="#c68a4c"/>
      </g>

      <!-- Mini Sugar Shaker (top-left) -->
      <g id="sugar-shaker" transform="translate(40, 300)">
        <ellipse cx="0" cy="12" rx="14" ry="6" fill="rgba(0,0,0,0.25)"/>
        <rect x="-10" y="-8" width="20" height="20" rx="4" fill="rgba(255,255,255,0.4)" stroke="#d5dbe2" stroke-width="1.2"/>
        <rect x="-11" y="-14" width="22" height="6" rx="2" fill="url(#steelPlateG)"/>
        <circle cx="-4" cy="-11" r="0.8" fill="#555"/><circle cx="0" cy="-11" r="0.8" fill="#555"/><circle cx="4" cy="-11" r="0.8" fill="#555"/>
      </g>

      <!-- 3. PORCELAIN CAKE PEDESTAL STAND -->
      <g id="cake-stand">
        <ellipse cx="210" cy="242" rx="58" ry="12" fill="rgba(0,0,0,0.3)"/>
        <ellipse cx="210" cy="238" rx="54" ry="12" fill="url(#porcelainG)" stroke="#ccd3dd" stroke-width="1.5"/>
        <path d="M198 234 L204 180 L216 180 L222 234 Z" fill="url(#porcelainG)"/>
        <ellipse cx="210" cy="174" rx="138" ry="104" fill="rgba(0,0,0,0.28)" filter="url(#tableShadow)"/>
        <ellipse cx="210" cy="170" rx="136" ry="102" fill="url(#porcelainG)" stroke="#ccd3dd" stroke-width="2.5"/>
        <ellipse cx="210" cy="168" rx="124" ry="92" fill="#ffffff" stroke="#e8ecf2" stroke-width="1.5"/>
      </g>

      <!-- 4. FULL CIRCLE CHEESECAKE (6 Slices) -->
      <g id="cheesecake-circle">
        ${pieces}
      </g>
    </svg>`;
  }

  /* ==========================================================
     FOOD CONFIGURATIONS & INTERACTION CONTROLLERS
     ========================================================== */
  window.FOODS = {

    /* ---------- PAV BHAJI ---------- */
    pavbhaji: {
      title: 'Pav Bhaji',
      emoji: '🍛',
      hint: 'Tap a fluffy toasted Pav to dip into the Bhaji 😋',
      svg: pavbhaji,
      crumbs: ['#f7bb59', '#e28c25', '#d33c10', '#ffffff', '#2e7d32'],

      handleBite: async function (pieceEl, svg, n, total, audio, triggerCrumbs) {
        pieceEl.classList.remove('piece-pulse');
        const target = svg.querySelector('#bhaji-dip-target').getBoundingClientRect();
        const pRect = pieceEl.getBoundingClientRect();
        const k = (svg.getScreenCTM() && svg.getScreenCTM().a) || 1;
        const dx = ((target.left + target.width / 2) - (pRect.left + pRect.width / 2)) / k;
        const dy = ((target.top + target.height / 2) - (pRect.top + pRect.height / 2)) / k;

        const liftAnim = pieceEl.animate([
          { transform: 'translate(0px, 0px) scale(1)', opacity: 1 },
          { transform: `translate(${dx * 0.8}px, ${dy * 0.8 - 25}px) scale(1.15) rotate(-8deg)`, opacity: 1 }
        ], { duration: 380, easing: 'cubic-bezier(0.2, 0.8, 0.4, 1)', fill: 'forwards' });
        await liftAnim.finished;

        if (audio) audio.playDip();
        const dipAnim = pieceEl.animate([
          { transform: `translate(${dx * 0.8}px, ${dy * 0.8 - 25}px) scale(1.15) rotate(-8deg)` },
          { transform: `translate(${dx}px, ${dy}px) scale(1.05) rotate(-4deg)` }
        ], { duration: 240, easing: 'ease-in', fill: 'forwards' });
        await dipAnim.finished;

        const gravyTip = pieceEl.querySelector('.gravy-tip');
        if (gravyTip) gravyTip.style.opacity = '1';

        const scoopEl = svg.querySelector(`#bhaji-scoop-${n}`);
        if (scoopEl) {
          scoopEl.style.transition = 'transform 0.4s ease, opacity 0.4s ease';
          scoopEl.style.transformOrigin = 'center';
          scoopEl.style.transform = 'scale(0.2)';
          scoopEl.style.opacity = '0';
        }

        const butterSlab = svg.querySelector('#butter-slab');
        const butterPool = svg.querySelector('#butter-pool');
        if (butterSlab && n >= 2) {
          butterSlab.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
          butterSlab.style.transform = `scale(${Math.max(0, 1 - n * 0.2)})`;
          if (n >= 4) { butterSlab.style.opacity = '0'; if (butterPool) butterPool.style.opacity = '0.2'; }
        }

        await new Promise(r => setTimeout(r, 120));

        const eatAnim = pieceEl.animate([
          { transform: `translate(${dx}px, ${dy}px) scale(1.05) rotate(-4deg)`, opacity: 1 },
          { transform: `translate(${dx * 0.5}px, ${dy * 0.5 - 35}px) scale(1.3) rotate(6deg)`, opacity: 1, offset: 0.6 },
          { transform: `translate(${dx * 0.4}px, ${dy * 0.4 - 45}px) scale(0) rotate(14deg)`, opacity: 0 }
        ], { duration: 420, easing: 'cubic-bezier(0.18, 0.9, 0.3, 1)', fill: 'forwards' });

        if (audio) audio.playMunch();
        const center = pieceEl.getBoundingClientRect();
        triggerCrumbs(center.left + center.width / 2, center.top + center.height / 2, this.crumbs, 16);

        await eatAnim.finished;
        pieceEl.style.visibility = 'hidden';
      }
    },

    /* ---------- DOSA ---------- */
    dosa: {
      title: 'Dosa',
      emoji: '🥞',
      hint: 'Tap the golden Dosa roll to break off a crispy bite 😋',
      svg: dosa,
      crumbs: ['#f5cc76', '#e09d32', '#c17519', '#fff5cc', '#8d4a0a'],

      handleBite: async function (pieceEl, svg, n, total, audio, triggerCrumbs) {
        pieceEl.classList.remove('piece-pulse');
        const targets = ['target-coconut', 'target-sambar', 'target-tomato', 'target-coconut', 'target-sambar', 'target-tomato'];
        const targetId = targets[n % targets.length];
        const targetEl = svg.querySelector(`#${targetId}`);
        const tRect = targetEl ? targetEl.getBoundingClientRect() : { left: 0, top: 0, width: 0, height: 0 };
        const pRect = pieceEl.getBoundingClientRect();
        const k = (svg.getScreenCTM() && svg.getScreenCTM().a) || 1;
        const dx = ((tRect.left + tRect.width / 2) - (pRect.left + pRect.width / 2)) / k;
        const dy = ((tRect.top + tRect.height / 2) - (pRect.top + pRect.height / 2)) / k;

        if (audio) audio.playCrunch();
        const tearAnim = pieceEl.animate([
          { transform: 'translate(0, 0) scale(1) rotate(0deg)', opacity: 1 },
          { transform: 'translate(0, -18px) scale(1.1) rotate(-6deg)', opacity: 1 }
        ], { duration: 280, easing: 'cubic-bezier(0.2, 0.9, 0.4, 1)', fill: 'forwards' });
        await tearAnim.finished;

        if (audio) audio.playDip();
        const dipAnim = pieceEl.animate([
          { transform: 'translate(0, -18px) scale(1.1) rotate(-6deg)' },
          { transform: `translate(${dx}px, ${dy}px) scale(0.95) rotate(12deg)` }
        ], { duration: 320, easing: 'cubic-bezier(0.25, 1, 0.5, 1)', fill: 'forwards' });
        await dipAnim.finished;

        const gravyTip = pieceEl.querySelector('.gravy-tip');
        if (gravyTip) {
          gravyTip.style.opacity = '1';
          const chutneyColor = targetId === 'target-sambar' ? '#d85614' : targetId === 'target-tomato' ? '#c0392b' : '#fcfbf7';
          const tipEl = gravyTip.querySelector('ellipse');
          if (tipEl) tipEl.setAttribute('fill', chutneyColor);
        }

        await new Promise(r => setTimeout(r, 100));

        if (audio) audio.playCrunch();
        const eatAnim = pieceEl.animate([
          { transform: `translate(${dx}px, ${dy}px) scale(0.95) rotate(12deg)`, opacity: 1 },
          { transform: `translate(${dx * 0.5}px, ${dy * 0.5 - 30}px) scale(1.25) rotate(-10deg)`, opacity: 1, offset: 0.5 },
          { transform: `translate(${dx * 0.3}px, ${dy * 0.3 - 40}px) scale(0) rotate(18deg)`, opacity: 0 }
        ], { duration: 400, easing: 'cubic-bezier(0.18, 0.9, 0.3, 1)', fill: 'forwards' });

        const center = pieceEl.getBoundingClientRect();
        triggerCrumbs(center.left + center.width / 2, center.top + center.height / 2, this.crumbs, 18);

        await eatAnim.finished;
        pieceEl.style.visibility = 'hidden';
      }
    },

    /* ---------- PANI PURI ---------- */
    panipuri: {
      title: 'Pani Puri',
      emoji: '🥟',
      hint: 'Tap a crispy Puri to fill it with spiced water and relish it 😋',
      svg: panipuri,
      crumbs: ['#ffe699', '#f3b33a', '#cb7a13', '#6bb81c', '#ffffff'],

      handleBite: async function (pieceEl, svg, n, total, audio, triggerCrumbs, triggerDroplets) {
        pieceEl.classList.remove('piece-pulse');
        const pitcher = svg.querySelector('#pani-pitcher');
        const spout = svg.querySelector('#pitcher-spout');
        const stream = svg.querySelector('#pour-stream');

        const pRect = pieceEl.getBoundingClientRect();
        const sRect = spout.getBoundingClientRect();
        const k = (svg.getScreenCTM() && svg.getScreenCTM().a) || 1;

        const startX = 114;
        const startY = 146;
        const puriCx = (pRect.left + pRect.width / 2 - svg.getBoundingClientRect().left) / k;
        const puriCy = (pRect.top + pRect.height * 0.35 - svg.getBoundingClientRect().top) / k;

        if (pitcher) {
          pitcher.style.transform = 'rotate(26deg) translate(15px, -10px)';
        }

        if (stream) {
          const midX = (startX + puriCx) / 2;
          const midY = Math.min(startY, puriCy) - 30;
          stream.setAttribute('d', `M${startX} ${startY} Q${midX} ${midY} ${puriCx} ${puriCy}`);
          stream.style.opacity = '1';
        }

        if (audio) audio.playPour();

        const water = pieceEl.querySelector('.puri-water');
        const boondi = pieceEl.querySelector('.puri-boondi');
        if (water) {
          water.style.opacity = '1';
          water.style.transform = 'scale(1)';
        }
        if (boondi) {
          boondi.style.opacity = '1';
        }

        await new Promise(r => setTimeout(r, 650));

        if (stream) stream.style.opacity = '0';
        if (pitcher) pitcher.style.transform = 'rotate(0deg) translate(0px, 0px)';

        await new Promise(r => setTimeout(r, 120));

        const popAnim = pieceEl.animate([
          { transform: 'translate(0, 0) scale(1)', opacity: 1 },
          { transform: 'translate(0, -28px) scale(1.3) rotate(-8deg)', opacity: 1, offset: 0.6 },
          { transform: 'translate(0, -36px) scale(0) rotate(12deg)', opacity: 0 }
        ], { duration: 420, easing: 'cubic-bezier(0.18, 0.9, 0.3, 1)', fill: 'forwards' });

        if (audio) audio.playPopGulp();

        const center = pieceEl.getBoundingClientRect();
        triggerCrumbs(center.left + center.width / 2, center.top + center.height / 2, this.crumbs, 14);
        if (triggerDroplets) triggerDroplets(center.left + center.width / 2, center.top + center.height / 2, 10);

        await popAnim.finished;
        pieceEl.style.visibility = 'hidden';
      }
    },

    /* ---------- CHOCOLATE ---------- */
    chocolate: {
      title: 'Chocolate',
      emoji: '🍫',
      hint: 'Tap a chocolate block to snap a bite 😋',
      svg: chocolate,
      crumbs: ['#5a2e14', '#7d4626', '#a0622f', '#3f1e0b', '#ffd54f'],

      handleBite: async function (pieceEl, svg, n, total, audio, triggerCrumbs) {
        pieceEl.classList.remove('piece-pulse');
        if (audio) audio.playCrunch();

        const anim = pieceEl.animate([
          { transform: 'scale(1) rotate(0deg)', opacity: 1 },
          { transform: 'scale(1.15) rotate(-6deg)', opacity: 1, offset: 0.35 },
          { transform: 'scale(0) rotate(16deg)', opacity: 0 }
        ], { duration: 460, easing: 'ease-in', fill: 'forwards' });

        const center = pieceEl.getBoundingClientRect();
        triggerCrumbs(center.left + center.width / 2, center.top + center.height / 2, this.crumbs, 16);

        await anim.finished;
        pieceEl.style.visibility = 'hidden';
      }
    },

    /* ---------- CHEESECAKE ---------- */
    cheesecake: {
      title: 'Cheesecake',
      emoji: '🍰',
      hint: 'Tap a slice of creamy cheesecake to take a bite 😋',
      svg: cheesecake,
      crumbs: ['#c68a4c', '#e0a96d', '#fff8e7', '#fceed1', '#8a4f1a', '#ffd54f'],

      handleBite: async function (pieceEl, svg, n, total, audio, triggerCrumbs) {
        pieceEl.classList.remove('piece-pulse');
        const angles = [-60, 0, 60, 120, 180, 240];
        const rad = (angles[n % angles.length] || 0) * Math.PI / 180;
        const dx = Math.cos(rad) * 44;
        const dy = Math.sin(rad) * 32;

        if (audio) audio.playCrunch();
        const slideAnim = pieceEl.animate([
          { transform: 'translate(0px, 0px) scale(1)', opacity: 1 },
          { transform: `translate(${dx}px, ${dy}px) scale(1.06)`, opacity: 1 }
        ], { duration: 320, easing: 'cubic-bezier(0.2, 0.9, 0.4, 1)', fill: 'forwards' });
        await slideAnim.finished;

        await new Promise(r => setTimeout(r, 100));

        if (audio) audio.playMunch();
        const eatAnim = pieceEl.animate([
          { transform: `translate(${dx}px, ${dy}px) scale(1.06)`, opacity: 1 },
          { transform: `translate(${dx * 0.4}px, ${dy * 0.4 - 36}px) scale(1.3) rotate(-5deg)`, opacity: 1, offset: 0.5 },
          { transform: `translate(${dx * 0.2}px, ${dy * 0.2 - 46}px) scale(0) rotate(10deg)`, opacity: 0 }
        ], { duration: 420, easing: 'cubic-bezier(0.18, 0.9, 0.3, 1)', fill: 'forwards' });

        const center = pieceEl.getBoundingClientRect();
        triggerCrumbs(center.left + center.width / 2, center.top + center.height / 2, this.crumbs, 18);

        await eatAnim.finished;
        pieceEl.style.visibility = 'hidden';
      }
    }
  };

  /* ==========================================================
     ATMOSPHERIC OVERALL BACKGROUND SCENES (Full Page Backdrop)
     ========================================================== */
  function panipuriBg() {
    return `<svg class="bg-svg" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMin slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="awningG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#b03a2e"/><stop offset="100%" stop-color="#78281f"/>
        </linearGradient>
        <linearGradient id="awningYellowG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#f39c12"/><stop offset="100%" stop-color="#b9770e"/>
        </linearGradient>
        <radialGradient id="bulbGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#ffd54f" stop-opacity="0.8"/>
          <stop offset="40%" stop-color="#f39c12" stop-opacity="0.3"/>
          <stop offset="100%" stop-color="#f39c12" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="streetBokeh" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#ffb74d" stop-opacity="0.22"/>
          <stop offset="100%" stop-color="#ffb74d" stop-opacity="0"/>
        </radialGradient>
      </defs>

      <!-- Street Market Canopy / Awning Scallops across the top -->
      <g id="street-awning" opacity="0.88">
        ${Array.from({ length: 18 }).map((_, i) => {
          const x = i * 80;
          const fill = i % 2 === 0 ? 'url(#awningG)' : 'url(#awningYellowG)';
          return `<path d="M${x} 0 L${x + 80} 0 L${x + 80} 65 Q${x + 40} 95 ${x} 65 Z" fill="${fill}"/>`;
        }).join('')}
      </g>

      <!-- Hanging Triangular Festoon Buntings -->
      <path d="M0 95 Q720 175 1440 95" stroke="#222" stroke-width="2" fill="none" opacity="0.45"/>
      <g id="buntings" opacity="0.8">
        ${[
          { x: 120, y: 108, c: '#e74c3c' }, { x: 220, y: 122, c: '#f1c40f' }, { x: 320, y: 133, c: '#2ecc71' },
          { x: 420, y: 140, c: '#3498db' }, { x: 520, y: 144, c: '#e67e22' }, { x: 620, y: 146, c: '#9b59b6' },
          { x: 720, y: 146, c: '#e74c3c' }, { x: 820, y: 144, c: '#f1c40f' }, { x: 920, y: 140, c: '#2ecc71' },
          { x: 1020, y: 133, c: '#3498db' }, { x: 1120, y: 122, c: '#e67e22' }, { x: 1220, y: 108, c: '#9b59b6' },
          { x: 1320, y: 100, c: '#e74c3c' }
        ].map(b => `<polygon points="${b.x - 18},${b.y} ${b.x + 18},${b.y} ${b.x},${b.y + 34}" fill="${b.c}"/>`).join('')}
      </g>

      <!-- Hanging Street Light Bulbs -->
      <g class="bulb-pulse" transform="translate(260, 0)">
        <line x1="0" y1="0" x2="0" y2="175" stroke="#111" stroke-width="2.5"/>
        <circle cx="0" cy="190" r="95" fill="url(#bulbGlow)"/>
        <rect x="-8" y="168" width="16" height="10" rx="2" fill="#7f8c8d"/>
        <circle cx="0" cy="190" r="16" fill="#fff9c4"/>
        <circle cx="0" cy="190" r="10" fill="#ffffff"/>
      </g>
      <g class="bulb-pulse" transform="translate(1180, 0)" style="animation-delay: -1.5s;">
        <line x1="0" y1="0" x2="0" y2="185" stroke="#111" stroke-width="2.5"/>
        <circle cx="0" cy="200" r="95" fill="url(#bulbGlow)"/>
        <rect x="-8" y="178" width="16" height="10" rx="2" fill="#7f8c8d"/>
        <circle cx="0" cy="200" r="16" fill="#fff9c4"/>
        <circle cx="0" cy="200" r="10" fill="#ffffff"/>
      </g>

      <!-- Distant Street Night Bokeh Circles -->
      <g id="street-bokeh">
        <circle cx="160" cy="680" r="85" fill="url(#streetBokeh)"/>
        <circle cx="280" cy="740" r="110" fill="url(#streetBokeh)"/>
        <circle cx="1200" cy="710" r="95" fill="url(#streetBokeh)"/>
        <circle cx="1320" cy="650" r="130" fill="url(#streetBokeh)"/>
      </g>

      <!-- Bottom Street Stall Silhouette -->
      <path d="M0 900 L0 830 L180 830 L180 855 L340 855 L380 795 L520 795 L560 845 L900 845 L940 785 L1100 785 L1150 835 L1440 835 L1440 900 Z" fill="#060b13" opacity="0.6"/>
    </svg>`;
  }

  function pavbhajiBg() {
    return `<svg class="bg-svg" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMin slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="lampCone" cx="50%" cy="0%" r="90%">
          <stop offset="0%" stop-color="#ffca28" stop-opacity="0.38"/>
          <stop offset="50%" stop-color="#ff9800" stop-opacity="0.12"/>
          <stop offset="100%" stop-color="#ff9800" stop-opacity="0"/>
        </radialGradient>
        <linearGradient id="lampPostG" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#1b0818"/><stop offset="100%" stop-color="#0a0209"/>
        </linearGradient>
      </defs>

      <!-- Left Vintage Street Lamp -->
      <g id="street-lamp-left" transform="translate(130, 20)">
        <polygon points="0,170 -160,880 160,880" fill="url(#lampCone)"/>
        <path d="M-8 880 L-5 160 Q-20 140 -20 110 Q-20 80 0 80 Q20 80 20 110 Q20 140 5 160 L8 880 Z" fill="url(#lampPostG)"/>
        <path d="M-28 115 L28 115 L20 70 L-20 70 Z" fill="#1b0818" stroke="#3d1533" stroke-width="2"/>
        <path d="M-18 70 L18 70 L0 45 Z" fill="#1b0818"/>
        <polygon points="-16,110 16,110 12,75 -12,75" fill="#ffe082" opacity="0.95" filter="url(#softGlow)"/>
      </g>

      <!-- Right Vintage Street Lamp -->
      <g id="street-lamp-right" transform="translate(1310, 20)">
        <polygon points="0,170 -160,880 160,880" fill="url(#lampCone)"/>
        <path d="M-8 880 L-5 160 Q-20 140 -20 110 Q-20 80 0 80 Q20 80 20 110 Q20 140 5 160 L8 880 Z" fill="url(#lampPostG)"/>
        <path d="M-28 115 L28 115 L20 70 L-20 70 Z" fill="#1b0818" stroke="#3d1533" stroke-width="2"/>
        <path d="M-18 70 L18 70 L0 45 Z" fill="#1b0818"/>
        <polygon points="-16,110 16,110 12,75 -12,75" fill="#ffe082" opacity="0.95" filter="url(#softGlow)"/>
      </g>

      <!-- Silhouetted Coastal Palm Fronds (Upper Corners) -->
      <g id="palm-left" fill="#0d030c" opacity="0.55" transform="translate(-40, -40)">
        <path d="M0 0 Q180 80 280 220 Q240 180 180 160 Q120 140 0 120 Z"/>
        <path d="M0 20 Q140 120 220 280 Q190 230 140 200 Z"/>
        <path d="M20 0 Q220 60 340 160 Q280 130 200 100 Z"/>
      </g>
      <g id="palm-right" fill="#0d030c" opacity="0.55" transform="translate(1480, -40) scale(-1, 1)">
        <path d="M0 0 Q180 80 280 220 Q240 180 180 160 Q120 140 0 120 Z"/>
        <path d="M0 20 Q140 120 220 280 Q190 230 140 200 Z"/>
        <path d="M20 0 Q220 60 340 160 Q280 130 200 100 Z"/>
      </g>

      <!-- Catenary String of Globe Bulbs between Lamps -->
      <path d="M130 110 Q720 190 1310 110" stroke="#110410" stroke-width="2.5" fill="none" opacity="0.65"/>
      ${[250, 410, 570, 720, 870, 1030, 1190].map((x) => {
        const y = 110 + 78 * (1 - Math.pow((x - 720) / 590, 2));
        return `
          <circle cx="${x}" cy="${y + 10}" r="22" fill="#ffb300" opacity="0.28" filter="url(#candleBloom)"/>
          <line x1="${x}" y1="${y}" x2="${x}" y2="${y + 8}" stroke="#222" stroke-width="2"/>
          <circle cx="${x}" cy="${y + 10}" r="6" fill="#fff8e1"/>
        `;
      }).join('')}
    </svg>`;
  }

  function dosaBg() {
    return `<svg class="bg-svg" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMin slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="marigoldOrange" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#ff7b00"/><stop offset="100%" stop-color="#c94a00"/>
        </linearGradient>
        <linearGradient id="marigoldYellow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#ffea00"/><stop offset="100%" stop-color="#e6a100"/>
        </linearGradient>
        <radialGradient id="diyaGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#ffc107" stop-opacity="0.8"/>
          <stop offset="45%" stop-color="#ff9800" stop-opacity="0.3"/>
          <stop offset="100%" stop-color="#ff9800" stop-opacity="0"/>
        </radialGradient>
      </defs>

      <!-- Top Hanging Marigold Garland (Toran) Loops -->
      <g id="marigold-toran" transform="translate(0, -10)">
        <path d="M0 40 Q360 140 720 40 Q1080 140 1440 40" stroke="#2e7d32" stroke-width="4" fill="none" opacity="0.7"/>
        ${Array.from({ length: 36 }).map((_, i) => {
          const t = i / 36;
          const x = t * 1440;
          const loopT = (t * 2) % 1;
          const y = 40 + 95 * Math.sin(loopT * Math.PI);
          const fill = i % 2 === 0 ? 'url(#marigoldOrange)' : 'url(#marigoldYellow)';
          return `
            <circle cx="${x}" cy="${y}" r="12" fill="${fill}"/>
            <circle cx="${x}" cy="${y}" r="6" fill="#fff3e0" opacity="0.3"/>
            ${i % 4 === 0 ? `<path d="M${x} ${y + 10} Q${x + 6} ${y + 35} ${x} ${y + 45} Q${x - 6} ${y + 35} ${x} ${y + 10} Z" fill="#2e7d32" opacity="0.8"/>` : ''}
          `;
        }).join('')}
      </g>

      <!-- Left Hanging Brass Oil Lamp (Thooku Vilakku) -->
      <g class="hanging-lamp lamp-left" transform="translate(180, 0)">
        ${Array.from({ length: 14 }).map((_, i) => `
          <ellipse cx="0" cy="${25 + i * 20}" rx="5" ry="9" fill="none" stroke="url(#brassG)" stroke-width="3"/>
        `).join('')}
        <g transform="translate(0, 310)">
          <circle cx="0" cy="15" r="85" fill="url(#diyaGlow)"/>
          <path d="M-18 0 Q0 -15 18 0 L14 18 L-14 18 Z" fill="url(#brassG)" stroke="#8e5d03" stroke-width="1.5"/>
          <ellipse cx="0" cy="22" rx="36" ry="14" fill="url(#brassG)" stroke="#8e5d03" stroke-width="1.5"/>
          <ellipse cx="0" cy="20" rx="30" ry="9" fill="#583101"/>
          <circle cx="-24" cy="20" r="3" fill="#ffe082"/>
          <circle cx="24" cy="20" r="3" fill="#ffe082"/>
          <g class="lamp-flame">
            <path d="M0 20 Q-9 6 0 -18 Q9 6 0 20 Z" fill="#fff59d"/>
            <path d="M0 18 Q-4 8 0 -6 Q4 8 0 18 Z" fill="#ffffff"/>
          </g>
        </g>
      </g>

      <!-- Right Hanging Brass Oil Lamp (Thooku Vilakku) -->
      <g class="hanging-lamp lamp-right" transform="translate(1260, 0)">
        ${Array.from({ length: 14 }).map((_, i) => `
          <ellipse cx="0" cy="${25 + i * 20}" rx="5" ry="9" fill="none" stroke="url(#brassG)" stroke-width="3"/>
        `).join('')}
        <g transform="translate(0, 310)">
          <circle cx="0" cy="15" r="85" fill="url(#diyaGlow)"/>
          <path d="M-18 0 Q0 -15 18 0 L14 18 L-14 18 Z" fill="url(#brassG)" stroke="#8e5d03" stroke-width="1.5"/>
          <ellipse cx="0" cy="22" rx="36" ry="14" fill="url(#brassG)" stroke="#8e5d03" stroke-width="1.5"/>
          <ellipse cx="0" cy="20" rx="30" ry="9" fill="#583101"/>
          <circle cx="-24" cy="20" r="3" fill="#ffe082"/>
          <circle cx="24" cy="20" r="3" fill="#ffe082"/>
          <g class="lamp-flame" style="animation-delay: -0.9s;">
            <path d="M0 20 Q-9 6 0 -18 Q9 6 0 20 Z" fill="#fff59d"/>
            <path d="M0 18 Q-4 8 0 -6 Q4 8 0 18 Z" fill="#ffffff"/>
          </g>
        </g>
      </g>

      <!-- Heritage Wooden Pillar Silhouettes on Far Edges -->
      <path d="M0 0 L45 0 L45 900 L0 900 Z" fill="#140602" opacity="0.4"/>
      <path d="M1395 0 L1440 0 L1440 900 L1395 900 Z" fill="#140602" opacity="0.4"/>
    </svg>`;
  }

  function chocolateBg() {
    return `<svg class="bg-svg" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMin slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="kandilGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#ffd54f" stop-opacity="0.75"/>
          <stop offset="45%" stop-color="#ec407a" stop-opacity="0.3"/>
          <stop offset="100%" stop-color="#ab47bc" stop-opacity="0"/>
        </radialGradient>
      </defs>

      <!-- Swaying Akash Kandil (Diwali Star Lantern) (Left) -->
      <g class="swaying-kandil" transform="translate(190, 0)">
        <line x1="0" y1="0" x2="0" y2="110" stroke="#ffd54f" stroke-width="2"/>
        <g transform="translate(0, 150)">
          <circle cx="0" cy="0" r="110" fill="url(#kandilGlow)"/>
          <polygon points="0,-48 14,-14 48,0 14,14 0,48 -14,14 -48,0 -14,-14" fill="#ff4081" stroke="#ffd54f" stroke-width="2.5"/>
          <polygon points="0,-32 10,-10 32,0 10,10 0,32 -10,10 -32,0 -10,-10" fill="#ffeb3b"/>
          ${[-24, -12, 0, 12, 24].map((sx, i) => `
            <path d="M${sx} 48 Q${sx + (i % 2 ? 8 : -8)} 110 ${sx} 170" stroke="#ffd54f" stroke-width="3" fill="none" opacity="0.85"/>
          `).join('')}
        </g>
      </g>

      <!-- Fairy Lights Curtain along Right Side -->
      <g id="fairy-curtain" transform="translate(1260, 0)">
        ${[0, 45, 90].map((xOffset, strIdx) => `
          <line x1="${xOffset}" y1="0" x2="${xOffset}" y2="700" stroke="rgba(255,213,79,0.3)" stroke-width="1.2"/>
          ${Array.from({ length: 12 }).map((_, i) => {
            const cy = 60 + i * 52 + (strIdx * 18);
            return `
              <circle cx="${xOffset}" cy="${cy}" r="10" fill="#ffeb3b" opacity="0.3" filter="url(#softGlow)"/>
              <circle cx="${xOffset}" cy="${cy}" r="3" fill="#ffffff"/>
            `;
          }).join('')}
        `).join('')}
      </g>

      <!-- Sparkling Firework Stars in Twilight Sky -->
      <g id="fireworks-bg" opacity="0.65">
        <g transform="translate(820, 120)">
          ${[0, 45, 90, 135, 180, 225, 270, 315].map(a => `
            <line x1="0" y1="0" x2="${Math.cos(a * Math.PI / 180) * 35}" y2="${Math.sin(a * Math.PI / 180) * 35}" stroke="#ffe082" stroke-width="1.8" stroke-dasharray="2 3"/>
          `).join('')}
          <circle cx="0" cy="0" r="4" fill="#ffffff"/>
        </g>
      </g>
    </svg>`;
  }

  function cheesecakeBg() {
    return `<svg class="bg-svg" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMin slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="pendantGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#ffd54f" stop-opacity="0.8"/>
          <stop offset="45%" stop-color="#e67e22" stop-opacity="0.25"/>
          <stop offset="100%" stop-color="#e67e22" stop-opacity="0"/>
        </radialGradient>
      </defs>

      <!-- 3 Modern Brass Pendant Lights hanging from ceiling -->
      ${[
        { x: 220, y: 160, delay: '0s' },
        { x: 720, y: 140, delay: '-2.5s' },
        { x: 1220, y: 165, delay: '-4s' }
      ].map(p => `
        <g class="hanging-lamp" style="transform-origin: ${p.x}px 0px; animation-delay: ${p.delay};">
          <line x1="${p.x}" y1="0" x2="${p.x}" y2="${p.y}" stroke="#222222" stroke-width="2.5"/>
          <rect x="${p.x - 12}" y="${p.y}" width="24" height="12" rx="3" fill="url(#brassG)"/>
          <circle cx="${p.x}" cy="${p.y + 36}" r="95" fill="url(#pendantGlow)"/>
          <circle cx="${p.x}" cy="${p.y + 36}" r="26" fill="#ffe082" opacity="0.9"/>
          <circle cx="${p.x}" cy="${p.y + 36}" r="14" fill="#ffffff"/>
        </g>
      `).join('')}

      <!-- Distant Cafe Blackboard Menu Outline -->
      <g id="cafe-blackboard" opacity="0.45" transform="translate(100, 220)">
        <rect x="0" y="0" width="220" height="140" rx="8" fill="#140812" stroke="#4a2538" stroke-width="3"/>
        <line x1="20" y1="35" x2="200" y2="35" stroke="#f5d6ba" stroke-width="1.5" stroke-dasharray="3 4"/>
        <text x="110" y="26" font-family="'Kalam', cursive" font-size="16" fill="#f5d6ba" text-anchor="middle">Patisserie &amp; Cafe ☕🍰</text>
        <line x1="30" y1="60" x2="160" y2="60" stroke="#f5d6ba" stroke-width="1" stroke-dasharray="2 3" opacity="0.6"/>
        <line x1="30" y1="85" x2="180" y2="85" stroke="#f5d6ba" stroke-width="1" stroke-dasharray="2 3" opacity="0.6"/>
        <line x1="30" y1="110" x2="150" y2="110" stroke="#f5d6ba" stroke-width="1" stroke-dasharray="2 3" opacity="0.6"/>
      </g>

      <!-- Soft Golden Cafe Window Bokeh Circles -->
      <g id="cafe-bokeh" opacity="0.3">
        <circle cx="1180" cy="380" r="75" fill="#ffe082"/>
        <circle cx="1300" cy="480" r="110" fill="#ffd54f"/>
        <circle cx="1120" cy="560" r="65" fill="#ffb74d"/>
      </g>
    </svg>`;
  }

  window.FOOD_BACKGROUNDS = {
    panipuri: panipuriBg,
    pavbhaji: pavbhajiBg,
    dosa: dosaBg,
    chocolate: chocolateBg,
    cheesecake: cheesecakeBg
  };

})();
