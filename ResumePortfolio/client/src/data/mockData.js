// Mock data for personal resume and portfolio
export const profileData = {
  name: "陳昭儒",
  title: "全端工程師",
  email: "a0963181933@gmail.com",
  phone: "0963181933",
  location: "台中, 台灣",
  bio: "擁有 4-5 年全端開發經驗的軟體工程師，專精於 ASP.NET、C# 後端架構與 Vue.js、React 前端技術。具備完整的系統開發能力，從需求分析、架構設計到部署維運皆能獨立完成。曾參與大型企業級專案開發，熟悉 ERP 系統、電商平台及數據處理系統的建置與優化。注重程式碼品質與系統效能，善於運用現代化技術解決複雜的業務需求。",
  skills: [
    { category: "程式語言", items: ["ASP.NET", "C#", "Java", "JavaScript"] },
    { category: "後端架構", items: ["MVC", "MVVM", ".NET Framework"] },
    { category: "前端框架", items: ["Vue3", "React", "KnockOut"] },
    { category: "資料庫", items: ["MSSQL", "Redis", "MySQL", "MongoDB", "Access", "Firebase"] },
    { category: "開發工具", items: ["Cursor", "Claude", "Rider", "Visual Studio", "Git", "Docker", "GCP", "AWS", "K8S"] },
    { category: "其他技術", items: ["Unity3D", "Android", "ERP 系統", "中/英文打字 75-100"] }
  ],

};

export const experienceData = [
  {
    id: 1,
    company: "英屬維京群島商維嘉思科技股份有限公司台灣分公司",
    position: "全端工程師",
    period: "2024/11 - 現在",
    location: "台中",
    description: "負責體育直播軟體服務系統的全端開發與維護",
    achievements: [
      "運用 Vue 3 前端框架結合後端 MVVM 架構製作軟體，導入 EF 連接資料庫",
      "使用 MSSQL、Redis、FireBase 來處理資料，經常處理高併發資料的讀寫",
      "也會運用 GCP 以及 Sentry 時刻關注產品穩定性，提在意使用 Cursor、Copilot 來開發"
    ]
  },
  {
    id: 2,
    company: "艾富資訊股份有限公司",
    position: "程式設計師",
    period: "2021/04 - 2023/08",
    location: "台中市南屯區",
    description: "為政府與公家機關製作 ERP 管理系統",
    achievements: [
      "開發政府單位專用的 ERP 系統，整合多個業務流程模組",
      "使用 C#、JavaScript、MS SQL、HTML、ASP.NET、IIS 等技術進行系統開發",
      "負責需求分析、系統設計、程式開發到測試部署的完整開發週期"
    ]
  },
  {
    id: 3,
    company: "英資科技股份有限公司",
    position: "程式設計工程師",
    period: "2019/02 - 2021/02",
    location: "台中市大雅區",
    description: "為台積電全廠區建立 E化系統，項目包含施工 E化、巡檢 E化、AutoMail 等",
    achievements: [
      "開發台積電廠區使用的自動化系統，提升作業效率",
      "使用 C#、MS PDA、機器及 WinForm 專案，運用 MSSQL 建立資料庫的資料表",
      "負責系統需求訪談、程式開發、測試及維護等工作"
    ]
  }
];

export const projectsData = [
  {
    id: 1,
    name: "體育直播軟體服務系統",
    category: "企業應用",
    period: "2024 - 現在",
    description: "使用 Vue 3 與 MVVM 架構開發的體育直播軟體平台，支援高併發資料處理",
    technologies: ["Vue 3", "MVVM", "EF", "MSSQL", "Redis", "Firebase", "GCP", "Sentry"],
    highlights: [
      "前後端分離架構，使用 Vue 3 搭配 MVVM 模式",
      "整合 Firebase 與 Redis 處理高併發資料讀寫",
      "使用 GCP 與 Sentry 進行系統監控與錯誤追蹤",
      "採用 Cursor、Copilot 等 AI 工具提升開發效率"
    ],
    image: null
  },
  {
    id: 2,
    name: "政府機關 ERP 管理系統",
    category: "企業應用",
    period: "2021 - 2023",
    description: "為政府與公家機關客製化的企業資源規劃系統",
    technologies: ["C#", "ASP.NET", "JavaScript", "MS SQL", "HTML", "IIS"],
    highlights: [
      "整合多個業務流程模組，提升行政效率",
      "完整的需求分析、系統設計到部署流程",
      "使用 ASP.NET 與 MS SQL 建立穩定的後端架構",
      "支援多部門協同作業與權限管理"
    ],
    image: null
  },
  {
    id: 3,
    name: "台積電廠區 E化系統",
    category: "工業自動化",
    period: "2019 - 2021",
    description: "為台積電全廠區建立的自動化系統，包含施工 E化、巡檢 E化、AutoMail 等模組",
    technologies: ["C#", "WinForm", "MS PDA", "MSSQL"],
    highlights: [
      "開發施工管理、巡檢記錄等 E化系統",
      "整合 AutoMail 自動化郵件通知功能",
      "使用 WinForm 與 PDA 設備進行現場作業",
      "建立完整的資料庫架構與資料表設計"
    ],
    image: null
  },
  {
    id: 4,
    name: "Unity3D 遊戲開發專案",
    category: "遊戲開發",
    period: "2020 - 2021",
    description: "使用 Unity3D 開發的遊戲專案",
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
    degree: "SCJP (Sun Certified Java Programmer)",
    period: "已取得",
    description: "Java 程式設計專業認證"
  },
  {
    id: 2,
    school: "TQC / EEC",
    degree: "多項電腦技能認證",
    period: "已取得",
    description: "TQC-DA 資料庫管理系統 Access、TQC-OA Excel/Word/PowerPoint、TQC-PD JAVA"
  }
];
