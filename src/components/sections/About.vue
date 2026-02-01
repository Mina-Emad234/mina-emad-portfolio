<script setup>
import { profile } from '../../data.js'
import { GraduationCap, MapPin, Calendar, Briefcase } from 'lucide-vue-next'
</script>

<template>
  <section id="about" class="about">
    <div class="container">
      <div class="section-header">
        <h2 class="text-gradient">About Me</h2>
        <div class="line"></div>
      </div>

      <div class="about-grid">
        <div class="about-text glass-card">
          <p>{{ profile.summary }}</p>
          
          <div class="info-metrics">
            <div class="metric">
              <span class="metric-value">4+</span>
              <span class="metric-label">Years Experience</span>
            </div>
            <div class="metric">
              <span class="metric-value">25+</span>
              <span class="metric-label">Projects Delivered</span>
            </div>
            <div class="metric">
              <span class="metric-value">10+</span>
              <span class="metric-label">Technologies</span>
            </div>
          </div>
        </div>

        <div class="about-details">
          <div class="detail-card glass">
            <MapPin :size="20" class="icon" />
            <div class="detail-content">
              <h3>Location</h3>
              <p>{{ profile.location }}</p>
            </div>
          </div>
          
          <div class="detail-card glass">
            <Calendar :size="20" class="icon" />
            <div class="detail-content">
              <h3>Birth Date</h3>
              <p>{{ profile.birthDate }}</p>
            </div>
          </div>

          <div class="detail-card glass">
            <GraduationCap :size="20" class="icon" />
            <div class="detail-content">
              <h3>Education</h3>
              <p>{{ profile.education.degree }}</p>
              <p class="institution">{{ profile.education.institution }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-header {
  margin-bottom: 4rem;
}

.section-header h2 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.line {
  width: 60px;
  height: 4px;
  background: var(--gradient-primary);
  border-radius: 10px;
}

.about-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 3rem;
}

.about-text {
  padding: 3rem;
  font-size: 1.1rem;
  color: var(--text-dim);
}

.about-text p {
  margin-bottom: 2.5rem;
  line-height: 1.8;
}

.info-metrics {
  display: flex;
  gap: 3rem;
}

.metric {
  display: flex;
  flex-direction: column;
}

.metric-value {
  font-size: 2rem;
  font-weight: 800;
  color: var(--text-main);
}

.metric-label {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--accent-primary);
}

.about-details {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.detail-card {
  display: flex;
  gap: 1.5rem;
  padding: 1.5rem;
}

.detail-card .icon {
  color: var(--accent-primary);
  margin-top: 5px;
}

.detail-content h3 {
  font-size: 1rem;
  color: var(--text-main);
  margin-bottom: 0.3rem;
}

.detail-content p {
  font-size: 0.95rem;
  color: var(--text-dim);
}

.institution {
  font-size: 0.85rem !important;
  opacity: 0.8;
}

@media (max-width: 992px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 576px) {
  .info-metrics {
    flex-wrap: wrap;
    gap: 2rem;
  }
}
</style>
