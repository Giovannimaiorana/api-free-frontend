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

<style lang="scss" scoped></style>
