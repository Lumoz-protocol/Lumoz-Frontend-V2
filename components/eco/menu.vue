<template>
  <div>
    <div class="hidden w-full flex-wrap w-54 lg:flex flex-col">
      <div v-for="item, index in list" :key="index" @click="checkIt(item)" :class="check.includes(item) ? 'bg-primary-900 text-black opacity-90 hover:opacity-100' : 'hover:text-primary-900'" class="px-4 py-1 rounded-md mt-2 cursor-pointer hvr-grow">
        <div>
          {{ item }} ({{ getCount(item) }})
        </div>
      </div>
    </div>
    <div class="lg:hidden">
      <div v-for="item, index in list" :key="index" @click="checkIt(item)" :class="check === item ? 'bg-primary-900 text-black opacity-90 hover:opacity-100' : 'hover:text-primary-900'" class="px-2 py-0.5 rounded-md mt-1 cursor-pointer hvr-grow mr-1">
        <div>
          {{ item }} ({{ getCount(item) }})
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ECOSYSTEMS } from '@/constants/ecosystems'

const emit = defineEmits(['change'])
const list = ref(['All'].concat(Array.from(new Set(ECOSYSTEMS.map(item => item.category)))))
const check = ref('All')

const getCount = (item: string) => {
  if (item === 'All') {
    return ECOSYSTEMS.length
  }
  return ECOSYSTEMS.filter(_item => _item.category === item).length
}

const checkIt = (item: string) => {
  check.value = item
  emit('change', check.value)
}
</script>