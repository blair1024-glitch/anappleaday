// 網站入口資料 —— 新增連結只要改這個檔案
// 每個分類：name（分類名稱）、icon（一個 emoji）、links（連結清單）
// 每個連結：title（標題）、url（網址）、desc（簡短說明，可省略）
window.PORTAL = {
  title: "An Apple A Day",
  subtitle: "我的常用網站分類入口",
  categories: [
    {
      name: "科學學習",
      icon: "🔬",
      links: [
        { title: "PhET 互動模擬", url: "https://phet.colorado.edu/", desc: "科羅拉多大學的物理、化學、數學互動模擬" },
        { title: "Zperiod", url: "https://zperiod.app/?lang=zh-Hant", desc: "互動式元素週期表" }
      ]
    },
    {
      name: "設計與創作",
      icon: "🛠️",
      links: [
        { title: "Tinkercad", url: "https://www.tinkercad.com/", desc: "線上 3D 建模、電路與程式設計" }
      ]
    },
    {
      name: "語言學習",
      icon: "🗣️",
      links: [
        { title: "BBC Learning English", url: "https://www.bbc.co.uk/learningenglish/", desc: "BBC 英語學習課程與新聞英語" }
      ]
    },
    {
      name: "遊戲",
      icon: "🎮",
      links: [
        { title: "Play-CS", url: "https://play-cs.com/zh/", desc: "瀏覽器直接玩 Counter-Strike 1.6" }
      ]
    }
  ]
};
