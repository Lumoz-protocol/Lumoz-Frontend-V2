<template>
    <div class="quidditch-bg -mt-18">
        <div class="quidditch-bg-inner-2 min-h-screen">
            <div class="h-18"></div>
            <div class="flex items-center justify-center text-2xl lg:text-5xl quiSlideShine pt-4 lg:pt-12">
                <img src="@/assets/img/quidditch/arrow.png" class="h-3 lg:h-5" style="transform: rotate(180deg);" alt="">
                <div class="mx-4 text-center">
                    <div>{{ $t('zkv.title') }}</div>
                </div>
                <img src="@/assets/img/quidditch/arrow.png" class="h-3 lg:h-5" alt="">
            </div>
            <div class="quiSlideShine lg:(w-3/5 ml-1/5 mt-8 text-base) text-center mt-4 text-sm">
                {{ $t('zkv.content') }}
            </div>
            <div class="flex items-center justify-center">
                <Wallet v-if="!walletStore.account">
                    <div class="qui-start-button-bg text-[#FFE072] text-lg font-bold mt-8 cursor-pointer hvr-grow h-12">
                        <div class="qui-start-button-bg-inner px-4 py-2 flex items-center justify-center" style="font-family: 'IrishGrover-Regular-Bold', sans-serif">
                            <img src="@/assets/img/quidditch/start-button-arrow.png" class="w-6 mr-4" alt="">
                            {{ $t('wallet.connect') }}
                            <img src="@/assets/img/quidditch/start-button-arrow.png" class="w-6 ml-4" style="transform: rotate(180deg);" alt="">
                        </div>
                    </div>
                </Wallet>
                <div v-else class="qui-start-button-bg text-[#FFE072] text-lg font-bold mt-8 cursor-pointer overflow-hidden h-11 mb-1">
                    <div class="qui-start-button-bg-inner px-4 py-2 flex items-center justify-center" style="font-family: 'IrishGrover-Regular-Bold', sans-serif">
                        {{ formatAddress(walletStore.account, 6) }}
                        <img src="@/assets/img/quidditch/exit-l.svg" class="w-6 ml-2 hvr-grow" @click="walletStore.disconnectWallet" alt="">
                    </div>
                </div>
            </div>
            <div class="grid lg:grid-cols-2 container mx-auto mt-12">
                <div class="p-8 qui-zk-card h-36 flex items-center justify-between">
                    <div class="w-12 h-12 rounded-full bg-[#4C2F1E] flex items-center justify-center" style="border: 1.5px solid var(--2, #F0AF60);">
                        <img src="@/assets/img/quidditch/lumoz.svg" class="w-8 h-8" alt="">
                    </div>
                    <div class="quiSlideShine flex-1 pl-8">
                        <div class="text-xl">{{ $t('zkv.d1') }}</div>
                        <div class="flex items-center mt-2">
                            {{ $t('zkv.rewards') }}: <img src="@/assets/img/quidditch/flash.svg" class="w-6" alt="">+20 {{ $t('zkv.points') }}
                        </div>
                    </div>
                    <div v-if="walletStore.account">
                        <QuiButton v-if="!user.is_run_node" :type="3" class="w-30" @click="goTo('https://quidditch-zkverifiers.lumoz.org/my-node')">{{ $t('zkv.go') }}</QuiButton>
                        <img v-else src="@/assets/img/quidditch/check.svg" alt="">
                    </div>
                </div>
                <div class="p-8 qui-zk-card h-36 flex items-center justify-between">
                    <div class="w-12 h-12 rounded-full bg-[#4C2F1E] flex items-center justify-center" style="border: 1.5px solid var(--2, #F0AF60);">
                        <img src="@/assets/img/quidditch/lumoz.svg" class="w-8 h-8" alt="">
                    </div>
                    <div class="quiSlideShine flex-1 pl-8">
                        <div class="text-xl">{{ $t('zkv.d2') }}</div>
                        <div class="flex items-center mt-2">
                            {{ $t('zkv.rewards') }}: <img src="@/assets/img/quidditch/flash.svg" class="w-6" alt="">+10 {{ $t('zkv.points') }}
                        </div>
                    </div>
                    <div v-if="walletStore.account">
                        <QuiButton v-if="!user.is_staked_licenses" :type="3" class="w-30" @click="goTo('https://quidditch-zkverifiers.lumoz.org/staking?tab=delegate')">{{ $t('zkv.go') }}</QuiButton>
                        <img v-else src="@/assets/img/quidditch/check.svg" alt="">
                    </div>
                </div>
                <div class="p-8 qui-zk-card h-36 flex items-center justify-between">
                    <div class="w-12 h-12 rounded-full bg-[#4C2F1E] flex items-center justify-center" style="border: 1.5px solid var(--2, #F0AF60);">
                        <img src="@/assets/img/quidditch/lumoz.svg" class="w-8 h-8" alt="">
                    </div>
                    <div class="quiSlideShine flex-1 pl-8">
                        <div class="text-xl">{{ $t('zkv.d3') }}</div>
                        <div class="flex items-center mt-2">
                            {{ $t('zkv.rewards') }}: <img src="@/assets/img/quidditch/flash.svg" class="w-6" alt="">+10 {{ $t('zkv.points') }}
                        </div>
                    </div>
                    <div v-if="walletStore.account">
                        <QuiButton v-if="!user.is_staked_esmoz" :type="3" @click="goTo('https://quidditch-zkverifiers.lumoz.org/staking')" class="w-30">{{ $t('zkv.go') }}</QuiButton>
                        <img v-else src="@/assets/img/quidditch/check.svg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { formatAddress } from '@/libs/utils'
