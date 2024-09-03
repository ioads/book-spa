import { createRouter, createWebHistory } from 'vue-router';
import ListBook from '@/views/ListBook.vue';
import BaseLayout from '@/components/BaseLayout.vue';

const routes = [
    {
        path: '/',
        component: BaseLayout,
        children: [
            {
                path: 'books',
                name: 'Books',
                component: ListBook,
            }
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
