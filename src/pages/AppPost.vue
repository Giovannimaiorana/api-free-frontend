<script>
import axios from 'axios';
import { store } from '../store';
export default {
    name: 'AppPost',
    data() {
        return {
            store,
            posts: [],

        }
    },
    methods: {
        async getPosts() {
            const response = await axios.get(`${store.baseUrl}/posts`);
            console.log(store.baseUrl);
            this.posts = response.data;
            console.log('Posts:', this.posts);
        }
    },
    mounted() {
        this.getPosts();
    }
}


</script>
<template>
    <div class="container mt-5">
        <div v-for="post in posts" :key="post.id" class="card mb-3">
            <img :src="`/${post.image}`" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ post.title }}</h5>
                <p class="card-text">{{ post.content }}</p>
                <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped></style>