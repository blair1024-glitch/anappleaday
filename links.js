// 網站入口資料 —— 新增連結只要改這個檔案
// 每個分類：name（分類名稱）、icon（一個 emoji）、links（連結清單）
// 每個連結：title（標題）、url（網址）、desc（簡短說明，可省略）
window.PORTAL = {
  title: "An Apple A Day",
  subtitle: "我的常用網站分類入口",
  categories: [
    {
      name: "範例分類",
      icon: "📌",
      links: [
        { title: "Google", url: "https://www.google.com", desc: "搜尋引擎（範例，之後可刪除）" },
        { title: "GitHub", url: "https://github.com", desc: "程式碼託管（範例，之後可刪除）" }
      ]
    }
  ]
};
