<template>
  <p>{{ text }}</p>
</template>

<script>
export default {
  name: "a-label",
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
  P {
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    color: #090909;
  }
</style>