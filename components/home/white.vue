<template>
  <div>
    <div>
      <div class="text-2xl lg:text-4xl font-bold text-center">{{ $t('home.white.title') }}</div>
      <div class="py-8 text-center px-8 lg:(w-2/3 ml-1/6 px-0)">{{ $t('home.white.content') }}</div>
    </div>
    <HomeWhiteStatus />
    <div class="py-8 grid lg:grid-cols-2 gap-8">
      <HomeWhiteGetTier />
      <HomeWhiteDeposit />
    </div>
    <HomeWhiteFaq />
  </div>
</template>
<script setup lang="ts">

</script>
