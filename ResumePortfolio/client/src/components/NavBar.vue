<template>
  <!-- 手機：固定頂部列 -->
  <header class="topbar">
    <b>{{ name }}<span>_</span></b>
    <span>全端 ／ AI 應用</span>
  </header>

  <!-- 桌機：左側章節索引 -->
  <aside class="index">
    <div class="index-mark">{{ nameEn }}<span>_</span></div>
    <div class="index-role">Full-Stack ／ AI Engineer</div>
    <nav class="index-nav" aria-label="頁面章節">
      <a
        v-for="item in sections"
        :key="item.id"
        :href="`#${item.id}`"
        :class="{ on: active === item.id }"
      >{{ item.no }} ／ {{ item.label }}</a>
    </nav>
    <div class="index-status">
      <span><i class="dot"></i>{{ status }}</span>
      <span>台中 ・ TAIWAN</span>
      <span>2019 — 2026</span>
    </div>
  </aside>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

defineProps({
  name: { type: String, default: '' },
  nameEn: { type: String, default: '' },
  status: { type: String, default: '' }
});

const sections = [
  { id: 'profile', no: '01', label: '簡介' },
  { id: 'skills', no: '02', label: '技術' },
  { id: 'experience', no: '03', label: '經歷' },
  { id: 'works', no: '04', label: '專案' },
  { id: 'certs', no: '05', label: '認證' },
  { id: 'contact', no: '06', label: '聯絡' }
];

const active = ref('profile');
let observer = null;

onMounted(() => {
  if (!('IntersectionObserver' in window)) return;
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) active.value = entry.target.id;
      });
    },
    { rootMargin: '-20% 0px -70% 0px' }
  );
  sections.forEach((item) => {
    const el = document.getElementById(item.id);
    if (el) observer.observe(el);
  });
});

onBeforeUnmount(() => {
  if (observer) observer.disconnect();
});
</script>

<style scoped>
/* 手機頂部列：固定定位，不佔 grid 欄位 */
.topbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 30;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  background: color-mix(in srgb, var(--ground) 86%, transparent);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--line);
  padding: 12px 20px;
  padding-top: calc(12px + env(safe-area-inset-top, 0px));
  font-family: var(--mono);
  font-size: 10.5px;
  letter-spacing: .14em;
  text-transform: uppercase;
  color: var(--ink-3);
}

.topbar b {
  font-size: 14px;
  font-weight: 600;
  letter-spacing: .04em;
  color: var(--ink);
  text-transform: none;
}

.topbar b span {
  color: var(--accent);
}

.index {
  display: none;
}

@media (min-width: 980px) {
  .topbar {
    display: none;
  }

  .index {
    display: flex;
    flex-direction: column;
    position: sticky;
    top: env(safe-area-inset-top, 0px);
    align-self: start;
    height: 100vh;
    padding-block: 52px 28px;
    border-right: 1px solid var(--line);
    margin-right: -1px;
  }
}

.index-mark {
  font-family: var(--mono);
  font-size: 19px;
  font-weight: 600;
  letter-spacing: .04em;
  line-height: 1.35;
}

.index-mark span {
  color: var(--accent);
}

.index-role {
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: .16em;
  text-transform: uppercase;
  color: var(--ink-3);
  margin-top: 10px;
}

.index-nav {
  margin-top: 36px;
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.index-nav a {
  font-family: var(--mono);
  font-size: 11.5px;
  letter-spacing: .08em;
  color: var(--ink-3);
  padding: 7px 0 7px 16px;
  border-left: 1px solid var(--line);
  transition: color .25s var(--ease), border-color .25s var(--ease), background .25s var(--ease);
}

.index-nav a:hover,
.index-nav a.on {
  color: var(--accent);
  border-left-color: var(--accent);
  background: var(--accent-soft);
}

.index-status {
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--ink-3);
}
</style>
