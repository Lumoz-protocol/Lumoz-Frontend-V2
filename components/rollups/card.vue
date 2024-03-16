<template>
  <div class="phase-box mt-4 lg:mt-8 cursor-pointer">
    <div class="p-8 phase-inner1">
      <div class="flex items-center">
        <div class="w-32 flex flex-col items-center">
          <div class="relative w-28">
            <img src="@/assets/img/rollups/dot.png" class="absolute left-0 right-0 top-0 bottom-0">
            <img :src="rollup.img" class="w-24 rounded-full m-2">
          </div>
          <div class="h-16 font-bold text-sm flex items-center text-center">{{ rollup.name }}</div>
        </div>
        <div class="flex-1"> </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRollupsStore } from '@/stores'
const rollupsStore = useRollupsStore()

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
</script>
