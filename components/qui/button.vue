<template>
    <div class="hvr-grow">
        <div class="flex items-center justify-center qui-button-bg cursor-pointer animated-button text-[#D6C2A2] h-12">
            <slot></slot>
        </div>
    </div>
</template>
<style scoped>
.qui-button-bg {
    background: url(@/assets/img/quidditch/button-bg.avif) no-repeat;
    background-size: 100% 100%;
}
</style>