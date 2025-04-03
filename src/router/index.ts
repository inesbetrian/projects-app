import ProjectsLayout from '@/modulorum/projects/layouts/ProjectsLayout.vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'projects',
      component: ProjectsLayout
    }
  ],
})

export default router
