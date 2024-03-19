<template>
<div>
  <video v-if="active" class="absolute top-0 bottom-0 left-0 right-0 home-video" id="Id" playsinline="true" autoplay="true" muted="false" loop="true">
    <source src="@/assets/img/home/ai.mp4" type="video/mp4">
  </video>
  <div class="absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center home-ai-box">
    <div class="h-full w-full pt-20">
      <div v-if="active" class="lg:(w-1/2 ml-1/2) 2xl:ml-2/3 flex items-center lg:items-start lg:justify-center h-full flex-col mt-8 lg:mt-0">
        <div class="font-blinker text-3xl lg:text-5xl typed-out text-center lg:text-left" style="font-weight: 300">{{ $t('home.service') }}</div>
        <div>
          <h1 class="text-2xl lg:text-6xl font-bold typed-out mt-8">{{ $t('home.ai.title') }}</h1>
        </div>
        <p class="px-4 md:(w-1/2 px-0) lg:(w-full pr-16) 2xl:(w-2/3 px-0 pr-16) mt-8 animate__animated animate__fadeIn animate__delay-1s text-lg text-center lg:text-left">{{ $t('home.ai.content') }}</p>
      </div>
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
.home-ai-box {
  overflow: hidden;
}
</style>