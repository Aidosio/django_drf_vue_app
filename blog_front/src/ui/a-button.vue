<template>
  <button :class="{whiteBtn : white, redBtn : red}">
    <slot>
    </slot>
  </button>
</template>

<script>
export default {
  name: "a-button",

  props: {
    white: Boolean,
    red: Boolean,
  }
}
</script>

<style scoped>
button {
  padding: 10px 20px;
  border-radius: 5px;
  background: #034159;
  font-weight: 500;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background: #09506e;
}

.whiteBtn {
  background: #fff;
  color: #034159;
}

.whiteBtn:hover {
  background: #f6f6f6;
}

.redBtn {
  background: #de4c4c;
  color: #fff;
}

.redBtn:hover {
  background: #e14545;
}
</style>