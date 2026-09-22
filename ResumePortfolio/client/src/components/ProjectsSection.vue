<template>
  <section class="sec" id="works">
    <div class="sec-label">04 ／ Selected Works</div>
    <h2 class="sec-title">專案作品</h2>

    <div class="works">
      <article
        class="work"
        :class="{ 'is-lead': project.lead }"
        v-for="project in projects"
        :key="project.id"
      >
        <div class="work-head">
          <span class="work-year">{{ project.period }}</span>
          <h3 class="work-name">{{ project.name }}</h3>
          <span class="work-kind">{{ project.category }}</span>
        </div>
        <p class="work-desc">{{ project.description }}</p>
        <div class="work-body">
          <ul class="work-list">
            <li v-for="(item, i) in project.highlights" :key="i">{{ item }}</li>
          </ul>
          <div class="work-tech">
            <span v-for="tech in project.technologies" :key="tech">{{ tech }}</span>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
defineProps({
  projects: { type: Array, default: () => [] }
});
</script>

<style scoped>
.works {
  display: flex;
  flex-direction: column;
}

.work {
  padding: 24px;
  border: 1px solid var(--line-soft);
  border-left: 2px solid var(--line);
  background: color-mix(in srgb, var(--surface) 55%, transparent);
  margin-bottom: 14px;
  transition: border-color .3s var(--ease), background .3s var(--ease);
}

.work:hover {
  border-left-color: var(--accent);
  background: color-mix(in srgb, var(--surface) 85%, transparent);
}

/* 主打專案：左側直接標記重點色 */
.work.is-lead {
  border-left-color: var(--accent);
}

.work-head {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 8px 16px;
}

.work-year {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: .04em;
  color: var(--ink-3);
  font-variant-numeric: tabular-nums;
  min-width: 92px;
}

.work-name {
  font-family: var(--mono);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: .02em;
  margin: 0;
  flex: 1 1 240px;
}

.work-kind {
  font-family: var(--mono);
  font-size: 9.5px;
  letter-spacing: .14em;
  text-transform: uppercase;
  color: var(--accent);
  border: 1px solid var(--line);
  padding: 2px 8px;
  border-radius: var(--radius);
}

.work-desc {
  margin: 12px 0 0;
  font-size: 13.8px;
  color: var(--ink-2);
  max-width: 64ch;
}

.work-body {
  margin-top: 14px;
  display: grid;
  gap: 16px;
}

@media (min-width: 880px) {
  .work-body {
    grid-template-columns: 1.3fr 1fr;
    gap: 36px;
  }
}

.work-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.work-list li {
  position: relative;
  padding-left: 18px;
  font-size: 13.2px;
  line-height: 1.8;
  color: var(--ink-2);
}

.work-list li::before {
  content: "";
  position: absolute;
  left: 0;
  top: .68em;
  width: 5px;
  height: 5px;
  background: var(--accent);
  opacity: .7;
}

.work-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  align-content: flex-start;
}

.work-tech span {
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: .04em;
  color: var(--ink-3);
  border: 1px solid var(--line-soft);
  background: var(--surface-2);
  padding: 3px 8px;
  border-radius: var(--radius);
  white-space: nowrap;
}
</style>
