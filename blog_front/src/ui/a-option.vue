<template>
  <option>{{ namecat }}</option>
</template>

<script>
export default {
  name: "a-option",

  props: {
    valueOption: {
      type: String
    },
    namecat: {
      type: String
    }
  }
}
</script>

<style scoped>

</style>