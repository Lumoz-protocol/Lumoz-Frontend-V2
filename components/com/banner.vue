<template>
  <div>
    <div class="container mx-auto flex items-center justify-between mt-12 lg:mt-24">
      <div class="w-3/5 lg:w-1/2">
        <h1 class="text-xl lg:text-5xl font-bold">{{ $t('com.title') }}</h1>
        <p class="mt-2 lg:mt-4 text-sm lg:text-xl">{{ $t('com.content') }}</p>
        <a href="mailto:contact@lumoz.org">
          <HomeButton @click="to('https://docs.lumoz.org/')" class="mt-4 lg:mt-8 text-base w-40" :word="$t('com.building')" />
        </a>
      </div>
      <img src="@/assets/img/com/banner.svg" class="cursor-pointer hvr-grow w-2/5 lg:w-1/2 2xl:w-2/5 p-2 lg:p-10">
    </div>
    <ComArc class="mb-40" />

    <div class="relative for-box">
      <div class="container mx-auto h-full">
        <div class="lg:(w-1/2 ml-1/2) h-full flex flex-col justify-center text-center lg:text-left">
          <h1 class="text-2xl lg:text-4xl font-bold">{{ $t('com.t1') }}</h1>
          <p class="mt-2 lg:mt-8 text-sm lg:text-lg">{{ $t('com.c1') }}</p>
        </div>
      </div>
    </div>
    
    <div class="relative compute-box">
      <div class="container mx-auto h-full">
        <div class="lg:w-1/2 h-full flex flex-col justify-center text-center lg:text-left">
          <h1 class="text-2xl lg:text-4xl font-bold">{{ $t('com.t2') }}</h1>
          <p class="mt-2 lg:mt-8 text-sm lg:text-lg">{{ $t('com.c2') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const to = (url: string) => {
  window.open(url)
}
</script>

<style lang="less" scoped>
.compute-box {
  background:url(@/assets/img/com/c1.avif) no-repeat;
  background-size: 100% 100%;
  background-position: center;
  aspect-ratio: 2.2;
}

.for-box {
  background:url(@/assets/img/com/for.avif) no-repeat;
  background-size: 100% 100%;
  background-position: center;
  aspect-ratio: 2.2;
}

</style>