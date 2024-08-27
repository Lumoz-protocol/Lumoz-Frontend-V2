<template>
<div class="home-remind-box py-4 md:px-20 mx-2 rounded-4xl md:w-150 overflow-hidden relative flex items-center flex-col justify-center">
   <img src="@/assets/img/share/qui-flow.svg" class="absolute left-0 right-0 -top-1 opacity-70" style="transform: rotate(180deg);" alt="">
   <img src="@/assets/img/share/qui-flow.svg" class="absolute left-0 -bottom-1 opacity-70"  alt="">
   <div class="text-[#FFE072] text-lg font-bold mb-2">
        Join in the Quidditch Testnet
   </div>
   <div class="text-center text-sm px-8 lg:text-base">
        Join the Lumoz Quidditch testnet for the final
        push before the upcoming TGE! Win 50 million
        Lumoz points and generous rewards provided by
        partner projects.
   </div>
</div>
</template>
<style scoped>
.home-remind-box {
    background:
      url('@/assets/img/share/filter-bg-qui.png') no-repeat;
    background-position: left 0 top 0, right 0 top 0;
    background-size: 100% 100%;
    aspect-ratio: 3;
    mix-blend-mode: lighten;
}
</style>
