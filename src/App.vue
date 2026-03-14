<script setup>
import { onMounted, ref } from 'vue'
import { profile } from './data.js'
import Navbar from './components/Navbar.vue'
import Hero from './components/sections/Hero.vue'
import About from './components/sections/About.vue'
import Experience from './components/sections/Experience.vue'
import Skills from './components/sections/Skills.vue'
import Projects from './components/sections/Projects.vue'
import Contact from './components/sections/Contact.vue'

const isLoaded = ref(false)

onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true
  }, 500)
})
</script>

<template>
  <div v-if="!isLoaded" class="loader">
    <div class="loader-content">
      <h1 class="text-gradient">ME</h1>
      <div class="progress-bar"></div>
    </div>
  </div>

  <template v-else>
    <Navbar />
    <main>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>

    <footer class="glass">
      <div class="container footer-content">
        <p>&copy; {{ new Date().getFullYear() }} {{ profile.name }}</p>
        <div class="social-links">
          <a :href="profile.github" target="_blank">GitHub</a>
          <a :href="profile.linkedin" target="_blank">LinkedIn</a>
        </div>
      </div>
    </footer>
  </template>
</template>

<style scoped>
.loader {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-dark);
}

.loader-content {
  text-align: center;
}

.loader h1 {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.progress-bar {
  width: 200px;
  height: 2px;
  background: rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
  border-radius: 10px;
}

.progress-bar::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 50%;
  background: var(--gradient-primary);
  animation: progress 1.5s infinite ease-in-out;
}

@keyframes progress {
  0% { left: -50%; }
  100% { left: 100%; }
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 0;
  border-top: 1px solid var(--glass-border);
}

.social-links {
  display: flex;
  gap: 2rem;
}

.social-links a:hover {
  color: var(--accent-primary);
}

footer {
  margin-top: 4rem;
  border-radius: 0;
  border-left: none;
  border-right: none;
  border-bottom: none;
}
</style>