import { useWalletStore } from '@/stores'
import { CONFIG } from '~/constants/networks'
import { getAdjustedIsoString } from '@/libs/utils'
import { getZkvTask } from '~/api/api'

const walletStore = useWalletStore()
let timer: any = null

const sign = ref({
    signature: '',
    timestamp: '',
    time: 0
})
const lock = ref(false)

const user = ref({
    address: '',
    is_run_naas_node: false,
    is_run_node: false,
    is_staked_esmoz: false,
    is_staked_licenses: false
})

onMounted(() => {
    if (walletStore.account) {
        startTimer()
    }
})

onUnmounted(() => {
    reset()
})

watch(() => walletStore.account, () => {
    if (walletStore.account) {
        startTimer()
    } else {
        reset()
    }
})

const reset = () => {
    if (timer) {
        clearInterval(timer)
    }
    user.value = {
        address: '',
        is_run_naas_node: false,
        is_run_node: false,
        is_staked_esmoz: false,
        is_staked_licenses: false
    }
    sign.value = {
        signature: '',
        timestamp: '',
        time: 0
    }
    lock.value = false
}

const startTimer = () => {
    if (timer) {
        clearInterval(timer)
    }
    getData()
    timer = setInterval(() => {
       getData()        
    }, 60 * 1000);
}

const getData = async() => {
    if (!sign.value.signature || Number(new Date()) - sign.value.time > 10 * 60 * 1000) {
        if (lock.value) {
            return
        }
        lock.value = true
        const timestamp = getAdjustedIsoString()
        const signature = await walletStore.simpleSign([timestamp, 'GET', `/api/lumoz-zkVerifiers-claim-licenses?address=${walletStore.account}`])
        sign.value = {
            signature,
            timestamp,
            time: Number(new Date())
        }
        lock.value = false
    }
   
    const data = await getZkvTask(walletStore.account, sign.value.timestamp, sign.value.signature)
    if (data.address) {
        user.value = data
    }
}

const goTo = (url: string) => {
    window.open(url)
}

</script>
<style scoped>
.qui-zk-card {
    background: url(@/assets/img/quidditch/card-bg-1.avif) no-repeat;
    background-size: 100% 100%;
    background-position: 0 0;
}
</style>