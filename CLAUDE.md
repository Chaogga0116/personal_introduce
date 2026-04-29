# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 語言規範

始終使用繁體中文（zh-TW）回應，並採用台灣軟體業界常用術語，例如：
- Thread → 執行緒
- Instance → 實例
- Function → 函式
- Parameter → 參數
- Array → 陣列
- Object → 物件
- Interface → 介面
- Deploy → 部署
- Refactor → 重構

## Project Overview

A personal resume/portfolio website for a full-stack engineer (陳昭儒). Built with Vue 3 + Vite, presenting profile, experience, and projects.

## Commands

All commands run from `ResumePortfolio/client/`:

```bash
npm run dev       # Start dev server (http://localhost:5173)
npm run build     # Build for production (outputs to dist/)
npm run preview   # Preview production build locally
```

## Architecture

The app is a single-page Vue 3 application with no routing — all sections are stacked vertically on one page.

**Data layer:** All content is static mock data in `src/data/mockData.js`. This exports `profileData`, `experienceData`, `projectsData`, and `educationData`. To update resume content, edit this file only.

**Component structure:** `App.vue` imports all section components and passes data down as props. Components are purely presentational — no state management, no Vuex/Pinia.

```
App.vue
├── NavBar.vue         (receives: name)
├── HeroSection.vue    (receives: profile)
├── AboutSection.vue   (receives: profile)
├── ExperienceSection.vue (receives: experiences)
├── ProjectsSection.vue   (receives: projects)
├── ContactSection.vue    (receives: profile)
└── FooterBar.vue      (receives: name, tagline)
```

**Note:** `App.vue` uses Options API (`export default { data() {...} }`), while some components use `<script setup>`. Be consistent with the existing style of each file when editing.
