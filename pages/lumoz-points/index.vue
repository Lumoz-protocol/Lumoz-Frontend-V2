<template>
  <div class="container mx-auto">
    <a target="_blank" class="w-full relative">
      <img src="@/assets/img/points/qui.avif" class="w-full mt-10 rounded-lg" alt="">
    </a>
    <div class="points-box mt-8">
      <div class="text-center h-1/4 flex items-center justify-center text-xs md:text-2xl font-bold text-primary-900">{{ $t('points.points') }}</div>
      <div class="h-4/5 p-1 lg:p-4">
        <div class="h-full rounded-lg border-4 border-black shadow-inner-box flex items-center justify-center text-center text-sm lg:text-xl">
          {{ $t('points.pcontent') }}
        </div>
      </div>
    </div>
    <div class="text-center mt-12 lg:mt-24 text-xl lg:text-4xl font-bold">{{ $t('points.connect') }}</div>
    <div class="my-8 flex items-center justify-center">
      <Wallet />
    </div>
    <div>
      <div class="shadow-inner-box p-8 rounded-2xl flex items-center justify-center">
        <CountUp
          :end-val="Number(info.total_points || 0)"
          :duration="2"
          :decimal-places="0"
          :delay="2"
          class="text-2xl lg:text-4xl text-primary-900 font-bold"
        ></CountUp>
        <span class="text-2xl font-bold ml-4">{{ $t('points.total') }}</span>
      </div>
    </div>
    <div class="grid grid-cols-2 mt-8 gap-8">
      <div class="phase-box points-outer">
        <div class="py-4 px-8 phase-inner1 relative">
          <div class="phase-box-left absolute left-0 top-0 bottom-0 h-full w-12"></div>
          <div class="phase-box-right absolute right-0 top-0 bottom-0 h-full w-12"></div>
          <div class="flex flex-col items-center justify-center">
            <div class="text-xl lg:text-2xl">
              {{ $t('points.qui') }}
            </div>
            <div class="h-16 flex items-center justify-center">
              <!-- <HomeButton @click="to('https://dragon-slayer.zkfair.io')" light class="w-32" :word="$t('points.more')" /> -->
            </div>
            <div class="flex items-center">
              <!-- <CountUp
                :end-val="Number(quidditch || 0)"
                :duration="2"
                :decimal-places="0"
                :delay="2"
                class="text-xl lg:text-3xl font-bold mr-4"
              ></CountUp>
              <div class="text-text-dark">{{ $t('points.p') }}</div>
              -->
              <div class="text-2xl">Counting...</div>
            </div>
          </div>
        </div>
      </div>
      <div class="phase-box points-outer">
        <div class="py-4 px-8 phase-inner1 relative">
          <div class="phase-box-left absolute left-0 top-0 bottom-0 h-full w-12"></div>
          <div class="phase-box-right absolute right-0 top-0 bottom-0 h-full w-12"></div>
          <div class="flex flex-col items-center justify-center">
            <div class="text-xl lg:text-2xl">
              {{ $t('points.zkv') }}
            </div>
            <div class="h-16 flex items-center justify-center">
              <!-- <HomeButton @click="to('https://dragon-slayer.zkfair.io')" light class="w-32" :word="$t('points.more')" /> -->
            </div>
            <div class="flex items-center">
              <CountUp
                :end-val="Number(info.nodes_campaign || 0)"
                :duration="2"
                :decimal-places="0"
                :delay="2"
                class="text-xl lg:text-3xl font-bold mr-4"
              ></CountUp>
              <div class="text-text-dark">{{ $t('points.p') }}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="phase-box points-outer">
        <div class="py-4 px-8 phase-inner1 relative">
          <div class="phase-box-left absolute left-0 top-0 bottom-0 h-full w-12"></div>
          <div class="phase-box-right absolute right-0 top-0 bottom-0 h-full w-12"></div>
          <div class="flex flex-col items-center justify-center">
            <div class="text-xl lg:text-2xl">
              {{ $t('points.dragon') }}
            </div>
            <div class="h-16 flex items-center justify-center">
              <!-- <HomeButton @click="to('https://dragon-slayer.zkfair.io')" light class="w-32" :word="$t('points.more')" /> -->
            </div>
            <div class="flex items-center">
              <CountUp
                :end-val="Number(dragon || 0)"
                :duration="2"
                :decimal-places="0"
                :delay="2"
                class="text-xl lg:text-3xl font-bold mr-4"
              ></CountUp>
              <div class="text-text-dark">{{ $t('points.p') }}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="phase-box points-outer">
        <div class="py-4 px-8 phase-inner1 relative">
          <div class="phase-box-left absolute left-0 top-0 bottom-0 h-full w-12"></div>
          <div class="phase-box-right absolute right-0 top-0 bottom-0 h-full w-12"></div>
          <div class="flex flex-col items-center justify-center">
            <div class="text-xl lg:text-2xl">
              {{ $t('points.user') }}
            </div>
            <div class="h-16 text-center text-xs">{{ $t('points.d') }}</div>
            <div class="flex items-center">
              <CountUp
                :end-val="Number(user || 0)"
                :duration="2"
                :decimal-places="0"
                :delay="2"
                class="text-xl lg:text-3xl mr-4 font-bold points-text"
              ></CountUp>
              <div class="text-text-dark">{{ $t('points.p') }}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="phase-box points-outer">
        <div class="py-4 px-8 phase-inner1 relative">
          <div class="phase-box-left absolute left-0 top-0 bottom-0 h-full w-12"></div>
          <div class="phase-box-right absolute right-0 top-0 bottom-0 h-full w-12"></div>
          <div class="flex flex-col items-center justify-center">
            <div class="text-xl lg:text-2xl">
              {{ $t('points.validator') }}
            </div>
            <div class="h-16 text-center text-xs">{{ $t('points.d') }}</div>
            <div class="flex items-center">
              <CountUp
                :end-val="Number(validator || 0)"
                :duration="2"
                :decimal-places="0"
                :delay="2"
                class="text-xl lg:text-3xl mr-4 font-bold points-text"
              ></CountUp>
              <div class="text-text-dark">{{ $t('points.p') }}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="phase-box points-outer">
        <div class="py-4 px-8 phase-inner1 relative">
          <div class="phase-box-left absolute left-0 top-0 bottom-0 h-full w-12"></div>
          <div class="phase-box-right absolute right-0 top-0 bottom-0 h-full w-12"></div>
          <div class="flex flex-col items-center justify-center">
            <div class="text-xl lg:text-2xl">
              {{ $t('points.miner') }}
            </div>
            <div class="h-16 text-center text-xs">{{ $t('points.d') }}</div>
            <div class="flex items-center">
              <CountUp
                :end-val="Number(miner || 0)"
                :duration="2"
                :decimal-places="0"
                :delay="2"
                class="text-xl lg:text-3xl mr-4 font-bold points-text"
              ></CountUp>
              <div class="text-text-dark">{{ $t('points.p') }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useWalletStore } from '@/stores'
