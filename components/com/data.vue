<template>
  <div class="home-data-box mt-32">
    <div class="h-full w-full pt-20 overflow-y-auto hide-scroll flex items-center justify-center">
      <div class="flex items-center flex-col w-full px-4 lg:px-0">
        <div>
          <h1 class="text-3xl lg:text-4xl font-bold">{{ $t('home.data.title') }}</h1>
        </div>
        <div class="home-data-data-box rounded-lg lg:rounded-full grid grid-cols-2 w-full relative">
          <div class="home-data-grid-1 flex flex-col items-center justify-center lg:(pr-25 pb-15 items-end justify-end) xl:(pr-50 pb-30)">
            <div class="flex items-center justify-center flex-col w-40">
              <CountUp
                :end-val="Number(28403 || 0)"
                :duration="2"
                :decimal-places="0"
                :delay="2"
                class="text-lg lg:text-3xl font-bold"
              ></CountUp>
              <div class="mt-4 text-[#999]">{{ $t('home.data.nodes') }}</div>
            </div>
          </div>
          <div class="flex flex-col items-center justify-center lg:(pl-25 pb-15 items-start justify-end) xl:(pl-50 pb-30)">
            <div class="flex items-center justify-center flex-col w-40">
              <CountUp
                :end-val="Number(16 || 0)"
                :duration="2"
                :decimal-places="0"
                :delay="2"
                class="text-lg lg:text-3xl font-bold"
              ></CountUp>
              <div class="mt-4 text-[#999]">{{ $t('home.data.ser') }}</div>
            </div>
          </div>
          <div class="flex flex-col items-center justify-center lg:(pr-25 mt-15 items-end justify-start) xl:(pr-50 mt-30)">
            <div class="flex items-center justify-center flex-col w-40">
              <CountUp
                :end-val="Number(20002146 || 0)"
                :duration="2"
                :decimal-places="0"
                :delay="2"
                class="text-lg lg:text-3xl font-bold"
              ></CountUp>
              <div class="mt-4 text-[#999]">{{ $t('home.data.trans') }}</div>
            </div>
          </div>
          <div class="home-data-grid-2 flex flex-col items-center justify-center lg:(pl-25 pt-15 items-start justify-start) xl:(pl-50 pt-30)">
            <div class="flex items-center justify-center flex-col w-40">
              <CountUp
                :end-val="Number(4791671 || 0)"
                :duration="2"
                :decimal-places="0"
                :delay="2"
                class="text-lg lg:text-3xl font-bold"
              ></CountUp>
              <div class="mt-4 text-[#999]">{{ $t('home.data.zkp') }}</div>
            </div>
          </div>
          <div class="circleBox absolute w-40 h-40 left-1/2 top-1/2 -mt-20 -ml-20 flex items-center justify-center">
              <div class="circle z-1 border border-6 border-[#C8D1B3] rounded-full">
                <img src="@/assets/img/icon/lumoz.svg" class="w-16 h-16 border border-6 border-[#E0FF94] rounded-full">
              </div>
              <div class="circle1 w-10 h-10 z-0"></div>
              <div class="circle2 w-10 h-10 z-0"></div>
              <div class="w-28 h-28 border absolute rounded-full border-[#99999944]"></div>
              <div class="hidden lg:block w-40 h-40 border absolute rounded-full border-[#99999944]"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.home-data-data-box {
  background:-webkit-radial-gradient(#BEFE0022 0%, #1B1B1A 60%);
  aspect-ratio: 2;
}
.home-data-grid-1 {
  background: url('@/assets/img/home/grid-1.png');
  background-size: 100% 130%;
  background-position: center;
  background-repeat: no-repeat;
}
.home-data-grid-2 {
  background: url('@/assets/img/home/grid-2.png');
  background-size: 100% 130%;
  background-position: center;
  background-repeat: no-repeat;
}
/* 扩散动画 */
.circle1, .circle2, .circle3  {
  background: rgba(190, 254, 0,0.45);
  border: 1px solid rgba(190, 254, 0, 51,0.25);
  border-radius: 999px;
  position: absolute;
}
.circle1, .circle2, .circle3  {
  animation-name: circleChange;
  animation-duration: 5s;
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
@keyframes circleChange{
  0%{transform: scale(1);opacity: 0.95;}
  25%{transform: scale(2);opacity: 0.75;}
  50%{transform: scale(3);opacity: 0.5;}
  75%{transform: scale(4);opacity: 0.25;}
  100%{transform: scale(5);opacity: 0.05;}
}
</style>