<template>
  <section id="experience" class="section">
    <div class="container">
      <h2 class="section-title">工作經歷</h2>
      
      <div class="timeline">
        <div v-for="(exp, index) in experiences" 
             :key="exp.id"
             class="timeline-item animate-fade-in-up"
             :style="{ animationDelay: `${index * 0.1}s` }">
          <div class="timeline-marker"></div>
          <div class="timeline-content card">
            <div class="experience-header">
              <div>
                <h3 class="experience-position">{{ exp.position }}</h3>
                <h4 class="experience-company">{{ exp.company }}</h4>
              </div>
              <div class="experience-meta">
                <span class="badge">{{ exp.period }}</span>
                <span class="experience-location">📍 {{ exp.location }}</span>
              </div>
            </div>
            
            <p class="experience-description">{{ exp.description }}</p>
            
            <div class="achievements">
              <h5>主要成就：</h5>
              <ul>
                <li v-for="(achievement, idx) in exp.achievements" :key="idx">
                  {{ achievement }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ExperienceSection',
  props: {
    experiences: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.timeline {
  position: relative;
  padding-left: var(--space-xl);
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--gradient-primary);
}

.timeline-item {
  position: relative;
  margin-bottom: var(--space-2xl);
  opacity: 0;
  animation: fadeInUp 0.6s ease-out forwards;
}

.timeline-marker {
  position: absolute;
  left: calc(-1 * var(--space-xl) - 8px);
  top: 0;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(--gradient-primary);
  border: 3px solid var(--color-bg-primary);
  box-shadow: 0 0 0 4px var(--color-bg-secondary);
  z-index: 1;
}

.timeline-content {
  padding: var(--space-lg);
}

.experience-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--space-md);
  gap: var(--space-md);
}

.experience-position {
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: var(--space-xs);
}

.experience-company {
  font-size: var(--font-size-lg);
  font-weight: 600;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.experience-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: var(--space-xs);
  flex-shrink: 0;
}

.experience-location {
  font-size: var(--font-size-sm);
  color: var(--color-text-tertiary);
}

.experience-description {
  color: var(--color-text-secondary);
  margin-bottom: var(--space-md);
  line-height: 1.7;
}

.achievements h5 {
  font-size: var(--font-size-base);
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: var(--space-sm);
}

.achievements ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.achievements li {
  position: relative;
  padding-left: var(--space-lg);
  color: var(--color-text-secondary);
  line-height: 1.6;
}

.achievements li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--color-accent);
  font-weight: bold;
}

@media (max-width: 768px) {
  .experience-header {
    flex-direction: column;
  }
  
  .experience-meta {
    align-items: flex-start;
  }
  
  .timeline {
    padding-left: var(--space-lg);
  }
  
  .timeline-marker {
    left: calc(-1 * var(--space-lg) - 8px);
  }
}
</style>
