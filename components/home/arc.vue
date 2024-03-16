<template>
<div>
  <div class="absolute left-0 right-0 top-30">
    <div v-if="active" class="container mx-auto">
      <div class="text-2xl lg:text-4xl font-bold pl-4 lg:pl-0 home-arc-1 animate__animated animate__fadeInUp animate__slower">{{ $t('home.arc.title') }}</div>
      <div class="text-6xl lg:text-8xl xl:text-9xl font-bold text-[#ffffff22] mt-8 home-arc-2 animate__animated animate__fadeInUp animate__delay-1s animate__slower">{{ $t('home.arc.title').toUpperCase() }}</div>
      <div class="text-6xl lg:text-8xl xl:text-9xl font-bold mt-8 home-arc-3 animate__animated animate__fadeInUp animate__delay-2s animate__slower">{{ $t('home.arc.title').toUpperCase() }}</div>
    </div>
  </div> 
  <div class="absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center home-arc-box" id="b-animation">
    <div class="h-full w-full pt-20 overflow-y-auto hide-scroll" id="home-arc" @mousewheel="scrollChange">
      <div class="mx-25 md:mx-10 lg:mx-20 xl:mx-40 flex justify-end pt-30 pb-40 lg:(pt-40 pb-0)">
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

let lock = true
let timer = null

watch(() => props.active, () => {
  if (timer) {
    clearTimeout(timer)
  }
  if (props.active) {
    lock = true
    timer = setTimeout(() => {
      lock = false
    }, 2000)
  } else {
    lock = false
  }
})

const scrollChange = (e) => {
  if (lock) {
    e.stopImmediatePropagation()
    return
  }
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

onMounted(() => {
  function preloadImage(names, cb, prefix){
      window.gkaCache = window.gkaCache || [];
      var n = 0,img,imgs = {};
      names.forEach(function(name) {
          img = new Image();
          window.gkaCache.push(img);
          img.onload = (function(name, img) {
              return function() {
                  imgs[name] = img;
                  (++n === names.length) && cb && cb(imgs);
              }
          })(name, img);
          img.src = (prefix || '') + name;
      })
  }

  preloadImage(["b_00000.avif","b_00001.avif","b_00002.avif","b_00003.avif","b_00004.avif","b_00005.avif","b_00006.avif","b_00007.avif","b_00008.avif","b_00009.avif","b_00010.avif","b_00011.avif","b_00012.avif","b_00013.avif","b_00014.avif","b_00015.avif","b_00016.avif","b_00017.avif","b_00018.avif","b_00019.avif","b_00020.avif","b_00021.avif","b_00022.avif","b_00023.avif","b_00024.avif","b_00025.avif","b_00026.avif","b_00027.avif","b_00028.avif","b_00029.avif","b_00030.avif","b_00031.avif","b_00032.avif","b_00033.avif","b_00034.avif","b_00035.avif","b_00036.avif","b_00037.avif","b_00038.avif","b_00039.avif"], function() {
    document.getElementById('b-animation').className += " b-animation"
  }, "/animate/b/")
})

</script>
<style scoped>
@import url('/animate/b.css');
.home-arc-box {
  overflow: hidden;
}
</style>