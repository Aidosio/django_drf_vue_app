<template>
  <div :class="{alert : true, success : success, error : error}">
    <p>
      {{text}}
    </p>
  </div>
</template>

<script>
export default {
  name: "a-popup",
  props: {
    error: Boolean,
    success: Boolean,
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.alert {
  padding: 20px 10px;
  width: 300px;
  font-family: 'Roboto', sans-serif;
  font-weight: normal;
  position: fixed;
  top: 20px;
  right: 20px;
}

.success {
  border: 1px solid #badbcc;
  background: #d1e7dd;
  color: #0f5132;
}

.error {
  border: 1px solid #f8d7da;
  background: #f5c2c7;
  color: #842029;
}
</style>