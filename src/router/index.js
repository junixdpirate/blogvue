import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'
import ArticlesView from '../views/ArticlesView.vue'
import ArticleView from '../views/ArticleView.vue'
import PostView from '../views/PostView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ArticlesView
    },
    {
        path: '/post',
        name: 'post',
        component: PostView
    },
    {
        path: '/article/:id',
        name: 'article',
        component: ArticleView
    }
  ]
})

export default router
