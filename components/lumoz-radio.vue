<template>
  <div
    class="border px-2 mr-2 rounded-full mb-2 text-xs h-7 flex items-center"
    :class="
      disabled ? 'text-[#444444] cursor-not-allowed bg-[#222222] border-[#222222]' :
      highLight
        ? 'bg-primary-900 opacity-85 text-black border border-primary-900 text-black hover:(opacity-100 text-black) font-bold cursor-pointer'
        : 'bg-dark-200 text-[#CCCCCC] hover:(text-primary-900 border-primary-900) border-dark-200 cursor-pointer'
    "
  >
    <div>{{ content }}</div>
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
withDefaults(
  defineProps<{
    content: string
    highLight: boolean
    disabled?: boolean
  }>(),
  {
    content: '',
    highLight: false,
    disabled: false
  }
)
</script>
