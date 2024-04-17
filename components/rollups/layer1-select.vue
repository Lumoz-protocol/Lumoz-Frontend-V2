<template>
  <div class="flex items-center mt-2.2 mb-2 flex-wrap">
    <LumozRadio :high-light="!layer1" @click="layer1 = ''">
      <div class="flex items-center my-1 px-2">
        {{ $t('miner.overview.all') }}
        <span v-if="count" class="ml-1">({{ list.length }})</span>
      </div>
    </LumozRadio>
    <LumozRadio
      v-for="item in NETWORKS.slice(0, 2)"
      :key="item.chain"
      :high-light="item.chain === layer1"
      @click="layer1 = item.chain"
    >
      <div class="flex items-center my-1" :class="getNetworkImg(item.chain) ? '' : 'px-2'">
        <img :src="getNetworkImg(item.chain)" class="w-5 h-5 rounded-full mr-2" />
        {{ item.name }}
        <span v-if="count" class="ml-1">({{ list.filter(_item => _item.layer1 === item.chain).length }})</span>
      </div>
    </LumozRadio>
  </div>
</template>
<script lang="ts" setup>
import { NETWORKS } from '@/libs/data-api'
import { getNetworkImg } from '@/libs/utils'
const layer1 = ref('')

const props = withDefaults(
  defineProps<{
    list?: any[]
    count?: boolean
  }>(),
  {
    list: () => [],
    count: false
  }
)

watch(
  () => layer1.value,
  () => {
    emit('change', layer1.value)
  }
)

const emit = defineEmits(['change'])
</script>
