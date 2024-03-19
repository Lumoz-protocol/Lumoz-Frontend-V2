<template>
  <div class="container mx-auto px-2 lg:px-0">
    <div class="flex items-center justify-between raas-banner mt-12 lg:mt-0">
      <div class="w-full mt-16 lg:(mt-0) flex flex-col items-center lg:items-start text-3xl xl:text-4xl 2xl:text-5xl font-bold">
        <h1>{{ $t('raas.title1') }}</h1>
        <h1 class="mt-4">{{ $t('raas.title2') }}</h1>
        <HomeButton @click="to('https://docs.zkfair.io/')" class="mt-16 text-base w-40" :word="$t('raas.building')" />
      </div>
      
      <img src="@/assets/img/raas/banner.svg" class="hidden lg:block xl:w-1/2 my-12">
    </div>
    <div class="raas-box rounded-2xl flex flex-col items-center justify-between py-8 lg:py-32 mt-16 lg:mt-0">
      <div class="text-3xl lg:text-4xl lg:w-1/2 text-center font-bold px-4 lg:px-0">{{ $t('raas.content') }}</div>
      <div class="flex items-center mt-12">
        <!-- <HomeButton @click="to('https://merlinchain.io/')" class="text-base w-30 lg:w-40" word="Merlin" />
        <HomeButton @click="to('https://zkfair.io/')" class="ml-8 text-base w-30 lg:w-40" word="ZKFair" /> -->
        <HomeButton @click="router.push('/rollups')" light class="w-40" :word="$t('raas.more')" />
      </div>
      <div class="mt-12 lg:mt-24 grid grid-cols-3 w-full lg:px-32 text-black">
        <div class="flex flex-col items-center justify-center border-r border-[#ffffff44]">
          <CountUp
            :end-val="Number(info.transactions)"
            :duration="2"
            :decimal-places="0"
            :delay="2"
            class="text-xl lg:text-4xl font-bold"
          ></CountUp>
          <div class="text-text-500 mt-4">{{ $t('rollups.transactions') }}</div>
        </div>
        <div class="flex flex-col items-center justify-center border-r border-[#ffffff44]">
          <div class="text-xl lg:text-4xl font-bold flex items-center">
            <span class="mr-1">$</span>
            <CountUp
              :end-val="3.73"
              :duration="2"
              :decimal-places="2"
              :delay="2"
            ></CountUp>
            <span class="ml-1">B</span>
          </div>
          <div class="text-text-500 mt-4">{{ $t('rollups.tvl') }}</div>
        </div>
        <div class="flex flex-col items-center justify-center">
          <CountUp
            :end-val="Number(info.addresses)"
            :duration="2"
            :decimal-places="0"
            :delay="2"
            class="text-xl lg:text-4xl font-bold"
          ></CountUp>
          <div class="text-text-500 mt-4">{{ $t('rollups.users') }}</div>
        </div>
      </div>
    </div>
    <RaasArc />
    <RaasWhy />
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
    background: url(@/assets/img/raas/banner.svg) no-repeat;
    background-size: auto 100%;
    background-position: center;
  }
}
.raas-box {
  background: url(@/assets/img/raas/box.avif) no-repeat;
  background-size: 100% 100%;
  background-position: center;
  aspect-ratio: 4 / 1;
}
</style>