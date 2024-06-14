<template>
    <button class="home-lighter-button-corner px-4 py-1.5 hvr-bounce-in text-black font-bold">
        <slot></slot>
    </button>
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
  .home-lighter-button-corner {
    background: url(@/assets/img/share/color.svg) no-repeat;
    background-size:100% 100%;
  }
</style>