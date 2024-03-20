<template>
  <div>
    <ComBanner />
    <ComHow />
    <ComData />
    <ComBenifit />
    <!-- <ComWhy /> -->
  </div>
</template>
<script setup lang="ts">
import { useRollupsStore } from '@/stores'
const rollupsStore = useRollupsStore()

const router = useRouter()
const to = (url: string) => {
  window.open(url)
}

onMounted(() => {
  if (!Number(rollupsStore.mainnetRollups[0].transactions)) {
    rollupsStore.getMainData()
  }
})


const info = computed(() => {
  let transactions = 0
  let addresses = 0
  for (let i in rollupsStore.mainnetRollups) {
    transactions += Number(rollupsStore.mainnetRollups[i].transactions)
    addresses += Number(rollupsStore.mainnetRollups[i].addresses)
  }
  return {
    transactions,
    addresses
  }
})
</script>
<style scoped>
@media (max-width: 1024px) {
  .raas-banner {
    background: url(@/assets/img/com/banner.svg) no-repeat;
    background-size: auto 100%;
    background-position: center;
  }
}
.raas-box {
  background: url(@/assets/img/com/box.avif) no-repeat;
  background-size: 100% 100%;
  background-position: center;
  aspect-ratio: 4 / 1;
}
</style>