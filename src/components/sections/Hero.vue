<script setup>
import { profile } from '../../data.js'
import { Github, Linkedin, ArrowRight } from 'lucide-vue-next'
</script>

<template>
  <section id="home" class="hero">
    <div class="background-blobs">
      <div class="blob blob-1"></div>
      <div class="blob blob-2"></div>
    </div>
    
    <div class="container hero-container">
      <div class="hero-content">
        <div class="badge fade-in">Available for new opportunities</div>
        <h1 class="fade-in">
          Scalable <span class="text-gradient">Backend</span> Solutions for Modern Apps
        </h1>
        <p class="fade-in description">
          Hi, I'm <span class="highlight">{{ profile.name }}</span>. I architect robust infrastructures 
          and high-performance APIs with <span class="highlight">Laravel & Node.js</span>.
        </p>
        
        <div class="hero-actions fade-in">
          <a href="#projects" class="btn-primary">View My Work <ArrowRight :size="18" /></a>
          <div class="social-icons">
            <a :href="profile.github" target="_blank" class="social-icon"><Github :size="20" /></a>
            <a :href="profile.linkedin" target="_blank" class="social-icon"><Linkedin :size="20" /></a>
          </div>
        </div>
      </div>

      <div class="hero-visual fade-in">
        <div class="code-card glass">
          <div class="code-header">
            <div class="dot red"></div>
            <div class="dot yellow"></div>
            <div class="dot green"></div>
            <span class="file-name">MinaEmad.php</span>
          </div>
          <div class="code-body">
            <pre><code><span class="keyword">class</span> <span class="class-name">Developer</span> {
  <span class="keyword">public</span> <span class="variable">$name</span> = <span class="string">'Mina Emad'</span>;
  <span class="keyword">public</span> <span class="variable">$role</span> = <span class="string">'Backend Engineer'</span>;
  <span class="keyword">public</span> <span class="variable">$location</span> = <span class="string">'Egypt'</span>;
  
  <span class="keyword">public function</span> <span class="function-name">getSkills</span>() {
    <span class="keyword">return</span> [
      <span class="string">'Laravel'</span>, <span class="string">'PHP'</span>, <span class="string">'MySQL'</span>,
      <span class="string">'Redis'</span>, <span class="string">'Docker'</span>, <span class="string">'AWS'</span>
    ];
  }
}</code></pre>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding-top: 100px;
}

.hero-container {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 4rem;
  align-items: center;
}

.badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: rgba(0, 242, 254, 0.1);
  border: 1px solid rgba(0, 242, 254, 0.2);
  border-radius: 100px;
  color: var(--accent-primary);
  font-size: 0.85rem;
  font-weight: 500;
  margin-bottom: 2rem;
}

h1 {
  font-size: 4.5rem;
  line-height: 1.1;
  margin-bottom: 1.5rem;
}

.description {
  font-size: 1.25rem;
  color: var(--text-dim);
  max-width: 600px;
  margin-bottom: 3rem;
}

.highlight {
  color: var(--text-main);
  font-weight: 600;
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.btn-primary {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.social-icons {
  display: flex;
  gap: 1rem;
}

.social-icon {
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: var(--glass);
  border: 1px solid var(--glass-border);
  transition: all 0.3s ease;
}

.social-icon:hover {
  border-color: var(--accent-primary);
  color: var(--accent-primary);
  transform: translateY(-3px);
}

.background-blobs {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.blob {
  position: absolute;
  filter: blur(80px);
  border-radius: 50%;
  opacity: 0.15;
}

.blob-1 {
  width: 400px;
  height: 400px;
  background: var(--accent-primary);
  top: -100px;
  right: -100px;
}

.blob-2 {
  width: 300px;
  height: 300px;
  background: var(--accent-secondary);
  bottom: 100px;
  left: -50px;
}

/* Code Card */
.code-card {
  padding: 1.5rem;
  font-family: var(--font-mono);
  font-size: 0.9rem;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
}

.code-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 1.5rem;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.red { background: #ff5f56; }
.yellow { background: #ffbd2e; }
.green { background: #27c93f; }

.file-name {
  margin-left: 10px;
  color: var(--text-dim);
  font-size: 0.8rem;
}

.code-body {
  color: #abb2bf;
}

.keyword { color: #c678dd; }
.class-name { color: #e5c07b; }
.variable { color: #e06c75; }
.string { color: #98c379; }
.function-name { color: #61afef; }

@media (max-width: 992px) {
  .hero-container {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 3rem;
  }
  
  h1 { font-size: 3.5rem; }
  
  .description { margin: 0 auto 3rem; }
  
  .hero-actions {
    justify-content: center;
  }
  
  .hero-visual {
    max-width: 500px;
    margin: 0 auto;
  }
}

@media (max-width: 576px) {
  h1 { font-size: 2.8rem; }
}
</style>
