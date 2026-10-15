<template>
  <!-- Sa dalom ni nga container -->
  <footer class="footer">
    <div class="footer-container">
      <!-- Copyright nga text -->
      <p>&copy; {{ currentYear }} Central Philippine University - College of Computer Studies. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
//Auto ga kwa sang current year
const currentYear = new Date().getFullYear()
</script>

<style scoped>
/* Ari mag style kana */
.footer {
  background-color: var(--dark-bg);
  color: #9ca3af;
  padding: 30px 20px;
  text-align: center;
  font-size: 0.9rem;
}
</style>