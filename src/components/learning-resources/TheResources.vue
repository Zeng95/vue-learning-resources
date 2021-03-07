<template>
  <BaseCard>
    <!-- Custom components -->
    <BaseButton
      type="button"
      id="stored-resources"
      :mode="storedResButtonMode"
      @click="setSelectedTab('stored-resources')"
      >Stored Resources</BaseButton
    >
    <BaseButton
      type="button"
      id="add-resource"
      :mode="addResButtonMode"
      @click="setSelectedTab('add-resource')"
      >Add Resource</BaseButton
    >
  </BaseCard>

  <transition name="fade" mode="out-in">
    <keep-alive>
      <component :is="selectedTab"></component>
    </keep-alive>
  </transition>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'
import AddResource from './AddResource'
import StoredResources from './StoredResources'
import BaseCard from '@c/shared/BaseCard'
import BaseButton from '@c/shared/BaseButton'

export default {
  name: 'TheResources',
  components: { StoredResources, AddResource, BaseCard, BaseButton },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === 'stored-resources' ? null : 'flat'
    },
    addResButtonMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat'
    }
  },
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: uuidv4(),
          title: 'Offical Guide',
          description: 'The offical Vue.js documentation.',
          link: 'https://vuejs.org'
        },
        {
          id: uuidv4(),
          title: 'Google',
          description: 'Learn to google...',
          link: 'https://google.org'
        }
      ]
    }
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource
    }
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab
    },
    addResource(title, description, link) {
      const newResource = { id: uuidv4(), title, description, link }

      this.storedResources.unshift(newResource)
      this.selectedTab = 'stored-resources'
    }
  }
}
</script>

<style scoped>
#stored-resources {
  margin-right: 0.2rem;
}

#add-resource {
  margin-left: 0.2rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
