<script>
import { store } from '../store';
import axios from 'axios';

export default {
    data() {
        return {
            store,
            post: null,
        };
    },
    methods: {
        async getSingleElement() {
            const slug = this.$route.params.slug;
            console.log(slug);

            try {
                const response = await axios.get(`${store.baseUrl}/posts/${slug}`);
                console.log('Risposta API:', response);
                this.post = response.data;
                console.log('Dettagli elemento:', this.post);
            } catch (error) {
                console.error('Errore durante il recupero dei dettagli:', error);
            }
        },
    },
    mounted() {
        this.getSingleElement();
    },
};

</script>



<template>
    <div class="cardContainer">
        <div class="customizedCard mt-5">

            <h1>Dettagli elemento</h1>
            <div v-if="post">
                <img :src="`/${post.image}`" class="card-img-top" alt="...">
                <h2>{{ post.title }}</h2>
                <p>{{ post.content }}</p>
                <p>{{ post.tag }}</p>

            </div>
            <div v-else>
                <p>Caricamento...</p>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.customizedCard {
    border: 3px solid black;
    padding: 10px;
    border-radius: 30px;
    justify-content: center;

    img {
        height: 400px;
        border-radius: 30px;

    }

    width: 400px;
    margin-right: 30px;
    background-color: rgba($color: white, $alpha: 0.7);
}

.cardContainer {
    width: 800px;
    display: flex;
    margin: auto;
    flex-wrap: wrap;
    justify-content: center;
}
</style>