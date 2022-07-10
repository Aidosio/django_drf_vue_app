<template>
  <label :for="inputID">{{ label }}</label>
  <input
      :id="inputID"
      :name="inputName"
      :type="inputType"
      :placeholder="inputPlaceholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      required
  />
</template>

<script>
export default {
  name: "a-input",
  props: {
    modelValue: String,
    label: {
      type: String,
      required: true
    },
    inputID: {
      type: String,
      required: true
    },
    inputName: {
      type: String,
      required: true
    },
    inputType: {
      type: String,
      required: true
    },
    inputPlaceholder: {
      type: String,
      required: false
    },
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
</style>