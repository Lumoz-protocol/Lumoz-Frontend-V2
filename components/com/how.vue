<template>
<div class="com-how py-12 lg:py-32">
  <div class="container mx-auto">
    <h1 class="text-3xl lg:text-4xl font-bold text-center mb-12 lg:mb-24">{{ $t('com.how.title') }}</h1>

    <div class="grid lg:grid-cols-2 gap-8 items-center mb-12">
      <div class="text-center lg:text-left">
        <div class="font-bold text-2xl lg:text-4xl">
          {{ $t('com.how.t1') }}
        </div>
        <p class="text-text-dark mt-8">{{ $t('com.how.c1') }}</p>
      </div>
      
      <img src="@/assets/img/com/h1.avif" class="cursor-pointer hvr-grow" alt="">
    </div>

    <div class="grid lg:grid-cols-2 gap-8 items-center mb-12">
      <div class="text-center lg:text-left">
        <div class="font-bold text-2xl lg:text-4xl">
          {{ $t('com.how.t2') }}
        </div>
        <p class="text-text-dark mt-8">{{ $t('com.how.c2') }}</p>
      </div>
      
      <img src="@/assets/img/com/h2.avif" class="cursor-pointer hvr-grow" alt="">
    </div>

    <div class="grid lg:grid-cols-2 gap-8 items-center">
      <div class="text-center lg:text-left">
        <div class="font-bold text-2xl lg:text-4xl">
          {{ $t('com.how.t3') }}
        </div>
        <p class="text-text-dark mt-8">{{ $t('com.how.c3') }}</p>
      </div>
      
      <img src="@/assets/img/com/h3.avif" class="cursor-pointer hvr-grow" alt="">
    </div>
  </div>
</div>
</template>
<style scoped>
.com-how {
  background: linear-gradient(180deg, rgba(55, 55, 55, 0) 0%, #101010 100%);
}
</style>