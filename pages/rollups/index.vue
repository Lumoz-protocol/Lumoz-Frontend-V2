<template>
  <div>
    <div class="h-60 lg:h-120 w-full relative flex items-center" id="rollup-draw-box">
      <div class="text-2xl lg:text-4xl xl:text-5xl text-center font-bold absolute w-full slideShine opacity-70 pb-25 lg:pb-30">
        <h1 class="">{{ $t('rollups.title1') }}</h1>
        <h1 class=" mt-4">{{ $t('rollups.title2') }}</h1>
      </div>
      <img class="absolute left-1/4 bottom-1/7 w-10 lg:w-1/25 opacity-60 rollup-draw-box-float1" src="@/assets/img/rollup/1.png" alt="">
      <img class="absolute left-1/16 lg:left-1/8 top-2/5 lg:top-1/5 w-10 lg:w-1/18 opacity-60 rollup-draw-box-float2" src="@/assets/img/rollup/2.png" alt="">
      <img class="absolute right-1/6 top-1/10 lg:top-1/8 w-8 lg:w-1/36 opacity-60 rollup-draw-box-float3" src="@/assets/img/rollup/3.png" alt="">
      <img class="absolute right-1/6 bottom-2 lg:bottom-1/8 w-16 lg:w-1/18 opacity-60 rollup-draw-box-float4" src="@/assets/img/rollup/4.png" alt="">
    </div>
    <div class="container mx-auto">

    <div class="mt-16">
      <RollupsCard v-for="item, index in list" :key="index" :name="item.name"></RollupsCard>
    </div>
  </div>
  </div>
</template>
<script setup lang="ts">
import { useRollupsStore } from '@/stores'
import draw from './flow.ts'
const rollupsStore = useRollupsStore()
const list = computed(() => {
    return rollupsStore.mainnetRollups
})

onMounted(() => {
  draw()
})
</script>
<style>
#rollup-draw-box canvas {
 width: 100%;
 height: 100%;
}
.rollup-draw-box-float1 {
    animation: float1 20s infinite;
}
.rollup-draw-box-float2 {
    animation: float2 20s infinite;
}
.rollup-draw-box-float3 {
    animation: float3 20s infinite;
}
.rollup-draw-box-float4 {
    animation: float4 20s infinite;
}
@keyframes float1 {
    0% {
        transform: translate(0, 0);
    }
    10% {
        transform: translate(0px, -20px);
    }
    50% {
        transform: translate(-20px, 20px);
    }
    75% {
        transform: translate(10px, -20px);
    }
    100% {
        transform: translate(0, 0);
    }
}
@keyframes float2 {
    0% {
        transform: translate(0, 0);
    }
    10% {
        transform: translate(0px, 20px);
    }
    50% {
        transform: translate(20px, -20px);
    }
    75% {
        transform: translate(10px, -10px);
    }
    100% {
        transform: translate(0, 0);
    }
}
@keyframes float3 {
    0% {
        transform: translate(0, 0);
    }
    10% {
        transform: translate(-20px, -10px);
    }
    50% {
        transform: translate(-10px, 10px);
    }
    75% {
        transform: translate(10px, -20px);
    }
    100% {
        transform: translate(0, 0);
    }
}
@keyframes float4 {
    0% {
        transform: translate(0, 0);
    }
    10% {
        transform: translate(20px, 10px);
    }
    50% {
        transform: translate(-10px, -10px);
    }
    75% {
        transform: translate(10px, 10px);
    }
    100% {
        transform: translate(0, 0);
    }
}

</style>