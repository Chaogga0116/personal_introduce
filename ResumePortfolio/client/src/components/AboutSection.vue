<template>
  <section class="sec" id="skills">
    <div class="sec-label">02 ／ Technical Stack</div>
    <h2 class="sec-title">技術能力</h2>

    <div class="skills">
      <div
        class="skill-row"
        :class="{ 'is-lead': group.lead }"
        v-for="group in profile.skills"
        :key="group.category"
      >
        <div class="skill-cat">{{ group.category }}</div>
        <div class="chips">
          <span class="chip" v-for="item in group.items" :key="item">{{ item }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  profile: { type: Object, required: true }
});
</script>

<style scoped>
.skills {
  display: grid;
  border-top: 1px solid var(--line-soft);
}

.skill-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
  padding: 18px 0;
  border-bottom: 1px solid var(--line-soft);
}

@media (min-width: 640px) {
  .skill-row {
    grid-template-columns: 152px 1fr;
    gap: 24px;
    align-items: baseline;
  }
}

.skill-cat {
  font-family: var(--mono);
  font-size: 10.5px;
  letter-spacing: .14em;
  text-transform: uppercase;
  color: var(--ink-3);
}

/* AI 應用為主打能力，整列淡染重點色 */
.skill-row.is-lead {
  background: linear-gradient(to right, var(--accent-soft), transparent 60%);
}

.skill-row.is-lead .skill-cat {
  color: var(--accent);
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.skill-row.is-lead :deep(.chip) {
  border-color: color-mix(in srgb, var(--accent) 42%, var(--line));
  color: var(--accent);
  background: var(--accent-soft);
}
</style>
