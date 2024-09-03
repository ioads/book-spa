import { createRouter, createWebHistory } from 'vue-router';
import ListBook from '@/views/ListBook.vue';
import CreateBook from '@/views/CreateBook.vue';
import BaseLayout from '@/components/BaseLayout.vue';

const routes = [
    {
        path: '/',
        component: BaseLayout,
        children: [
            {
                path: 'books',
                name: 'ListBooks',
                component: ListBook,
            },
            {
                path: 'books/create',
                name: 'CreateBook',
                component: CreateBook,
            }
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
