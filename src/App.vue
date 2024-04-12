<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const layout= computed(()=>{
  if (route.path === '/' ) {
    return 'layout-full'
  }
  // if (route.meta.layout === 'full') return 'layout-full'
  // return `layout-${this.contentLayoutType}`
})
</script>

<template>
  <div id="#app">
    <component :is="layout">
      <RouterView />
    </component>
  </div>
</template>

