<template>
 <!-- class="overflow-hidden" -->
  <client-only class="flex">
    <!-- <Vue3Marquee  pauseOnHover class="flex items-center" duration="30">
      <div v-for="(item, index) in list" :key="index">
        <img :src="item.img" alt="" class="hvr-float mt-2 cursor-pointer" :class="item.css">
      </div>
    </Vue3Marquee> -->
    <div v-for="(item, index) in list" :key="index">
      <img :src="item.img" alt="" class="hvr-float mt-2 cursor-pointer" :class="item.css">
    </div>
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
import { Vue3Marquee } from 'vue3-marquee'
const list = ref([
  {
    img: M1,
    css: 'w-20 mx-4 lg:(w-35 mx-10)'
  },
  {
    img: M2,
    css: 'w-20 mx-4 lg:(w-28 mx-10)'
  },
  {
    img: M10,
    css: 'w-20 mx-4 lg:(w-35 mx-10)'
  },
    {
    img: M6,
    css: 'w-20 mx-4 lg:(w-40 mx-10)'
  },
  {
    img: M3,
    css: 'w-20 mx-4 lg:(w-40 mx-10)'
  },
  {
    img: M4,
    css: 'w-20 mx-4 lg:(w-40 mx-10)'
  },
  {
    img: M11,
    css: 'w-20 mx-4 lg:(w-40 mx-10)'
  },
  {
    img: M5,
    css: 'w-20 mx-4 lg:(w-40 mx-10)'
  },
  {
    img: M12,
    css: 'w-20 mx-4 lg:(w-30 mx-10)'
  },
    {
    img: M9,
    css: 'w-20 mx-4 lg:(w-30 mx-10)'
  },
  {
    img: M7,
    css: 'w-20 mx-4 lg:(w-40 mx-10)'
  },
  {
    img: M8,
    css: 'w-20 mx-4 lg:(w-40 ml-10)'
  },
  {
    img: M13,
    css: 'w-20 mx-4 lg:(w-45)'
  },
  {
    img: M14,
    css: 'w-20 mx-4 lg:(w-35 mr-10)'
  }
])
</script>
