import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import LoginPage from '@/views/LoginPage.vue'
import Productos from '@/views/productoPage.vue'
import Cursos from '@/views/cursosPage.vue'


//import UserList from "@/components/UserList";
//import UserDetails from "@/components/UserDetails";

const routes = [
  {
    path: "/",
    name: "HomeRoot",
    component: Home,
    // redirect: '/pinned-article'
  },
  {
    path: "/LoginPage",
    name: "LoginPage",
    component:LoginPage
   
  },
  {
    path: "/productoPage",
    name: "productoPage",
    component:Productos,
    // alias: '/pinned-article',
   
  },
  {
    path: "/cursosPage",
    name: "cursosPage",
    component:Cursos,
    // alias: '/pinned-article',
   
  }
  // {
  //   path: "/users/:userId",
  //   name: "UserDetails",
  //   component: UserDetails
  // },
  // {
  //   path: "/about",
  //   name: "AboutUs",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
