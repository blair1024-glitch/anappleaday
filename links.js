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
        }
      ]
    },
    {
      name: { zh: "程式與 AI", en: "Coding & AI" },
      icon: "💻",
      links: [
        {
          title: { zh: "Code.org AI 一小時", en: "Code.org Hour of AI" },
          url: "https://code.org/en-US/hour-of-ai",
          desc: { zh: "Code.org 的一小時 AI 入門活動，適合學生", en: "One-hour intro activities on AI from Code.org, made for students" },
          added: "2026-09-29"
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
