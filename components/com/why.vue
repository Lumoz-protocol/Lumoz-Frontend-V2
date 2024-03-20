<template>
  <div class="mt-16 lg:mt-32 container mx-auto">
    <h1 class="text-4xl font-bold text-center mb-12">{{ $t('com.why.title') }}</h1>
    <div class="raas-why grid lg:grid-cols-3 py-12">
      <div class="p-16 text-center flex items-center justify-center flex-col hvr-bounce-in cursor-pointer">
        <div class="flex items-center justify-center">
          <img src="@/assets/img/com/w1.png" class="h-16">
        </div>
        <div class="text-xl font-bold my-4">{{ $t('com.why.t1') }}</div>
        <div class="h-20">{{ $t('com.why.c1') }}</div>
      </div>

      <div class="p-16 text-center flex items-center justify-center flex-col hvr-bounce-in cursor-pointer">
        <div class="flex items-center justify-center">
          <img src="@/assets/img/com/w2.png" class="h-16">
        </div>
        <div class="text-xl font-bold my-4">{{ $t('com.why.t2') }}</div>
        <div class="h-20">{{ $t('com.why.c2') }}</div>
      </div>

      <div class="p-16 text-center flex items-center justify-center flex-col hvr-bounce-in cursor-pointer">
        <div class="flex items-center justify-center">
          <img src="@/assets/img/com/w3.png" class="h-16">
        </div>
        <div class="text-xl font-bold my-4">{{ $t('com.why.t3') }}</div>
        <div class="h-20">{{ $t('com.why.c3') }}</div>
      </div>

      <div class="p-16 text-center flex items-center justify-center flex-col hvr-bounce-in cursor-pointer">
        <div class="flex items-center justify-center">
          <img src="@/assets/img/com/w4.png" class="h-16">
        </div>
        <div class="text-xl font-bold my-4">{{ $t('com.why.t4') }}</div>
        <div class="h-20">{{ $t('com.why.c4') }}</div>
      </div>

      <div class="p-16 text-center flex items-center justify-center flex-col hvr-bounce-in cursor-pointer">
        <div class="flex items-center justify-center">
          <img src="@/assets/img/com/w5.png" class="h-16">
        </div>
        <div class="text-xl font-bold my-4">{{ $t('com.why.t5') }}</div>
        <div class="h-20">{{ $t('com.why.c5') }}</div>
      </div>

      <div class="p-16 text-center flex items-center justify-center flex-col hvr-bounce-in cursor-pointer">
        <div class="flex items-center justify-center">
          <img src="@/assets/img/com/w6.png" class="h-16">
        </div>
        <div class="text-xl font-bold my-4">{{ $t('com.why.t6') }}</div>
        <div class="h-20">{{ $t('com.why.c6') }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>

@media (min-width: 1024px) {
  .raas-why {
    background: url(@/assets/img/com/grid.png) no-repeat;
    background-size: 100% 100%;
  }
}
</style>