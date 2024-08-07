<template>
  <NuxtLayout name="projects">
    <div>NUMBER PROJECT {{ projectId }}</div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
definePageMeta({
    layout: "projects"
})

const route = useRoute();
const projectId = ref()
projectId.value = route.params.id;
</script>

<style scoped></style>
