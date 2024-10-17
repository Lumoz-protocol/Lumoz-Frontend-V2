<template>
  <div class="phase-box mt-8 lg:mt-12 cursor-pointer">
    <div class="py-4 lg:py-8 px-4 lg:px-8 phase-inner1 relative">
      <div class="phase-box-left absolute left-0 top-0 bottom-0 h-full w-12"></div>
      <div class="phase-box-right absolute right-0 top-0 bottom-0 h-full w-12"></div>
      <div class="flex items-center">
        <div class="w-12 lg:w-24 flex flex-col items-center mr-8">
          <div class="relative w-20 lg:w-24">
            <img src="@/assets/img/rollups/dot.png" class="absolute left-0 right-0 top-0 bottom-0">
            <img :src="rollup.img" class="w-16 lg:w-20 rounded-full m-2">
          </div>
        </div>
        <div class="flex-1">
          <div class="flex items-center">
            <span class="text-lg mr-4 font-bold">{{ rollup.name }}</span>
          </div>
          <div class="text-[#aaa] text-sm mt-2">{{ rollup.des }}</div>
          <div class="flex items-center mt-4 card-icons">
            <a
              v-if="rollup.home"
              class="cursor-pointer mr-2 hvr-float rounded-lg"
              :href="rollup.home"
              target="_blank"
            >
              <img src="@/assets/img/rollups/home.svg" />
            </a>
            <a
              v-if="rollup.twitter"
              class="cursor-pointer mr-2 hvr-float rounded-lg"
              :href="rollup.twitter"
              target="_blank"
            >
              <img src="@/assets/img/rollups/twitter.svg" />
            </a>
            <a
              v-if="rollup.dc"
              class="cursor-pointer hvr-float rounded-lg"
              :href="rollup.dc"
              target="_blank"
            >
              <img src="@/assets/img/rollups/discord.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRollupsStore, useWalletStore } from '@/stores'
const rollupsStore = useRollupsStore()

const props = withDefaults(
  defineProps<{
    name: string
  }>(),
  {
    name: ''
  }
)

const rollup = computed(() => {
  const list = rollupsStore.mainnetRollups
  return list.find(item => item.name === props.name)
})
</script>
<style scoped>
.card-icons a:hover {
  box-shadow: inset #befe00 0px 0px 20px 1px;
}
</style>