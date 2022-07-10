<template>
  <a-popup v-if="success || error" :text="text" :success="success" :error="error"/>
  <a-title
      title="Изменение поста"
      subtitle="На этой странице вы можете изменить свой пость для публикации!"
  />

  <img :src="blog.image" alt="">

  <form class="update" @submit.prevent="onUpdate">
    <a-input
        label="Название поста"
        inputID="name"
        inputName="name"
        inputType="text"
        inputPlaceholder="Название поста"
        v-model="blog.name"
    />

    <div class="d-flex">
      <a-select
          label="Выбеите категорию"
          name="category"
      >
        <a-option
            v-for="category in categorys"
            :key="category.id"
            :value="category.id"
            :namecat="category.name"
        />
      </a-select>

      <div class="update-image">
        <a-input-file
            label="Выберите картинку"
            id="image"
            name="image"
            type="file"
            v-model="form.image"
        />
      </div>
    </div>

    <a-textarea
        label="Контент поста"
        id="contend"
        name="contend"
        type="text"
        placeholder="Контент поста"
        v-model="blog.contend"
    />

    <div class="d-flex">
      <a-button submit>
        Сохранить
      </a-button>
    </div>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "editPost",
  data() {
    return {
      blog: {},
      categorys: [],
      form: {
        image: ''
      },
      text: '',
      success: false,
      error: false
    }
  },



  created() {
    axios.get(`/api/v1/blog/${this.$route.params.id}`).then(response => {
      this.blog = response.data
    })
  },

  mounted() {
    axios.get('/api/v1/category/').then(response => {
      this.categorys = response.data
    })
  },

  methods: {
    onUpdate(event) {
      const formData = new FormData(event.target)
      axios.put(`/api/v1/blog/${this.$route.params.id}/`, formData).then(response => {
        response
        this.text = "Пост успешно обновлен"
        this.success = true
        setTimeout(() => {
          this.text = ''
          this.success = false
        }, 2000)
      }).catch(error => {
        error
      })
    }
  }
}
</script>

<style scoped>
img {
  width: 150px;
  height: 150px;
  object-fit: cover;
}

.d-flex {
  display: flex;
}

button {
  margin-top: 20px;
  margin-right: 20px;
}

label {
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  color: #090909;
}

input {
  width: 100%;
  padding: 10px 5px;
  border: none;
  border-bottom: 2px solid #034159;
  color: #090909;
  outline: none;
  transition: 0.2s ease;
  margin: 15px 0px;
}

input:focus {
  font-size: 20px;
  padding: 20px 5px;
}

.update-image {
  width: 100%;
  margin-left: 20px;
}

input[type=file] {
  width: 100%;
  border: 1px solid #025951;
  outline: none;
  margin: 15px 0px;
  padding: 10px 5px;
}

.update-select {
  width: 100%;
}

select {
  padding: 10px 5px;
  border: 1px solid #034159;
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  color: #171717;
  margin: 0px 0px 20px 0px;
  margin: 15px 0px;
}

textarea {
  min-width: 100%;
  max-width: 100%;
  padding: 10px 5px;
  margin: 20px 0px 0px 0px;
  height: 100px;
  border: 1px solid #025951;
}
</style>