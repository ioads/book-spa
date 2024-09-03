import { createRouter, createWebHistory } from 'vue-router';
import ListBook from '@/views/ListBook.vue';
import CreateBook from '@/views/CreateBook.vue';
import EditBook from '@/views/EditBook.vue';
import BaseLayout from '@/components/BaseLayout.vue';

const routes = [
    {
        path: '/',
        component: BaseLayout,
        children: [
            {
                path: '',
                name: 'ListBooks',
                component: ListBook,
            },
            {
                path: 'books/create',
                name: 'CreateBook',
                component: CreateBook,
            },
            {
                path: 'books/edit/:id',
                name: 'EditBook',
                component: EditBook,
            }
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
