<template>
  <br>
  <h1>{{ title }}</h1>
  <p>{{ subtitle }}</p>
  <router-link :to="{
    name: 'post'
  }">
    <a-button>Назад</a-button>
  </router-link>
  <hr>
  <br>
</template>

<script>
export default {
  name: "a-title",
  props: {
    title: String,
    subtitle: String
  }
}
</script>

<style scoped>
h1 {
  font-family: 'Roboto', sans-serif;
  font-weight: normal;
  color: #090909;
  font-size: 24px;
  margin-bottom: 10px;
}

p {
  font-family: 'Roboto', sans-serif;
  font-weight: normal;
  color: #646464;
  font-size: 16px;
  margin-bottom: 20px;
}

hr {
  border: 2px solid #171717;
}
</style>