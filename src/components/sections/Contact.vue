<script setup>
import { profile } from '../../data.js'
import { Mail, Phone, Github, Linkedin, MessageSquare, Send } from 'lucide-vue-next'
</script>

<template>
  <section id="contact" class="contact">
    <div class="container">
      <div class="section-header">
        <h2 class="text-gradient">Get In Touch</h2>
        <div class="line"></div>
      </div>

      <div class="contact-grid">
        <div class="contact-info">
          <h3>Let's build something amazing together</h3>
          <p>I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
          
          <div class="contact-methods">
            <a :href="'mailto:' + profile.email" class="contact-card glass-card">
              <div class="icon-box"><Mail :size="24" /></div>
              <div class="info-box">
                <span>Email Me</span>
                <p>{{ profile.email }}</p>
              </div>
            </a>
            
            <a :href="profile.whatsapp" target="_blank" class="contact-card glass-card">
              <div class="icon-box"><MessageSquare :size="24" /></div>
              <div class="info-box">
                <span>WhatsApp</span>
                <p>{{ profile.phone }}</p>
              </div>
            </a>
          </div>
        </div>

        <div class="contact-social">
          <h3>Follow My Journey</h3>
          <div class="social-grid">
            <a :href="profile.github" target="_blank" class="social-tile glass">
              <Github :size="32" />
              <span>GitHub</span>
            </a>
            <a :href="profile.linkedin" target="_blank" class="social-tile glass">
              <Linkedin :size="32" />
              <span>LinkedIn</span>
            </a>
          </div>
          
          <div class="cta-box glass">
            <p>Ready to start a project?</p>
            <a :href="profile.whatsapp" target="_blank" class="btn-primary">
              Send a Message <Send :size="18" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
}

h3 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.contact-info p {
  color: var(--text-dim);
  font-size: 1.1rem;
  margin-bottom: 3rem;
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact-card {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
}

.icon-box {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 242, 254, 0.1);
  border-radius: 15px;
  color: var(--accent-primary);
}

.info-box span {
  display: block;
  font-size: 0.85rem;
  color: var(--accent-primary);
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 0.2rem;
}

.info-box p {
  margin: 0;
  font-size: 1.1rem;
  color: var(--text-main);
}

.social-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.social-tile {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2.5rem;
  transition: all 0.3s ease;
}

.social-tile:hover {
  border-color: var(--accent-primary);
  color: var(--accent-primary);
  transform: translateY(-5px);
}

.social-tile span {
  font-weight: 600;
}

.cta-box {
  padding: 2rem;
  text-align: center;
}

.cta-box p {
  margin-bottom: 1.5rem;
  font-weight: 500;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
}

@media (max-width: 992px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
}
</style>
