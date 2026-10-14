<template>
  <div id="app-root">
    <Navbar />
    <RouterView />
    <FooterComponent />
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import FooterComponent from '@/components/FooterComponent.vue'
</script>