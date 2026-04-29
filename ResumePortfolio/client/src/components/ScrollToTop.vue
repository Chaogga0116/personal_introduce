<template>
  <Transition name="fade-up">
    <button
      v-if="visible"
      class="scroll-to-top"
      aria-label="回到頂部"
      @click="scrollToTop"
    >
      ↑
    </button>
  </Transition>
</template>

<script>
export default {
  name: 'ScrollToTop',
  data() {
    return {
      visible: false
    };
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll, { passive: true });
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    onScroll() {
      this.visible = window.scrollY > 300;
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
};
</script>

<style scoped>
.scroll-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: var(--z-fixed);
  width: 48px;
  height: 48px;
  border-radius: var(--radius-full);
  border: none;
  background: var(--gradient-primary);
  color: white;
  font-size: 1.25rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: var(--shadow-lg), var(--shadow-glow);
  transition: transform var(--transition-base), box-shadow var(--transition-base);
  display: flex;
  align-items: center;
  justify-content: center;
}

.scroll-to-top:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl), var(--shadow-glow);
}

.fade-up-enter-active,
.fade-up-leave-active {
  transition: opacity var(--transition-base), transform var(--transition-base);
}

.fade-up-enter-from,
.fade-up-leave-to {
  opacity: 0;
  transform: translateY(12px);
}
</style>
