<template>
  <client-only class="overflow-hidden">
    <Vue3SeamlessScroll :list="list" class="scroll" direction="left" hover step="2">
      <div class="flex">
        <div v-for="(item, index) in list" :key="index">
          <img :src="item" alt="" class="w-40 opacity-80 hover:(opacity-100) hvr-float mx-14 mt-2 cursor-pointer">
        </div>
      </div>
    </Vue3SeamlessScroll>
  </client-only>
</template>
 
<script setup lang="ts">
import M1 from '@/assets/img/backer/1.avif'
import M2 from '@/assets/img/backer/2.avif'
import M3 from '@/assets/img/backer/3.avif'
import M4 from '@/assets/img/backer/4.avif'
import M5 from '@/assets/img/backer/5.avif'
import M6 from '@/assets/img/backer/6.avif'
import M7 from '@/assets/img/backer/7.avif'
import M8 from '@/assets/img/backer/8.avif'
import M9 from '@/assets/img/backer/9.avif'
import M10 from '@/assets/img/backer/10.avif'
import M11 from '@/assets/img/backer/11.avif'
import M12 from '@/assets/img/backer/12.avif'
import M13 from '@/assets/img/backer/13.avif'
import M14 from '@/assets/img/backer/14.avif'
import { Vue3SeamlessScroll } from "vue3-seamless-scroll"
const list = ref([M1, M2, M3, M4, M5, M6, M7, M8, M9, M10, M11, M12, M13, M14, M1, M2, M3, M4, M5, M6, M7, M8, M9, M10, M11, M12, M13, M14, M1, M2, M3, M4, M5, M6, M7, M8, M9, M10, M11, M12, M13, M14, M1, M2, M3, M4, M5, M6, M7, M8, M9, M10, M11, M12, M13, M14, M1, M2, M3, M4, M5, M6, M7, M8, M9, M10, M11, M12, M13, M14])
</script>
 
<style>

</style>