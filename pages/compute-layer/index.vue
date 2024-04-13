<template>
  <div>
    <ComBanner />
    <ComHow />
    <ComData />
    <ComBenifit />
    <ComNews />
    <!-- <ComWhy /> -->
  </div>
</template>
<script setup lang="ts">
import { useRollupsStore } from '@/stores'
const rollupsStore = useRollupsStore()


onMounted(() => {
  if (!Number(rollupsStore.mainnetRollups[0].transactions)) {
    rollupsStore.getMainData()
  }
})
</script>
