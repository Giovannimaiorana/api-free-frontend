<script>
import axios from 'axios';
import { store } from '../store';

export default {
    name: 'AppAddPost',
    data() {
        return {
            store,
            tags: [],
            categories: [],
            formData: {
                title: '',
                content: '',
                image: '',
                tags: [],
                category: null,
            },
        };
    },
    methods: {
        async addPost() {
            try {
                console.log('Invio dati...');
                const response = await axios.post(`${store.baseUrl}/posts`, this.formData);
                console.log('Dati inviati con successo:', response.data);
                this.$router.push('/posts');
            } catch (error) {
                console.error('Errore durante l\'invio dei dati:', error);
                console.error('Dettagli dell\'errore:', error.response.data);
            }
        },
        async getTags() {
            const response = await axios.get(`${store.baseUrl}/tags`);
            console.log(store.baseUrl);
            this.tags = response.data;
            console.log('tags:', this.posts);
        },
        async getCategory() {
            const response = await axios.get(`${store.baseUrl}/categories`);
            console.log(store.baseUrl);
            this.categories = response.data;
            console.log('tags:', this.posts);
        }

    },
    mounted() {
        this.getTags();
        this.getCategory();
    }
};
</script>

<template>
    <main>
        <div class="container-fluid d-flex">
            <div class="containerCustom mt-5">
                <form @submit.prevent="addPost">
                    <div class="mb-3">
                        <label for="title" class="form-label">Titolo</label>
                        <input type="text" class="form-control" id="title" v-model="formData.title">
                    </div>
                    <div class="mb-3">
                        <label for="content" class="form-label">Descrizione</label>
                        <input type="text" class="form-control" id="content" v-model="formData.content">
                    </div>
                    <div class="mb-3">
                        <label for="image" class="form-label">Immagine</label>
                        <input type="text" class="form-control" id="image" v-model="formData.image">
                    </div>
                    <div class="mb-3">
                        <label for="category" class="form-label">Seleziona la Categoria</label>
                        <select v-model="formData.category" id="category" class="form-select">
                            <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name
                            }}
                            </option>
                        </select>
                    </div>

                    <div class="mb-3">
                        <label for="tags" class="form-label">Seleziona i Tags</label>
                        <div class="d-flex flex-wrap">
                            <div v-for="tag in tags" :key="tag.id" class="form-check form-check-inline  customizedCheck">
                                <div class="check">
                                    <input type="checkbox" :value="tag.id" v-model="formData.tags" id="tag{{ tag.id }}">
                                    <label class="form-check-label" :for="'tag' + tag.id">{{ tag.titleT }}</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Invia</button>
                </form>
            </div>
        </div>


    </main>
</template>

<style lang="scss" scoped>
.containerCustom {
    width: 700px;
    margin: auto;
    border: 3px solid black;
    padding: 20px;
    border-radius: 30px;
    background-color: rgba($color: white, $alpha: 0.7);
}

.customizedCheck {
    height: 50px;
    width: 170px;
    background-color: grey;
    display: flex;
    border-radius: 20px;

    .check {
        text-align: center;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;


        label {
            font-size: 20px;
            margin-left: 10px;
        }
    }
}
</style>
