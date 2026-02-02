<template>
  <nav class="navbar">
    <div class="container navbar-content">
      <div class="navbar-brand">
        <span class="logo-text">{{ name }}</span>
      </div>
      
      <button class="menu-toggle" @click="toggleMenu" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      <ul class="navbar-menu" :class="{ 'is-active': isMenuOpen }">
        <li v-for="item in menuItems" :key="item.id">
          <a 
            :href="item.href" 
            class="navbar-link"
            :class="{ 'is-active': activeSection === item.id }"
            @click="handleNavClick(item.id)"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    name: {
      type: String,
      default: '個人簡歷'
    }
  },
  data() {
    return {
      isMenuOpen: false,
      activeSection: 'home',
      menuItems: [
        { id: 'home', label: '首頁', href: '#home' },
        { id: 'about', label: '關於我', href: '#about' },
        { id: 'experience', label: '工作經歷', href: '#experience' },
        { id: 'projects', label: '專案作品', href: '#projects' },
        { id: 'contact', label: '聯絡方式', href: '#contact' }
      ]
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    handleNavClick(sectionId) {
      this.activeSection = sectionId;
      this.isMenuOpen = false;
    }
  },
  mounted() {
    // Observe sections for active state
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.activeSection = entry.target.id;
          }
        });
      },
      { threshold: 0.5 }
    );

    this.menuItems.forEach((item) => {
      const section = document.querySelector(item.href);
      if (section) observer.observe(section);
    });
  }
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--z-fixed);
  background: rgba(15, 15, 20, 0.8);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--color-border);
  transition: all var(--transition-base);
}

.navbar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
}

.navbar-brand {
  display: flex;
  align-items: center;
}

.logo-text {
  font-size: var(--font-size-xl);
  font-weight: 800;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}

.menu-toggle span {
  width: 25px;
  height: 2px;
  background: var(--color-text-primary);
  transition: all var(--transition-base);
}

.navbar-menu {
  display: flex;
  gap: var(--space-lg);
  list-style: none;
  margin: 0;
  padding: 0;
}

.navbar-link {
  position: relative;
  display: block;
  padding: var(--space-xs) var(--space-sm);
  color: var(--color-text-secondary);
  font-weight: 500;
  transition: color var(--transition-fast);
}

.navbar-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: var(--gradient-primary);
  transform: translateX(-50%);
  transition: width var(--transition-base);
}

.navbar-link:hover,
.navbar-link.is-active {
  color: var(--color-text-primary);
}

.navbar-link.is-active::after {
  width: 100%;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }
  
  .navbar-menu {
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    flex-direction: column;
    gap: 0;
    background: rgba(15, 15, 20, 0.95);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--color-border);
    padding: var(--space-md) 0;
    max-height: 0;
    overflow: hidden;
    transition: max-height var(--transition-base);
  }
  
  .navbar-menu.is-active {
    max-height: 400px;
  }
  
  .navbar-link {
    padding: var(--space-md) var(--space-lg);
  }
}
</style>
