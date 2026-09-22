<template>
  <section class="sec" id="certs">
    <div class="sec-label">05 ／ Certifications</div>
    <h2 class="sec-title">專業認證</h2>

    <div class="certs">
      <div class="cert" v-for="cert in certifications" :key="cert.id">
        <div class="cert-org">{{ cert.school }}</div>
        <div>
          <p class="cert-name">{{ cert.degree }}</p>
          <p class="cert-desc">{{ cert.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  certifications: { type: Array, default: () => [] }
});
</script>

<style scoped>
.certs {
  display: grid;
  border-top: 1px solid var(--line-soft);
}

.cert {
  padding: 18px 0;
  border-bottom: 1px solid var(--line-soft);
}

@media (min-width: 640px) {
  .cert {
    display: grid;
    grid-template-columns: 152px 1fr;
    gap: 24px;
    align-items: baseline;
  }
}

.cert-org {
  font-family: var(--mono);
  font-size: 10.5px;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--ink-3);
}

.cert-name {
  margin: 0;
  font-size: 14.5px;
}

.cert-desc {
  margin: 4px 0 0;
  font-size: 12.8px;
  color: var(--ink-3);
}
</style>
