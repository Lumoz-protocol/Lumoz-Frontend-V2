<template>
  <div class="container mx-auto">
    <!-- <HomeBanner />
    <HomeWhite /> -->
  </div>
</template>
<script lang="ts" setup>
import { useTierStore, useWalletStore } from '@/stores'

let timer:any = null

const tierStore = useTierStore()
const walletStore = useWalletStore()

onMounted(() => {
  if (timer) {
    clearInterval(timer)
  }
  if (walletStore.account) {
    tierStore.getUser(walletStore.account)
  }
  tierStore.getPrices()
  tierStore.getDepositAmount()
  tierStore.getTokenPrice()
  getTiers()
  timer = setInterval(() => {
    getTiers()
  }, 1000 * 60)
})

watch (() => walletStore.account, () => {
  if (walletStore.account) {
    tierStore.resetUser()
    tierStore.getUser(walletStore.account)
  } else {
    tierStore.resetUser()
  }
})

onUnmounted(() => {
  if (timer) {
    clearInterval(timer)
  }
})

const getTiers = () => {
  tierStore.getWhiteTiers()
}
</script>
<style scoped></style>
