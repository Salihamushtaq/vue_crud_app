import { createRouter, createWebHistory } from 'vue-router'
import LoginUser from "@/views/LoginUser.vue";
import EmployeeTable from "@/views/EmployeeTable.vue";
import CompanyTable from "@/views/CompanyTable.vue";
import AddEmployee from "@/components/AddEmployee.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginUser
    },
    {
      path: '/employee',
      name: 'employee',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/EmployeeTable.vue')
      component: EmployeeTable
    },
    {
        path:'/companies',
      name:'companies',
      component: CompanyTable
    },
    {
      path:'/addemployee',
      name:'addemployee',
      component: AddEmployee
    }
  ]
})

export default router
