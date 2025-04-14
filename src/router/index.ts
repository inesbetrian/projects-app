import ProjectsLayout from '@/modulorum/projects/layouts/ProjectsLayout.vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: { name: 'projects'},
      component: ProjectsLayout,
      children: [
        {
          path: 'projects',
          name: 'projects',
          component: () => import('@/modulorum/projects/views/ProjectsView.vue')
        },

        {
          path: 'projects/:id',
          props: true,
          name: 'project',
          component: () => import('@/modulorum/projects/views/ProjectView.vue')
        }

      ]
    }
  ],
})

export default router
