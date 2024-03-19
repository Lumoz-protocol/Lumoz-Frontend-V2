<template>
  <div>
    <full-page ref="fullpage" :options="options" id="fullpage" class="z-0">
      <div class="section">
        <HomeBanner :active="now === 0" />
      </div>
      <!-- <div class="section bg-[#000000] full-lock-scroll">
        <HomeArc :active="now === 1" @next="fullpage.api.moveTo(3, 0)"  @before="fullpage.api.moveTo(1, 0)" />
      </div>
      <div class="section">
        <HomeRaas :active="now === 2" />
      </div>
      <div class="section">
        <HomeAi :active="now === 3" />
      </div>
      <div class="section">
        <HomeData :active="now === 4" />
      </div>
      <div class="section full-lock-scroll">
        <HomeBenifit :active="now === 5" @next="t"  @before="fullpage.api.moveTo(5, 0)" />
      </div> -->
    </full-page>
  </div>
</template>
<script lang="ts" setup>
const now = ref(0)
const fullpage = ref(null)
const options = ref({
  licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
  navigation: false,
  anchors: ['','','','','','','','',],
  sectionsColor: [],
  controlArrows: true,
  lockAnchors: false,
  recordHistory:false,
  scrollOverflow: false,
  normalScrollElements: '.full-lock-scroll',
  scrollingSpeed: 400,
  resize: true,
  beforeLeave: function(origin, destination, direction, trigger){
    now.value = destination.index
  },
  css3: true
})

onMounted(() => {
  fullpage.value.api.moveTo(1, 0)
})

const t = () => {}
</script>
<style scoped></style>
