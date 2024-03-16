<template>
  <div class="container mx-auto">
    <div class="pt-16 lg:pt-32 text-2xl lg:text-4xl xl:text-6xl text-center font-bold">
      <h1 class="animate__animated animate__fadeIn">{{ $t('rollups.title1') }}</h1>
      <h1 class="mt-4 animate__animated animate__fadeIn animate__delay-1s">{{ $t('rollups.title2') }}</h1>
    </div>
    <div class="mt-4 lg:mt-16 flex items-center justify-center">
      <CommonTab @click="active = 'main'" class="w-32" :word="$t('rollups.main')" :active="active === 'main'" />
      <CommonTab @click="active = 'test'" class="w-32 ml-8" :word="$t('rollups.test')" :active="active === 'test'" />
    </div>

    <div class="grid grid-cols-3 mt-8 lg:mt-16 bottom-light py-12">
      <div v-if="active === 'main'" class="flex flex-col items-center justify-center">
        <div class="text-lg font-bold md:text-2xl lg:text-4xl flex">
          <span class="mr-1">$</span>
          <CountUp
            :end-val="Number(10000 || 0)"
            :duration="2"
            :decimal-places="0"
            :delay="2"
          ></CountUp>
          <span class="text-primary-900 ml-1">B</span>
        </div>
        <div class="text-text-dark mt-4">{{ $t('rollups.tvl') }}</div>
      </div>
      <div v-if="active === 'test'" class="flex flex-col items-center justify-center">
        <CountUp
          class="text-lg font-bold md:text-2xl lg:text-4xl"
          :end-val="Number(10000 || 0)"
          :duration="2"
          :decimal-places="0"
          unit="B"
          :delay="2"
        ></CountUp>
        <div class="text-text-dark mt-4">{{ $t('rollups.count') }}</div>
      </div>
      <div class="flex flex-col items-center justify-center">
        <CountUp
          class="text-lg font-bold md:text-2xl lg:text-4xl"
          :end-val="Number(10000 || 0)"
          :duration="2"
          :decimal-places="0"
          :delay="2"
        ></CountUp>
        <div class="text-text-dark mt-4">{{ $t('rollups.transactions') }}</div>
      </div>
      <div class="flex flex-col items-center justify-center">
        <CountUp
          class="text-lg font-bold md:text-2xl lg:text-4xl"
          :end-val="Number(10000 || 0)"
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

const list = computed(() => {
  if (active.value === 'main') {
    return rollupsStore.mainnetRollups
  }
  return rollupsStore.testnetRollups
})

watch(() => active.value, () => {
  if (active.value === 'test' && !rollupsStore.testnetRollups.length) {
    rollupsStore.getTestnetRollups()
  }
})
</script>
<style scoped>

</style>