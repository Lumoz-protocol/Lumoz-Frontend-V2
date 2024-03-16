<template>
  <button class="home-button-corner px-4 py-1.5 text-black hvr-bounce-in">{{ word }}</button>
</template>
<script setup lang="ts">
withDefaults(
  defineProps<{
    word?: string
  }>(),
  {
    word: ''
  }
)
</script>
<style scoped>
.home-button-corner {
  background: url(@/assets/img/home/home-button.png) no-repeat;
  background-size:100% 100%;
}
</style>