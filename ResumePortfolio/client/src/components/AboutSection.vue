<template>
  <section id="about" class="section">
    <div class="container">
      <h2 class="section-title">關於我</h2>
      
      <div class="about-grid">
        <div class="about-info card card-glass animate-fade-in-up">
          <h3>個人資訊</h3>
          <div class="info-list">
            <div class="info-item">
              <span class="info-label">📧 Email:</span>
              <span class="info-value">{{ profile.email }}</span>
            </div>
            <div class="info-item">
              <span class="info-label">📱 電話:</span>
              <span class="info-value">{{ profile.phone }}</span>
            </div>
            <div class="info-item">
              <span class="info-label">📍 地點:</span>
              <span class="info-value">{{ profile.location }}</span>
            </div>
          </div>
          
          <div class="social-links">
            <a v-for="(url, platform) in profile.social" 
               :key="platform"
               :href="url"
               class="social-btn"
               target="_blank"
               rel="noopener noreferrer">
              {{ platform.toUpperCase() }}
            </a>
          </div>
        </div>
        
        <div class="skills-section">
          <div v-for="skillGroup in profile.skills" 
               :key="skillGroup.category"
               class="skill-group card animate-fade-in-up">
            <h4 class="skill-category">{{ skillGroup.category }}</h4>
            <div class="skill-tags">
              <span v-for="skill in skillGroup.items" 
                    :key="skill"
                    class="badge badge-primary">
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection',
  props: {
    profile: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: var(--space-xl);
}

.about-info {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  height: fit-content;
  position: sticky;
  top: 100px;
}

.about-info h3 {
  font-size: var(--font-size-2xl);
  font-weight: 700;
  margin-bottom: var(--space-sm);
}

.info-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.info-label {
  font-size: var(--font-size-sm);
  color: var(--color-text-tertiary);
  font-weight: 500;
}

.info-value {
  font-size: var(--font-size-base);
  color: var(--color-text-primary);
}

.social-links {
  display: flex;
  gap: var(--space-sm);
  flex-wrap: wrap;
}

.social-btn {
  padding: var(--space-sm) var(--space-md);
  background: var(--gradient-primary);
  color: white;
  border-radius: var(--radius-lg);
  font-size: var(--font-size-sm);
  font-weight: 600;
  transition: all var(--transition-base);
}

.social-btn:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.skills-section {
  display: grid;
  gap: var(--space-lg);
}

.skill-group {
  padding: var(--space-lg);
}

.skill-category {
  font-size: var(--font-size-xl);
  font-weight: 700;
  margin-bottom: var(--space-md);
  color: var(--color-primary-light);
}

.skill-tags {
  display: flex;
  gap: var(--space-sm);
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
  
  .about-info {
    position: static;
  }
}
</style>
