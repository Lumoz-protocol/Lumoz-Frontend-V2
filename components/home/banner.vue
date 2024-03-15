<template>
  <div class="absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center home-banner-box">
    <div class="h-full w-full flex justify-center items-start pt-40">
      <div v-if="active" class="flex items-center justify-center flex-col">
        <div class="typed-out text-3xl md:text-4xl lg:text-6xl py-4 font-bold text-center">{{ $t('home.banner.title') }}</div>
        <div class="typed-out-2s text-2xl py-4 text-primary-900 text-center">{{ $t('home.banner.content') }}</div>
        <HomeButton :word="$t('home.banner.start')" class="mt-4 w-40 animate__animated animate__fadeIn animate__delay-3s" />
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
.home-banner-box {
  overflow: hidden;
  background: url('@/assets/img/home/banner.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>