<template>
    <div class="quidditch-bg">
        <div class="quidditch-bg-inner h-full min-h-screen">
            <div class="flex items-center justify-center text-lg lg:text-5xl quiSlideShine pt-8 lg:pt-12">
                <img src="@/assets/img/quidditch/arrow.png" class="h-3 lg:h-5" style="transform: rotate(180deg);" alt="">
                <div class="mx-4">{{ $t('qui.title') }}</div>
                <img src="@/assets/img/quidditch/arrow.png" class="h-3 lg:h-5" alt="">
            </div>
            <div class="quiSlideShine lg:(w-3/5 ml-1/5) text-center mt-8">
                {{ $t('qui.content') }}
            </div>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 container mx-auto gap-4 xl:gap-8 mt-16">
                <div class="qui-card hvr-grow p-1" v-for="item in 4" :key="item">
                    <div class="qui-card-inner h-full px-4">
                        <div class="pt-4 text-lg text-center quiSlideShine">Quidditch</div>
                        <div class="flex items-center justify-center relative qui-card-round-box w-2/3 ml-1/6">
                            <img src="@/assets/img/quidditch/round.avif" class="w-5/6" alt="">
                        </div>
                        <div class="text-center quiSlideShine mt-4">
                            <img src="@/assets/img/quidditch/devide.png" alt="">
                            <div>Join in the Quidditch match to get points rewards.</div>
                            <img src="@/assets/img/quidditch/devide.png" alt="">
                        </div>
                        <div class="quiSlideShine flex items-center justify-center my-4">
                            {{ $t('qui.rewards') }}
                            <img src="@/assets/img/quidditch/coin.svg" class="h-4 w-4 mx-2" alt="">
                            {{ $t('qui.points') }}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script setup lang="ts">

</script>
