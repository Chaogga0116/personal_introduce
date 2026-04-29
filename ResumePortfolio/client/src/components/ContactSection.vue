<template>
  <section id="contact" class="section contact-section">
    <div class="container">
      <h2 class="section-title">聯絡方式</h2>
      
      <div class="contact-content">
        <div class="contact-info animate-fade-in-up">
          <p class="contact-intro">
            如果您對我的經歷或專案感興趣，歡迎透過以下方式與我聯繫。我很樂意討論合作機會或技術交流！
          </p>
          
          <div class="contact-methods">
            <a :href="`mailto:${profile.email}`" class="contact-method card card-glass">
              <div class="contact-icon">📧</div>
              <div class="contact-details">
                <h4>Email</h4>
                <p>{{ profile.email }}</p>
              </div>
            </a>
            
            <a :href="`tel:${profile.phone}`" class="contact-method card card-glass">
              <div class="contact-icon">📱</div>
              <div class="contact-details">
                <h4>電話</h4>
                <p>{{ profile.phone }}</p>
              </div>
            </a>
            
            <div class="contact-method card card-glass">
              <div class="contact-icon">📍</div>
              <div class="contact-details">
                <h4>地點</h4>
                <p>{{ profile.location }}</p>
              </div>
            </div>

            <a :href="profile.github" target="_blank" rel="noopener noreferrer" class="contact-method card card-glass">
              <div class="contact-icon">💻</div>
              <div class="contact-details">
                <h4>GitHub</h4>
                <p>github.com/Chaogga0116</p>
              </div>
            </a>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactSection',
  props: {
    profile: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.contact-section {
  background: var(--color-bg-secondary);
  border-radius: var(--radius-2xl);
  margin: var(--space-2xl) 0;
}

.contact-content {
  max-width: 800px;
  margin: 0 auto;
}

.contact-intro {
  font-size: var(--font-size-lg);
  color: var(--color-text-secondary);
  text-align: center;
  margin-bottom: var(--space-2xl);
  line-height: 1.8;
}

.contact-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--space-lg);
  margin-bottom: var(--space-2xl);
}

.contact-method {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  padding: var(--space-lg);
  text-decoration: none;
  transition: all var(--transition-base);
}

.contact-method:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.contact-icon {
  font-size: var(--font-size-4xl);
  flex-shrink: 0;
}

.contact-details h4 {
  font-size: var(--font-size-base);
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: var(--space-xs);
}

.contact-details p {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  margin: 0;
}

.social-cta {
  text-align: center;
  padding-top: var(--space-xl);
  border-top: 1px solid var(--color-border);
}

.social-cta h3 {
  font-size: var(--font-size-xl);
  font-weight: 600;
  margin-bottom: var(--space-lg);
  color: var(--color-text-primary);
}

.social-buttons {
  display: flex;
  gap: var(--space-md);
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .contact-methods {
    grid-template-columns: 1fr;
  }
}
</style>
