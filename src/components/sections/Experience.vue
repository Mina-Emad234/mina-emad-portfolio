<script setup>
import { profile } from '../../data.js'
import { Briefcase, MapPin, Calendar } from 'lucide-vue-next'
</script>

<template>
  <section id="experience" class="experience">
    <div class="container">
      <div class="section-header">
        <h2 class="text-gradient">Experience</h2>
        <div class="line"></div>
      </div>

      <div class="timeline">
        <div v-for="(exp, index) in profile.experience" :key="index" class="timeline-item">
          <div class="timeline-dot glass">
            <Briefcase :size="16" />
          </div>
          <div class="timeline-content glass-card">
            <div class="experience-header">
              <div class="role-group">
                <h3>{{ exp.role }}</h3>
                <span class="company">{{ exp.company }}</span>
              </div>
              <div class="meta-group">
                <div class="meta-item"><Calendar :size="14" /> {{ exp.period }}</div>
                <div class="meta-item"><MapPin :size="14" /> {{ exp.location }}</div>
              </div>
            </div>
            
            <ul class="achievements">
              <li v-for="(ach, i) in exp.achievements" :key="i">{{ ach }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-header {
  margin-bottom: 5rem;
}

.timeline {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
}

.timeline::before {
  content: '';
  position: absolute;
  top: 0;
  left: 30px;
  height: 100%;
  width: 2px;
  background: var(--glass-border);
}

.timeline-item {
  position: relative;
  padding-left: 80px;
  margin-bottom: 4rem;
}

.timeline-dot {
  position: absolute;
  left: 10px;
  top: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-primary);
  border-color: rgba(0, 242, 254, 0.3);
  z-index: 10;
}

.timeline-content {
  padding: 2.5rem;
}

.experience-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
  gap: 1rem;
}

.role-group h3 {
  font-size: 1.25rem;
  margin-bottom: 0.3rem;
}

.company {
  color: var(--accent-primary);
  font-weight: 600;
  font-size: 0.95rem;
}

.meta-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: right;
}

.meta-item {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: var(--text-dim);
}

.achievements {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.achievements li {
  position: relative;
  padding-left: 1.5rem;
  color: var(--text-dim);
  font-size: 1rem;
}

.achievements li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--accent-primary);
}

@media (max-width: 768px) {
  .experience-header {
    flex-direction: column;
    text-align: left;
  }
  
  .meta-group {
    text-align: left;
  }
  
  .meta-item {
    justify-content: flex-start;
  }
}
</style>
