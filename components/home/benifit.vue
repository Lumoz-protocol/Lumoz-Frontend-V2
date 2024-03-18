<template>
<div>
  <div class="absolute left-0 right-0 top-20 bottom-0 z-0 full-lock-scroll flex flex-col">
    <div v-show="active" class="px-8 2xl:px-40 hidden lg:block w-full font-blinker">
      <div class="mt-24 text-left text-6xl lg:text-8xl xl:text-10xl 2xl:text-12xl font-bold text-[#ffffff22] home-arc-2 animate__animated animate__fadeInLeft animate__slower">{{ $t('home.ben.title').toUpperCase() }}</div>
      <div class="z-0 text-right mt-24 text-6xl lg:text-8xl xl:text-10xl 2xl:text-12xl font-bold text-[#e3e3e3] home-arc-3 animate__animated animate__fadeInRight animate__delay-1s animate__slower">{{ $t('home.ben.title').toUpperCase() }}</div>
    </div>
  </div> 
  <div class="absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center home-ben-box full-lock-scroll">
    <div class="h-full w-full pt-20 overflow-y-auto hide-scroll full-lock-scroll" id="home-ben" @mousewheel="scrollChange">
    <div class="px-8 py-10 text-2xl lg:text-4xl font-bold home-arc-1 animate__animated animate__fadeIn animate__slower">{{ $t('home.ben.title') }}</div>
      <div class="mt-10 lg:mt-30 px-30 md:px-20 lg:px-40 xl:px-20">
        <div class="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          <div class="flex items-center justify-center">
            <HomeBox class="xl:w-96">
              <div class="flex flex-col text-black h-full">
                <div class="text-2xl h-12 pl-4 font-bold">{{ $t('home.ben.t1') }}</div>
                <div class="text-xl px-4 mb-8 xl:text-xl mt-8">{{ $t('home.ben.c1') }}</div>
              </div>
            </HomeBox>
          </div>
          <div class="flex items-center justify-center">
            <HomeBox class="xl:w-96">
              <div class="flex flex-col text-black h-full">
                <div class="text-2xl h-12 pl-4 font-bold">{{ $t('home.ben.t2') }}</div>
                <div class="text-xl px-4 mb-8 xl:text-xl mt-8">{{ $t('home.ben.c2') }}</div>
              </div>
            </HomeBox>
          </div>
          <div class="flex items-center justify-center">
            <HomeBox class="xl:w-96">
              <div class="flex flex-col text-black h-full">
                <div class="text-2xl h-12 pl-4 font-bold">{{ $t('home.ben.t3') }}</div>
                <div class="text-xl px-4 mb-8 xl:text-xl mt-8">{{ $t('home.ben.c3') }}</div>
              </div>
            </HomeBox>
          </div>
        </div>
      </div>
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
/* .home-ben-box {
  background: url('@/assets/img/home/ben.avif');
  background-size: 50%;
  background-position: left center;
  background-repeat: no-repeat;
} */
</style>