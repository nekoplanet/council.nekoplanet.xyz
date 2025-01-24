<script setup lang="ts">
//import HelloWorld from './components/HelloWorld.vue'
//import TheWelcome from './components/TheWelcome.vue'
import { RouterView } from 'vue-router';
import TopMenu from './components/TopMenu.vue';
import NekoFooter from './components/NekoFooter.vue';


</script>

<template>
  <header>
    <TopMenu />
  </header>

  <main>
    <RouterView />
  </main>

  <br><br>

  <footer>
    <NekoFooter />
  </footer>
</template>

<style scoped>
main {
  padding-top: 2em;
}
</style>
