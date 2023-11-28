<script>
export default {
    name: 'AppHeader',
}
</script>
<template>
    <nav class="navbar navbar-expand-lg customColor">
        <div class="container-fluid">
            <img src="../assets/logo.png" alt="logo">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/posts">MyPost</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/addpost">Addpost</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/register">Registrati</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/login">Login</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<style lang="scss" scoped >
.customColor {
    background-color: black;
}

li {
    a {
        color: white;
    }
}

button {
    border-color: grey;

    .navbar-toggler {
        color: white;
    }


    .navbar-toggler-icon {
        color: white;

    }


}
</style>