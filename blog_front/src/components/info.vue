<template>
  <a-title
      title="Название поста:"
      :subtitle="blog.name"
  />
  <img :src="blog.image" :alt="blog.name">
  <p>{{blog.contend}}</p>
</template>

<script>
import axios from "axios";

export default {
  name: "infoPost",

  data() {
    return {
      blog: {}
    }
  },

  mounted() {
    axios.get(`/api/v1/blog/${this.$route.params.id}`).then(response => {
      this.blog = response.data
    })
  },
}
</script>

<style scoped>
  img {
    width: 50%;
    height: 500px;
    object-fit: cover;
    border: 2px solid #025951;
    padding: 10px;
    margin-bottom: 20px;
  }

  p {
    font-family: 'Roboto', sans-serif;
  }
</style>