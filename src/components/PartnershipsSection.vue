<template>
  <section id="partnerships">
    <h2 class="section-title">Partnerships & Memberships</h2>
    <p class="section-subtitle">Collaborating with global industry leaders and accrediting bodies</p>

    <div class="partners-grid">
      <div v-for="partner in partners" :key="partner.name" class="partner-card">
        <div class="partner-badge-icon">
          <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 21l-8-4.5v-9L12 3l8 4.5v9L12 21z" />
          </svg>
        </div>
        <h3 class="partner-name">{{ partner.name }}</h3>
        <span class="partner-category">{{ partner.category }}</span>
        <p class="partner-desc">{{ partner.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const partners = [
  {
    name: 'CISCO Networking Academy',
    category: 'Industry Partner',
    description: 'Provides official curriculum, hands-on labs, and certification pathways in networking, routing, switching, and cybersecurity.'
  },
  {
    name: 'ORACLE Academic Initiative',
    category: 'Industry Partner',
    description: 'Equips students with enterprise database administration skills, SQL, Java programming, and cloud technologies.'
  },
  {
    name: 'PAASCU',
    category: 'Accreditation Body',
    description: 'Philippine Accrediting Association of Schools, Colleges and Universities granting Level III accredited status to CCS programs.'
  },
  {
    name: 'PSITE',
    category: 'Professional Membership',
    description: 'Philippine Society of Information Technology Educators, promoting IT education standards across the nation.'
  }
]
</script>

<style scoped>
.partners-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
}

.partner-card {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 24px;
  text-align: center;
  transition: border-color 0.2s ease;
}

.partner-card:hover {
  border-color: var(--secondary-color);
}

.partner-badge-icon {
  width: 56px;
  height: 56px;
  background: rgba(0, 51, 102, 0.08);
  color: var(--primary-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px auto;
}

.partner-name {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 4px;
}

.partner-category {
  display: inline-block;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 700;
  color: #b45309;
  background-color: #fef3c7;
  padding: 2px 8px;
  border-radius: 4px;
  margin-bottom: 12px;
}

.partner-desc {
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.5;
}
</style>