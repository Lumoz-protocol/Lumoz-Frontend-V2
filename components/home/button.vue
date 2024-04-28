<template>
  <button class="home-button-corner px-4 py-1.5 hvr-bounce-in" :class="light ? 'home-button-corner-light text-white' : 'home-button-corner text-black'">{{ word }}<slot></slot></button>
</template>
<script setup lang="ts">
withDefaults(
  defineProps<{
    word?: string
    light?: boolean
  }>(),
  {
    word: '',
    light: false
  }
)
</script>
<style>
.home-button-corner {
  background: url(@/assets/img/home/home-button.png) no-repeat;
  background-size:100% 100%;
}
.home-button-corner-light {
  background: url(@/assets/img/home/home-button-light.png) no-repeat;
  background-size:100% 100%;
}
</style>