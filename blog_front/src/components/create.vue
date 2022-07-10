<template>
  <a-popup v-if="success || error" :text="text" :success="success" :error="error"/>
  <a-title
      title="Создание поста"
      subtitle="На этой странице вы можете создать свой пость для публикации!"
  />
  <form class="update" @submit.prevent="onUpdate">
    <a-input
        label="Название поста"
        inputID="name"
        inputName="name"
        inputType="text"
        inputPlaceholder="Название поста"
        v-model="form.name"
    />
    <div class="d-flex">
      <a-select
          label="Выбеите категорию"
          name="category"
      >
        <a-option
            v-for="category in form.category"
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
        v-model="form.contend"
    />
    <a-button submit>
      Сохранить
    </a-button>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "createPost",
  data() {
    return {
      form: {
        category: [],
        contend: '',
        image: '',
        name: '',
      },
      text: '',
      success: false,
      error: false
    }
  },

  created() {
    axios.get('/api/v1/category/').then(response => {
      this.form.category = response.data
    })
  },

  methods: {
    async onUpdate(event) {
      const formData = new FormData(event.target)
      await axios.post(`/api/v1/blog/`, formData).then(response => {
        response
        this.form.contend = ''
        this.form.image = ''
        this.form.name = ''

        this.text = 'Пост успешно создань'
        this.success = true

        setTimeout(() => {
          this.text = ''
          this.success = false
        }, 2000)
      })
    },
  }
}
</script>

<style scoped>
.d-flex {
  display: flex;
}

.update-image {
  width: 100%;
  margin-left: 20px;
}

button {
  margin-top: 20px;
}
</style>