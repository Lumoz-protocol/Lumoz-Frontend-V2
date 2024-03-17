<template>
  <div class="mt-16 lg:mt-32">
    <h1 class="text-4xl font-bold text-center mb-12">{{ $t('raas.why.title') }}</h1>
    <div class="raas-why grid lg:grid-cols-3 py-12">
      <div class="p-16 text-center flex items-center justify-center flex-col hvr-bounce-in cursor-pointer">
        <div class="flex items-center justify-center">
          <img src="@/assets/img/raas/w1.png" class="h-16">
        </div>
        <div class="text-xl font-bold my-4">{{ $t('raas.why.t1') }}</div>
        <div class="h-20">{{ $t('raas.why.c1') }}</div>
      </div>

      <div class="p-16 text-center flex items-center justify-center flex-col hvr-bounce-in cursor-pointer">
        <div class="flex items-center justify-center">
          <img src="@/assets/img/raas/w2.png" class="h-16">
        </div>
        <div class="text-xl font-bold my-4">{{ $t('raas.why.t2') }}</div>
        <div class="h-20">{{ $t('raas.why.c2') }}</div>
      </div>

      <div class="p-16 text-center flex items-center justify-center flex-col hvr-bounce-in cursor-pointer">
        <div class="flex items-center justify-center">
          <img src="@/assets/img/raas/w3.png" class="h-16">
        </div>
        <div class="text-xl font-bold my-4">{{ $t('raas.why.t3') }}</div>
        <div class="h-20">{{ $t('raas.why.c3') }}</div>
      </div>

      <div class="p-16 text-center flex items-center justify-center flex-col hvr-bounce-in cursor-pointer">
        <div class="flex items-center justify-center">
          <img src="@/assets/img/raas/w4.png" class="h-16">
        </div>
        <div class="text-xl font-bold my-4">{{ $t('raas.why.t4') }}</div>
        <div class="h-20">{{ $t('raas.why.c4') }}</div>
      </div>

      <div class="p-16 text-center flex items-center justify-center flex-col hvr-bounce-in cursor-pointer">
        <div class="flex items-center justify-center">
          <img src="@/assets/img/raas/w5.png" class="h-16">
        </div>
        <div class="text-xl font-bold my-4">{{ $t('raas.why.t5') }}</div>
        <div class="h-20">{{ $t('raas.why.c5') }}</div>
      </div>

      <div class="p-16 text-center flex items-center justify-center flex-col hvr-bounce-in cursor-pointer">
        <div class="flex items-center justify-center">
          <img src="@/assets/img/raas/w6.png" class="h-16">
        </div>
        <div class="text-xl font-bold my-4">{{ $t('raas.why.t6') }}</div>
        <div class="h-20">{{ $t('raas.why.c6') }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>

@media (min-width: 1024px) {
  .raas-why {
    background: url(@/assets/img/raas/grid.png) no-repeat;
    background-size: 100% 100%;
  }
}
</style>