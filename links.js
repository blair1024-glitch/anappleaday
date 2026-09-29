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
          desc: { zh: "線上 3D 建模、電路與程式設計", en: "3D modeling, circuits and coding in the browser" },
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
