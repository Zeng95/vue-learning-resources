<template>
  <div class="add-resource">
    <BaseCard>
      <form @submit.prevent="submitData">
        <!-- Title -->
        <div class="form-control">
          <label for="title">Title</label>
          <input type="text" id="title" ref="titleInput" />
        </div>

        <!-- Description -->
        <div class="form-control">
          <label for="description">Description</label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            ref="descInput"
          ></textarea>
        </div>

        <!-- Link -->
        <div class="form-control">
          <label for="link">Link</label>
          <input name="link" id="link" type="url" ref="linkInput" />
        </div>

        <!-- Submit Button -->
        <div class="form-control">
          <BaseButton type="submit">Add Resource</BaseButton>
        </div>
      </form>
    </BaseCard>
  </div>
</template>

<script>
import BaseCard from '@c/shared/BaseCard'
import BaseButton from '@c/shared/BaseButton'

export default {
  name: 'AddResource',
  components: { BaseButton, BaseCard },
  inject: ['addResource'],
  methods: {
    submitData() {
      const enteredTitle = this.$refs.titleInput.value.trim()
      const enteredDescription = this.$refs.descInput.value.trim()
      const enteredLink = this.$refs.linkInput.value.trim()

      if (!enteredTitle || !enteredDescription || !enteredLink) {
        // The input is invalid
        return false
      }

      this.addResource(enteredTitle, enteredDescription, enteredLink)
    }
  }
}
</script>

<style scoped>
.form-control {
  margin: 1rem 0;
}

.form-control > label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.form-control > input,
.form-control > textarea {
  width: 100%;
}

.form-control > input:focus,
.form-control > textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}
</style>
