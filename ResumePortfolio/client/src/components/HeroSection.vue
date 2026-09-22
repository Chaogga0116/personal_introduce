<template>
  <section class="sec hero" id="profile">
    <canvas ref="canvas" class="net" aria-hidden="true"></canvas>

    <span class="hero-tag"><i class="dot"></i>Open to Work</span>
    <h1 class="hero-name">{{ profile.name }}<span class="cursor"></span></h1>
    <div class="hero-sub">{{ profile.title }} ・ <em>{{ profile.subtitle }}</em></div>
    <p class="hero-bio">{{ profile.bio }}</p>

    <dl class="facts">
      <div class="fact" v-for="fact in profile.facts" :key="fact.label">
        <dt>{{ fact.label }}</dt>
        <dd>{{ fact.value }}<small v-if="fact.unit">{{ fact.unit }}</small></dd>
      </div>
    </dl>

    <div class="hero-links">
      <a class="lnk lnk--solid" :href="`mailto:${profile.email}`">寄信給我</a>
      <a class="lnk" :href="profile.github" target="_blank" rel="noopener">GitHub ↗</a>
      <a class="lnk" href="#experience">查看經歷</a>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

defineProps({
  profile: { type: Object, required: true }
});

const canvas = ref(null);
let raf = 0;
let resizeTimer = 0;
let onResize = null;

// 開場節點網絡：節點緩慢漂移，距離夠近就連線（呼應多模型路由與向量檢索的意象）
onMounted(() => {
  const cv = canvas.value;
  if (!cv || !cv.getContext) return;
  const ctx = cv.getContext('2d');
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  let nodes = [];
  let w = 0;
  let h = 0;

  const accent = () =>
    getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#2FD4B6';

  const resize = () => {
    w = cv.clientWidth;
    h = cv.clientHeight;
    cv.width = Math.max(1, w * dpr);
    cv.height = Math.max(1, h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.max(18, Math.min(46, Math.round(w / 26)));
    nodes = [];
    for (let i = 0; i < count; i += 1) {
      nodes.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        r: Math.random() * 1.4 + 0.9
      });
    }
  };

  const draw = () => {
    const col = accent();
    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < nodes.length; i += 1) {
      const a = nodes[i];
      if (!reduce) {
        a.x += a.vx;
        a.y += a.vy;
      }
      if (a.x < 0 || a.x > w) a.vx *= -1;
      if (a.y < 0 || a.y > h) a.vy *= -1;
      for (let j = i + 1; j < nodes.length; j += 1) {
        const b = nodes[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 118) {
          ctx.globalAlpha = (1 - d / 118) * 0.3;
          ctx.strokeStyle = col;
          ctx.lineWidth = 0.7;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
      ctx.globalAlpha = 0.75;
      ctx.fillStyle = col;
      ctx.beginPath();
      ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    if (!reduce) raf = requestAnimationFrame(draw);
  };

  const start = () => {
    cancelAnimationFrame(raf);
    resize();
    draw();
  };

  start();
  onResize = () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(start, 180);
  };
  window.addEventListener('resize', onResize);
});

onBeforeUnmount(() => {
  cancelAnimationFrame(raf);
  clearTimeout(resizeTimer);
  if (onResize) window.removeEventListener('resize', onResize);
});
</script>

<style scoped>
.hero {
  position: relative;
  padding-top: 8px;
}

@media (max-width: 979px) {
  .hero {
    padding-top: 56px;
  }
}

.net {
  position: absolute;
  inset: -24px -24px auto -24px;
  height: 340px;
  width: calc(100% + 48px);
  max-width: none;
  z-index: 0;
  opacity: .85;
  -webkit-mask-image: linear-gradient(to bottom, #000 30%, transparent 95%);
  mask-image: linear-gradient(to bottom, #000 30%, transparent 95%);
}

.hero > *:not(.net) {
  position: relative;
  z-index: 1;
}

.hero-tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--mono);
  font-size: 10.5px;
  letter-spacing: .14em;
  text-transform: uppercase;
  color: var(--accent);
  border: 1px solid color-mix(in srgb, var(--accent) 35%, var(--line));
  background: var(--accent-soft);
  padding: 5px 11px;
  border-radius: var(--radius);
}

.hero-name {
  font-family: var(--mono);
  font-weight: 600;
  font-size: clamp(38px, 8.4vw, 70px);
  line-height: 1.06;
  letter-spacing: .02em;
  margin: 20px 0 0;
}

.cursor {
  display: inline-block;
  width: .5em;
  height: .9em;
  background: var(--accent);
  vertical-align: -.06em;
  margin-left: .12em;
  box-shadow: 0 0 14px var(--accent-glow);
  animation: blink 1.15s step-end infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.hero-sub {
  font-family: var(--mono);
  font-size: clamp(11.5px, 2.4vw, 13.5px);
  letter-spacing: .16em;
  text-transform: uppercase;
  color: var(--ink-2);
  margin-top: 16px;
}

.hero-sub em {
  font-style: normal;
  color: var(--accent);
}

.hero-bio {
  margin-top: 24px;
  max-width: 62ch;
  font-size: 15px;
  line-height: 1.95;
  color: var(--ink-2);
}

.facts {
  margin-top: 34px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(138px, 1fr));
  border: 1px solid var(--line);
  background: color-mix(in srgb, var(--surface) 70%, transparent);
  backdrop-filter: blur(6px);
}

.fact {
  padding: 16px 18px;
  border-right: 1px solid var(--line-soft);
  border-bottom: 1px solid var(--line-soft);
}

.fact dt {
  font-family: var(--mono);
  font-size: 9.5px;
  letter-spacing: .14em;
  text-transform: uppercase;
  color: var(--ink-3);
}

.fact dd {
  margin: 6px 0 0;
  font-family: var(--mono);
  font-size: 22px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  letter-spacing: .02em;
  color: var(--accent);
}

.fact dd small {
  font-family: var(--sans);
  font-size: 12px;
  font-weight: 300;
  color: var(--ink-2);
  letter-spacing: 0;
  margin-left: 3px;
}

.hero-links {
  margin-top: 28px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
</style>
