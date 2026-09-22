<template>
  <section class="sec" id="contact">
    <div class="sec-label">06 ／ Contact</div>
    <h2 class="sec-title">聯絡方式</h2>

    <dl class="contact-grid">
      <div class="contact-row">
        <dt>Email</dt>
        <dd><a :href="`mailto:${profile.email}`">{{ profile.email }}</a></dd>
      </div>
      <div class="contact-row">
        <dt>GitHub</dt>
        <dd>
          <a :href="profile.github" target="_blank" rel="noopener">{{ githubLabel }}</a>
        </dd>
      </div>
      <div class="contact-row">
        <dt>所在地</dt>
        <dd>{{ profile.location }}</dd>
      </div>
      <div class="contact-row">
        <dt>狀態</dt>
        <dd>在職中 ・ {{ profile.status }}</dd>
      </div>
    </dl>
  </section>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  profile: { type: Object, required: true }
});

// 網址去掉通訊協定，只留可辨識的部分
const githubLabel = computed(() => (props.profile.github || '').replace(/^https?:\/\//, ''));
</script>

<style scoped>
.contact-grid {
  display: grid;
  border: 1px solid var(--line);
  max-width: 600px;
  background: color-mix(in srgb, var(--surface) 60%, transparent);
}

.contact-row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 20px;
  padding: 14px 18px;
  border-bottom: 1px solid var(--line-soft);
}

.contact-row:last-child {
  border-bottom: 0;
}

.contact-row dt {
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: .14em;
  text-transform: uppercase;
  color: var(--ink-3);
}

.contact-row dd {
  margin: 0;
  font-family: var(--mono);
  font-size: 13.5px;
  font-variant-numeric: tabular-nums;
  text-align: right;
}

.contact-row a {
  border-bottom: 1px solid transparent;
  transition: color .25s var(--ease), border-color .25s var(--ease);
}

.contact-row a:hover {
  color: var(--accent);
  border-bottom-color: var(--accent);
}
</style>
