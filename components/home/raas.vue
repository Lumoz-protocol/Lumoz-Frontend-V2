<template>
  <div class="absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center home-raas-box">
    <div class="h-full w-full pt-20">
      <div v-if="active" class="lg:(w-1/2 ml-1/6) flex items-center lg:items-start lg:justify-center h-full flex-col mt-8 lg:mt-0">
        <div>
          <h1 class="text-2xl lg:text-6xl font-bold typed-out">{{ $t('home.raas.title') }}</h1>
        </div>
        <p class="px-4 md:(w-1/2 px-0) lg:(w-full pr-16) 2xl:(w-1/2 px-0) mt-8 animate__animated animate__fadeIn animate__delay-2s">{{ $t('home.raas.content') }}</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    active: boolean
  }>(),
  {
    active: false
  }
)
</script>
<style scoped>
.home-raas-box {
  overflow: hidden;
  background: url('@/assets/img/home/raas.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>