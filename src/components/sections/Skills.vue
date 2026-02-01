<script setup>
import { profile } from '../../data.js'
import { Database, Server, Layout, Wrench } from 'lucide-vue-next'

const skillCategories = [
  { name: 'Backend', icon: Server, skills: profile.skills.backend },
  { name: 'Database', icon: Database, skills: profile.skills.database },
  { name: 'DevOps', icon: Wrench, skills: profile.skills.devops },
  { name: 'Frontend', icon: Layout, skills: profile.skills.frontend }
]
</script>

<template>
  <section id="skills" class="skills">
    <div class="container">
      <div class="section-header">
        <h2 class="text-gradient">Technical Arsenal</h2>
        <div class="line"></div>
      </div>

      <div class="skills-grid">
        <div v-for="cat in skillCategories" :key="cat.name" class="skill-category glass-card">
          <div class="category-header">
            <component :is="cat.icon" :size="24" class="icon" />
            <h3>{{ cat.name }}</h3>
          </div>
          <div class="skill-tags">
            <span v-for="skill in cat.skills" :key="skill" class="skill-tag">
              {{ skill }}
            </span>
          </div>
        </div>
      </div>

      <div class="soft-skills">
        <h3>Powering Human Connections</h3>
        <div class="soft-skills-grid">
          <div v-for="skill in profile.softSkills" :key="skill" class="soft-skill-item glass">
            {{ skill }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 6rem;
}

.skill-category {
  padding: 2.5rem;
}

.category-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.category-header .icon {
  color: var(--accent-primary);
}

.category-header h3 {
  font-size: 1.25rem;
  color: var(--text-main);
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}

.skill-tag {
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--glass-border);
  border-radius: 8px;
  font-size: 0.85rem;
  color: var(--text-dim);
  transition: all 0.3s ease;
}

.skill-tag:hover {
  background: rgba(0, 242, 254, 0.1);
  border-color: var(--accent-primary);
  color: var(--accent-primary);
  transform: translateY(-2px);
}

.soft-skills {
  text-align: center;
}

.soft-skills h3 {
  font-size: 1.5rem;
  margin-bottom: 3rem;
  color: var(--text-dim);
}

.soft-skills-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
}

.soft-skill-item {
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1rem;
  color: var(--text-main);
  border-color: rgba(255, 255, 255, 0.05);
}
</style>
