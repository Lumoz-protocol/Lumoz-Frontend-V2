<template>
    <div class="hvr-grow">
        <div v-if="type== 1" class="flex items-center justify-center qui-button-bg cursor-pointer animated-button text-[#D6C2A2] h-10 w-40">
            <slot></slot>
        </div>
        <div v-else-if="type == 2" class="flex items-center justify-center qui-button-bg2 cursor-pointer animated-button h-11">
            <slot></slot>
        </div>
        <div v-if="type== 3" class="flex items-center justify-center qui-button-bg cursor-pointer animated-button text-[#D6C2A2] h-10 w-full">
            <slot></slot>
        </div>
    </div>
</template>
<script setup lang="ts">
withDefaults(
  defineProps<{
    type?: number
  }>(),
  {
    type: 1
  }
)
</script>
<style scoped>
.qui-button-bg {
    background: url(@/assets/img/quidditch/button-bg.avif) no-repeat;
    background-size: 100% 100%;
}
.qui-button-bg2 {
    background: url(@/assets/img/quidditch/button-bg2.png) no-repeat;
    background-size: 100% 100%;
}
</style>
