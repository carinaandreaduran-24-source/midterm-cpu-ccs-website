<template>
  <div id="app-root">
    <Navbar />
    <RouterView />
    <FooterComponent />

    <!-- Floating Back-to-Top Button -->
    <transition name="fade">
      <button 
        v-if="showBackToTop" 
        class="back-to-top" 
        @click="scrollToTop"
        aria-label="Back to top"
      >
        ▲
      </button>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Navbar from '@/components/Navbar.vue'
import FooterComponent from '@/components/FooterComponent.vue'

const showBackToTop = ref(false)

const handleScroll = () => {
  showBackToTop.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style>
.back-to-top {
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: #003366;
  color: #f2a900;
  border: 2px solid #f2a900;
  font-size: 1.1rem;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  z-index: 999;
  transition: transform 0.2s ease, background-color 0.2s ease;
}

.back-to-top:hover {
  transform: translateY(-3px);
  background-color: #002244;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>