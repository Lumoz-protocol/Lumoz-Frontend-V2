<template>
  <div>
    <div class="text-2xl lg:text-4xl font-bold text-center my-8">FAQ</div>
    <div>
      <el-collapse :value="1" class="white-faq">
        <el-collapse-item :title="$t('home.white.faq.t1')" name="1">
          <div>
            {{ $t('home.white.faq.c1') }}
          </div>
        </el-collapse-item>
      </el-collapse>
      <el-collapse :value="1" class="white-faq mt-8">
        <el-collapse-item :title="$t('home.white.faq.t2')" name="1">
          <div>
            {{ $t('home.white.faq.c2') }}
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>
<style>
.white-faq {
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #FFFFFF14;
}
.white-faq .el-collapse-item__header {
  background: linear-gradient(180deg, #343335 0%, #1A191B 100%);
  padding: 30px;
  color: white !important;
  font-size: 16px !important;
  border-bottom: 1px solid #FFFFFF14 !important;
}
.white-faq .el-collapse-item__content {
  background: #232322;
  padding: 30px;
  color: #cccccc !important;
  font-size: 16px;
}
.white-faq .el-collapse-item__arrow {
  border-radius: 1000px;
  background: #343335;
  height:1.5rem;
  width: 1.5rem;
}
.white-faq:hover .el-collapse-item__header {
  color:#BEFE00 !important;
}
</style>