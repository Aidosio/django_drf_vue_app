<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
export default {
  name: "a-container"
}
</script>

<style scoped>
.container {
  width: 80%;
}
</style>