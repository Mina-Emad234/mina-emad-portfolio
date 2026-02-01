<script setup>
import { ref, computed } from 'vue'
import { profile } from '../../data.js'
import { ExternalLink, Github, Monitor, Smartphone, Layout } from 'lucide-vue-next'

const activeTab = ref('live')

const filteredProjects = computed(() => {
  return activeTab.value === 'live' ? profile.projects : profile.internshipProjects
})

const getIcon = (type) => {
  if (type?.toLowerCase().includes('app')) return Smartphone
  if (type?.toLowerCase().includes('dashboard')) return Layout
  return Monitor
}
</script>

<template>
  <section id="projects" class="projects">
    <div class="container">
      <div class="section-header">
        <h2 class="text-gradient">Featured Work</h2>
        <div class="line"></div>
      </div>

      <div class="project-filters">
        <button 
          :class="['filter-btn', { active: activeTab === 'live' }]"
          @click="activeTab = 'live'"
        >
          Live Projects ({{ profile.projects.length }})
        </button>
        <button 
          :class="['filter-btn', { active: activeTab === 'internship' }]"
          @click="activeTab = 'internship'"
        >
          Internship & Labs ({{ profile.internshipProjects.length }})
        </button>
      </div>

      <transition-group name="grid" tag="div" class="projects-grid">
        <div 
          v-for="project in filteredProjects" 
          :key="project.name" 
          class="project-card glass-card"
        >
          <div class="project-info">
            <div class="project-type" v-if="project.type">
              <component :is="getIcon(project.type)" :size="14" />
              {{ project.type }}
            </div>
            <h3>{{ project.name }}</h3>
            <p v-if="project.tech" class="tech-stack">{{ project.tech }}</p>
            <p v-if="project.status" class="status">{{ project.status }}</p>
          </div>

          <div class="project-links">
            <!-- Live Project Links -->
            <template v-if="activeTab === 'live'">
              <a v-if="project.website" :href="project.website" target="_blank" title="Website"><ExternalLink :size="18" /></a>
              <a v-if="project.dashboard" :href="project.dashboard" target="_blank" title="Dashboard"><Layout :size="18" /></a>
              <a v-if="project.app || project.userApp" :href="project.app || project.userApp" target="_blank" title="Mobile App"><Smartphone :size="18" /></a>
              <a v-if="project.webApp" :href="project.webApp" target="_blank" title="Web App"><Monitor :size="18" /></a>
            </template>
            
            <!-- Internship Project Links -->
            <template v-else>
              <a v-if="project.github" :href="project.github" target="_blank" title="GitHub"><Github :size="18" /></a>
            </template>
          </div>
        </div>
      </transition-group>
    </div>
  </section>
</template>

<style scoped>
.project-filters {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 4rem;
  justify-content: center;
}

.filter-btn {
  background: var(--glass);
  color: var(--text-dim);
  padding: 0.8rem 1.8rem;
  border-radius: 12px;
  border: 1px solid var(--glass-border);
  font-weight: 500;
  transition: all 0.3s ease;
}

.filter-btn.active {
  background: var(--gradient-primary);
  color: #000;
  border-color: transparent;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
}

.project-card {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 220px;
}

.project-type {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  color: var(--accent-primary);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1rem;
}

.project-card h3 {
  font-size: 1.4rem;
  margin-bottom: 1rem;
}

.tech-stack {
  font-size: 0.85rem;
  color: var(--text-dim);
  line-height: 1.5;
  margin-bottom: 1.5rem;
}

.status {
  font-size: 0.85rem;
  color: #ffbd2e;
  font-style: italic;
}

.project-links {
  display: flex;
  gap: 1.2rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--glass-border);
}

.project-links a {
  color: var(--text-dim);
  transition: color 0.3s ease;
}

.project-links a:hover {
  color: var(--accent-primary);
}

/* Animations */
.grid-enter-active, .grid-leave-active {
  transition: all 0.5s ease;
}
.grid-enter-from, .grid-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
