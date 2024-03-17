<template>
  <div class="container mx-auto">
    <div class="pt-16 lg:pt-32 text-2xl lg:text-4xl xl:text-6xl text-center font-bold">
      <h1>{{ $t('rollups.title1') }}</h1>
      <h1 class="mt-4">{{ $t('rollups.title2') }}</h1>
    </div>
    <div class="mt-4 lg:mt-16 flex items-center justify-center">
      <CommonTab @click="active = 'main'" class="w-32" :word="$t('rollups.main')" :active="active === 'main'" />
      <CommonTab @click="active = 'test'" class="w-32 ml-8" :word="$t('rollups.test')" :active="active === 'test'" />
    </div>

    <div class="grid grid-cols-3 mt-8 lg:mt-16 bottom-light py-12">
      <div v-if="active === 'main'" class="flex flex-col items-center justify-center">
        <div class="text-lg font-bold md:text-2xl lg:text-3xl flex">
          <span class="mr-1">$</span>
          <CountUp
            :end-val="3.73"
            :duration="2"
            :decimal-places="2"
            :delay="2"
          ></CountUp>
          <span class="text-primary-900 ml-1">B</span>
        </div>
        <div class="text-text-dark mt-4">{{ $t('rollups.tvl') }}</div>
      </div>
      <div v-if="active === 'test'" class="flex flex-col items-center justify-center">
        <CountUp
          class="text-lg font-bold md:text-2xl lg:text-3xl"
          :end-val="Number(16 || 0)"
          :duration="2"
          :decimal-places="0"
          unit="B"
          :delay="2"
        ></CountUp>
        <div class="text-text-dark mt-4">{{ $t('rollups.count') }}</div>
      </div>
      <div class="flex flex-col items-center justify-center">
        <CountUp
          class="text-lg font-bold md:text-2xl lg:text-3xl"
          :end-val="active === 'main' ? Number(mainInfo.transactions || 0) : 9258466"
          :duration="2"
          :decimal-places="0"
          :delay="2"
        ></CountUp>
        <div class="text-text-dark mt-4">{{ $t('rollups.transactions') }}</div>
      </div>
      <div class="flex flex-col items-center justify-center">
        <CountUp
          class="text-lg font-bold md:text-2xl lg:text-3xl"
          :end-val="active === 'main' ? Number(mainInfo.addresses || 0) : 408555"
          :duration="2"
          :decimal-places="0"
          :delay="2"
        ></CountUp>
        <div class="text-text-dark mt-4">{{ $t('rollups.users') }}</div>
      </div>
    </div>
    <div class="mt-12">
      <RollupsCard v-for="item, index in list" :key="index" :name="item.name" :main="active === 'main'"></RollupsCard>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRollupsStore } from '@/stores'
const rollupsStore = useRollupsStore()

const active = ref('main')

onMounted(() => {
  if (!Number(rollupsStore.mainnetRollups[0].transactions)) {
    rollupsStore.getMainData()
  }
})


const list = computed(() => {
  if (active.value === 'main') {
    return rollupsStore.mainnetRollups
  }
  return rollupsStore.testnetRollups
})


const mainInfo = computed(() => {
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

</style>