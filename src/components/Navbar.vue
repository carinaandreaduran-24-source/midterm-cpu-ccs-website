<template>
  <header class="navbar-header">
    <div class="nav-container">
      <RouterLink to="/#hero" class="brand-logo">
        <div class="logo-circle">
          <svg viewBox="0 0 100 100" class="svg-logo">
            <circle cx="50" cy="50" r="45" fill="#003366" />
            <path d="M30 35 L50 25 L70 35 L50 45 Z" fill="#F2A900" />
            <text x="50" y="70" text-anchor="middle" fill="#FFFFFF" font-size="22" font-weight="bold">CCS</text>
          </svg>
        </div>
        <div class="brand-text">
          <span class="brand-title">CPU CCS</span>
          <span class="brand-subtitle">College of Computer Studies</span>
        </div>
      </RouterLink>

      <!-- Desktop Navigation Menu[cite: 7] -->
      <nav class="desktop-menu">
        <RouterLink to="/#hero" class="nav-link">Home</RouterLink>
        <RouterLink to="/#programs" class="nav-link">Programs</RouterLink>
        <RouterLink to="/#faculty" class="nav-link">Faculty & Staff</RouterLink>
        <RouterLink to="/#partnerships" class="nav-link">Partnerships</RouterLink>
      </nav>

      <!-- Mobile Menu Toggle Button -->
      <button class="mobile-toggle" @click="isMenuOpen = !isMenuOpen" aria-label="Toggle navigation">
        <span class="hamburger-bar" :class="{ 'open': isMenuOpen }"></span>
        <span class="hamburger-bar" :class="{ 'open': isMenuOpen }"></span>
        <span class="hamburger-bar" :class="{ 'open': isMenuOpen }"></span>
      </button>
    </div>

    <!-- Mobile Drawer Menu[cite: 7] -->
    <transition name="slide-fade">
      <div v-if="isMenuOpen" class="mobile-menu">
        <RouterLink to="/#hero" class="mobile-nav-link" @click="isMenuOpen = false">Home</RouterLink>
        <RouterLink to="/#programs" class="mobile-nav-link" @click="isMenuOpen = false">Programs</RouterLink>
        <RouterLink to="/#faculty" class="mobile-nav-link" @click="isMenuOpen = false">Faculty & Staff</RouterLink>
        <RouterLink to="/#partnerships" class="mobile-nav-link" @click="isMenuOpen = false">Partnerships</RouterLink>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)
</script>

<style scoped>
.navbar-header {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--nav-height);
  background-color: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  z-index: 1000;
}

.nav-container {
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.brand-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
}

.logo-circle {
  width: 44px;
  height: 44px;
}

.svg-logo {
  width: 100%;
  height: 100%;
}

.brand-text {
  display: flex;
  flex-direction: column;
}

.brand-title {
  font-weight: 800;
  font-size: 1.2rem;
  color: var(--primary-color);
  line-height: 1.1;
}

.brand-subtitle {
  font-size: 0.75rem;
  color: #6b7280;
}

.desktop-menu {
  display: flex;
  gap: 24px;
}

.nav-link {
  text-decoration: none;
  color: var(--text-primary);
  font-weight: 600;
  font-size: 0.95rem;
  transition: color 0.2s ease;
  position: relative;
  padding: 6px 0;
}

.nav-link:hover, .nav-link.router-link-active {
  color: var(--primary-color);
}

.nav-link:hover::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--secondary-color);
}

.mobile-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 28px;
  height: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
}

.hamburger-bar {
  width: 100%;
  height: 3px;
  background-color: var(--primary-color);
  border-radius: 2px;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.mobile-menu {
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-bottom: 1px solid #e5e7eb;
  padding: 16px 20px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.mobile-nav-link {
  padding: 12px 0;
  text-decoration: none;
  color: var(--text-primary);
  font-weight: 600;
  border-bottom: 1px solid #f3f4f6;
}

.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from, .slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

@media (max-width: 768px) {
  .desktop-menu {
    display: none;
  }
  .mobile-toggle {
    display: flex;
  }
}
</style>