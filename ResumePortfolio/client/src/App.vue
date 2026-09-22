<template>
  <div id="app">
    <div class="shell">
      <NavBar
        :name="profileData.name"
        :name-en="profileData.nameEn"
        :status="profileData.status"
      />

      <main>
        <HeroSection :profile="profileData" />
        <AboutSection :profile="profileData" />
        <ExperienceSection :experiences="experienceData" />
        <ProjectsSection :projects="projectsData" />
        <CertsSection :certifications="educationData" />
        <ContactSection :profile="profileData" />
        <FooterBar :name="profileData.name" />
      </main>
    </div>

    <ScrollToTop />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import FooterBar from './components/FooterBar.vue';
import HeroSection from './components/HeroSection.vue';
import AboutSection from './components/AboutSection.vue';
import ExperienceSection from './components/ExperienceSection.vue';
import ProjectsSection from './components/ProjectsSection.vue';
import CertsSection from './components/CertsSection.vue';
import ContactSection from './components/ContactSection.vue';
import ScrollToTop from './components/ScrollToTop.vue';
import { profileData, experienceData, projectsData, educationData } from './data/mockData.js';

export default {
  name: 'App',
  components: {
    NavBar,
    FooterBar,
    HeroSection,
    AboutSection,
    ExperienceSection,
    ProjectsSection,
    CertsSection,
    ContactSection,
    ScrollToTop
  },
  data() {
    return {
      profileData,
      experienceData,
      projectsData,
      educationData
    };
  }
};
</script>

<style>
#app {
  min-height: 100vh;
}
</style>
