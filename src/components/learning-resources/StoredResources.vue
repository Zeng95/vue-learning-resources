<template>
  <ul class="stored-resources">
    <li v-for="item in resources" :key="item.id">
      <base-card>
        <header>
          <h3 class="title">{{ item.title }}</h3>
          <base-button
            type="button"
            class="btn-delete"
            mode="flat"
            @click="removeResource(item.id)"
            >Delete</base-button
          >
        </header>

        <p class="description">{{ item.description }}</p>

        <nav>
          <a :href="item.link" target="_blank">View Resource</a>
        </nav>
      </base-card>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'StoredResources',
  inject: ['resources', 'removeResource']
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
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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
