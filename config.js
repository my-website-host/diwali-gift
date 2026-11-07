/* ==========================================================
   EDIT THIS FILE to personalise everything.
   - id:          unique token for secret invite links
   - names:       every spelling/nickname that should unlock this gift
                  (case, spaces and punctuation are ignored)
   - food:        "chocolate" | "panipuri" | "pavbhaji" | "dosa" | "cheesecake"
   - foodNote:    your personal handwritten note explaining why this
                  food reminds you of them, our shared memory with it, etc.
   - question:    the personal question + options; `answer` is the
                  index of the correct option (0 = first option)
   - memories:    shown in the order pieces are eaten (6 per friend).
                  photo: path like "photos/nayan1.jpg", or "" for none
   - wish:        final message after the last piece is eaten
   ========================================================== */

window.CONFIG = {

  // Optional: put your own photo of the chocolate wrapper in /photos
  // and set its path here, e.g. "photos/wrapper.jpg". Leave "" to use
  // the built-in purple wrapper.
  wrapperImage: "",

  friends: [
    {
      id: "nayan-7e82b4a1",
      displayName: "Nayan",
      names: ["Nayan"],
      food: "chocolate",
      foodNote: "Hi Nayan! I got to know about your favourite chocolate clg khtm hua tab, galaxy vali.. ispr wrapper to nai laga paya me (aalas Obv) to isi se kaam chala lena. Enjoyy your favourite chocolate with some extra sweetness 🤗😋",
      question: "How many items we have eaten free item when went to buy cake for someone?",
      options: ["3", "1", "4", "2"],
      answer: 1,
      memories: [
        { text: "May this Diwali brings you all kinds of happiness you wish for. You're figuring things out, trying things out, next year aur jyada trips pr jaa, dosto se mil and enjoyy a lot.", photo: "" },
        { text: "Hostel wali diwali yaad aa rhi he yaarr 😂 last year what a banger we pulled off! Itni jyada excitement thi har cheez ki, sab saath nai the fir bhi we celebrated so nicely 🥳", photo: "" },
        { text: "May this Diwali gets you bahot sari strength and state of mind to deal with problems going on in your life. A lot has been going but still you're staying strong, face kr rha h sab kuch 🙂 you're dealing with so many things. Problems bhi esi h ki I can't help 🙃 but I'm always available to listen to you :)", photo: "" },
        { text: "May this Diwali strengthen our friendship little more, Obv hu hi me itna accha insaan ki dosti todte nai h log mujhse 😊🤗", photo: "" },
        { text: "May this Diwali you strengthen your relations with your loved ones, jo bhi difference of opinions he, hurt kra h jinhone tujhe, ya they are just distancing away, sab me tu improvement ho and you get little happier.", photo: "" },
        { text: "May this Diwali you become little more expressive with your closed ones (someone mentioned ki tu chote gestures appreciate nai krta itna, yk who I am talking about, usne mana kra tha fir bhi bata rha hu me 👀) so put efforts in people you love :)", photo: "" }
      ],
      wish: "Happy Diwali, Nayan! May your year be as sweet as this chocolate and filled with happiness! 🪔✨"
    },

    {
      id: "karmanya-3e7d91a2",
      displayName: "Karmanya",
      names: ["Karmanya", "Karma", "Karmu"],
      food: "cheesecake",
      foodNote: "Hi Karmanya! Bruh I don't know about your favourite food item 😭 to socha cheesecake hi sahi. Nanbai ka cheesecake samaj kr kha lena thike ise, usse bhi meetha hoga 🤗",
      question: "What was our starting point in DSA? Like concept wise?",
      options: ["Stack", "Segment Tree", "Recursion", "Trie"],
      answer: 2,
      memories: [
        { text: "May this Diwali you get creativity to express things 🤗 Dekh rha h itna badiya banaya h tere liye kuch. Kitna creative hu me 😎👾", photo: "" },
        { text: "Haven't said this itna but you're a good listener and you don't judge itna jyada, mazaak vagere to thik he chalta h 😂 bhaichara he vo to :)", photo: "" },
        { text: "May this Diwali you become expressive with your loved ones, small gestures, gifts vagere dena etc, sahi me bahot accha lagta h 😂😭 try once.", photo: "" },
        { text: "May this Diwali bring you time and motivation to start doing things jo tujhe pasand h or krni h, like CP or DSA or kuch bhi sikhna ho tujhe or whatever goals you have in your mind. Sab bandh kr rkha h hmne 😭", photo: "" },
        { text: "May this Diwali makes you mota somehow, at least not kuposhit anymore 😂😂 khata h bahot fir bhi kese nai badh rha, doc ko dikha ye. Bimari hogi ye confirm.", photo: "" },
        { text: "May this Diwali gets you some mahila mitra 😂 fir mujhse tution lena 🤗 fees lunga puri, har din ki ek 7up bata.", photo: "" }
      ],
      wish: "Happy Diwali, Karmanya! May this year bring you endless happiness, good health, and success in everything you set your mind to! 🪔✨"
    },

    {
      id: "saku-84c2f1e5",
      displayName: "Saku",
      names: ["Saku", "Sakshi"],
      food: "panipuri",
      foodNote: "Hi Saku! Ahmd aavi tyare khadhi hti paani puri aapde nai iskcon pase. Ik it's your comfort food, tne bov bhave biji vastuo krta.. but aa thodik meethi lagse, me banavi che ne etle 🤗😂 so carry on :)",
      question: "How many times we have met in person in last 2 years?",
      options: ["1", "4", "2", "3"],
      answer: 2,
      memories: [
        { text: "May this Diwali brings you strength to deal with everything what has happened in past month, potane khush rakhi sak, ghr vadao ne khush rakhi sak :)", photo: "" },
        { text: "May this Diwali strengthens our bond little more, aa varas ma bov jhagadya che aapde, 7 vrs nu ek sath kri lidhu che 😂, but we sort things out to vandho nai eno etlo kai. Aam j ek bija ne samajta raiye aagad pn and khush kri sakiye ek bija ne ☺️", photo: "" },
        { text: "May this Diwali you improve on your headache little more, your health little more. Aa to mara pr pn lagu pade che joke 😂 toy sikhaman aapu chu tne", photo: "" },
        { text: "May this Diwali you improve in your relationships, tu sari rite decisions lai sak in tough situations k fights, potane pn samji sak ne same vada ne pn.", photo: "" },
        { text: "Already bov vadhare mature che tu, bov samju che, bov caring che. Aam j reje :) You always say k aapde j care kriye chiye etlej aapde hurt thaiye chiye, depends on same vado person. 2 proof che hve to tari pase 🙂", photo: "" },
        { text: "I just wish k tu khush re, aa diwali su, aavnari badhi diwali tu khush hois, up and downs to aavta rese, you are strong enough to handle them now.", photo: "" }
      ],
      wish: "Happy Diwali, Saku! Always stay happy and keep smiling! 🪔✨"
    },

    {
      id: "riya-a91b5c3e",
      displayName: "Riya",
      names: ["Riya", "Rio", "Rioyaya"],
      food: "panipuri",
      foodNote: "Hi Riya! Tere liye specially Pani Puri banayi h mene, har baar Jo tu sadak ki gandi unhygienic Pani Puri khati h, isse accha ye khalena.. at least you won't be bimar, it has some meethas tho, to chala lena itna to 🤗",
      question: "Where does your boyfriend want to go for masters?",
      options: ["France", "Germany", "USA", "Phillipines"],
      answer: 1,
      memories: [
        { text: "May this Diwali gets you all sort of happiness you wish for, either it is career related or it is relationship related. You will become a great dentist, no doubt in that :)", photo: "" },
        { text: "May this Diwali strengthen our friendship, jo bhi jhagde hote h hmare, kam ho, jyada sath ghume hm exploring new food places.", photo: "" },
        { text: "May this Diwali you become more expressive with your loved ones. Ik you're a reserved person but you have started talking to me in recent times :) Don't go fully quiet when you're upset 🙃 show it off sometimes.", photo: "" },
        { text: "May this Diwali you get many diwali gifts and paisa on new year 😂 so you don't have to msg every person \"500 kal tak dene he?\"", photo: "" },
        { text: "May this Diwali you click aesthetic pictures in traditional and bursting crackers to post on rioyaya 😂😂", photo: "" },
        { text: "May you get rid of toxic people of your life this Diwali, you need it so much 😭😂 (Don't get rid of me isk baad 🤗)", photo: "" }
      ],
      wish: "Happy Diwali, Riya! May you shine bright and have an incredible year ahead! 🪔✨"
    },

    {
      id: "nishthi-2d7f8e4a",
      displayName: "Nishthi",
      names: ["Nishthi", "Nishti"],
      food: "pavbhaji",
      foodNote: "Hi Nishthi! Thanks for making me experience Mahalaxmi pav bhaji, bhaiii! I used to avoid eating pav bhaji outside, ki kya hi khana usme.. but indeed it's good! Jaldi bata bhai ki kab Jana h firse, abhi k liye to ye kha lena thike :)",
      question: "What was the name of supportive sir during UPSC preparation in Ahmedabad?",
      options: ["Acharya sir", "Vineet sir", "Janmejay sir", "Gupta sir"],
      answer: 2,
      memories: [
        { text: "May this Diwali marks the starting of all the upcoming accomplishments of your life, most importantly, cracking the UPSC.", photo: "" },
        { text: "May this Diwali strengthen our friendship, you have supported me a lot, listened to my rants even when you're going through something 🙃 maybe I can also reciprocate that in coming time.", photo: "" },
        { text: "May this Diwali you become more confident, more determined towards your goals, either they are career related, self focused or related to relations you have.", photo: "" },
        { text: "May this Diwali wipes out your anxiety, self doubt.", photo: "" },
        { text: "May this Diwali you meet nice people with whom you can bond with, share your thoughts, discuss things. Like Obv, no one can replace us 🤗 fir bhi", photo: "" },
        { text: "I won't say ki hm jyada milne lage and ghume since it's not of importance as of now. But still, if you ever need us, having a rough day, we will be standing at gate with flowers and chocolates, waiting for you :)", photo: "" }
      ],
      wish: "Happy Diwali, Nishthi! Wishing you immense success, peace, and happiness! 🪔✨"
    },

    {
      id: "agrima-6c1e9f82",
      displayName: "Agrima",
      names: ["Agrima"],
      food: "dosa",
      foodNote: "Hi Agrima! Ik you would be shocked ki what is all this.. but tu jitna khush hui h na us bouquet vale se 😭 bhaiii, tabhi hi soch liya tha ki let's gift my close ones this Diwali. To enjoyy your Dosa 😋 hope it tastes better than all that you have ever eaten :)",
      question: "What is my favorite chocolate?",
      options: ["Dairy Milk", "Milkybar", "Perk", "Kitkat"],
      answer: 3,
      memories: [
        { text: "May this Diwali brings you all sorts of happiness you wish for, bahot sari 10rs vali candy kha tu aane vale saal me and explore new dosa places 😂", photo: "" },
        { text: "May this Diwali strengthens our bond, ye jo hua h 2 week me, totally unexpected friendship, vo aur gehri ho and we may become best friends as well :)", photo: "" },
        { text: "May this Diwali you buy something for yourself, things you have in your bucket list. Theek he dusro k liye krna, totally in favor of it but khud k liye bhi khareed kuch, make yourself happy. Kuch na ho to ek bahot acchi jagah Dosa khakr aa 😂", photo: "" },
        { text: "May this Diwali you glow more than you usually do. Mene mention nai kra ab tk but tu bahot pyaari lag rhi he DP me and usi k story me bhi :)", photo: "" },
        { text: "May this Diwali gets you more confidence and less anxiety about career or anything in general. Dikhi nai anxiety itni chat pr kabhi, but Ik definitely hogi tujhe. You will definitely do good, ik that at least.", photo: "" },
        { text: "May this Diwali I ragebait you little less than what I have been doing from past few days 😂", photo: "" }
      ],
      wish: "Happy Diwali, Agrima! May your days be filled with smiles, joy, and endless crispy dosas! 🪔✨"
    }
  ]
};
