<template>
  <div class="absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center home-ben-box">
    <div class="h-full w-full pt-20 overflow-y-auto hide-scroll" id="home-ben" @mousewheel="scrollChange">
      <div class="container mx-auto">
        <div class="h-20 flex items-center">
          <div v-if="active" class="text-2xl lg:text-4xl font-bold animate__animated animate__fadeIn animate__delay-1s pl-4 lg:pl-0">{{ $t('home.ben.title') }}</div>
        </div>
      </div>
      <div class="mx-25 md:mx-10 lg:mx-20 xl:mx-40 flex justify-end pt-20 pb-40 lg:(pt-40 pb-0)">
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
</template>
<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    active: boolean
  }>(),
  {
    active: false
  }
)

const scrollChange = (e) => {
  const dom = document.getElementById('home-ben')
  const scrollTop = dom.scrollTop
  const height = dom.clientHeight
  const scrollHeight = dom.scrollHeight
 
  if (scrollTop === 0) {
    dom.scrollTop = 1
  } else if (scrollTop + height === scrollHeight - 0.5) {
    dom.scrollTop = scrollTop + height - 1
  } else {
    e.stopImmediatePropagation()
  }
}

</script>
<style scoped>
.home-ben-box {
  background: url('@/assets/img/home/ben.png');
  background-size: 50%;
  background-position: left center;
  background-repeat: no-repeat;
}
</style>