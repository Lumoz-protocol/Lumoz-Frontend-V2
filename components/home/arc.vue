<template>
  <div class="absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center home-arc-box">
    <div class="h-full w-full pt-20 overflow-y-auto hide-scroll" id="home-arc" @mousewheel="scrollChange">
      <div class="container mx-auto">
        <div class="h-20 flex items-center">
          <div v-if="active" class="text-2xl lg:text-4xl font-bold animate__animated animate__fadeIn animate__delay-1s pl-4 lg:pl-0">{{ $t('home.arc.title') }}</div>
        </div>
      </div>
      <div class="mx-25 md:mx-10 lg:mx-20 xl:mx-40 flex justify-end pt-20 pb-40 lg:(pt-40 pb-0)">
        <div class="w-full xl:w-3/5">
          <HomeBox class="md:(w-1/2 ml-1/4) lg:(w-2/5 ml-3/5)">
            <div class="flex flex-col text-black justify-between h-full">
              <div class="flex items-center justify-center flex-1">
                <img src="@/assets/img/home/icon1.png" class="w-16">
              </div>
              <div class="text-xl h-12 pl-4">{{ $t('home.arc.rollups') }}</div>
            </div>
          </HomeBox>
          <HomeBox class="mt-12 md:(w-1/2 ml-1/4) lg:(ml-0 w-2/5 -mt-40)">
            <div class="flex flex-col text-black justify-between h-full">
              <div class="flex items-center justify-center flex-1">
                <img src="@/assets/img/home/icon2.png" class="w-16">
              </div>
              <div class="text-xl h-12 pl-4">{{ $t('home.arc.modular') }}</div>
            </div>
          </HomeBox>
          <HomeBox class="mt-12 md:(w-1/2 ml-1/4) lg:(w-2/5 ml-3/5 -mt-40)">
            <div class="flex flex-col text-black justify-between h-full">
              <div class="flex items-center justify-center flex-1">
                <img src="@/assets/img/home/icon3.svg" class="w-16">
              </div>
              <div class="text-xl h-12 pl-4">{{ $t('home.arc.ai') }}</div>
            </div>
          </HomeBox>
        </div>
      </div>
      <div class="h-40"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    active: boolean
  }>(),
  {
    active: false
  }
)

const scrollChange = (e) => {
  const dom = document.getElementById('home-arc')
  const scrollTop = dom.scrollTop
  const height = dom.clientHeight
  const scrollHeight = dom.scrollHeight
  if (scrollTop === 0) {
    dom.scrollTop = 1
  } else if (scrollTop + height >= scrollHeight - 0.5) {
    dom.scrollTop = scrollTop + height - 1
  } else {
    e.stopImmediatePropagation()
  }
}

</script>
<style scoped>
.home-arc-box {
  overflow: hidden;
  background: url('@/assets/img/home/arc.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
.circleBox {
    position: relative;
    width: 300px;
    height: 100px;
    margin: 10px auto;
}
/* 扩散动画 */
.circle, .circle1, .circle2, .circle3  {
    width: 10px;
    height: 10px;
    background: rgba(255,001,002,0.75);
    border: 1px solid rgba(255,001,002,0.85);
    border-radius: 999px;
    position: absolute;
    top: 50px;
    left: 15px;
}
.circle1, .circle2, .circle3  {
    /* animation: circleChange 2s 1s ease-out infinite; */
    animation-name: circleChange;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}
.circle1 {
    animation-delay: 1s;
}
.circle2 {
    animation-delay: 2s;
}
.circle3 {
    animation-delay: 3s;
}
</style>