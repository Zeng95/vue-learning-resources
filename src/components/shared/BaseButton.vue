<template>
  <button class="btn" :class="mode">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    mode: {
      type: String
    }
  }
}
</script>

<style scoped>
.btn {
  padding: 0.75rem 1.5rem;
  border: 1px solid #3a0061;
  border-radius: 4px;
  background-color: #3a0061;
  color: white;
  cursor: pointer;
  outline: none;
}

.btn:hover,
.btn:active {
  background-color: #270041;
  border-color: #270041;
}

.flat {
  background-color: transparent;
  color: #3a0061;
  border: none;
}

.flat:hover,
.flat:active {
  background-color: #edd2ff;
}
</style>
