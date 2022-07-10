<template>
  <select
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)">
    <option value="" disabled>Выберите из списка</option>
    <option
        v-for="option in options"
        :key="option.id"
        :value="option.id">
      {{option.name}}
    </option>
  </select>
</template>

<script>
export default {
  name: "a-filter-category",
  props: {
    modelValue: String,
    options: {
      type: Array,
      default: () => []
    }
  },
}
</script>

<style scoped>

</style>