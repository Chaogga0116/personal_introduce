<template>
  <section class="sec" id="experience">
    <div class="sec-label">03 ／ Experience</div>
    <h2 class="sec-title">工作經歷</h2>

    <div class="track">
      <article class="job" v-for="job in experiences" :key="job.id">
        <div class="job-when">
          <span :class="{ now: job.current }">{{ job.period }}</span>
          <span class="place">{{ job.location }}</span>
        </div>
        <div>
          <h3 class="job-role">
            {{ job.position }}
            <span class="tag-self" v-if="job.sideProject">Side Project</span>
          </h3>
          <p class="job-co">{{ job.company }}</p>
          <p class="job-sum">{{ job.description }}</p>
          <ul class="job-list">
            <li v-for="(item, i) in job.achievements" :key="i">{{ item }}</li>
          </ul>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
defineProps({
  experiences: { type: Array, default: () => [] }
});
</script>

<style scoped>
.track {
  display: flex;
  flex-direction: column;
}

.job {
  display: grid;
  grid-template-columns: 1fr;
  gap: 14px;
  padding: 28px 0 32px;
  border-bottom: 1px solid var(--line-soft);
}

.job:last-child {
  border-bottom: 0;
  padding-bottom: 6px;
}

@media (min-width: 780px) {
  .job {
    grid-template-columns: 140px 1fr;
    gap: 36px;
  }
}

.job-when {
  font-family: var(--mono);
  font-size: 11.5px;
  letter-spacing: .04em;
  color: var(--ink-3);
  font-variant-numeric: tabular-nums;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.job-when .now {
  color: var(--accent);
}

.job-when .place {
  letter-spacing: .12em;
  font-size: 10px;
  text-transform: uppercase;
}

.job-role {
  font-family: var(--mono);
  font-size: 17px;
  font-weight: 600;
  letter-spacing: .02em;
  line-height: 1.55;
  margin: 0;
}

.tag-self {
  display: inline-block;
  margin-left: 10px;
  font-family: var(--mono);
  font-size: 9.5px;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--accent);
  border: 1px solid color-mix(in srgb, var(--accent) 40%, var(--line));
  background: var(--accent-soft);
  padding: 1px 7px;
  border-radius: var(--radius);
  vertical-align: middle;
}

.job-co {
  margin: 6px 0 0;
  font-size: 13px;
  color: var(--ink-2);
}

.job-sum {
  margin: 12px 0 0;
  font-size: 14px;
  color: var(--ink-2);
  max-width: 60ch;
}

.job-list {
  margin: 14px 0 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 9px;
  max-width: 64ch;
}

.job-list li {
  position: relative;
  padding-left: 22px;
  font-size: 13.8px;
  line-height: 1.85;
  color: var(--ink-2);
}

.job-list li::before {
  content: "▸";
  position: absolute;
  left: 0;
  top: 0;
  font-family: var(--mono);
  font-size: 11px;
  line-height: 1.95;
  color: var(--accent);
}
</style>
