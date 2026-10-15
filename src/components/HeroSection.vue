<template>
  <section id="hero" class="hero-container">
    <div class="hero-grid">
      <div class="hero-content">
        <span class="badge">Central Philippine University</span>
        <h1 class="hero-title">College of Computer Studies</h1>
        <p class="hero-tagline">
          Empowering future IT leaders through world-class instruction, innovative research, and Christian foundation.
        </p>
        <div class="hero-actions">
          <RouterLink to="/#programs" class="btn btn-primary">Explore Programs</RouterLink>
          <RouterLink to="/#faculty" class="btn btn-secondary">Meet Our Faculty</RouterLink>
        </div>
        <div class="hero-stats">
          <div class="stat-item">
            <span class="stat-number">4</span>
            <span class="stat-label">Degree Programs</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">Level III</span>
            <span class="stat-label">PAASCU Accredited</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">100%</span>
            <span class="stat-label">Outcome-Based</span>
          </div>
        </div>
      </div>

      <div class="hero-visual">
        <div class="logo-card">
          <svg viewBox="0 0 200 200" class="hero-logo-svg">
            <circle cx="100" cy="100" r="90" fill="#003366" stroke="#F2A900" stroke-width="6" />
            <polygon points="100,30 140,60 140,110 100,140 60,110 60,60" fill="none" stroke="#F2A900" stroke-width="4" />
            <path d="M70,80 L100,60 L130,80 L100,100 Z" fill="#F2A900" />
            <text x="100" y="155" text-anchor="middle" fill="#FFFFFF" font-size="24" font-weight="bold" font-family="sans-serif">CPU CCS</text>
            <text x="100" y="175" text-anchor="middle" fill="#F2A900" font-size="12" font-family="sans-serif">EXCELLENCE 1995</text>
          </svg>
          <div class="glow-effect"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-container {
  min-height: calc(100vh - var(--nav-height));
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 40px;
  align-items: center;
  width: 100%;
}

.hero-title {
  font-size: 3.25rem;
  font-weight: 900;
  color: var(--primary-color);
  line-height: 1.15;
  margin: 16px 0;
}

.hero-tagline {
  font-size: 1.2rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 28px;
}

.hero-actions {
  display: flex;
  gap: 16px;
  margin-bottom: 40px;
}

.btn {
  padding: 12px 28px;
  border-radius: 8px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.25s ease;
  display: inline-block;
  cursor: pointer;
}

.btn-primary {
  background-color: #003366;
  color: #ffffff;
  border: 2px solid #003366;
  box-shadow: 0 4px 14px rgba(0, 51, 102, 0.3);
}

.btn-primary:hover {
  background-color: #002244;
  background-color: #002244;
  transform: translateY(-2px);
}

.btn-secondary {
  background-color: #ffffff;
  color: #003366;
  border: 2px solid var(--primary-color);
}

.btn-secondary:hover {
  background-color: #003366;
  color: #ffffff;
  transform: translateY(-2px);
}

.hero-stats {
  display: flex;
  gap: 32px;
  border-top: 1px solid #cbd5e1;
  padding-top: 24px;
}

.stat-number {
  display: block;
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--primary-color);
}

.stat-label {
  font-size: 0.85rem;
  color: var(--text-muted);
}

.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo-card {
  position: relative;
  width: 280px;
  height: 280px;
  background: #ffffff;
  border-radius: 50%;
  padding: 20px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.hero-logo-svg {
  width: 100%;
  height: 100%;
}

@media (max-width: 900px) {
  .hero-grid {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .hero-actions {
    justify-content: center;
  }
  .hero-stats {
    justify-content: center;
  }
  .hero-title {
    font-size: 2.4rem;
  }
}
</style>