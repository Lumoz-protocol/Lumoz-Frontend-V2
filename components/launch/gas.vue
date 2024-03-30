<template>
  <div class="mb-8">
    <div>
      <div class='text-xl font-bold mb-2'>{{ $t('launch.gas') }}</div>
      <div class="mb-4 text-text-dark">{{ $t('launch.gasc') }}</div>
    </div>
    <div class="grid grid-cols-2 lg:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 py-4 text-sm">
      <div
        class="rounded-xl cursor-pointer  border bg-[#181818] border-[#181818] text-white hover:(text-primary-900 border-primary-900) hvr-grow"
        :class="launchStore.gas === token ? 'launch-check-box-high' : 'launch-check-box'"
        @click="chooseGas(true)"
      >
        <div class="h-full w-full flex justify-center items-center">
          <img v-if="launchStore.layer1 === 'Bitcoin'" src="@/assets/img/launch/btc.svg" class="ml-4 h-16 mt-2" />
          <img v-if="launchStore.layer1 === 'Lumoz'" src="@/assets/img/launch/lumoz.svg" class="ml-4 h-16 mt-2" />
          <img v-else-if="launchStore.layer1 === 'Ethereum'" src="@/assets/img/launch/ethereum.svg" class="ml-4 h-16 mt-2" />
          <img v-else-if="launchStore.layer1 === 'Polygon'" src="@/assets/img/launch/polygon.svg" class="ml-4 h-16 mt-2" />
          <img v-else-if="launchStore.layer1 === 'BNB Chain'" src="@/assets/img/launch/bsc.svg" class="ml-4 h-16 mt-2" />
          <img v-else-if="launchStore.layer1 === 'Solana'" src="@/assets/img/launch/solana.svg" class="ml-4 h-13 mb-3 mt-2" />
          <span class="ml-4 font-bold flex-1">{{ token }}</span>
        </div>
      </div>
      <div
        class="rounded-xl cursor-pointer  border bg-[#181818] border-[#181818] text-white hover:(text-primary-900 border-primary-900) hvr-grow"
        :class="launchStore.gas === 'Customize' ? 'launch-check-box-high' : 'launch-check-box'"
        @click="chooseGas(false)"
      >
        <div class="h-full w-full flex justify-center items-center">
          <img src="@/assets/img/launch/gas.svg" class="ml-4 h-13 mb-3  mt-2" />
          <span class="ml-4 font-bold flex-1">{{ $t('launch.cus') }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useLaunchStore } from '@/stores'
const launchStore = useLaunchStore()
const vm = getCurrentInstance()?.proxy


const token = computed(() => {
  if (launchStore.layer1 === 'Bitcoin') {
    return 'BTC'
  }
  if (launchStore.layer1 === 'Lumoz') {
    return 'MOZ'
  }
  if (launchStore.layer1 === 'Ethereum') {
    return 'ETH'
  }
  if (launchStore.layer1 === 'Polygon') {
    return 'MATIC'
  }
  if (launchStore.layer1 === 'BNB Chain') {
    return 'BNB'
  }
  if (launchStore.layer1 === 'Solana') {
    return 'SOL'
  }
})

watch(() => launchStore.layer1, () => {
  launchStore.setGas('')
})

const chooseGas = (_base: boolean) => {
  if (_base) {
    launchStore.setGas(token.value)
  } else {
    launchStore.setGas('Customize')
  }
}
</script>
<style lang="less">
.launch-check-box {
  border-radius: 14px;
  box-shadow: 3px 3px 6px 0px #11120F inset;
  box-shadow: -2px -2px 4px 0px #343434 inset;
}
.launch-check-box-high {
  background: url("@/assets/img/launch/check.svg") no-repeat;
  background-size: 20px 20px;
  background-position: right 0 top 0;
  border-color: #befe00;
  color: #befe00;
}
</style>
