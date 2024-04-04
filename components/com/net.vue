<template>
<div class="hvr-float">
  <div class="cursor-pointer com-net-box flex flex-col items-center justify-center hover:(text-primary-900) text-sm">
    <img :src="img" class="h-10 xl:h-14 mb-2 rounded-full" />
    {{ name }}
  </div>
  </div>
</template>
<script setup lang="ts">
import MORE from '@/assets/img/com/more.png'
import AVAIL from '@/assets/img/com/avail.png'
import BTC from '@/assets/img/com/btc.png'
import ETH from '@/assets/img/com/eth.png'
import POLYGON from '@/assets/img/com/polygon.png'
import BNB from '@/assets/img/com/bnb.png'
import SOL from '@/assets/img/com/sol.png'
import SCROLL from '@/assets/img/com/scroll.png'
import ZKSYNC from '@/assets/img/com/zksync.png'
import STARK from '@/assets/img/com/stark.png'
import LINEA from '@/assets/img/com/linea.png'
import TAIKO from '@/assets/img/com/taiko.png'
import LUMOZ from '@/assets/img/com/lumoz.png'
import EIGEN from '@/assets/img/com/eigenlayer.png'
import CELESTIA from '@/assets/img/com/celestia.png'
import ETHS from '@/assets/img/com/ethstorage.png'
import ESP from '@/assets/img/com/espresso.png'
import RADIUS from '@/assets/img/com/radius.png'
import METIS from '@/assets/img/com/metis.png'

const props = withDefaults(
  defineProps<{
    type: string
    name: string
  }>(),
  {
    type: '',
    name: ''
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
  } else if (type === 'taiko') {
    return TAIKO
  } else if (type === 'celestia') {
    return CELESTIA
  } else if (type === 'avail') {
    return AVAIL
  } else if (type === 'eths') {
    return ETHS
  } else if (type === 'metis') {
    return METIS
  } else if (type === 'esp') {
    return ESP
  } else if (type === 'radius') {
    return RADIUS
  }
  
})
</script>
<style scoped>
.com-net-box:hover img {
  box-shadow: 0 0 10px 0px #befe00;
}
</style>
