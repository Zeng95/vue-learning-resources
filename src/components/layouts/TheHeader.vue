<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  line-height: 5rem;
  background-color: #640032;
}

header > h1 {
  width: 100%;
  text-align: center;
  color: white;
  margin: 0;
}
</style>