<template>
  <div class="lg:flex items-center py-8">
    <div class="lg:(w-2/3 pr-1/8)">
      <div class="slideShine text-3xl text-center lg:(text-5xl text-left) font-bold">{{ $t('home.title') }}</div>
      <div class="font-bold text-center lg:text-left text-lg py-4 lg:py-8">{{ $t('home.content1') }}</div>
      <div class="text-center lg:text-left">{{ $t('home.content2') }}</div>
    </div>
    <img src="@/assets/img/home/banner.avif" class="w-2/3 ml-1/6 mt-8 lg:(w-1/3 ml-0 mt-0)" alt="">
  </div>
</template>