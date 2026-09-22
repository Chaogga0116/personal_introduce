// 履歷與作品集資料（唯一內容來源，修改此檔即可更新網站）
export const profileData = {
  name: "陳昭儒",
  nameEn: "RYAN CHEN",
  title: "全端工程師",
  subtitle: "AI 應用開發",
  status: "開放機會洽談",
  email: "a0963181933@gmail.com",
  phone: "0963181933",
  location: "台中, 台灣",
  github: "https://github.com/Chaogga0116",
  bio: "擁有 6 年以上全端開發經驗的軟體工程師，後端專精 ASP.NET、C# 與 Python FastAPI，前端熟悉 Vue 3、React。近年投入 AI 應用開發，自建 LLM Agent 平台，實作向量記憶檢索、多模型路由與自動化驗證流程，並在日常開發導入 Cursor、Copilot、Claude Code 提升產出效率。具備從需求分析、架構設計到部署維運的完整開發能力，曾參與體育直播服務、政府 ERP 與半導體廠區 E 化等大型專案，注重程式碼品質與系統效能。",
  // 開場指標面板
  facts: [
    { label: "實務年資", value: "6", unit: "年以上" },
    { label: "任職企業", value: "3", unit: "家" },
    { label: "主導專案", value: "5", unit: "項" },
    { label: "現職起算", value: "2024.11", unit: "" }
  ],
  skills: [
    { category: "程式語言", items: ["C#", "ASP.NET", "Python", "Java", "JavaScript"] },
    { category: "後端架構", items: ["MVC", "MVVM", ".NET Framework", "FastAPI", "Entity Framework"] },
    { category: "前端框架", items: ["Vue 3", "React", "Knockout"] },
    { category: "AI 應用", items: ["LLM 應用開發", "AI Agent 編排", "RAG／向量檢索", "Prompt 工程", "Claude Code", "Cursor", "Copilot"], lead: true },
    { category: "資料庫", items: ["MSSQL", "Redis", "MySQL", "MongoDB", "Firebase", "SQLite"] },
    { category: "工具與雲端", items: ["Git", "Docker", "K8s", "GCP", "AWS", "Sentry", "Rider", "Visual Studio"] },
    { category: "其他", items: ["Unity3D", "Android", "ERP 系統", "中英打 75-100"] }
  ]
};

export const experienceData = [
  {
    id: 1,
    company: "英屬維京群島商維嘉思科技股份有限公司台灣分公司",
    position: "全端工程師",
    period: "2024.11 — 現在",
    current: true,
    location: "台中",
    description: "負責體育直播軟體服務系統的全端開發與維護。",
    achievements: [
      "前端以 Vue 3 開發直播與賽事功能模組，後端採 MVVM 架構分層，導入 Entity Framework 進行資料存取",
      "整合 MSSQL、Redis、Firebase 處理賽事即時資料的高併發讀寫，以快取策略與資料結構調整降低資料庫負載",
      "以 GCP 部署服務與管理資源，串接 Sentry 建立錯誤追蹤與告警，持續監控產品穩定性",
      "導入 Cursor、Copilot、Claude Code 進行程式生成、重構與程式碼審查，縮短開發與除錯時間"
    ]
  },
  {
    id: 2,
    company: "獨立開發與維運",
    position: "brain_ai 自架 AI 助理平台",
    period: "2026.06 — 現在",
    current: true,
    sideProject: true,
    location: "個人專案",
    description: "以 LLM 為核心的個人 AI 助理／開發管家，具備長期記憶、背景任務編排與自動驗證迴圈。",
    achievements: [
      "後端 Python FastAPI（約 388 支模組、8 萬行），前端 Vue 3 + Vite，以 Docker Compose 容器化交付並長期運行",
      "實作多模型供應商路由與語意意圖分類，依任務型態自動分派模型，並在服務失敗時自動降級",
      "SQLite 搭配本地向量模型做長期記憶召回，向量模型不可用時降級為全文關鍵字檢索，確保檢索不中斷",
      "自研任務管線引擎與自動驗證修正迴圈，長任務拆為可中斷續跑的步驟",
      "181 組 pytest 測試、ruff 靜態檢查與自建提交閘門；Argon2id 雜湊、Fernet 加密、指令與路徑白名單"
    ]
  },
  {
    id: 3,
    company: "艾富資訊股份有限公司",
    position: "程式設計師",
    period: "2021.04 — 2023.08",
    location: "台中 南屯",
    description: "為政府與公家機關製作 ERP 管理系統。",
    achievements: [
      "開發政府單位專用的 ERP 系統，整合採購、財務等多個業務流程模組",
      "使用 C#、ASP.NET、JavaScript、MS SQL、IIS 進行系統開發，設計資料表結構與多部門權限控管",
      "獨立負責需求分析、系統設計、程式開發到測試部署的完整開發週期"
    ]
  },
  {
    id: 4,
    company: "英資科技股份有限公司",
    position: "程式設計工程師",
    period: "2019.02 — 2021.02",
    location: "台中 大雅",
    description: "為台積電全廠區建立 E 化系統，項目包含施工 E 化、巡檢 E 化、AutoMail 等。",
    achievements: [
      "開發台積電廠區使用的自動化系統，將紙本作業流程數位化，提升現場作業與稽核效率",
      "使用 C#、WinForm 搭配 PDA 手持裝置開發現場系統，以 MSSQL 建立資料庫與資料表設計",
      "負責系統需求訪談、程式開發、測試及維護"
    ]
  }
];

