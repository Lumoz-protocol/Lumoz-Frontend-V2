<template>
<div>
  <div class="absolute left-0 right-0 top-30 full-lock-scroll">
      <div v-if="active" class="container mx-auto">
        <div class="text-2xl lg:text-4xl font-bold pl-4 lg:pl-0 home-arc-1 animate__animated animate__fadeInUp animate__slower">{{ $t('home.ben.title') }}</div>
        <div class="text-8xl lg:text-12xl xl:text-16xl font-bold text-[#ffffff22] mt-8 home-arc-2 animate__animated animate__fadeInUp animate__delay-1s animate__slower">{{ $t('home.ben.title').toUpperCase() }}</div>
        <div class="text-8xl lg:text-12xl xl:text-16xl font-bold text-[#ffffffaa] mt-8 home-arc-3 animate__animated animate__fadeInUp animate__delay-2s animate__slower">{{ $t('home.ben.title').toUpperCase() }}</div>
      </div>
    </div> 
  <div class="absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center home-ben-box full-lock-scroll">
    <div class="h-full w-full pt-20 overflow-y-auto hide-scroll full-lock-scroll" id="home-ben" @mousewheel="scrollChange">
      <div class="mx-25 md:mx-10 lg:mx-20 xl:mx-40 flex justify-end pt-30 pb-40 lg:(pt-40 pb-0)">
        <div class="w-full xl:w-3/5">
          <HomeBox class="md:(w-1/2 ml-1/4) lg:(w-2/5 ml-3/5)">
            <div class="flex flex-col text-black justify-between h-full">
              <div class="text-xl h-12 pl-4 font-bold">{{ $t('home.ben.t1') }}</div>
              <div class="text-xl px-4 mb-8 xl:text-base 2xl:text-xl">{{ $t('home.ben.c1') }}</div>
            </div>
          </HomeBox>
          <HomeBox class="mt-12 md:(w-1/2 ml-1/4) lg:(ml-0 w-2/5 -mt-40)">
            <div class="flex flex-col text-black justify-between h-full">
              <div class="text-xl h-12 pl-4 font-bold">{{ $t('home.ben.t2') }}</div>
              <div class="text-xl px-4 mb-8 xl:text-base 2xl:text-xl">{{ $t('home.ben.c2') }}</div>
            </div>
          </HomeBox>
          <HomeBox class="mt-12 md:(w-1/2 ml-1/4) lg:(w-2/5 ml-3/5 -mt-40)">
            <div class="flex flex-col text-black justify-between h-full">
              <div class="text-xl h-12 pl-4 font-bold">{{ $t('home.ben.t3') }}</div>
              <div class="text-xl px-4 mb-8 xl:text-base 2xl:text-xl">{{ $t('home.ben.c3') }}</div>
            </div>
          </HomeBox>
        </div>
      </div>
      <div class="h-40"></div>
      <CommonFooter />
    </div>
  </div>
</div>
</template>
<script setup lang="ts">
const emit = defineEmits(['before', 'next'])
const props = withDefaults(
  defineProps<{
    active: boolean
  }>(),
  {
    active: false
  }
)

const scrollChange = (e) => {
  e.stopImmediatePropagation()
  const dom = document.getElementById('home-ben')
  const scrollTop = dom.scrollTop
  const height = dom.clientHeight
  const scrollHeight = dom.scrollHeight
 
  if (e.deltaY < 0 && scrollTop === 0) {
    dom.scrollTop = 1
    emit('before')
  } else if (e.deltaY > 0 && scrollTop + height >= scrollHeight - 0.5) {
    dom.scrollTop = scrollTop + height - 1
    emit('next')
  }
}

</script>
<style scoped>
.home-ben-box {
  background: url('@/assets/img/home/ben.avif');
  background-size: 50%;
  background-position: left center;
  background-repeat: no-repeat;
}
</style>