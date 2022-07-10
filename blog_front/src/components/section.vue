<template>
  <div class="filter">
    <input type="text" v-model="search" placeholder="Найдите свой пост">
  </div>

  <h1 v-if="blogs.length === 0">У вас пока нет постов</h1>
  <div v-else class="post" v-for="blog in blogByTitle" :key="blog.id">
    <h2>{{ blog.name }}</h2>
    <div v-for="category in categorys" :key="category.id">
      <h3 v-if="category.id === blog.category">категория: {{ category.name }} </h3>
    </div>
    <p>{{ blog.contend }}</p>
    <br>
    <hr>
    <div class="post-button">
      <router-link
          :to="{
          name: 'post.info',
          params: {
            id: blog.id
          },
        }"
      >
        <a-button
            white>Подробнее
        </a-button>
      </router-link>

      <router-link :to="{
        name: 'edit.post',
        params: {
          id: blog.id
        }
      }">
        <a-button white>Изменить</a-button>
      </router-link>
      <a-button @click="deletePost(blog.id)" red>
        Удалить
      </a-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "sectionPost",
  data() {
    return {
      blogs: [],
      categorys: [],
      search: '',
    }
  },

  created() {
    axios.get('/api/v1/blog/').then(response => {
      this.blogs = response.data
    })

    axios.get('/api/v1/category/').then(response => {
      this.categorys = response.data
    })
  },

  computed: {
    blogByTitle() {
      return this.blogs.filter(item =>
          item.name.indexOf(this.search) !== -1
      )
    },
  },

  methods: {
    deletePost(id) {
      axios.delete(`/api/v1/blog/${id}`)
      this.blogs.splice(this.blogs.findIndex(i => i.id === id), 1)
    }
  }
}
</script>

<style scoped>
h1 {
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 24px;
  color: #171717;
}

.post {
  padding: 20px;
  background: #025951;
  border: 1px solid #034159;
  border-radius: 5px;
  margin-bottom: 20px;
}

h2 {
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  margin-bottom: 10px;
  color: #fff;
}

h3 {
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  margin: 10px 0px;
  color: #608d7a;
}

p {
  color: #fff;
  font-family: 'Roboto', sans-serif;
}

.post-button {
  margin-top: 10px;
}

button {
  margin-right: 10px;
}

.filter input {
  width: 100%;
  padding: 10px 5px;
  border: none;
  border-bottom: 2px solid #034159;
  color: #090909;
  outline: none;
  transition: 0.2s ease;
  margin: 15px 0px;
}

.filter input:focus {
  font-size: 20px;
  padding: 20px 5px;
}

</style>