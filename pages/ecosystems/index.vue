
<template>
  <div class="container mx-auto">
    <div class="lg:flex items-center py-10">
      <div class="lg:(w-1/2 pr-10) flex flex-col items-center lg:items-start">
        <div class="text-3xl text-center lg:(text-5xl text-left) font-bold">{{ $t('eco.title') }}</div>
        <div class="mt-8 text-center lg:text-left">{{ $t('eco.content') }}</div>
        <HomeButton @click="get" class="mt-8 lg:mt-24 w-40" :word="$t('eco.get')" />
      </div>
      <img src="@/assets/img/eco/banner.avif" alt="" class="w-2/3 mx-auto mt-8 lg:(mt-0 w-1/2 pl-10)">
    </div>
    <div class="mt-12 lg:flex">
      <EcoMenu @change="menuChange" />
      <div class="flex-1 grid grid-cols-2 lg:grid-cols-3 gap-6 lg:pl-12 mt-12 lg:mt-0">
        <div v-for="item, index in ecos" :key="index" class="h-60 border-4 border-[#333332] rounded-xl hvr-grow cursor-pointer eco-outer bg-[#1C1C1C] aaa hover:(border-[#BEFE0088] text-primary-900 bg-[#00000088])" @click="to(item)">
          <div class="h-full flex flex-col items-center justify-center eco-inner overflow-hidden">
            <img :src="item.img" class="w-1/4 rounded-full" alt="">
            <div class="mt-8 font-bold">{{ item.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ECOSYSTEMS } from '@/constants/ecosystems'
const get = () => {
  window.open('https://forms.gle/2d7F2TkE1FQRdtjb9en')
}

const list = ref('All')

const menuChange = (_list: string) => {
  list.value = _list
}

const ecos = computed(() => {
  if (list.value.includes('All')) {
    return ECOSYSTEMS
  }
  return ECOSYSTEMS.filter(item => item.category === list.value)
})

const to = (item: any) => {
  if (item.url) {
    window.open(item.url)
  }
}
</script>
<style scoped>
.aaa:hover{
  background: linear-gradient(269.99deg, #EDEDED22 -1.07%, #B9F80022 99.99%);

}
</style>
