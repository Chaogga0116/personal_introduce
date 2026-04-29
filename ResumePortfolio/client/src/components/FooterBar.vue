<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3 class="footer-title">{{ name }}</h3>
          <p class="footer-text">{{ tagline }}</p>
        </div>
        
        <div class="footer-section">
          <h4 class="footer-subtitle">快速連結</h4>
          <ul class="footer-links">
            <li><a href="#home">首頁</a></li>
            <li><a href="#about">關於我</a></li>
            <li><a href="#experience">工作經歷</a></li>
            <li><a href="#projects">專案作品</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h4 class="footer-subtitle">社群連結</h4>
          <div class="social-links">
            <a :href="githubUrl" target="_blank" rel="noopener noreferrer" class="social-link">GitHub</a>
          </div>
        </div>

      </div>
      
      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} {{ name }}. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterBar',
  props: {
    name: {
      type: String,
      default: '張小明'
    },
    tagline: {
      type: String,
      default: '熱愛技術創新的全端工程師'
    },
    githubUrl: {
      type: String,
      default: 'https://github.com/Chaogga0116'
    }
  },
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
};
</script>

<style scoped>
.footer {
  background: var(--color-bg-secondary);
  border-top: 1px solid var(--color-border);
  padding: var(--space-3xl) 0 var(--space-lg);
  margin-top: var(--space-3xl);
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--space-xl);
  margin-bottom: var(--space-xl);
}

.footer-section {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.footer-title {
  font-size: var(--font-size-2xl);
  font-weight: 800;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: var(--space-xs);
}

.footer-subtitle {
  font-size: var(--font-size-lg);
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: var(--space-xs);
}

.footer-text {
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
}

.footer-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.footer-links a {
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
  transition: color var(--transition-fast);
}

.footer-links a:hover {
  color: var(--color-primary-light);
}

.social-links {
  display: flex;
  gap: var(--space-md);
  flex-wrap: wrap;
}

.social-link {
  padding: var(--space-xs) var(--space-md);
  background: var(--color-bg-elevated);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
  font-weight: 500;
  transition: all var(--transition-base);
}

.social-link:hover {
  background: var(--gradient-primary);
  color: white;
  border-color: transparent;
  transform: translateY(-2px);
}

.footer-bottom {
  padding-top: var(--space-lg);
  border-top: 1px solid var(--color-border);
  text-align: center;
}

.footer-bottom p {
  color: var(--color-text-tertiary);
  font-size: var(--font-size-sm);
  margin: 0;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
  }
}
</style>
