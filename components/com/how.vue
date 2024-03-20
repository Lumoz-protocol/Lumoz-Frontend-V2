<template>
  <div class="com-how container mx-auto pt-12 lg:pt-32">
    <div class="hidden lg:block">
      <h1 class="text-3xl lg:text-4xl font-bold text-center mb-12 lg:mb-24">{{ $t('com.how.title') }}</h1>
      <div class="lg:flex items-start">
        <div class="lg:w-100 pt-4">
          <div :class="show === 1 ? 'border-primary-900 text-black bg-primary-900' : 'bg-[#ffffff11]'" class="font-bold border text-center rounded-full cursor-pointer p-2 hvr-grow flex w-full text-lg" @click="show=1">
            {{ $t('com.how.t1') }}
          </div>
          <p v-if="show === 1" class="my-4 text-text-dark">{{ $t('com.how.c1') }}</p>
          <div :class="show === 2 ? 'border-primary-900 text-black bg-primary-900' : 'bg-[#ffffff11]'" class="mt-8 font-bold border text-center rounded-full cursor-pointer p-2 hvr-grow flex w-full text-lg" @click="show=2">
            {{ $t('com.how.t2') }}
          </div>
          <p v-if="show === 2" class="my-4 text-text-dark">{{ $t('com.how.c2') }}</p>
          <div :class="show === 3 ? 'border-primary-900 text-black bg-primary-900' : 'bg-[#ffffff11]'" class="mt-8 font-bold border text-center rounded-full cursor-pointer p-2 hvr-grow flex w-full text-lg" @click="show=3">
            {{ $t('com.how.t3') }}
          </div>
          <p v-if="show === 3" class="my-4 text-text-dark">{{ $t('com.how.c3') }}</p>
        </div>
        <div class="pl-8 mx-auto flex-1">
          <img v-if="show === 1" src="@/assets/img/com/h1.avif" class="animate__animated animate__fadeIn" alt="">
          <img v-if="show === 2" src="@/assets/img/com/h2.avif" class="animate__animated animate__fadeIn" alt="">
          <img v-if="show === 3" src="@/assets/img/com/h3.avif" class="animate__animated animate__fadeIn" alt="">
        </div>
      </div>
    </div>

    <div class="lg:hidden">
      <h1 class="text-3xl lg:text-4xl font-bold text-center mb-12 lg:mb-24">{{ $t('com.how.title') }}</h1>
      <div class="lg:flex items-start">
        <div class="lg:w-100 pt-4">
          <div class="font-bold border text-center rounded-full cursor-pointer p-2 hvr-grow flex w-full text-lg border-primary-900 text-black bg-primary-900">
            {{ $t('com.how.t1') }}
          </div>
          <p class="my-4 text-text-dark text-center">{{ $t('com.how.c1') }}</p>
          <img src="@/assets/img/com/h1.avif" class="animate__animated animate__fadeIn" alt="">

          <div class="mt-16 font-bold border text-center rounded-full cursor-pointer p-2 hvr-grow flex w-full text-lg border-primary-900 text-black bg-primary-900">
            {{ $t('com.how.t2') }}
          </div>
          <p class="my-4 text-text-dark text-center">{{ $t('com.how.c2') }}</p>
          <img src="@/assets/img/com/h2.avif" class="animate__animated animate__fadeIn" alt="">

          <div class="mt-16 font-bold border text-center rounded-full cursor-pointer p-2 hvr-grow flex w-full text-lg border-primary-900 text-black bg-primary-900">
            {{ $t('com.how.t3') }}
          </div>
          <p class="my-4 text-text-dark text-center">{{ $t('com.how.c3') }}</p>
          <img src="@/assets/img/com/h3.avif" class="animate__animated animate__fadeIn" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const show = ref(1)
</script>
<style>
.com-how .el-carousel__indicators{
  display: none !important;
}
</style>