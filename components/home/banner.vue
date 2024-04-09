<template>
<div>
  <video v-if="active" class="absolute top-0 bottom-0 left-0 right-0 home-video" playsinline="true" autoplay="true" muted="false" loop="true">
    <source src="@/assets/img/home/banner.mp4" type="video/mp4">
  </video>
  <div class="absolute left-0 right-0 top-0 bottom-0 flex flex-col items-center justify-center home-banner-box">
    <div class="h-full w-full flex justify-center items-start pt-40">
      <div v-if="active" class="flex items-center justify-center flex-col">
        <div class="typed-out text-3xl md:text-4xl lg:text-6xl py-4 font-bold text-center">{{ $t('home.banner.title') }}</div>
        <div class="typed-out-1s text-2xl py-4 text-primary-900 text-center">{{ $t('home.banner.content') }}</div>
        <HomeButton @click="to" :word="$t('home.banner.start')" class="mt-4 w-40 animate__animated animate__fadeIn animate__delay-2s" />
      </div>
    </div>
    <div class="lg:(w-2/3) overflow-hidden mb-8">
      <div class="text-center font-bold text-xl">{{ $t('home.back') }}</div>
      <div class="fade-edges">
        <div class="fade-edges-t h-20">
          <CommonScroll></CommonScroll>
        </div>
        </div>
    </div>
  </div>
</div>
</template>
<script setup lang="ts">
const router = useRouter()
const props = withDefaults(
  defineProps<{
    active: boolean
  }>(),
  {
    active: false
  }
)

const to = () => {
  // window.open('https://docs.lumoz.org')
  router.push('/compute-layer')
}
</script>

<style scoped>
.home-banner-box {
  overflow: hidden;

}

.fade-edges {
  flex-shrink: 0;
  mask-image: linear-gradient(to right, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 1) 10%,  rgba(0, 0, 0, 1) 100%);
}

.fade-edges-t {
  flex-shrink: 0;
  mask-image: linear-gradient(to top, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 1) 50%);
}
</style>