<script>
import AppHeader from './components/appHeader.vue';
export default {
  components: {
    AppHeader,
  }
}
</script>

<template>
  <body>
    <AppHeader></AppHeader>
    <main>
      <router-view />
    </main>
  </body>
</template>

<style lang="scss">
main {
  height: 100vh;
  background-image: url(./assets/wave.svg);
  background-repeat: no-repeat;
  background-position: bottom;

}
</style>
