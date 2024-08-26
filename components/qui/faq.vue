<template>
  <div>
    <div>
      <el-collapse class="qui-faq" v-model="activeName" accordion>
        <el-collapse-item :title="$t('qui.faq.t1')" name="1">
          <div class="p-4 flex flex-col">
            <div>
              <a class="quiSlideShine hvr-grow border-b border-[#F0AF60]" href="https://docs.google.com/document/d/1rVIBHBwgncffLfSMzTl8SraRu15C6w9NlZ0dwzVeQWA/edit" target="_blank">* {{ $t('qui.faq.c11') }}</a>
            </div>
            <div>
              <a class="quiSlideShine hvr-grow border-b border-[#F0AF60] mt-2" href="https://docs.google.com/document/d/1BuLFr7pS9u04FLI6NMh3Q69J0e4c5_Z6Jkr89ZCApTE/edit " target="_blank">* {{ $t('qui.faq.c12') }}</a>
            </div>
            <div>
              <a class="quiSlideShine hvr-grow border-b border-[#F0AF60] mt-2" href="https://drive.google.com/file/d/1NUfPW6XBUYMFo3ttNTrDT2JTmzUxDZQx/view?usp=drivesdk" target="_blank">* {{ $t('qui.faq.c13') }}</a>
            </div>
            <div>
              <a class="quiSlideShine hvr-grow border-b border-[#F0AF60] mt-2" href="https://drive.google.com/file/d/1NRmAh3mien9HrNdl65wS5lqMUxzE5GXY/view?usp=drivesdk" target="_blank">* {{ $t('qui.faq.c14') }}</a>
            </div>
            <div>
              <a class="quiSlideShine hvr-grow border-b border-[#F0AF60] mt-2" href="https://drive.google.com/file/d/1NUoe-CNwq1_VkpHt1z8whSii1enzMzpy/view?usp=drivesdk" target="_blank">* {{ $t('qui.faq.c15') }}</a>
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item :title="$t('qui.faq.t2')" name="2">
          <div class="p-4">
            <div class="quiSlideShine">
              {{ $t('qui.faq.c21') }}
              <div class="hvr-grow">
                <a href="https://lumoz.org/quidditch-join" target="_blank" class="underline border-b border-[#F0AF60] quiSlideShine mx-2 cursor-pointer">{{ $t('qui.faq.c22') }}</a>
              </div>
                
              {{ $t('qui.faq.c23') }}
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item :title="$t('qui.faq.t3')" name="3">
          <div class="p-4">
            <div class="quiSlideShine">
              {{ $t('qui.faq.c3') }}
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item :title="$t('qui.faq.t4')" name="4">
          <div class="p-4">
            <div class="quiSlideShine">
              {{ $t('qui.faq.c4') }}
            </div>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>
<script setup lang="ts">
const activeName = ref(1)

</script>
<style>
.qui-faq {
  border-radius: 10px;
  overflow: hidden;
  border-top: 1px solid #ffffff55;
  border-bottom: 1px solid #ffffff55;
}
.qui-faq .el-collapse-item__wrap {
  background: transparent;
  border: 0 !important;
}
.qui-faq .el-collapse-item__header {
  padding: 10px 20px !important;
  height: auto;
  border-bottom: 1px solid #FFFFFF14 !important;
  background: linear-gradient(90deg, #F0AF60 0%, #FAE79B 43.5%, #EAA352 100%);
  cursor: pointer;
  background-size: 100% 100%;
  font-size: 1.2rem;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.qui-faq .el-collapse-item__content {
  background: #23232244;
  padding: 0px;
  color: #cccccc !important;
  font-size: 16px;
}
.qui-faq .el-collapse-item__arrow {
  border-radius: 1000px;
  color: #F0AF60;
  background: transparent;
  height:1.5rem;
  width: 1.5rem;
}

</style>