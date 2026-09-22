<template>
  <footer class="footer">
    <span>{{ name }} ・ {{ tagline }}</span>
    <span>Taichung, Taiwan</span>
  </footer>
</template>

<script setup>
defineProps({
  name: { type: String, default: '' },
  tagline: { type: String, default: '全端工程師 ／ AI 應用開發' }
});
</script>

<style scoped>
.footer {
  border-top: 1px solid var(--line);
  margin-top: 22px;
  padding: 20px 0 44px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px 20px;
  justify-content: space-between;
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--ink-3);
}
</style>
