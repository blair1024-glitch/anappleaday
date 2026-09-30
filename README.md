# 🍎 An Apple A Day

一天一個強大的網站 —— 個人網站分類入口（純靜態網頁，不需要安裝任何東西）。

網址：https://blair1024-glitch.github.io/anappleaday/

## 功能

- **今日一站**：每天自動輪播一個網站，「換一個」可隨機再抽
- **中 / EN 切換**：記住上次選擇；也可用 `?lang=en` 指定
- 分類、搜尋（按 `/`）、網站圖示、7 天內新增的網站顯示「新」標籤
- 支援深色模式與手機版

## 檔案

- `index.html` – 頁面
- `style.css` – 樣式
- `app.js` – 功能
- `links.js` – **所有連結資料都在這裡**

## 新增連結

編輯 `links.js`，在對應分類的 `links` 裡加入：

```js
{
  title: "網站名稱",                                   // 中英相同時寫一個字串即可
  url: "https://example.com",
  desc: { zh: "中文說明", en: "English description" },
  added: "2026-09-29",                                 // 加入日期
  stars: 3                                             // 推薦指數 1–3（可省略）
},
```

新增分類：

```js
{ name: { zh: "分類名稱", en: "Category" }, icon: "🎬", links: [ ... ] },
```

## 本機預覽

直接用瀏覽器打開 `index.html` 即可。
