<template>
  <div class="container mx-auto py-12">
    <div v-if="part === 1">
      <div class="text-4xl font-bold text-center">{{ $t('launch.create') }}</div>
      <div class="text-center mb-12 text-text-dark mt-4 lg:w-1/2 mx-auto text-xl">{{ $t('launch.content') }}</div>
      <LaunchLayer1 />
      <LaunchZkevm />
      <LaunchDa />
      <LaunchSequencer />
      <LaunchProver />
      <LaunchGas v-if="launchStore.layer1" />
      <div class="flex items-center justify-center">
        <HomeButton :light="!canNext ? true : false" @click="next" class="w-40" :class="!canNext ? 'cursor-not-allowed' : ''" :word="$t('launch.next')" />
      </div>
    </div>
    <div v-if="part === 2">
      <div class="text-xl font-bold">{{ $t('launch.info') }}</div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div class="mt-8 flex items-center">
          <div class="text-text-dark w-40">{{ $t('launch.layer1') }}:</div>
          <div>{{ launchStore.layer1 }}</div>
        </div>
        <div class="mt-8 flex items-center">
          <div class="text-text-dark w-40">{{ $t('launch.type') }}:</div>
          <div>{{ launchStore.zkevmType }}</div>
        </div>
        <div class="mt-8 flex items-center">
          <div class="text-text-dark w-40">{{ $t('launch.da') }}:</div>
          <div>{{ launchStore.da }}</div>
        </div>
        <div class="mt-8 flex items-center">
          <div class="text-text-dark w-40">{{ $t('launch.seq') }}:</div>
          <div>{{ launchStore.sequencer }}</div>
        </div>
        <div class="mt-8 flex items-center">
          <div class="text-text-dark w-40">{{ $t('launch.gas') }}:</div>
          <div>{{ launchStore.gas }}</div>
        </div>
        <div class="mt-8 flex items-center">
          <div class="text-text-dark w-40">{{ $t('launch.prov') }}:</div>
          <div>{{ launchStore.prover }}</div>
        </div>
      </div>
      
      <div class="text-xl font-bold mt-16">{{ $t('launch.generate') }}</div>
      <div class="px-8 py-4 launch-p-box mt-4 bg-[#2c2c2c] rounded-md">
        <el-progress
          :percentage="percentage"
          :stroke-width="20"
          status="success"
          striped
          striped-flow
          :duration="100"
        />
        <div class="text-center mt-4 text-primary-900 font-bold" v-if="progress">{{ progress }} ...</div>
      </div>
      <div v-if="percentage === 100" class="flex flex-col items-center justify-center">
        <div class="mt-8 lg:mt-16 text-center text-3xl font-bold animate__animated animate__flipInX">
          {{ $t('launch.con') }}
        </div>
        <div class="text-center mt-4 text-lg animate__animated animate__flipInX animate__delay-1s">
          {{ $t('launch.con1') }}
        </div>
        <a href="mailto:contact@lumoz.org" class="mt-8 animate__animated animate__fadeIn animate__delay-2s">
          <HomeButton class="w-60" :word="$t('launch.apply')" />
        </a>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useLaunchStore } from '@/stores'
const launchStore = useLaunchStore()
const vm = getCurrentInstance()?.proxy
let timer = null
const part = ref(1)
const percentage = ref(0)
const canNext = computed(() => {
  if (launchStore.layer1 && launchStore.zkevmType && launchStore.da && launchStore.sequencer && launchStore.gas && launchStore.prover) {
    return true
  }
  return false
})

watch(() => part.value, () => {
  if (part.value === 2) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    percentage.value = 0
    startTimer()
  }
})

const next = () => {
  if (canNext.value) {
    part.value = 2
  }
}

const startTimer = () => {
  if (timer) {
    clearInterval(timer)
  }
  timer = setInterval(() => {
    if (percentage.value === 100) {
      clearInterval(timer)
      return
    }
    percentage.value = percentage.value + 1
  }, 200)
}

const progress = computed(() => {
  if (percentage.value <= 25) {
    return vm?.$t('launch.d1')
  } else if (percentage.value <= 50) {
    return vm?.$t('launch.d2')
  } else if (percentage.value <= 75) {
    return vm?.$t('launch.d3')
  } else if (percentage.value < 100) {
    return vm?.$t('launch.d4')
  }
  return ''
})
</script>
<style scoped>
.launch-p-box {
  box-shadow: 3px 3px 10px 0px #11120F inset;
  box-shadow: -2px -2px 10px 0px #343434 inset;
}
.launch-p-inner {
  background: linear-gradient(269.99deg, #EDEDED -1.07%, #B9F800 99.99%);
}
</style>