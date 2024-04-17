<template>
<div class="relative overflow-hidden">
   <div class="circles">
    <div class="circle circle-1"></div>
    <div class="circle circle-2"></div>
  </div>
  <div class="card">
    <div class="card opacity-90 hover:opacity-100">
      <div class="gradient-container">
        <slot></slot>
      </div>
    </div>
  </div>
</div>
</template>
<style scoped>
.circles {
  position: absolute;
  left:0;
  right: 0;
  top: 0;
  bottom: 0;
  border-radius: 20px;
  overflow: hidden;
}
.circle {
  position: absolute;
  border-radius: 50%;
  z-index: 0;
}
.circle-1 {
  height: 100%;
  width: 60%;
  aspect-ratio: 1 / 1;
  opacity: 1;
  top: 50%;
  left: -10%;
  background: linear-gradient(120deg, #5c8411, #2c3e50);
}
.circle-2 {
  height: 100%;
  width: 40%;
  aspect-ratio: 1 / 1;
  opacity: 0.7;
  top: -50%;
  right: -20%;
  background: linear-gradient(120deg, #1d976c, #2c3e50);
}
.card {
  overflow: hidden;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(50px);
  box-shadow: 0 0 80px rgba(0, 0, 0, 0.15);
  z-index: 3;
}
</style>