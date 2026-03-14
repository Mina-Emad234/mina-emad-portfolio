<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Menu, X } from 'lucide-vue-next'

const isScrolled = ref(false)
const isMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]
</script>

<template>
  <nav :class="['navbar', { 'navbar-scrolled': isScrolled }]">
    <div class="container nav-container">
      <a href="#" class="logo">
        <span class="text-gradient">MINA</span>EMAD
      </a>

      <div class="nav-links desktop-only">
        <a v-for="link in navLinks" :key="link.name" :href="link.href" class="nav-link">
          {{ link.name }}
        </a>
        <a href="#contact" class="btn-primary">Hire Me</a>
      </div>

      <button class="mobile-toggle" @click="isMenuOpen = !isMenuOpen">
        <Menu v-if="!isMenuOpen" :size="24" />
        <X v-else :size="24" />
      </button>
    </div>

    <!-- Mobile Menu -->
    <transition name="fade">
      <div v-if="isMenuOpen" class="mobile-menu glass">
        <div class="mobile-links">
          <a 
            v-for="link in navLinks" 
            :key="link.name" 
            :href="link.href" 
            @click="isMenuOpen = false"
            class="mobile-link"
          >
            {{ link.name }}
          </a>
          <a href="#contact" class="btn-primary" @click="isMenuOpen = false">Hire Me</a>
        </div>
      </div>
    </transition>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 1.5rem 0;
  transition: all 0.3s ease;
}

.navbar-scrolled {
  padding: 1rem 0;
  background: rgba(5, 5, 5, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--glass-border);
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: -1px;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2.5rem;
}

.nav-link {
  font-weight: 500;
  font-size: 0.95rem;
  color: var(--text-dim);
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: var(--accent-primary);
}

.mobile-toggle {
  display: none;
  background: none;
  color: var(--text-main);
}

.mobile-menu {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  padding: 2rem;
  border-radius: 0 0 24px 24px;
  border-top: none;
}

.mobile-links {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
}

@media (max-width: 768px) {
  .desktop-only {
    display: none;
  }
  .mobile-toggle {
    display: block;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
