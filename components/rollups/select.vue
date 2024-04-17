<template>
  <div class="flex items-center justify-end md:justify-between flex-wrap mt-1.5 mb-3">
    <div class="items-center hidden md:flex">
      <LumozRadio
        v-for="item in rollupsShowing.slice(0, 4)"
        :key="item._id"
        :high-light="item._id === type"
        @click="type = item._id"
        class="mb-1 mb-5 lg:mb-0"
      >
        <div class="flex items-center my-1" :class="item.img ? '' : 'px-2'">
          <div v-if="item.img" class="flex items-center mr-2 relative">
            <img :src="item.img" class="w-5 h-5 rounded-full" />
            <img v-if="getNetworkImg(item.layer1 || '')" :src="getNetworkImg(item.layer1 || '')" class="w-3 h-3 absolute -right-1 bottom-0" />
          </div>
          {{ item.name }}
          <div v-if="showCount">({{ getRollupCount(item) }})</div>
        </div>
      </LumozRadio>
    </div>
    <client-only>
      <div class="flex justify-end w-64">
        <el-select v-model="type" effect="dark" class="w-64" filterable size="default">
          <template #prefix>
            <div v-if="type" class="flex items-center mr-4 relative">
              <img
                :src="rollups.find(item => item._id === type)?.img"
                class="w-5 h-5 rounded-full"
              />
              <img
                v-if="getNetworkImg(rollups.find(item => item._id === type)?.layer1 || '')"
                :src="getNetworkImg(rollups.find(item => item._id === type)?.layer1) || ''"
                class="w-3 h-3 absolute -right-1 bottom-0"
              />
            </div>
          </template>
          <el-option
            v-for="item in rollupsShowing"
            :key="item._id"
            :label="item.name"
            :value="item._id"
          >
            <div class="flex items-center text-xs">
              <div v-if="item.img" class="flex items-center mr-4 relative">
                <img :src="item.img" class="w-5 h-5 rounded-full" />
                <img v-if="getNetworkImg(item.layer1)" :src="getNetworkImg(item.layer1)" class="w-3 h-3 absolute -right-1 bottom-0" />
              </div>
              <div v-else class="px-2 mr-3">-</div>
              {{ item.name }}
              <div v-if="showCount">({{ getRollupCount(item) }})</div>
            </div>
          </el-option>
        </el-select>
      </div>
    </client-only>
  </div>
</template>
<script lang="ts" setup>
import { getNetworkImg } from '@/libs/utils'
const type = ref('')
const vm = getCurrentInstance()?.proxy

const rollupsShowing = computed(() => {
  return [
    {
      _id: '',
      name: vm.$t('miner.overview.all')
    },
    ...props.rollups
  ]
})

const props = withDefaults(
  defineProps<{
    rollups: any[]
    appList: any[]
    showCount?: boolean
  }>(),
  {
    rollups: () => {
      return []
    },
    appList: () => {
      return []
    },
    showCount: false
  }
)

watch(
  () => type.value,
  () => {
    emit('change', type.value)
  }
)

const emit = defineEmits(['change'])

const getRollupCount = (item: any) => {
  if (!item._id) {
    return props.appList.length
  } else if (item._id === -1) {
    return props.appList.filter(_item => _item.layer == 'Lumoz').length
  }
  return props.appList.filter(_item => _item.rollupId == item._id).length
}
</script>
<style>
.el-select-dropdown__item {
  display: flex;
  align-items: center;
}
</style>
