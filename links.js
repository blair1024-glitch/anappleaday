// 網站入口資料 —— 新增連結只要改這個檔案
//
// 文字欄位可以寫成一個字串（中英共用），或 { zh: "中文", en: "English" }
//
// 分類：name（分類名稱）、icon（一個 emoji）、links（連結清單）
// 連結：title（標題）、url（網址）、desc（簡短說明，可省略）、
//       added（加入日期 YYYY-MM-DD，7 天內會顯示「新」標籤）
window.PORTAL = {
  title: "An Apple A Day",
  subtitle: { zh: "一天一個強大的網站", en: "One powerful website a day" },
  categories: [
    {
      name: { zh: "綜合課程", en: "Courses" },
      icon: "📚",
      links: [
        {
          title: { zh: "可汗學院", en: "Khan Academy" },
          url: "https://www.khanacademy.org",
          desc: { zh: "免費線上課程與練習，涵蓋數學、科學、程式等科目", en: "Free courses and practice in math, science, computing and more" },
          added: "2026-10-01"
        },
        {
          title: "Crash Course",
          url: "https://crashcourse.com",
          desc: { zh: "節奏明快的知識短片，涵蓋歷史、科學、文學等", en: "Fast-paced educational videos on history, science, literature and more" },
          added: "2026-10-01"
        },
        {
          title: { zh: "MIT 開放式課程", en: "MIT OpenCourseWare" },
          url: "https://ocw.mit.edu",
          desc: { zh: "麻省理工學院免費公開的大學課程講義與影片", en: "Free lecture notes, videos and materials from MIT courses" },
          added: "2026-10-01"
        },
        {
          title: "TED-Ed",
          url: "https://ed.ted.com",
          desc: { zh: "TED 的教育動畫短片，用幾分鐘講清楚一個知識點", en: "TED's animated lessons that explain a big idea in a few minutes" },
          added: "2026-10-06"
        }
      ]
    },
    {
      name: { zh: "科學學習", en: "Science" },
      icon: "🔬",
      links: [
        {
          title: { zh: "PhET 互動模擬", en: "PhET Interactive Simulations" },
          url: "https://phet.colorado.edu/",
          desc: { zh: "科羅拉多大學的物理、化學、數學互動模擬", en: "Free physics, chemistry and math simulations from CU Boulder" },
          added: "2026-09-29"
        },
        {
          title: "Zperiod",
          url: "https://zperiod.app/?lang=zh-Hant",
          desc: { zh: "互動式元素週期表", en: "Interactive periodic table" },
          added: "2026-09-29"
        },
        {
          title: "LabXchange",
          url: "https://www.labxchange.org/",
          desc: { zh: "哈佛大學推出的免費科學學習平台，有虛擬實驗室", en: "Free science learning platform from Harvard, with virtual labs" },
          added: "2026-09-29"
        },
        {
          title: "oPhysics",
          url: "https://ophysics.com/",
          desc: { zh: "高中／大學物理互動模擬，物理公式與幾何圖形結合", en: "Interactive physics simulations for high school and college, pairing formulas with geometry" },
          added: "2026-09-30"
        },
        {
          title: "ChemCollective",
          url: "https://chemcollective.org/",
          desc: { zh: "線上化學滴定與溶液配製，虛擬化學實驗操作演練", en: "Virtual chemistry labs: practice titrations and preparing solutions" },
          added: "2026-09-30"
        },
        {
          title: { zh: "NOBOOK 虛擬化學實驗室", en: "NOBOOK Virtual Chemistry Lab" },
          url: "https://chemistry-en.nobook.com/console/templates/resource",
          desc: { zh: "3D 虛擬化學實驗，用拖拉器材的方式動手做實驗", en: "3D virtual chemistry lab where you run experiments with drag-and-drop equipment" },
          added: "2026-10-01"
        },
        {
          title: "AsapSCIENCE",
          url: "https://www.youtube.com/user/AsapSCIENCE",
          desc: { zh: "用手繪動畫和歌曲解說生活中的科學問題（YouTube）", en: "Hand-drawn animations and songs that explain everyday science (YouTube)" },
          added: "2026-10-06"
        }
      ]
    },
    {
      name: { zh: "兒童探索", en: "Kids Explore" },
      icon: "🌍",
      links: [
        {
          title: "NASA Space Place",
          url: "https://spaceplace.nasa.gov",
          desc: { zh: "NASA 為孩子設計的太空與地球科學遊戲、實作活動", en: "NASA's space and Earth science games and activities for kids" },
          added: "2026-10-01"
        },
        {
          title: { zh: "國家地理兒童版", en: "National Geographic Kids" },
          url: "https://kids.nationalgeographic.com",
          desc: { zh: "動物、自然、地理與歷史的趣味知識和影片", en: "Fun facts and videos about animals, nature, geography and history" },
          added: "2026-10-01"
        },
        {
          title: "NASA Kids' Club",
          url: "https://www.nasa.gov/learning-resources/nasa-kids-club/",
          desc: { zh: "NASA 給幼兒園到小四的太空遊戲和活動", en: "NASA's space games and activities for pre-K to grade 4" },
          added: "2026-10-06"
        },
        {
          title: "PBS Kids",
          url: "https://pbskids.org",
          desc: { zh: "美國公共電視的兒童遊戲與卡通，寓教於樂", en: "Educational games and shows for kids from PBS" },
          added: "2026-10-06"
        }
      ]
    },
    {
      name: { zh: "數學", en: "Math" },
      icon: "📐",
      links: [
        {
          title: "GeoGebra",
          url: "https://www.geogebra.org/",
          desc: { zh: "全領域數學、幾何、物理，功能強大；數學推導、動態幾何證題", en: "Powerful dynamic math for geometry, algebra and physics: derivations and geometric proofs" },
          added: "2026-09-30"
        },
        {
          title: "Cymath",
          url: "https://www.cymath.com/hk",
          desc: { zh: "數學解題器，逐步列出解題過程", en: "Math problem solver that shows every step" },
          added: "2026-09-30"
        }
      ]
    },
    {
      name: { zh: "設計與創作", en: "Design & Making" },
      icon: "🛠️",
      links: [
        {
          title: "Tinkercad",
          url: "https://www.tinkercad.com/",
          desc: { zh: "3D 建模、機器人、電子電路、Arduino；創客實作、程式與硬體模擬", en: "3D design, robotics, circuits and Arduino: simulate code and hardware for maker projects" },
          added: "2026-09-29"
        },
        {
          title: "EveryCircuit",
          url: "https://everycircuit.com",
          desc: { zh: "線上電路模擬器，即時動畫顯示電流和電壓變化", en: "Online circuit simulator with live animation of current and voltage" },
          added: "2026-10-07"
        }
      ]
    },
    {
      name: { zh: "程式與 AI", en: "Coding & AI" },
      icon: "💻",
      links: [
        {
          title: "Code.org",
          url: "https://code.org",
          desc: { zh: "免費程式教學平台，從積木到文字程式都有，適合各年級", en: "Free coding courses for every grade, from blocks to text-based programming" },
          added: "2026-10-01"
        },
        {
          title: { zh: "Code.org AI 一小時", en: "Code.org Hour of AI" },
          url: "https://code.org/en-US/hour-of-ai",
          desc: { zh: "Code.org 的一小時 AI 入門活動，適合學生", en: "One-hour intro activities on AI from Code.org, made for students" },
          added: "2026-09-29"
        },
        {
          title: "Scratch",
          url: "https://scratch.mit.edu",
          desc: { zh: "MIT 的積木式程式語言，拖拉積木做動畫和遊戲", en: "MIT's block-based coding: build animations and games by snapping blocks together" },
          added: "2026-10-01"
        },
        {
          title: "ScratchJr",
          url: "https://www.scratchjr.org",
          desc: { zh: "給 5–7 歲孩子的積木程式 App，做互動故事和遊戲", en: "Block-coding app for ages 5–7 to create interactive stories and games" },
          added: "2026-10-06"
        },
        {
          title: "Day of AI",
          url: "https://dayofai.org",
          desc: { zh: "MIT RAISE 設計的免費 AI 素養課程，從幼兒園到高中", en: "Free PreK–12 AI literacy curriculum designed by MIT RAISE" },
          added: "2026-10-01"
        },
        {
          title: "Experience AI",
          url: "https://experience-ai.org/en/",
          desc: { zh: "Google DeepMind 與樹莓派基金會合作的免費 AI 課程", en: "Free AI lessons from Google DeepMind and the Raspberry Pi Foundation" },
          added: "2026-10-01"
        },
        {
          title: "Machine Learning for Kids",
          url: "https://machinelearningforkids.co.uk",
          desc: { zh: "動手訓練機器學習模型，再用 Scratch 做成遊戲和專題", en: "Train your own machine learning models, then build games and projects with them in Scratch" },
          added: "2026-10-01"
        },
        {
          title: { zh: "WaytoAGI 通往 AGI 之路", en: "WaytoAGI" },
          url: "https://www.waytoagi.com/zh",
          desc: { zh: "中文 AI 知識庫，整理 AI 工具、教學和學習路徑", en: "Chinese-language AI knowledge base of tools, tutorials and learning paths" },
          added: "2026-10-01"
        }
      ]
    },
    {
      name: { zh: "語言學習", en: "Languages" },
      icon: "🗣️",
      links: [
        {
          title: "BBC Learning English",
          url: "https://www.bbc.co.uk/learningenglish/",
          desc: { zh: "BBC 英語學習課程與新聞英語", en: "English lessons and news English from the BBC" },
          added: "2026-09-29"
        },
        {
          title: "Qwerty Learner",
          url: "https://qwerty.kaiyi.cool/mobile",
          desc: { zh: "邊打字邊背英文單字，同時練習打字速度", en: "Learn English vocabulary by typing it, while building typing speed" },
          added: "2026-09-30"
        }
      ]
    },
    {
      name: { zh: "遊戲", en: "Games" },
      icon: "🎮",
      links: [
        {
          title: "Play-CS",
          url: "https://play-cs.com/zh/",
          desc: { zh: "瀏覽器直接玩 Counter-Strike 1.6", en: "Play Counter-Strike 1.6 in your browser" },
          added: "2026-09-29"
        },
        {
          title: "Coolmath Games",
          url: "https://www.coolmathgames.com/",
          desc: { zh: "免費益智、邏輯與數學小遊戲", en: "Free puzzle, logic and math-flavored browser games" },
          added: "2026-09-29"
        }
      ]
    }
  ]
};
