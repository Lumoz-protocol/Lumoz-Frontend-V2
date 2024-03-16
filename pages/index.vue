<template>
  <div>
    <full-page ref="fullpage" :options="options" id="fullpage" class="z-0">
      <div class="section">
        <HomeBanner :active="now === 0" />
      </div>
      <div class="section bg-black">
        <HomeArc :active="now === 1" @next="fullpage.api.moveTo(3, 0)"  @before="fullpage.api.moveTo(1, 0)" />
      </div>
      <div class="section">
        <HomeRaas :active="now === 2" />
      </div>
      <div class="section">
        <HomeAi :active="now === 3" />
      </div>
      <div class="section">
        <HomeData :active="now === 4" @next="fullpage.api.moveTo(6, 0)"  @before="fullpage.api.moveTo(4, 0)" />
      </div>
      <div class="section">
        <HomeBenifit :active="now === 5" />
      </div>
    </full-page>
  </div>
</template>
<script lang="ts" setup>
const now = ref(0)
const fullpage = ref(null)
const options = ref({
  licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
  navigation: false,
  anchors: ['','','','','','','','','',''],
  sectionsColor: [],
  controlArrows: false,
  lockAnchors: false,
  recordHistory:false,
  scrollOverflow: true,
  scrollingSpeed: 700,
  resize: true,
  beforeLeave: function(origin, destination, direction, trigger){
    now.value = destination.index
  },
  css3: true
})
</script>
<style scoped></style>
