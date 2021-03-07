<template>
  <ul class="stored-resources">
    <LearningResource v-for="item in resources" :key="item.id">
      <BaseCard>
        <header>
          <h3 class="title">{{ item.title }}</h3>
          <BaseButton type="button" class="btn-delete" mode="flat">Delete</BaseButton>
        </header>

        <p class="description">{{ item.description }}</p>

        <nav>
          <a :href="item.link" target="_blank">View Resource</a>
        </nav>
      </BaseCard>
    </LearningResource>
  </ul>
</template>

<script>
import BaseCard from '@c/shared/BaseCard'
import BaseButton from '@c/shared/BaseButton'
import LearningResource from './LearningResource'

export default {
  name: 'StoredResources',
  components: { LearningResource, BaseCard, BaseButton },
  inject: ['resources']
}
</script>

<style scoped>
.stored-resources {
  list-style: none;
  margin: 0 auto;
  padding: 0;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

.description {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>
