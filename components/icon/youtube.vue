<template>
  <a
    href="https://www.youtube.com/@LumozOrg"
    target="_blank"
    class="h-7 inline-block text-[#292929] transition flex items-center justify-center hvr-bounce-in"
  >
    <div class="w-7 h-7 rounded bg-[#292929] hover:bg-[#e93620] flex items-center justify-center">
      <img src="@/assets/img/icon/youtube.svg" class="w-4" />
    </div>
    <span v-if="name" class="ml-1.5">Youtube</span>
  </a>
</template>
<script setup lang="ts">
withDefaults(defineProps<{ href?: string; name?: string }>(), {
  name: ''
})
</script>
<style scoped lang="less">
a:hover {
  color: #e93620;
  span {
    color: #e93620;
  }
  div {
    background: #e93620;
  }
}
</style>