export const projectsData = [
  {
    id: 1,
    name: "brain_ai 自架 AI 助理平台",
    category: "AI 應用",
    period: "2026 — 現在",
    lead: true,
    description: "以 LLM 為核心的個人 AI 助理平台，具備長期記憶、背景任務編排與自動驗證迴圈；後端 FastAPI、前端 Vue 3，以 Docker Compose 容器化長期運行。",
    technologies: ["Python", "FastAPI", "Vue 3", "Vite", "SQLite", "Docker Compose", "LLM", "RAG", "OpenTelemetry"],
    highlights: [
      "多模型供應商路由與語意意圖分類，依任務型態自動分派模型並在失敗時降級",
      "SQLite 搭配本地向量模型做長期記憶召回，向量失效時自動改用全文關鍵字檢索",
      "自研任務管線引擎，長任務拆為可中斷續跑的步驟，含自動驗證與修正迴圈",
      "181 組 pytest 測試、ruff 靜態檢查與自建提交閘門，未通過驗證不得結案",
      "Argon2id 密碼雜湊、Fernet 機密加密、指令與路徑白名單、日誌敏感資訊遮罩"
    ],
    image: null
  },
  {
    id: 2,
    name: "體育直播軟體服務系統",
    category: "企業應用",
    period: "2024 — 現在",
    description: "使用 Vue 3 與 MVVM 架構開發的體育直播平台，支援高併發即時資料處理。",
    technologies: ["Vue 3", "MVVM", "Entity Framework", "MSSQL", "Redis", "Firebase", "GCP", "Sentry"],
    highlights: [
      "前後端分離架構，Vue 3 搭配後端 MVVM 分層與 Entity Framework",
      "整合 Firebase 與 Redis 處理高併發資料讀寫",
      "以 GCP 部署、Sentry 進行系統監控與錯誤追蹤",
      "導入 Cursor、Copilot 等 AI 工具提升開發效率"
    ],
    image: null
  },
  {
    id: 3,
    name: "政府機關 ERP 管理系統",
    category: "企業應用",
    period: "2021 — 2023",
    description: "為政府與公家機關客製化的企業資源規劃系統。",
    technologies: ["C#", "ASP.NET", "JavaScript", "MS SQL", "HTML", "IIS"],
    highlights: [
      "整合多個業務流程模組，提升行政作業效率",
      "完整的需求分析、系統設計到部署流程",
      "以 ASP.NET 與 MS SQL 建立穩定的後端架構",
      "支援多部門協同作業與權限管理"
    ],
    image: null
  },
  {
    id: 4,
    name: "台積電廠區 E 化系統",
    category: "工業自動化",
    period: "2019 — 2021",
    description: "為台積電全廠區建立的自動化系統，包含施工 E 化、巡檢 E 化與 AutoMail 等模組。",
    technologies: ["C#", "WinForm", "MS PDA", "MSSQL"],
    highlights: [
      "開發施工管理、巡檢記錄等 E 化系統",
      "整合 AutoMail 自動化郵件通知功能",
      "以 WinForm 與 PDA 設備支援現場作業",
      "建立完整的資料庫架構與資料表設計"
    ],
    image: null
  },
  {
    id: 5,
    name: "Unity3D 遊戲開發專案",
    category: "遊戲開發",
    period: "2020 — 2021",
    description: "使用 Unity3D 開發的遊戲專案，實作遊戲邏輯與互動機制。",
    technologies: ["Unity3D", "C#"],
    highlights: [
      "學習並應用 Unity3D 遊戲引擎",
      "實作遊戲邏輯與互動機制",
      "優化遊戲效能與使用者體驗"
    ],
    image: null
  }
];

export const educationData = [
  {
    id: 1,
    school: "Sun Microsystems",
    degree: "SCJP — Sun Certified Java Programmer",
    period: "已取得",
    description: "Java 程式設計專業認證"
  },
  {
    id: 2,
    school: "TQC ／ EEC",
    degree: "多項電腦技能認證",
    period: "已取得",
    description: "TQC-DA 資料庫管理系統 Access、TQC-OA Excel／Word／PowerPoint、TQC-PD JAVA"
  }
];
