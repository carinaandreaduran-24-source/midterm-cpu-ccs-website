<template>
  <section id="programs">
    <h2 class="section-title">Academic Programs</h2>
    <p class="section-subtitle">Discover our CHED-aligned and PAASCU-accredited undergraduate offerings</p>

    <div class="programs-grid">
      <div v-for="program in programs" :key="program.code" class="program-card">
        <div class="card-header">
          <div class="program-icon" :style="{ backgroundColor: program.color }">
            <svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path :d="program.svgPath" />
            </svg>
          </div>
          <span class="program-code">{{ program.code }}</span>
        </div>
        <h3 class="program-title">{{ program.title }}</h3>
        <p class="program-description">{{ program.description }}</p>
        <div class="program-highlights">
          <h4>Key Focus Areas:</h4>
          <ul>
            <li v-for="(highlight, idx) in program.highlights" :key="idx">
              ✓ {{ highlight }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const programs = [
  {
    code: 'BSIT',
    title: 'Bachelor of Science in Information Technology',
    color: '#0284c7',
    svgPath: 'M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m-2 6h2m14-6h2m-2 6h2M5 7h14a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2z',
    description: 'Prepares students to be IT professionals proficient in infrastructure administration, web and mobile app development, systems integration, and cybersecurity management.',
    highlights: ['Network Administration', 'Web & Mobile App Development', 'Cybersecurity & Cloud Computing']
  },
  {
    code: 'BSCS',
    title: 'Bachelor of Science in Computer Science',
    color: '#4f46e5',
    svgPath: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    description: 'Emphasizes computing concepts, algorithmic problem solving, software engineering, intelligent systems, and theoretical foundations of computer science.',
    highlights: ['Algorithms & Data Structures', 'Artificial Intelligence & Data Science', 'Software Architecture & Engineering']
  },
  {
    code: 'BSDMIA',
    title: 'Bachelor of Science in Digital Media and Interactive Arts',
    color: '#d97706',
    svgPath: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
    description: 'Blends creative art with digital technological tools, focusing on 2D/3D animation, game development, user experience design, and interactive multimedia.',
    highlights: ['2D/3D Animation', 'Game Development & Engine Programming', 'UI/UX & Interactive Design']
  },
  {
    code: 'BLIS',
    title: 'Bachelor of Library and Information Science',
    color: '#059669',
    svgPath: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
    description: 'Trains students in knowledge management, digital archiving, library automation, and modern information organization techniques for corporate and academic institutions.',
    highlights: ['Knowledge & Information Management', 'Digital Archiving & Preservation', 'Database Systems & Cataloging']
  }
]
</script>

<style scoped>
.programs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
}

.program-card {
  background: #ffffff;
  border-radius: 12px;
  padding: 28px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  display: flex;
  flex-direction: column;
}

.program-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 20px -3px rgba(0, 0, 0, 0.1);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.program-icon {
  width: 48px;
  height: 48px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
}

.icon-svg {
  width: 26px;
  height: 26px;
}

.program-code {
  font-weight: 800;
  font-size: 1.1rem;
  color: var(--primary-color);
  background-color: var(--gray-bg);
  padding: 4px 10px;
  border-radius: 6px;
}

.program-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 12px;
  line-height: 1.3;
}

.program-description {
  font-size: 0.95rem;
  color: var(--text-muted);
  line-height: 1.5;
  margin-bottom: 20px;
  flex-grow: 1;
}

.program-highlights h4 {
  font-size: 0.85rem;
  text-transform: uppercase;
  color: #9ca3af;
  letter-spacing: 0.5px;
  margin-bottom: 8px;
}

.program-highlights ul {
  list-style: none;
}

.program-highlights li {
  font-size: 0.88rem;
  color: #374151;
  margin-bottom: 4px;
}
</style>