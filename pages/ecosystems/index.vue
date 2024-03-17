
<template>
  <div class="overflow-hidden">
    <iframe :src="IFRAME_PREFIX+'single-ecosystems'" scrolling="no" width="100%" id="eco-iframe" style="height:100vh" class="overflow-hidden" @load="load"></iframe>
  </div>
</template>

<script setup lang="ts">
import { IFRAME_PREFIX } from '@/constants/networks'

onMounted(() => {
  window.addEventListener('message', function(event) {
    if (event.data.message === 'iframeHeight') {
      console.log(event.data.height)
        const iframe = document.getElementById('eco-iframe')
        iframe.style.height = event.data.height + 'px'
    }
}, false)
})
</script>
