<template>
  <TheHeader title="RememberMe" />
  <TheResources />
</template>

<script>
import TheHeader from '@c/layouts/TheHeader'
import TheResources from '@c/learning-resources/TheResources'

export default {
  name: 'App',
  components: { TheResources, TheHeader }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}
</style>
