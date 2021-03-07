<template>
  <div class="mask"></div>
  <dialog open>
    <header>
      <slot name="header">
        <h2>{{ title }}</h2>
      </slot>
    </header>

    <section>
      <slot></slot>
    </section>

    <menu>
      <slot name="actions"></slot>
    </menu>
  </dialog>
</template>

<script>
export default {
  name: 'BaseDialog',
  props: {
    title: {
      type: String,
      default: 'Dialog Title'
    }
  }
}
</script>

<style scoped>
.mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 100;
}
</style>