import { getAdjustedIsoString } from '@/libs/utils'
import { getAchieveInfo } from '@/api/api'
const walletStore = useWalletStore()
const data = {
  total_points: 0,
  nodes_campaign: 0,
  alpha_extra_cpu_miner_rank_10: 0,
  alpha_extra_cpu_miner_rank_11: 0,
  alpha_extra_cpu_miner_rank_12: 0,
  alpha_extra_cpu_miner_rank_9: 0,
  alpha_extra_galxe_points_rank: 0,
  alpha_extra_gpu_miner_rank_10: 0,
  alpha_extra_gpu_miner_rank_11: 0,
  alpha_extra_gpu_miner_rank_12: 0,
  alpha_extra_gpu_miner_rank_9: 0,
  alpha_extra_pk_team: 0,
  alpha_extra_validator_rank_10: 0,
  alpha_extra_validator_rank_11: 0,
  alpha_extra_validator_rank_12: 0,
  alpha_extra_validator_rank_9: 0,
  dragon_slayer_phase_1: 0,
  dragon_slayer_phase_2: 0,
  dragon_slayer_phase_3: 0,
  galxe_alpha: 0,
  galxe_pre_alpha: 0,
  galxe_final_wave: 0,
  miner_alpha_cpu: 0,
  miner_alpha_gpu: 0,
  miner_pre_alpha: 0,
  validator_alpha: 0,
  validator_pre_alpha: 0,
  quidditch_miniapp: 0,
  quidditch_onchain:0,
  quidditch_project: 0
}
const info = ref(JSON.parse(JSON.stringify(data)))

const to = (url: string) => {
  window.open(url)
}

watch(() => walletStore.account, () => {
  if (walletStore.account) {
    getData()
  } else {
    info.value = JSON.parse(JSON.stringify(data))
  }
})

onMounted(() => {
  if (walletStore.account) {
    getData()
  }
})

const getData = async() => {
  const timestamp = getAdjustedIsoString()
  const signature = await walletStore.simpleSign([timestamp, 'GET', `/api/details?address=${walletStore.account}`])

  const data = await getAchieveInfo(walletStore.account, timestamp, signature)
  if (data) {
    info.value = data
  }
}

const quidditch = computed(() => {
  const _info = info.value
  return  _info.quidditch_miniapp +
          _info.quidditch_onchain +
          _info.quidditch_project
})

const user = computed(() => {
  const _info = info.value
  return  _info.galxe_pre_alpha +
          _info.galxe_alpha +
          _info.alpha_extra_pk_team +
          _info.galxe_final_wave
})

const validator = computed(() => {
  const _info = info.value
  return  _info.validator_pre_alpha +
          _info.validator_alpha+
          _info.alpha_extra_validator_rank_9+
          _info.alpha_extra_validator_rank_10+
          _info.alpha_extra_validator_rank_11+
          _info.alpha_extra_validator_rank_12
})

const dragon = computed(() => {
  const _info = info.value
  return  _info.dragon_slayer_phase_1 +
          _info.dragon_slayer_phase_2 +
          _info.dragon_slayer_phase_3
})

const miner = computed(() => {
  const _info = info.value
  return  _info.miner_pre_alpha+
          _info.miner_alpha_cpu+
          _info.miner_alpha_gpu+
          _info.alpha_extra_cpu_miner_rank_9+
          _info.alpha_extra_cpu_miner_rank_10+
          _info.alpha_extra_cpu_miner_rank_11+
          _info.alpha_extra_cpu_miner_rank_12+
          _info.alpha_extra_gpu_miner_rank_9+
          _info.alpha_extra_gpu_miner_rank_10+
          _info.alpha_extra_gpu_miner_rank_11+
          _info.alpha_extra_gpu_miner_rank_12
})
</script>
<style scoped>
.points-box {
  background: url(@/assets/img/points/bg.png) no-repeat;
  background-size: 100% auto;
  aspect-ratio: 7;
}
.points-outer:hover .points-text{
  color: #BEFE00
}
</style>

