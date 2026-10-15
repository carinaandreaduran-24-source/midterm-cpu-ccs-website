<template>
  <section id="faculty" class="faculty-section-bg">
    <div class="container-inner">
      <h2 class="section-title">Faculty & Staff</h2>
      <p class="section-subtitle">Meet the educators and administrative mentors behind CCS academic success</p>

      <!-- Interactive Search & Filter Controls -->
      <div class="filter-bar">
        <input 
          v-model="searchQuery" 
          type="text" 
          placeholder="🔍 Search faculty by name or degree..." 
          class="search-input"
        />
        <div class="dept-tabs">
          <button 
            class="tab-btn" 
            :class="{ active: selectedDept === 'All' }"
            @click="selectedDept = 'All'"
          >
            All Departments
          </button>
          <button 
            v-for="dept in departments" 
            :key="dept.name"
            class="tab-btn" 
            :class="{ active: selectedDept === dept.name }"
            @click="selectedDept = dept.name"
          >
            {{ dept.shortName }}
          </button>
        </div>
      </div>

      <!-- Department Sections -->
      <div v-for="dept in filteredDepartments" :key="dept.name" class="department-block">
        <h3 class="dept-title">{{ dept.name }}</h3>

        <div v-if="dept.members.length > 0" class="faculty-grid">
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
        <p v-else class="no-results">No faculty members found matching your search.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const searchQuery = ref('')
const selectedDept = ref('All')

const departments = [
  {
    name: 'Office of the Dean & Administration',
    shortName: 'Administration',
    members: [
      {
        name: 'Prof. Ma. Christina A. Quijano',
        highestDegree: 'Master of Science in Computer Science (MSCS)',
        position: 'Dean, College of Computer Studies',
        photo: '/images/faculty/quijano.jpg'
      },
      {
        name: 'Prof. Rea P. Balontong',
        highestDegree: 'Master of Business Administration (MBA)',
        position: 'Department Head / Senior Administrator',
        photo: '/images/faculty/balontong.jpg'
      }
    ]
  },
  {
    name: 'Computer Science & BSDMIA Department',
    shortName: 'CS & DMIA',
    members: [
      {
        name: 'Prof. Marjee Rose B. Parreño',
        highestDegree: 'Master of Science in Computer Science (MSCS)',
        position: 'Department Chairperson',
        photo: '/images/faculty/parreno.jpg'
      },
      {
        name: 'Prof. Pedro Peter Rhys B. Cambronero',
        highestDegree: 'Master of Science in Computer Science (MSCS)',
        position: 'Assistant Professor',
        photo: '/images/faculty/cambronero.jpg'
      }
    ]
  },
  {
    name: 'Information Technology & Systems Department',
    shortName: 'IT Department',
    members: [
      {
        name: 'Prof. Rose Leah Joy A. Ojacastro',
        highestDegree: 'Master of Science in Computer Science (MSCS)',
        position: 'Department Chairperson',
        photo: '/images/faculty/ojacastro.jpg'
      },
      {
        name: 'Prof. Lennon D. Pajar',
        highestDegree: 'Master of Science in Computer Science (MSCS)',
        position: 'IT Instructor / Coordinator',
        photo: '/images/faculty/pajar.jpg'
      }
    ]
  },
  {
    name: 'Library and Information Science Department',
    shortName: 'BLIS Department',
    members: [
      {
        name: 'Prof. Ana Mae B. Cantel',
        highestDegree: 'Master of Library and Information Science (MLIS)',
        position: 'BLIS Program Coordinator',
        photo: '/images/faculty/cantel.jpg'
      }
    ]
  }
]

const filteredDepartments = computed(() => {
  return departments
    .filter(dept => selectedDept.value === 'All' || dept.name === selectedDept.value)
    .map(dept => {
      const filteredMembers = dept.members.filter(m => 
        m.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        m.highestDegree.toLowerCase().includes(searchQuery.value.toLowerCase())
      )
      return { ...dept, members: filteredMembers }
    })
})
</script>

<style scoped>
.faculty-section-bg {
  background-color: #f3f4f6;
  padding: 80px 20px;
}

.container-inner {
  max-width: 1200px;
  margin: 0 auto;
}

.filter-bar {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 40px;
  align-items: center;
}

.search-input {
  width: 100%;
  max-width: 500px;
  padding: 12px 20px;
  border-radius: 25px;
  border: 1px solid #d1d5db;
  font-size: 0.95rem;
  outline: none;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.search-input:focus {
  border-color: #003366;
  box-shadow: 0 0 0 3px rgba(0, 51, 102, 0.15);
}

.dept-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
}

.tab-btn {
  padding: 8px 16px;
  border-radius: 20px;
  border: 1px solid #d1d5db;
  background: #ffffff;
  color: #374151;
  font-weight: 600;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.tab-btn:hover, .tab-btn.active {
  background: #003366;
  color: #ffffff;
  border-color: #003366;
}

.department-block {
  margin-bottom: 48px;
}

.dept-title {
  font-size: 1.35rem;
  font-weight: 700;
  color: #003366;
  border-left: 4px solid #f2a900;
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
  padding: 24px 20px;
  text-align: center;
  border: 1px solid #e5e7eb;
  box-shadow: 0 2px 5px rgba(0,0,0,0.04);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.faculty-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.avatar-wrapper {
  width: 90px;
  height: 90px;
  margin: 0 auto 16px auto;
  border-radius: 50%;
  background: #f3f4f6;
  border: 3px solid #003366;
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
  color: #1f2937;
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
  color: #4b5563;
  background: #f3f4f6;
  padding: 4px 10px;
  border-radius: 6px;
}

.no-results {
  color: #6b7280;
  font-style: italic;
}
</style>