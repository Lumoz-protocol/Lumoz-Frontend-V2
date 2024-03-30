<template>
  <div class="mb-8">
    <div>
      <div class='text-xl font-bold mb-2'>{{ $t('launch.seq') }}</div>
      <div class="mb-4 text-text-dark">{{ $t('launch.seqc') }}</div>
    </div>
    <div class="grid grid-cols-2 lg:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 py-4 text-sm">
      <div
        v-for="item, index in SEQUENCERS"
        :key="index"
        class="rounded-xl border bg-[#181818] border-[#181818] text-white"
        :class="launchStore.sequencer === item ? 'launch-check-box-high cursor-pointer hover:(text-primary-900 border-primary-900) hvr-grow' : 'launch-check-box cursor-pointer hover:(text-primary-900 border-primary-900) hvr-grow'"
        @click="launchStore.setSequencer(item)"
      >
        <div class="h-full w-full flex justify-center items-center">
          <img v-if="item === 'Single Node'" src="@/assets/img/launch/gas.svg" class="ml-4 h-13 mb-3 mt-2" />
          <img v-if="item === 'Espresso'" src="@/assets/img/launch/espressosys.svg" class="ml-4 h-16 mt-2" />
          <img v-else-if="item === 'Astria'" src="@/assets/img/launch/astria.svg" class="ml-4 h-16 mt-2" />
          <img v-else-if="item === 'Radius'" src="@/assets/img/launch/radius.svg" class="ml-4 h-16 mt-2" />
          <span class="ml-4 font-bold flex-1">{{ item }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useLaunchStore } from '@/stores'
const launchStore = useLaunchStore()
const SEQUENCERS = ['Single Node', 'Espresso', 'Astria', 'Radius']
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
