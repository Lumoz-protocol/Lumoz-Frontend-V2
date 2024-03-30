<template>
  <div class="mb-8">
    <div>
      <div class='text-xl font-bold mb-2'>{{ $t('launch.layer1') }}</div>
      <div class="mb-4 text-text-dark">{{ $t('launch.layer1c') }}</div>
    </div>
    <div class="grid grid-cols-2 lg:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 py-4 text-sm">
      <div
        v-for="item, index in NETWORKS"
        :key="index"
        class="rounded-xl cursor-pointer  border bg-[#181818] border-[#181818] text-white hover:(text-primary-900 border-primary-900) hvr-grow"
        :class="launchStore.layer1 === item ? 'launch-check-box-high' : 'launch-check-box'"
        @click="launchStore.setLayer1(item)"
      >
        <div class="h-full w-full flex justify-center items-center">
          <img v-if="item === 'Bitcoin'" src="@/assets/img/launch/btc.svg" class="ml-4 h-16 mt-2" />
          <img v-else-if="item === 'Ethereum'" src="@/assets/img/launch/ethereum.svg" class="ml-4 h-16 mt-2" />
          <img v-else-if="item === 'Polygon'" src="@/assets/img/launch/polygon.svg" class="ml-4 h-16 mt-2" />
          <img v-else-if="item === 'BNB Chain'" src="@/assets/img/launch/bsc.svg" class="ml-4 h-16 mt-2" />
          <img v-else-if="item === 'Solana'" src="@/assets/img/launch/solana.svg" class="ml-4 h-13 mb-3 mt-2" />
          <span class="ml-4 font-bold flex-1">{{ item }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const NETWORKS = ['Bitcoin', 'Ethereum', 'Polygon', 'BNB Chain', 'Solana']

import { useLaunchStore } from '@/stores'
const launchStore = useLaunchStore()
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
