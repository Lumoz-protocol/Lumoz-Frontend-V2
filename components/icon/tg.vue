<template>
  <a
    href="https://t.me/LumozOfficial/2"
    class="h-7 inline-block text-[#292929] transition flex items-center justify-center hvr-bounce-in"
  >
    <div class="w-7 h-7 rounded bg-[#292929] hover:bg-[#34d399] flex items-center justify-center">
      <img src="@/assets/img/icon/tg.svg" class="w-4" />
    </div>
    <span v-if="name" class="ml-1.5">Telegram</span>
  </a>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ href?: string; name?: string }>(), {
  name: ''
})
</script>
<style scoped lang="less">
a:hover {
  color: #1da1f2;
  span {
    color: #1da1f2;
  }
  div {
    background: #1da1f2;
  }
}
</style>
