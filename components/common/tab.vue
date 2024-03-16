<template>
  <button :class="active ? 'home-button-corner text-black' : 'home-button-corner-empty text-primary-900'" class="px-4 py-1.5 hvr-bounce-in">{{ word }}</button>
</template>
<script setup lang="ts">
withDefaults(
  defineProps<{
    word?: string
    active?: boolean
  }>(),
  {
    word: '',
    active: false
  }
)
</script>
<style scoped>
.home-button-corner {
  background: url(@/assets/img/home/home-button.png) no-repeat;
  background-size:100% 100%;
}
.home-button-corner-empty {
  background: url(@/assets/img/home/home-button-empty.png) no-repeat;
  background-size:100% 100%;
}
</style>