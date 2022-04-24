import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage';
import About from '../views/About';
import Episodes from '../views/Episodes';
import Blog from '../views/Blog';
import Contact from '../views/Contact';

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/episodes',
        name: 'Episodes',
        component: Episodes
    },
    {
        path: '/blog',
        name: 'Blog',
        component: Blog
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;