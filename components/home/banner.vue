<template>
<div>
  <video v-if="active" class="absolute top-0 bottom-0 left-0 right-0 home-video" playsinline="true" autoplay="true" muted="false" loop="true">
    <source src="@/assets/img/home/banner.mp4" type="video/mp4">
  </video>
  <div class="absolute left-0 right-0 top-0 bottom-0 flex flex-col items-center justify-center home-banner-box">
    <div class="h-full w-full flex justify-center items-start pt-30 lg:pt-40">
      <div v-if="active" class="flex items-center justify-center flex-col">
        <div class="typed-out text-2xl md:text-4xl lg:text-6xl py-4 font-bold text-center">{{ $t('home.banner.title') }}</div>
        <div class="typed-out-1s lg:text-2xl py-4 text-primary-900 text-center">{{ $t('home.banner.content') }}</div>
        <HomeRemindBox />
        <ColorButton @click="to"  class="mt-4 w-40 animate__animated animate__fadeIn animate__delay-2s text-black">
          {{ $t('header.node') }}
        </ColorButton>
      </div>
    </div>
    <div class="fade-edges-s w-full mt-4">
      <div class=" overflow-hidden">
        <div class="text-center font-bold lg:text-xl mb-2">{{ $t('home.back') }}</div>
        <div class="fade-edges">
          <div class="fade-edges-t flex flex-wrap items-center justify-center">
            <CommonScroll></CommonScroll>
          </div>
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

const openGame = () => {
  router.push('/quidditch-join')
}

const to = () => {
  window.open('https://node.lumoz.org')
  // router.push('/compute-layer')
}
</script>

<style scoped>
.home-banner-box {
  overflow: hidden;

}

/* .fade-edges {
  flex-shrink: 0;
  mask-image: linear-gradient(to right, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 1) 50%,  rgba(0, 0, 0, 0) 100%);
} */
.fade-edges-s {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.73) 0%, rgba(13, 13, 9, 0.00) 100%);
}

</style>