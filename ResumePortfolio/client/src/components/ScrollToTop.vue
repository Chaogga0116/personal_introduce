<template>
  <Transition name="fade">
    <button
      v-if="visible"
      class="to-top"
      type="button"
      aria-label="回到頂部"
      @click="scrollTop"
    >↑</button>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const visible = ref(false);
const onScroll = () => {
  visible.value = window.scrollY > 600;
};

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll);
});

const scrollTop = () => {
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
};
</script>

<style scoped>
.to-top {
  position: fixed;
  right: 20px;
  bottom: calc(20px + env(safe-area-inset-bottom, 0px));
  z-index: 40;
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  font-family: var(--mono);
  font-size: 15px;
  color: var(--accent);
  background: color-mix(in srgb, var(--surface) 88%, transparent);
  backdrop-filter: blur(10px);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  cursor: pointer;
  transition: border-color .25s var(--ease), box-shadow .25s var(--ease), color .25s var(--ease);
}

.to-top:hover {
  border-color: var(--accent);
  box-shadow: 0 0 18px -4px var(--accent-glow);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .25s var(--ease), transform .25s var(--ease);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(6px);
}
</style>
