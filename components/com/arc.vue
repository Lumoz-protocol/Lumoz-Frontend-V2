<template>
  <div class="mt-16 container mx-auto">
    <div class="">
      <div class="text-center">
        <div class="text-xl lg:text-3xl font-bold">{{ $t('com.arc.des1') }}</div>
        <div class="my-4 lg:(my-8 w-2/3) mx-auto">{{ $t('com.arc.des2') }}</div>
      </div>
      <div class="">
        <div class="raas-arc-shadow p-4 rounded-2xl flex items-center">
          <div class="text-xl slideShine font-bold h-16 flex items-center w-30 lg:w-60">{{ $t('com.arc.t1') }}</div>
          <div class="grid grid-cols-4 lg:grid-cols-7 gap-8 lg:gap-0 flex-1">
            <ComNet name="Bitcoin" type="btc" />
            <ComNet name="Ethereum" type="eth" class="ml-2 lg:ml-4" />
            <ComNet name="Polygon" type="polygon" class="ml-2 lg:ml-4" />
            <ComNet name="BSC" type="bnb" class="ml-2 lg:ml-4" />
            <ComNet name="Solana" type="sol" class="ml-2 lg:ml-4" />
            <ComNet :name="$t('com.arc.more')" type="more" class="ml-2 lg:ml-4" />
          </div>
        </div>

        <div class="raas-arc-shadow p-4 rounded-2xl flex items-center text-xl mt-4">
          <div class="text-xl slideShine font-bold h-16 flex items-center w-30 lg:w-60">{{ $t('com.arc.t2') }}</div>
          <div class="grid grid-cols-4 lg:grid-cols-7 gap-8 lg:gap-0 flex-1">
            <ComNet name="Polygon CDK" type="polygon" />
            <ComNet name="Scroll" type="scroll" class="ml-2 lg:ml-4" />
            <ComNet name="zkSync" type="zksync" class="ml-2 lg:ml-4" />
            <ComNet name="StarkNet" type="stark" class="ml-2 lg:ml-4" />
            <ComNet name="Linea" type="linea" class="ml-2 lg:ml-4" />
            <ComNet name="Taiko" type="taiko" class="ml-2 lg:ml-4" />
            <ComNet :name="$t('com.arc.more')" type="more" class="ml-2 lg:ml-4" />
          </div>
        </div>

        <div class="raas-arc-shadow p-4 rounded-2xl flex items-center justify-between text-xl mt-4">
          <div class="text-xl slideShine font-bold h-16 flex items-center w-30 lg:w-60">{{ $t('com.arc.t3') }}</div>
          <div class="grid grid-cols-4 lg:grid-cols-7 gap-8 lg:gap-0 flex-1">
            <ComNet name="Ethereum" type="eth" />
            <ComNet name="Eigenlayer" type="eigen" class="ml-2 lg:ml-4" />
            <ComNet name="Celestia" type="celestia" class="ml-2 lg:ml-4" />
            <ComNet name="ETHStorage" type="eths" class="ml-2 lg:ml-4" />
            <ComNet name="Avail" type="avail" class="ml-2 lg:ml-4" />
            <ComNet :name="$t('com.arc.more')" type="more" class="ml-2 lg:ml-4" />
          </div>
        </div>

        <div class="raas-arc-shadow p-4 rounded-2xl flex items-center text-xl mt-4">
          <div class="text-xl slideShine font-bold h-16 flex items-center w-30 lg:w-60">{{ $t('com.arc.t4') }}</div>
          <div class="grid grid-cols-4 lg:grid-cols-7 gap-8 lg:gap-0 flex-1">
            <ComNet name="EspressoSys" type="esp" class="ml-2 lg:ml-4" />
            <ComNet name="Radius" type="radius" class="ml-2 lg:ml-4" />
            <ComNet name="Metis" type="metis" class="ml-2 lg:ml-4" />
            <ComNet :name="$t('com.arc.more')" type="more" class="ml-2 lg:ml-4" />
          </div>
        </div>

        <div class="p-4 rounded-2xl flex items-center py-10 text-xl mt-4 bg-[#BEFE0033]">
          <div class="text-xl slideShine font-bold">{{ $t('com.arc.t5') }}</div>
          <div class="slideShine font-bold flex-1 text-center pl-8 text-xl lg:text-3xl">{{ $t('com.arc.c5') }}</div>
        </div>
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

