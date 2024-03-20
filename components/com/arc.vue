<template>
  <div class="mt-16 lg:mt-32">
    <h1 class="text-4xl font-bold text-center mb-12">{{ $t('com.arc.title') }}</h1>
    <div class="lg:grid lg:grid-cols-3 gap-4 lg:gap-8">
      <div class="lg:col-span-3 raas-arc-shadow p-8 rounded-2xl flex items-center justify-between">
        <div class="text-2xl slideShine font-bold">{{ $t('com.arc.t1') }}</div>
        <div class="flex items-center">
          <RaasNet type="btc" />
          <RaasNet type="eth" class="ml-4" />
          <RaasNet type="polygon" class="ml-4" />
          <RaasNet type="bnb" class="ml-4" />
          <RaasNet type="sol" class="ml-4" />
          <RaasNet type="more" class="ml-4" />
        </div>
      </div>
      <!-- <div class="raas-arc-shadow-right flex items-center justify-center text-lg font-bold rounded-2xl py-6 lg:py-0 mx-auto w-1/2 lg:w-full mt-4 lg:mt-0">
        {{ $t('com.arc.c1') }}
      </div> -->

      <div class="col-span-3 raas-arc-shadow p-8 rounded-2xl flex items-center justify-between mt-4 lg:mt-0">
        <div class="text-2xl slideShine font-bold">{{ $t('com.arc.t2') }}</div>
        <div class="flex items-center">
          <RaasNet type="polygon" />
          <RaasNet type="scroll" class="ml-4" />
          <RaasNet type="zksync" class="ml-4" />
          <RaasNet type="stark" class="ml-4" />
          <RaasNet type="linea" class="ml-4" />
          <RaasNet type="more" class="ml-4" />
        </div>
      </div>
      <!-- <div class="raas-arc-shadow-right flex items-center justify-center text-lg font-bold rounded-2xl py-6 lg:py-0 mx-auto w-1/2 lg:w-full mt-4 lg:mt-0">
        {{ $t('com.arc.c2') }}
      </div> -->

      <div class="col-span-3 raas-arc-shadow p-8 rounded-2xl flex items-center justify-between mt-4 lg:mt-0">
        <div class="text-2xl slideShine font-bold">{{ $t('com.arc.t3') }}</div>
        <div class="flex items-center">
          <RaasNet type="eth" />
          <RaasNet type="lumoz" class="ml-4" />
          <RaasNet type="eigen" class="ml-4" />
          <RaasNet type="celestia" class="ml-4" />
          <RaasNet type="eths" class="ml-4" />
          <RaasNet type="more" class="ml-4" />
        </div>
      </div>
      <!-- <div class="raas-arc-shadow-right flex items-center justify-center text-lg font-bold rounded-2xl py-6 lg:py-0 mx-auto w-1/2 lg:w-full mt-4 lg:mt-0">
        {{ $t('com.arc.c3') }}
      </div> -->

      <div class="col-span-3 raas-arc-shadow p-8 rounded-2xl flex items-center justify-between mt-4 lg:mt-0">
        <div class="text-2xl slideShine font-bold">{{ $t('com.arc.t4') }}</div>
        <div class="flex items-center">
          <RaasNet type="lumoz" />
          <RaasNet type="esp" class="ml-4" />
          <RaasNet type="radius" class="ml-4" />
          <RaasNet type="more" class="ml-4" />
        </div>
      </div>
      <!-- <div class="raas-arc-shadow-right flex items-center justify-center text-lg font-bold rounded-2xl py-6 lg:py-0 mx-auto w-1/2 lg:w-full mt-4 lg:mt-0">
        {{ $t('com.arc.c4') }}
      </div> -->

      <div class="col-span-3 raas-arc-shadow p-8 rounded-2xl flex items-center justify-between mt-4 lg:mt-0">
        <div class="text-2xl slideShine font-bold">{{ $t('com.arc.t5') }}</div>
        <div class="slideShine font-bold flex-1 text-center pl-8 lg:pl-0 text-2xl lg:text-4xl">{{ $t('com.arc.c5') }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.raas-arc-shadow {
  background: linear-gradient(180deg, #333332 -12.32%, #22242A 105.82%);
  box-shadow: -11px -21px 60px 0px #252524; 
}
.raas-arc-shadow-right {
  background: linear-gradient(0deg, #0c0c0c 0%, #0c0c0c 100%);
  box-shadow: 0px 0px 30px 0px rgb(0, 0, 0) inset;
}
</style>

