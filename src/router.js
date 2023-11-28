import { createRouter, createWebHistory } from "vue-router";
import AppHome from './pages/AppHome.vue';
import AppPost from './pages/AppPost.vue';
import AppAddPost from './pages/AppAddPost.vue';
import AppRegister from './pages/AppRegister.vue';
import AppSingolPost from './pages/AppSingolPost.vue';


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
                path: '/addpost',
                name: 'addPost',
                component: AppAddPost,
            },
            {
                path: '/register',
                name: 'register',
                component: AppRegister,
            },
            {
                path: '/show/:slug',
                name: 'show',
                component: AppSingolPost,
            }
        ]
    }
);

router.afterEach(() => {
    window.scrollTo(0, 0);
});

export { router };