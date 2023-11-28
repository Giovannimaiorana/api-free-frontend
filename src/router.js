import { createRouter, createWebHistory } from "vue-router";
import AppHome from './pages/AppHome.vue';
import AppPost from './pages/AppPost.vue';
import AppContact from './pages/AppContact.vue';
import AppRegister from './pages/AppRegister.vue';
import AppLogin from './pages/AppLogin.vue';

const router = createRouter(
    {
        history: createWebHistory(),
        routes: [
            {
                path: '/',
                name: 'home',
                component: AppHome,
            },
            {
                path: '/posts',
                name: 'post',
                component: AppPost,
            },
            {
                path: '/contact',
                name: 'contact',
                component: AppContact,
            },
            {
                path: '/register',
                name: 'register',
                component: AppRegister,
            },
            {
                path: '/login',
                name: 'login',
                component: AppLogin,
            },
        ]
    }
);

router.afterEach(() => {
    window.scrollTo(0, 0);
});

export { router };