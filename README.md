# 🍎 An Apple A Day

個人網站分類入口（純靜態網頁，不需要安裝任何東西）。

## 檔案

- `index.html` – 頁面
- `style.css` – 樣式（支援深色模式、手機版）
- `app.js` – 產生分類與搜尋功能
- `links.js` – **所有連結資料都在這裡**

## 新增連結

編輯 `links.js`，在對應分類的 `links` 裡加一行：

```js
{ title: "網站名稱", url: "https://example.com", desc: "簡短說明" },
```

新增分類：

```js
{ name: "分類名稱", icon: "🎬", links: [ ... ] },
```

## 本機預覽

直接用瀏覽器打開 `index.html` 即可。

## 上線

可用 GitHub Pages：Repo → Settings → Pages → 選擇分支與根目錄 `/`。
