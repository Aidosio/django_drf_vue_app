<template>
  <div class="create-post">
    <router-link to="/create">
      <a-button>
        создать пост
      </a-button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "menuPost"
}
</script>

<style scoped>
.create-post {
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>