import HomeView from '@/views/HomeView.vue';
import TermsOfService from '@/views/TermsOfService.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/tos',
            name: 'terms',
            component: TermsOfService
        }
    ]
});

export default router;
