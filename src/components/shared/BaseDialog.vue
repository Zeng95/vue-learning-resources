<template>
  <div class="dialog" v-if="dialogVisible">
    <div class="mask"></div>
    <dialog open>
      <!-- Header -->
      <header>
        <slot name="header">
          <h2>{{ title }}</h2>
        </slot>
      </header>

      <!-- Content -->
      <main>
        <section>
          <slot></slot>
        </section>

        <menu>
          <slot name="actions">
            <base-button @click="$emit('close')">{{ buttonText }}</base-button>
          </slot>
        </menu>
      </main>
    </dialog>
  </div>
</template>

<script>
export default {
  name: 'BaseDialog',
  props: {
    title: {
      type: String,
      default: 'Dialog Title'
    },
    dialogVisible: {
      type: Boolean,
      required: true
    },
    buttonText: {
      type: String,
      default: 'Close'
    }
  },
  emits: ['close']
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

dialog {
  position: fixed;
  top: 20vh;
  left: 10%;
  width: 80%;
  margin: 0;
  padding: 0;
  background-color: transparent;
  z-index: 101;
  border-radius: 12px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  overflow: hidden;
}

header {
  background-color: #3a0061;
  color: white;
  width: 100%;
  padding: 1rem;
}

header h2 {
  margin: 0;
}

main {
  background-color: white;
}

section {
  padding: 1rem;
}

menu {
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  margin: 0;
}

@media (min-width: 768px) {
  dialog {
    left: 50%;
    width: 40rem;
    transform: translate3d(-50%, 0, 0);
  }
}
</style>