# 陳昭儒 — 個人履歷網站

個人履歷與作品集網站，以 Vue 3 + Vite 建置，展示工作經歷、技術技能及專案成果。

GitHub：[github.com/Chaogga0116](https://github.com/Chaogga0116)

## 專案用途

作為求職與自我介紹的線上履歷，提供瀏覽者快速了解個人背景、工作經歷與技術能力。

## 技術棧

- **框架**：Vue 3 + Vite
- **語言**：JavaScript、HTML、CSS
- **架構**：單頁應用（SPA），無路由，所有區塊垂直排列

## 專案結構

```
ResumePortfolio/client/
├── src/
│   ├── data/mockData.js       # 所有履歷內容（修改此檔案更新個人資料）
│   ├── components/
│   │   ├── NavBar.vue
│   │   ├── HeroSection.vue
│   │   ├── AboutSection.vue
│   │   ├── ExperienceSection.vue
│   │   ├── ProjectsSection.vue
│   │   ├── ContactSection.vue
│   │   └── FooterBar.vue
│   ├── App.vue
│   └── main.js
```

## 啟動方式

```bash
cd ResumePortfolio/client
npm install
npm run dev      # 開發伺服器 http://localhost:5173
npm run build    # 打包至 dist/
npm run preview  # 預覽打包結果
```

## 作者

**陳昭儒** — 全端工程師，專精 ASP.NET / C# 後端與 Vue.js / React 前端。

- Email：a0963181933@gmail.com
- GitHub：[github.com/Chaogga0116](https://github.com/Chaogga0116)
