<template>
<div class="relative mt-32 lg:mt-0">
  <div class="hidden lg:flex absolute left-0 right-0 top-0 bottom-0 flex-col items-center justify-center text-14xl xl:text-18xl font-bold z-0">
    <div class="text-[#2e2e2e] mt-12">{{ $t('home.ben.title').toUpperCase() }}</div>
    <div class="mt-32">{{ $t('home.ben.title').toUpperCase() }}</div>
  </div>
  <div class="flex items-center justify-center container mx-auto home-ben-box full-lock-scroll pb-30 z-1">
    <div class="h-full w-full overflow-y-auto hide-scroll full-lock-scroll" id="home-ben">
      <div class="px-8 py-4 lg:(py-10 pb-20) text-3xl lg:text-4xl font-bold home-arc-1">{{ $t('home.ben.title') }}</div>
      <div class="mt-10">
        <div class="w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div class="flex items-center justify-center">
            <HomeBox class="px-20 lg:px-0 xl:(w-96 px-0)">
              <div class="flex flex-col justif text-black h-full">
                <div class="text-2xl h-12 pl-4 font-bold">{{ $t('home.ben.t1') }}</div>
                <div class="text-xl px-4 mb-8 xl:text-xl mt-24 xl:mt-40">{{ $t('home.ben.c1') }}</div>
              </div>
            </HomeBox>
          </div>
          <div class="flex items-center justify-center">
            <HomeBox class="px-20 lg:px-0 xl:(w-96 px-0)">
              <div class="flex flex-col text-black h-full">
                <div class="text-2xl h-12 pl-4 font-bold">{{ $t('home.ben.t2') }}</div>
                <div class="text-xl px-4 mb-8 xl:text-xl mt-24 xl:mt-40">{{ $t('home.ben.c2') }}</div>
              </div>
            </HomeBox>
          </div>
          <div class="flex items-center justify-center">
            <HomeBox class="px-20 lg:px-0 xl:(w-96 px-0)">
              <div class="flex flex-col text-black h-full">
                <div class="text-2xl h-12 pl-4 font-bold">{{ $t('home.ben.t3') }}</div>
                <div class="text-xl px-4 mb-8 xl:text-xl mt-24 xl:mt-40">{{ $t('home.ben.c3') }}</div>
              </div>
            </HomeBox>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script setup lang="ts">
</script>
<style scoped>
/* .home-ben-box {
  background: url('@/assets/img/home/ben.avif');
  background-size: 50%;
  background-position: left center;
  background-repeat: no-repeat;
} */
</style>