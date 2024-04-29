<template>
  <div class="rounded-lg mb-4" :class="dark ? 'bg-[#343335]' : 'tier-box'">
    <div class="p-4" :class="dark ? '' : 'tuer-box-inner'">
      <div class="flex justify-between">
        <div class="flex items-center">
          <div class="font-bold" :class="dark ? '' : 'slideShine'">Tier {{index}}</div>
          <div class="ml-8" :class="dark ? 'text-[#FF6b00]' : 'text-primary-900'">{{ dark ? $t('home.white.close') : $t('home.white.open') }}</div>
        </div>
        <div class="text-sm">{{ $t('home.white.price') }}: {{ price }}</div>
      </div>
      
      <div v-if="!dark" class="mt-4 flex items-center">
        <div>{{ $t('home.white.pro') }}</div>
        <div class="flex-1 tier-pro-bg h-2.5 mx-4 rounded-full">
          <div class="rounded-full tier-pro-con h-full" :style="progress"></div>
        </div>
        <div class="flex text-sm">
          <div class="text-primary-900">{{ tierStore.pre.sell_count }}</div>
          <div>/</div>
          <div>{{ tierStore.pre.volume }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useTierStore } from '@/stores'
const tierStore = useTierStore()
const props = withDefaults(
  defineProps<{
    dark: boolean
    index: number
  }>(),
  {
    dark: true,
    index: 0
  }
)

const price = computed(() => {
  if (!props.index) {
    return '-'
  }
  const item = tierStore.prices.find(_item => _item.tier_number == props.index)
  if (!item) {
    return '-'
  }
  return item.price + ' USD'
})

const progress = computed(() => {
  if (props.dark || !tierStore.pre.volume) {
    return 'width: 0px'
  }
  const index = Math.floor(Number(tierStore.pre.sell_count) / Number(tierStore.pre.volume) * 100)
  if (index === 0) {
    return 'width:0px'
  }
  return `width:${index}%`
})

</script>
<style scoped>
.tier-box {
  background: linear-gradient(186.78deg, #333332 -12.32%, #22242A 105.82%);
  box-shadow: 0px 2px 2px 0px #525154 inset;
}
.tier-box-inner {
  background: linear-gradient(186.78deg, #333332 -12.32%, #22242A 105.82%);
  box-shadow: 0px 6px 20px 0px #00000080;
}
.tier-pro-bg {
  background: linear-gradient(186.78deg, #555 -12.32%, #22242A 105.82%);
}
.tier-pro-con {
  background: linear-gradient(270deg, #EDEDED 0%, #B9F800 100%);
}


</style>