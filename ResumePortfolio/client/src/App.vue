<template>
  <div id="app">
    <NavBar :name="profileData.name" />
    
    <main>
      <HeroSection :profile="profileData" />
      <AboutSection :profile="profileData" />
      <ExperienceSection :experiences="experienceData" />
      <ProjectsSection :projects="projectsData" />
      <ContactSection :profile="profileData" />
    </main>
    
    <ScrollToTop />

    <FooterBar
      :name="profileData.name"
      :tagline="profileData.bio"
      :github-url="profileData.github"
    />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import FooterBar from './components/FooterBar.vue';
import HeroSection from './components/HeroSection.vue';
import AboutSection from './components/AboutSection.vue';
import ExperienceSection from './components/ExperienceSection.vue';
import ProjectsSection from './components/ProjectsSection.vue';
import ContactSection from './components/ContactSection.vue';
import ScrollToTop from './components/ScrollToTop.vue';
import { profileData, experienceData, projectsData } from './data/mockData.js';

export default {
  name: 'App',
  components: {
    NavBar,
    FooterBar,
    HeroSection,
    AboutSection,
    ExperienceSection,
    ProjectsSection,
    ContactSection,
    ScrollToTop
  },
  data() {
    return {
      profileData,
      experienceData,
      projectsData
    };
  },

};
</script>

<style>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}
</style>
