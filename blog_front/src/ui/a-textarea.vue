<template>
  <label :for="id">{{ label }}</label>
  <textarea
      :id="id"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      required
  />
</template>

<script>
export default {
  name: "a-textarea",

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
    placeholder: {
      type: String,
      required: false
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

textarea {
  min-width: 100%;
  max-width: 100%;
  padding: 10px 5px;
  margin: 20px 0px 0px 0px;
  height: 100px;
  border: 1px solid #025951;
}
</style>