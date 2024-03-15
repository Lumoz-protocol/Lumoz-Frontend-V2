<template>
<div :id="'outer'+id" class="home-box-outer">
  <div class="home-box flex flex-col p-2 cursor-pointer" :id="id">
    <img src="@/assets/img/home/arrow.png" class="h-3 mb-4 w-20">
    <div class="flex-1">
      <slot></slot>
    </div>
  </div>
</div>
</template>
<script lang="ts" setup>
const id = ref('home-box'+Number(new Date())+Math.floor(Math.random() * 1000))
const multiple = 30;


onMounted(() => {
  const mouseOverContainer = document.getElementById('outer'+id.value)
  mouseOverContainer.addEventListener("mousemove", (e) => {
      window.requestAnimationFrame(function () {
          transformElement(e.offsetX, e.offsetY);
      });
  });

  mouseOverContainer.addEventListener("mouseleave", (e) => {
      const element = document.getElementById(id.value);
      window.requestAnimationFrame(function () {
          element.style.transform = "rotateX(0) rotateY(0)";
      });
  });
})
function transformElement(x, y) {
    const element = document.getElementById(id.value);
    let box = element.getBoundingClientRect();
    const calcX = ( x - box.width / 2) / multiple;
    const calcY = (box.height / 2 - y ) / multiple;
    element.style.transform = "rotateX(" + calcY + "deg) " + "rotateY(" + calcX + "deg)";
}


</script>

<style scoped>
.home-box-outer {
  transform-style: preserve-3d;
  perspective: 500px;
}
.home-box {
  background: url('@/assets/img/home/box.avif') no-repeat;
  background-size:100% 100% ;
  aspect-ratio: 0.64 / 1;
  transform-style: preserve-3d;
  transition: all .1s;
}
</style>