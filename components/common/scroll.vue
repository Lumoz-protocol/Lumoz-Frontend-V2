<template>
 <!-- class="overflow-hidden" -->
  <client-only class="flex">
    <!-- <Vue3Marquee  pauseOnHover class="flex items-center" duration="30">
      <div v-for="(item, index) in list" :key="index">
        <img :src="item.img" alt="" class="hvr-float mt-2 cursor-pointer" :class="item.css">
      </div>
    </Vue3Marquee> -->
    <div v-for="(item, index) in list" :key="index">
      <img :src="item.img" alt="" class="hvr-float mt-1 cursor-pointer" :class="item.css">
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
import M15 from '@/assets/img/backer/15.avif'
import M17 from '@/assets/img/backer/17.avif'
import M18 from '@/assets/img/backer/18.avif'
import M19 from '@/assets/img/backer/19.avif'
import M20 from '@/assets/img/backer/20.avif'
import M22 from '@/assets/img/backer/22.avif'
import M23 from '@/assets/img/backer/23.avif'
import M24 from '@/assets/img/backer/24.avif'
import M25 from '@/assets/img/backer/25.svg'
import { Vue3Marquee } from 'vue3-marquee'
const list = ref([
  {
    img: M1,
    css: 'w-20 mx-4 lg:(w-30)'
  },
  {
    img: M2,
    css: 'w-16 mx-4 lg:(w-24)'
  },
  {
    img: M22,
    css: 'w-20 mx-4 lg:(w-40)'
  },
  {
    img: M6,
    css: 'w-20 mx-4 lg:(w-34)'
  },
  {
    img: M15,
    css: 'w-20 mx-4 lg:(w-32)'
  },
  {
    img: M10,
    css: 'w-20 mx-4 lg:(w-32)'
  },
  {
    img: M20,
    css: 'w-20 mx-4 lg:(w-30)'
  },
  {
    img: M23,
    css: 'w-20 mx-4 lg:(w-35)'
  },
  {
    img: M3,
    css: 'w-20 mx-4 lg:(w-34)'
  },
  {
    img: M4,
    css: 'w-20 mx-4 lg:(w-32)'
  },
  {
    img: M11,
    css: 'w-20 mx-4 lg:(w-36)'
  },
  {
    img: M5,
    css: 'w-20 mx-4 lg:(w-36 -mt-1)'
  },
  {
    img: M12,
    css: 'w-20 mx-4 lg:(w-26)'
  },
    {
    img: M9,
    css: 'w-20 mx-4 lg:(w-24 -mt-0.5)'
  },
    {
    img: M13,
    css: 'w-20 mx-4 lg:(w-16)'
  },
  {
    img: M7,
    css: 'w-20 mx-4 lg:(w-32)'
  },
  {
    img: M8,
    css: 'w-20 mx-4 lg:(w-30)'
  },
  {
    img: M14,
    css: 'w-20 mx-4 lg:(w-30)'
  },
  {
    img: M17,
    css: 'w-20 mx-4 lg:(w-26)'
  },
  {
    img: M18,
    css: 'w-20 mx-4 lg:(w-30)'
  },
  {
    img: M19,
    css: 'w-20 mx-4 lg:(w-28)'
  },
  {
    img: M24,
    css: 'w-20 mx-4 lg:(w-34 mt-4)'
  },
  {
    img: M25,
    css: 'w-20 mx-4 lg:(w-34)'
  }
])
</script>
