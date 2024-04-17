<template>
<div class="relative mt-32 lg:mt-24">
  <!-- <div class="hidden lg:flex absolute left-0 right-0 top-0 bottom-0 flex-col items-center justify-center text-14xl xl:text-18xl font-bold z-0">
    <div class="text-[#2e2e2e] mt-12">{{ $t('com.news.title1').toUpperCase() }}</div>
    <div class="mt-22">{{ $t('com.news.title1').toUpperCase() }}</div>
  </div> -->
  <div class="flex items-center justify-center container mx-auto home-ben-box full-lock-scroll pb-30 z-1">
    <div class="h-full w-full overflow-y-auto hide-scroll full-lock-scroll " id="home-ben">
      <div class="py-4 lg:(py-10) text-3xl lg:text-4xl font-bold home-arc-1">{{ $t('com.news.title') }}</div>
      <div class="mt-10 p-8">
        <div class="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 ">
          <div class="flex items-center justify-center">
            <HomeBox hide class="px-20 lg:px-0 xl:(w-96 px-0)">
              <a class="flex flex-col justif text-black h-full" target="_blank" href="https://www.theblock.co/post/286969/lumoz-crypto-funding-token-round-valuation?utm_source=twitter&utm_medium=social">
                <div class="text-xl mt-8 pl-4 font-bold">{{ $t('com.news.t1') }}</div>
                <div class="text-xl px-4 mb-4 xl:text-xl mt-4 xl:mt-12">
                  <img src="@/assets/img/com/n1.avif" alt="">
                </div>
                <div class="px-4 font-bold">2024-04-08</div>
              </a>
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