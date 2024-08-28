<script setup lang="ts">
  import { useRoute } from 'vue-router'
  import { computed } from 'vue';
  const route = useRoute()
  const layout = computed(() => {
    console.log(route?.meta?.layout);

    if (!route?.meta?.layout) {
      return 'LayoutDefault'
    }
    else {
      return route?.meta?.layout
    }
  })
</script>

<template>
  <div id="#app">
    <component :is="layout">
      <RouterView />
    </component>
  </div>
</template>
