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
    <div class="container-fluid mt-5">
        <div class="cardContainer">
            <div v-for="post in posts" :key="post.id" class="mb-3 customizedCard">
                <img :src="`/${post.image}`" class="card-img-top" alt="...">
                <div class="card-body mt-3">
                    <h5 class="card-title">{{ post.title }}</h5>
                    <p class="card-text">{{ post.content }}</p>
                </div>
                <router-link :to="'/show/' + post.slug">
                    <button class="btn btn-primary">Vai</button>
                </router-link>
            </div>

        </div>


    </div>
</template>
<style lang="scss" scoped>
.cardContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.customizedCard {
    border: 3px solid black;
    padding: 10px;
    border-radius: 30px;

    img {
        height: 400px;
        border-radius: 30px;

    }

    width: 400px;
    margin-right: 30px;
    background-color: rgba($color: white, $alpha: 0.7);
}
</style>