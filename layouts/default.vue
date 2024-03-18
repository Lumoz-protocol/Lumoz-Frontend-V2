<template>
  <div>
    <CommonHeader />
    <div class="h-20" v-if="router.currentRoute.value.fullPath !== '/'"></div>
    <NuxtPage />
    <CommonFooter />
   
  </div>
</template>
<script setup lang="ts">
const router = useRouter()
</script>