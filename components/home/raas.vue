<template>
  <div v-show="active" class="absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center home-raas-box" id="c-animation">
    <div class="h-full w-full pt-20">
      <div v-if="active" class="lg:(w-1/2 ml-1/6) flex items-center lg:items-start lg:justify-center h-full flex-col mt-8 lg:mt-0">
        <div class="font-blinker text-3xl lg:text-5xl" style="font-weight: 300">{{ $t('home.service') }}</div>
        <div>
          <h1 class="text-2xl lg:text-6xl font-bold typed-out mt-8">{{ $t('home.raas.title') }}</h1>
        </div>
        <p class="px-4 md:(w-1/2 px-0) lg:(w-full pr-16) 2xl:(w-2/3 px-0) mt-8 animate__animated animate__fadeIn animate__delay-1s text-lg text-center lg:text-left">{{ $t('home.raas.content') }}</p>
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

  preloadImage(["c_00000.avif","c_00001.avif","c_00002.avif","c_00003.avif","c_00004.avif","c_00005.avif","c_00006.avif","c_00007.avif","c_00008.avif","c_00009.avif","c_00010.avif","c_00011.avif","c_00012.avif","c_00013.avif","c_00014.avif","c_00015.avif","c_00016.avif","c_00017.avif","c_00018.avif","c_00019.avif","c_00020.avif","c_00021.avif","c_00022.avif","c_00023.avif","c_00024.avif","c_00025.avif","c_00026.avif","c_00027.avif","c_00028.avif","c_00029.avif","c_00030.avif","c_00031.avif","c_00032.avif","c_00033.avif","c_00034.avif","c_00035.avif","c_00036.avif","c_00037.avif","c_00038.avif","c_00039.avif"], function() {
    document.getElementById('c-animation').className += " c-animation"
  }, "/animate/c/")
})
</script>
<style scoped>
@import url('/animate/c.css');
.home-raas-box {
  overflow: hidden;
}
</style>