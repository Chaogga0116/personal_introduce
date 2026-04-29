<template>
  <section id="home" class="hero-section">
    <div class="hero-background">
      <div class="gradient-orb orb-1"></div>
      <div class="gradient-orb orb-2"></div>
      <div class="gradient-orb orb-3"></div>
    </div>
    
    <div class="container hero-content">
      <div class="hero-text animate-fade-in-up">
        <p class="hero-greeting">👋 你好，我是</p>
        <h1 class="hero-title">{{ profile.name }}</h1>
        <p class="hero-subtitle">{{ profile.title }}</p>
        <p class="hero-bio">{{ profile.bio }}</p>
        
        <div class="hero-actions">
          <a href="#contact" class="btn btn-primary">聯絡我</a>
          <a href="#projects" class="btn btn-outline">查看作品</a>
          <a :href="profile.github" target="_blank" rel="noopener noreferrer" class="btn btn-outline">GitHub</a>
        </div>
      </div>
    </div>
    
    <div class="scroll-indicator">
      <span>向下滾動</span>
      <div class="scroll-arrow">↓</div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  props: {
    profile: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding-top: 70px;
}

.hero-background {
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: 0;
}

.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.3;
  animation: float 20s infinite ease-in-out;
}

.orb-1 {
  width: 500px;
  height: 500px;
  background: var(--gradient-primary);
  top: -200px;
  left: -200px;
  animation-delay: 0s;
}

.orb-2 {
  width: 400px;
  height: 400px;
  background: var(--gradient-accent);
  bottom: -150px;
  right: -150px;
  animation-delay: 5s;
}

.orb-3 {
  width: 300px;
  height: 300px;
  background: var(--color-secondary);
  top: 50%;
  right: 20%;
  animation-delay: 10s;
}

@keyframes float {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(50px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-30px, 30px) scale(0.9);
  }
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
}

.hero-text {
  max-width: 800px;
  margin: 0 auto;
}

.hero-greeting {
  font-size: var(--font-size-xl);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-sm);
}

.hero-title {
  font-size: var(--font-size-5xl);
  font-weight: 900;
  margin-bottom: var(--space-md);
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;
}

.hero-subtitle {
  font-size: var(--font-size-2xl);
  color: var(--color-text-primary);
  font-weight: 600;
  margin-bottom: var(--space-lg);
}

.hero-bio {
  font-size: var(--font-size-lg);
  color: var(--color-text-secondary);
  line-height: 1.8;
  margin-bottom: var(--space-xl);
}

.hero-actions {
  display: flex;
  gap: var(--space-md);
  justify-content: center;
  flex-wrap: wrap;
}

.scroll-indicator {
  position: absolute;
  bottom: var(--space-xl);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-xs);
  color: var(--color-text-tertiary);
  font-size: var(--font-size-sm);
  animation: bounce 2s infinite;
}

.scroll-arrow {
  font-size: var(--font-size-xl);
}

@keyframes bounce {
  0%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(10px);
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: var(--font-size-3xl);
  }
  
  .hero-subtitle {
    font-size: var(--font-size-xl);
  }
  
  .hero-actions {
    flex-direction: column;
  }
  
  .gradient-orb {
    filter: blur(60px);
  }
}
</style>
