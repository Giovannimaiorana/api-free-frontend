<script>
import axios from 'axios';
import { store } from '../store';

export default {
    name: 'AppRegister',
    data() {
        return {
            store,
            formData: {
                name: '',
                email: '',
                password: '',
            },
        };
    },
    methods: {
        async newUser() {
            try {
                console.log('Invio dati...');
                const response = await axios.post(`${store.baseUrl}/register`, this.formData);
                console.log('Dati inviati con successo:', response.data);
                // Aggiungi la navigazione alla pagina successiva dopo la registrazione.
                this.$router.push('/posts');
            } catch (error) {
                console.error('Errore durante l\'invio dei dati:', error);
                console.error('Dettagli dell\'errore:', error.response.data);
            }
        },
    },
};
</script>

<template>
    <div class="container-fluid">
        <div class="customizedCont mt-5">
            <form @submit.prevent="newUser">
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" class="form-control" id="name" v-model="formData.name">
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" v-model="formData.email">
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" v-model="formData.password">
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.customizedCont {
    width: 700px;
    margin: auto;
    border: 3px solid black;
    padding: 20px;
    border-radius: 30px;
    background-color: rgba($color: white, $alpha: 0.7);

}

.error-message {
    color: red;
}
</style>