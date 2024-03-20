<template>
  <div>
    <div class="mx-auto flex flex-col items-center justify-center mt-12 lg:mt-24">
      <h1 class="text-3xl lg:text-5xl font-bold">{{ $t('com.title1') }}</h1>
      <p class="mt-4 text-sm lg:text-xl">{{ $t('com.content1') }}</p>
      <p class="text-sm lg:text-xl">{{ $t('com.content2') }}</p>
      <HomeButton @click="to('https://docs.lumoz.org/')" class="mt-8 text-base w-40" :word="$t('com.building')" />
    </div>
    <div class="h-30"></div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 container mx-auto pb-10 lg:pb-20">
      <img src="@/assets/img/com/banner.svg" class="w-2/3 ml-1/6 pr-10 lg:(w-4/5 ml-1/10) cursor-pointer hvr-grow">
      <div class="flex flex-col justify-center text-center lg:text-left">
        <h1 class="text-3xl pl-10 lg:text-4xl font-bold">{{ $t('com.t1') }}</h1>
        <p class="mt-8 px-10 text-lg">{{ $t('com.c1') }}</p>
      </div>
    </div>
    <div class="relative compute-box">
      <div class="container mx-auto h-full">
        <div class="lg:w-1/2 h-full flex flex-col justify-center pl-10 text-center lg:text-left">
          <h1 class="text-3xl lg:text-4xl font-bold">{{ $t('com.t2') }}</h1>
          <p class="mt-8 text-lg">{{ $t('com.c2') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.compute-box {
  background:url(@/assets/img/com/c1.avif) no-repeat;
  background-size: 100% 100%;
  background-position: center;
  aspect-ratio: 1.9;
}

</style>