<template>
  <div class="add-resource">
    <base-dialog
      :dialogVisible="inputIsInvalid"
      title="Invalid Input"
      buttonText="Okay"
      @close="confirmError"
    >
      <template #default>
        <p>Unfortunately, at least one input value is invalid.</p>
        <p>
          Please check all inputs and make sure you enter at least a few
          characters into each input field.
        </p>
      </template>
    </base-dialog>

    <base-card>
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
          <base-button type="submit">Add Resource</base-button>
        </div>
      </form>
    </base-card>
  </div>
</template>

<script>
export default {
  name: 'AddResource',
  inject: ['addResource'],
  data() {
    return {
      inputIsInvalid: false
    }
  },
  methods: {
    submitData() {
      const enteredTitle = this.$refs.titleInput.value.trim()
      const enteredDescription = this.$refs.descInput.value.trim()
      const enteredLink = this.$refs.linkInput.value.trim()

      if (!enteredTitle || !enteredDescription || !enteredLink) {
        // The input is invalid
        this.inputIsInvalid = true
        console.info(this.inputIsInvalid)
        return false
      }

      this.addResource(enteredTitle, enteredDescription, enteredLink)
    },
    confirmError() {
      this.inputIsInvalid = false
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
