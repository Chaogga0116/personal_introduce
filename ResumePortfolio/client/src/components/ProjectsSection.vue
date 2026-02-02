<template>
  <section id="projects" class="section">
    <div class="container">
      <h2 class="section-title">專案作品</h2>
      
      <div class="projects-grid">
        <div v-for="(project, index) in projects" 
             :key="project.id"
             class="project-card card animate-fade-in-up"
             :style="{ animationDelay: `${index * 0.1}s` }">
          <div class="project-header">
            <div>
              <span class="project-category badge">{{ project.category }}</span>
              <h3 class="project-name">{{ project.name }}</h3>
              <p class="project-period">{{ project.period }}</p>
            </div>
          </div>
          
          <p class="project-description">{{ project.description }}</p>
          
          <div class="project-tech">
            <span v-for="tech in project.technologies" 
                  :key="tech"
                  class="tech-badge badge badge-primary">
              {{ tech }}
            </span>
          </div>
          
          <div class="project-highlights">
            <h5>專案亮點：</h5>
            <ul>
              <li v-for="(highlight, idx) in project.highlights" :key="idx">
                {{ highlight }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectsSection',
  props: {
    projects: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: var(--space-xl);
}

.project-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  padding: var(--space-xl);
  opacity: 0;
  animation: fadeInUp 0.6s ease-out forwards;
  transition: all var(--transition-base);
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.project-category {
  display: inline-block;
  margin-bottom: var(--space-sm);
}

.project-name {
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: var(--space-xs);
}

.project-period {
  font-size: var(--font-size-sm);
  color: var(--color-text-tertiary);
}

.project-description {
  color: var(--color-text-secondary);
  line-height: 1.7;
  flex-grow: 1;
}

.project-tech {
  display: flex;
  gap: var(--space-xs);
  flex-wrap: wrap;
}

.tech-badge {
  font-size: var(--font-size-xs);
}

.project-highlights {
  margin-top: var(--space-sm);
}

.project-highlights h5 {
  font-size: var(--font-size-sm);
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: var(--space-sm);
}

.project-highlights ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.project-highlights li {
  position: relative;
  padding-left: var(--space-md);
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
  line-height: 1.5;
}

.project-highlights li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: var(--color-primary-light);
  font-weight: bold;
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
