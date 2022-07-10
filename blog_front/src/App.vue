<template>
  <a-container>
    <router-view></router-view>
  </a-container>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
@import "style/normalize.css";
@import "~vue2-editor/dist/vue2-editor.css";
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

* {font-family: 'Roboto', sans-serif;}
#app {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
