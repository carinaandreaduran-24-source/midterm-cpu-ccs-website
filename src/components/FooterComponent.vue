<template>
  <footer class="footer">
    <div class="footer-container">
      <p>&copy; {{ currentYear }} Central Philippine University - College of Computer Studies. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.footer {
  background-color: var(--dark-bg);
  color: #9ca3af;
  padding: 30px 20px;
  text-align: center;
  font-size: 0.9rem;
}
</style>