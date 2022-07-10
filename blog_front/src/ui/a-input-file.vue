<template>
  <label :for="id">{{ label }}</label>
  <input
    :id="id"
    :name="name"
    :type="type"
    accept="image/apng, image/avif, image/gif, image/jpeg, image/png, image/svg+xml, image/webp"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    required
  />
</template>

<script>
export default {
  name: "a-input-file",

  props: {
    label: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    modelValue: String
  },
  emits: ['update:modelValue']
}
</script>

<style scoped>
label {
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  color: #090909;
}

input[type=file] {
  width: 100%;
  border: 1px solid #025951;
  outline: none;
  margin: 15px 0px;
  padding: 10px 5px;
}

</style>