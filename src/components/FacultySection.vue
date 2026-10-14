<template>
  <section id="faculty" class="faculty-section-bg">
    <div class="container-inner">
      <h2 class="section-title">Faculty & Staff</h2>
      <p class="section-subtitle">Meet the educators and administrative mentors behind CCS academic success</p>

      <div v-for="dept in departments" :key="dept.name" class="department-block">
        <h3 class="dept-title">{{ dept.name }}</h3>

        <div class="faculty-grid">
          <div v-for="member in dept.members" :key="member.name" class="faculty-card">
            <div class="avatar-wrapper">
              <img :src="member.photo" :alt="member.name" class="faculty-img" />
            </div>
            <div class="faculty-info">
              <h4 class="faculty-name">{{ member.name }}</h4>
              <p class="faculty-degree">{{ member.highestDegree }}</p>
              <span class="faculty-role">{{ member.position }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const departments = [
  {
    name: 'Office of the Dean & Administration',
    members: [
      {
        name: 'Prof. Ma. Christina A. Quijano',
        highestDegree: 'Master of Science in Computer Science (MSCS)',
        position: 'Dean, College of Computer Studies',
        photo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Christina'
      },
      {
        name: 'Prof. Rea P. Balontong',
        highestDegree: 'Master of Business Administration (MBA)',
        position: 'Department Head / Senior Administrator',
        photo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rea'
      }
    ]
  },
  {
    name: 'Computer Science & BSDMIA Department',
    members: [
      {
        name: 'Prof. Marjee Rose B. Parreño',
        highestDegree: 'Master of Science in Computer Science (MSCS)',
        position: 'Department Chairperson',
        photo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marjee'
      },
      {
        name: 'Prof. Pedro Peter Rhys B. Cambronero',
        highestDegree: 'Master of Science in Computer Science (MSCS)',
        position: 'Assistant Professor',
        photo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Pedro'
      }
    ]
  },
  {
    name: 'Information Technology & Systems Department',
    members: [
      {
        name: 'Prof. Rose Leah Joy A. Ojacastro',
        highestDegree: 'Master of Science in Computer Science (MSCS)',
        position: 'Department Chairperson',
        photo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=RoseLeah'
      },
      {
        name: 'Prof. Lennon D. Pajar',
        highestDegree: 'Master of Science in Computer Science (MSCS)',
        position: 'IT Instructor / Coordinator',
        photo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lennon'
      }
    ]
  },
  {
    name: 'Library and Information Science Department',
    members: [
      {
        name: 'Prof. Ana Mae B. Cantel',
        highestDegree: 'Master of Library and Information Science (MLIS)',
        position: 'BLIS Program Coordinator',
        photo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AnaMae'
      }
    ]
  }
]
</script>

<style scoped>
.faculty-section-bg {
  background-color: var(--gray-bg);
}

.container-inner {
  max-width: 1200px;
  margin: 0 auto;
}

.department-block {
  margin-bottom: 48px;
}

.dept-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--primary-color);
  border-left: 4px solid var(--secondary-color);
  padding-left: 12px;
  margin-bottom: 20px;
}

.faculty-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 20px;
}

.faculty-card {
  background: #ffffff;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  border: 1px solid #e5e7eb;
  transition: transform 0.2s ease;
}

.faculty-card:hover {
  transform: translateY(-3px);
}

.avatar-wrapper {
  width: 96px;
  height: 96px;
  margin: 0 auto 16px auto;
  border-radius: 50%;
  background: #f3f4f6;
  border: 3px solid var(--primary-color);
  overflow: hidden;
}

.faculty-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.faculty-name {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 4px;
}

.faculty-degree {
  font-size: 0.85rem;
  color: #059669;
  font-weight: 600;
  margin-bottom: 8px;
}

.faculty-role {
  display: inline-block;
  font-size: 0.8rem;
  color: var(--text-muted);
  background: #f3f4f6;
  padding: 2px 8px;
  border-radius: 4px;
}
</style>