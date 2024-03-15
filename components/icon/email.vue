<template>
  <a
    href="mailto:contact@lumoz.org"
    class="h-7 inline-block text-[#292929] transition flex items-center justify-center hvr-bounce-in"
  >
    <div class="w-7 h-7 rounded bg-[#292929] hover:bg-[#34d399] flex items-center justify-center">
      <img src="@/assets/img/icon/email.svg" class="w-4" />
    </div>
    <span v-if="name" class="ml-1.5 text-text-200">Email</span>
  </a>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ href?: string; name?: string }>(), {
  name: ''
})
</script>
<style scoped lang="less">
a:hover {
  color: #34d399;
  span {
    color: #34d399;
  }
  div {
    background: #34d399;
  }
}
</style>
