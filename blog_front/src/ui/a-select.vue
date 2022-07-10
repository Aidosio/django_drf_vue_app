<template>
  <div class="update-select">
    <label>{{ label }}</label>
    <select :name="name">
      <slot />
    </select>
  </div>
</template>

<script>
export default {
  name: "a-select",

  props: {
    label: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
  }
}
</script>

<style scoped>
label {
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  color: #090909;
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

</style>