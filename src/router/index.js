import { createRouter, createWebHistory } from 'vue-router'
import TheTodo from '../pages/TheTodo.vue';
import TheHome from '../pages/TheHome.vue';

const routes = [
    { path: '/todo', component: TheTodo },
    { path: '/', component: TheHome },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router;