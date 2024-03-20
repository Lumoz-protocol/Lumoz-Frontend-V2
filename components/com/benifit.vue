<template>
<div>
  <div class="flex items-center justify-center container mx-auto home-ben-box full-lock-scroll mb-30">
    <div class="h-full w-full pt-20 overflow-y-auto hide-scroll full-lock-scroll" id="home-ben">
      <div class="px-8 py-4 lg:py-10 text-3xl lg:text-4xl font-bold home-arc-1 text-center">{{ $t('home.ben.title') }}</div>
      <div class="mt-10">
        <div class="w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div class="flex items-center justify-center">
            <HomeBox class="px-20 xl:(w-96 px-0)">
              <div class="flex flex-col text-black h-full">
                <div class="text-2xl h-12 pl-4 font-bold">{{ $t('home.ben.t1') }}</div>
                <div class="text-xl px-4 mb-8 xl:text-xl mt-8">{{ $t('home.ben.c1') }}</div>
              </div>
            </HomeBox>
          </div>
          <div class="flex items-center justify-center">
            <HomeBox class="px-20 xl:(w-96 px-0)">
              <div class="flex flex-col text-black h-full">
                <div class="text-2xl h-12 pl-4 font-bold">{{ $t('home.ben.t2') }}</div>
                <div class="text-xl px-4 mb-8 xl:text-xl mt-8">{{ $t('home.ben.c2') }}</div>
              </div>
            </HomeBox>
          </div>
          <div class="flex items-center justify-center">
            <HomeBox class="px-20 xl:(w-96 px-0)">
              <div class="flex flex-col text-black h-full">
                <div class="text-2xl h-12 pl-4 font-bold">{{ $t('home.ben.t3') }}</div>
                <div class="text-xl px-4 mb-8 xl:text-xl mt-8">{{ $t('home.ben.c3') }}</div>
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