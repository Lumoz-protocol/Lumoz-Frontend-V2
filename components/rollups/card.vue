<template>
  <div class="phase-box mt-8 lg:mt-12 cursor-pointer">
    <div class="py-4 px-8 phase-inner1 relative">
      <div class="phase-box-left absolute left-0 top-0 bottom-0 h-full w-12"></div>
      <div class="phase-box-right absolute right-0 top-0 bottom-0 h-full w-12"></div>
      <div class="flex items-center">
        <div class="w-24 lg:w-32 flex flex-col items-center mr-8 lg:mr-16">
          <div class="relative w-20 lg:w-28">
            <img src="@/assets/img/rollups/dot.png" class="absolute left-0 right-0 top-0 bottom-0">
            <img :src="rollup.img" class="w-16 lg:w-24 rounded-full m-2">
          </div>
          <div v-if="!main" class="h-16 font-bold text-sm flex items-center text-center">{{ rollup.name }}</div>
        </div>
        <div v-if="!main" class="flex-1 grid grid-cols-2 lg:grid-cols-4">
          <div class="flex flex-col items-center justify-center">
            <div class="lg:text-2xl font-bold">{{ rollup.layer1 || '-' }}</div>
            <div class="text-text-500 mt-2">{{ $t('rollups.base') }}</div>
          </div>
          <div class="flex flex-col items-center justify-center">
            <div class="lg:text-2xl font-bold">{{ rollup.zkevmType || '-' }}</div>
            <div class="text-text-500 mt-2">{{ $t('rollups.zkType') }}</div>
          </div>
          <div class="flex flex-col items-center justify-center mt-4 lg:mt-0">
            <div class="lg:text-2xl font-bold">{{ rollup.da || '-' }}</div>
            <div class="text-text-500 mt-2">{{ $t('rollups.da') }}</div>
          </div>
          <div class="flex flex-col items-center justify-center mt-4 lg:mt-0">
            <div class="lg:text-2xl font-bold">{{ rollup.gasToken || '-' }}</div>
            <div class="text-text-500 mt-2">{{ $t('rollups.token') }}</div>
          </div>
        </div>
        <div v-else class="flex-1">
          <div class="flex items-center">
            <span class="text-lg mr-4 font-bold">{{ rollup.name }}</span>
            <a :href="rollup.bridge" target="_blank" class="text-xs text-[#aaa] hover:(underline text-primary-900) mr-4">{{ $t('rollups.bridge') }}</a>
            <Wallet v-if="!walletStore.account">
              <a @click="addNetwork" class="text-xs text-[#aaa] hover:(underline text-primary-900)">{{ $t('rollups.add') }}</a>
            </Wallet>
            <a v-else @click="addNetwork" class="text-xs text-[#aaa] hover:(underline text-primary-900)">{{ $t('rollups.add') }}</a>
          </div>
          <div class="text-[#aaa] text-sm mt-2">{{ rollup.des }}</div>
          <div class="flex items-center mt-4 card-icons">
            <a
              class="cursor-pointer mr-2 hvr-float rounded-lg"
              :href="rollup.home"
              target="_blank"
            >
              <img src="@/assets/img/rollups/home.svg" />
            </a>
            <a
              class="cursor-pointer mr-2 hvr-float rounded-lg"
              :href="rollup.twitter"
              target="_blank"
            >
              <img src="@/assets/img/rollups/twitter.svg" />
            </a>
            <a
              class="cursor-pointer hvr-float rounded-lg"
              :href="rollup.dc"
              target="_blank"
            >
              <img src="@/assets/img/rollups/discord.svg" />
            </a>
          </div>
          <div class="mt-4 grid grid-cols-2 lg:grid-cols-4">
            <div class="flex flex-col items-center justify-center">
              <div class="lg:text-2xl font-bold">{{ rollup.layer1 || '-' }}</div>
              <div class="text-text-500 mt-2">{{ $t('rollups.base') }}</div>
            </div>
            <div class="flex flex-col items-center justify-center">
              <div class="lg:text-2xl font-bold">{{ rollup.tvl || '-' }}</div>
              <div class="text-text-500 mt-2">{{ $t('rollups.tvl') }}</div>
            </div>
            <div class="flex flex-col items-center justify-center mt-4 lg:mt-0">
              <CountUp
                :end-val="Number(rollup.transactions || 0)"
                :duration="2"
                :decimal-places="0"
                :delay="2"
                class="lg:text-2xl font-bold"
              ></CountUp>
              <div class="text-text-500 mt-2">{{ $t('rollups.transactions') }}</div>
            </div>
            <div class="flex flex-col items-center justify-center mt-4 lg:mt-0">
              <CountUp
                :end-val="Number(rollup.addresses || 0)"
                :duration="2"
                :decimal-places="0"
                :delay="2"
                class="lg:text-2xl font-bold"
              ></CountUp>
              <div class="text-text-500 mt-2">{{ $t('rollups.users') }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRollupsStore, useWalletStore } from '@/stores'
const rollupsStore = useRollupsStore()
const walletStore = useWalletStore()

const props = withDefaults(
  defineProps<{
    name: string
    main: boolean
  }>(),
  {
    name: '',
    main: true
  }
)

const rollup = computed(() => {
  const list = rollupsStore.mainnetRollups.concat(rollupsStore.testnetRollups)
  return list.find(item => item.name === props.name) || {}
})

const addNetwork = async () => {
  const _rollup = rollup.value
  const result = await walletStore.addNetwork({
    name: _rollup.name,
    idHex: _rollup.chainIdHex,
    symbol: _rollup.symbol,
    decimals: _rollup.decimal,
    rpcUrl: _rollup.rpc,
    explorer: _rollup.explorer
  })
}
</script>
<style scoped>
.card-icons a:hover {
  box-shadow: inset #befe00 0px 0px 20px 1px;
}
</style>