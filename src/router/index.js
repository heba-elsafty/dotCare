import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../Pages/Home/index.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      breadCrumb: [{
        name: "home",
        link: "/"
      }]
    }
  },
  {
    path: '/product',
    name: 'product',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../Pages/Product/Index.vue'),
    meta: {
      breadCrumb: [{
          name: "home",
          link: "/"
        },
        {
          name: "product",
          link: "/product"
        }
      ]
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router