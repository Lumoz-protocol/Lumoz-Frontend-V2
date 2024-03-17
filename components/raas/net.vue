<template>
  <div class="rounded-full raas-net-box h-8 lg:h-14 cursor-pointer hvr-float">
    <div class="w-full h-full flex items-center justify-center ">
      <img :src="img" class="h-4 lg:h-8" />
    </div>
  </div>
</template>
<script setup lang="ts">
import MORE from '@/assets/img/raas/more.png'
import BTC from '@/assets/img/raas/btc.png'
import ETH from '@/assets/img/raas/eth.png'
import POLYGON from '@/assets/img/raas/polygon.png'
import BNB from '@/assets/img/raas/bnb.png'
import SOL from '@/assets/img/raas/sol.png'
import SCROLL from '@/assets/img/raas/scroll.png'
import ZKSYNC from '@/assets/img/raas/zksync.png'
import STARK from '@/assets/img/raas/stark.png'
import LINEA from '@/assets/img/raas/linea.png'
import LUMOZ from '@/assets/img/raas/lumoz.png'
import EIGEN from '@/assets/img/raas/eigenlayer.png'
import CELESTIA from '@/assets/img/raas/celestia.png'
import ETHS from '@/assets/img/raas/ethstorage.png'
import ESP from '@/assets/img/raas/espresso.png'
import RADIUS from '@/assets/img/raas/radius.png'

const props = withDefaults(
  defineProps<{
    type: string
  }>(),
  {
    type: ''
  }
)

const img = computed(() => {
  const type = props.type
  
  if (type === 'more') {
    return MORE
  } else if (type === 'btc') {
    return BTC
  } else if (type === 'eth') {
    return ETH
  } else if (type === 'polygon') {
    return POLYGON
  } else if (type === 'bnb') {
    return BNB
  } else if (type === 'sol') {
    return SOL
  } else if (type === 'scroll') {
    return SCROLL
  } else if (type === 'zksync') {
    return ZKSYNC
  } else if (type === 'stark') {
    return STARK
  } else if (type === 'lumoz') {
    return LUMOZ
  } else if (type === 'eigen') {
    return EIGEN
  } else if (type === 'linea') {
    return LINEA
  } else if (type === 'celestia') {
    return CELESTIA
  } else if (type === 'eths') {
    return ETHS
  } else if (type === 'esp') {
    return ESP
  } else if (type === 'radius') {
    return RADIUS
  }
  
})
</script>

<style scoped>
.raas-net-box {
  background: linear-gradient(157.35deg, #232323 0%, #232323 100%);
  box-shadow: -5px -5px 10px 0px #464646 inset;
  aspect-ratio: 1;
}
.raas-net-box:hover{
  background: #8ebd00;
}
</style>