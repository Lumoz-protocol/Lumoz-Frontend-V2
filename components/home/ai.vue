<template>
  <div class="absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center home-ai-box">
    <div class="h-full w-full pt-20">
      <div v-if="active" class="lg:(w-1/2 ml-1/2) 2xl:ml-2/3 flex items-center lg:items-start lg:justify-center h-full flex-col mt-8 lg:mt-0">
        <div>
          <h1 class="text-2xl lg:text-6xl font-bold typed-out">{{ $t('home.ai.title') }}</h1>
        </div>
        <p class="px-4 md:(w-1/2 px-0) lg:(w-full pr-16) 2xl:(w-2/3 px-0 pr-16) mt-8 animate__animated animate__fadeIn animate__delay-2s">{{ $t('home.ai.content') }}</p>
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
  background: url('@/assets/img/home/ai.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>