<template>
    <div class="quidditch-bg -mt-18">
        <div class="quidditch-bg-inner-2">
            <div class="h-18"></div>
            <div class="flex items-center justify-center text-2xl lg:text-5xl quiSlideShine pt-4 lg:pt-12">
                <img src="@/assets/img/quidditch/arrow.png" class="h-3 lg:h-5" style="transform: rotate(180deg);" alt="">
                <div class="mx-4 text-center">
                    <div>{{ $t('qui.joint') }}</div>
                </div>
                <img src="@/assets/img/quidditch/arrow.png" class="h-3 lg:h-5" alt="">
            </div>
            <div class="quiSlideShine lg:(w-3/5 ml-1/5 mt-8 text-base) text-center mt-4 text-sm">
                {{ $t('qui.joinc') }}
            </div>
            <div class="flex items-center justify-center text-2xl lg:text-5xl quiSlideShine pt-4 lg:pt-12">
                <img src="@/assets/img/quidditch/arrow.png" class="h-3 lg:h-5" style="transform: rotate(180deg);" alt="">
                <div class="mx-4 text-center">
                    <div>{{ $t('qui.join2') }}</div>
                </div>
                <img src="@/assets/img/quidditch/arrow.png" class="h-3 lg:h-5" alt="">
            </div>
            <div class="container mx-auto mt-4 lg:mt-8 relative">
                <div class="qui-wallet-box flex items-start flex-col justify-center">
                    <div class="lg:ml-1/20 qui-wallet-box-tag font-bold h-16 lg:h-20 text-[#4C2F1E] text-base lg:text-2xl flex items-center justify-start pl-4 pb-4 mt-15">
                        Link Rewards: +10 Points <img src="@/assets/img/quidditch/flash.svg" class="ml-2 w-6 lg:w-8" alt="">
                    </div>
                    <div class="pl-8 lg:pl-1/15 lg:flex items-center lg:w-1/2 justify-between text-[#4C2F1E] text-xl lg:text-2xl mt-2 mb-4 lg:mb-0">Link Telegram with your EVM wallet!</div>
                    <div class="pl-8 lg:pl-1/15 text-lg lg:flex items-center lg:w-1/2 justify-between text-[#4C2F1E] lg:h-16">
                        {{ $t('qui.connect1') }}
                        <Wallet v-if="!walletStore.account">
                            <QuiButton class="w-40 mt-2 lg:(ml-24 mt-0) text-sm">Connect Wallet</QuiButton>
                        </Wallet>
                        <div v-else class="h-12 flex items-center w-50 justify-end pr-4">
                            {{ formatAddress(walletStore.account, 6) }} 
                            <img src="@/assets/img/quidditch/exit.svg" class="w-6 ml-2 hvr-grow cursor-pointer" @click="walletStore.disconnectWallet" alt="">
                        </div>
                    </div>
                    <div class="pl-8 lg:pl-1/15 text-lg lg:flex items-center lg:w-1/2 justify-between text-[#4C2F1E] lg:h-16">
                        <div class="pt-2">{{ $t('qui.connect2') }}</div>
                        <div v-show="!user.id" id="telegram-login-widget" class="hvr-grow qui-tg-login-button w-50 text-base mt-2 lg:pt-4"></div>
                        <div v-show="user.id" class="flex items-center ml-8 lg:mr-8 pt-2">
                            {{ user.username || user.first_name || '' }}
                        </div>
                    </div>
                    <div class="pl-8 lg:pl-1/15 text-lg flex items-center lg:w-1/2 justify-between text-[#4C2F1E] lg:h-16">
                        <div class="pt-2">Step3: Link</div>
                        <QuiButton @click="bind" v-show="walletStore.account && user.id && !binded" class="w-35 mt-2 lg:(ml-24 mt-0) text-sm">Link</QuiButton>
                        <img v-if="binded" src="@/assets/img/quidditch/check.svg" class="mr-10 w-8 ml-4" alt="">
                    </div>
                    <div class="pl-8 lg:pl-1/13 text-lg lg:flex items-start lg:w-1/2 justify-center text-[#4C2F1E] lg:h-12 py-8 lg:my-0">
                        <QuiButton @click="goToGame" class="w-50 text-xl">Enter Game</QuiButton>
                    </div>
                </div>
                <img src="@/assets/img/quidditch/paper-right-1.avif" class="hidden lg:block absolute top-1/6 left-11/20 ml-4 bottom-0 h-7/10 rounded-lg"  style="transform: rotate(10deg);" alt="">
                <img src="@/assets/img/quidditch/badge.avif" class="hidden lg:block w-36 absolute right-1/8 top-1/15 bottom-0 cursor-pointer hvr-grow" @click="toTutorial" alt="">
                <img src="@/assets/img/quidditch/rol.avif" class="hidden lg:block w-1/5 absolute right-1/8 left-2/5 ml-8 bottom-0" alt="">
            </div>
            <div class="mt-16 mb-8 flex items-center justify-center text-2xl lg:text-5xl quiSlideShine">
                <img src="@/assets/img/quidditch/arrow.png" class="h-3 lg:h-5" style="transform: rotate(180deg);" alt="">
                <div class="mx-4">{{ $t('qui.events') }}</div>
                <img src="@/assets/img/quidditch/arrow.png" class="h-3 lg:h-5" alt="">
            </div>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 container mx-auto gap-4 xl:gap-8">
                <div class="qui-card hvr-grow p-1 cursor-pointer w-2/3 md:w-full mx-auto lg:w-full" v-for="item in showList" :key="item.name" @click="goTo(item.url)">
                    <div class="qui-card-inner h-full px-4">
                        <div class="pt-4 text-lg text-center quiSlideShine mb-4">{{ item.name }} X Lumoz</div>
                        <div class="flex items-center justify-center relative qui-card-round-box w-1/2 ml-1/4">
                            <img :src="item.img" class="w-1/2 rounded-full" alt="">
                        </div>
                        <div class="quiSlideShine text-center mt-2 h-6">{{ item.coming ? 'Coming Soon' : 'Join Now!' }}</div>
                        <div class="text-center quiSlideShine mt-4">
                            <img src="@/assets/img/quidditch/devide.png" alt="">
                            <div>{{ item.des }}</div>
                            <img src="@/assets/img/quidditch/devide.png" alt="">
                        </div>
                        <div class="quiSlideShine flex items-center justify-center my-4 text-lg">
                            <img src="@/assets/img/quidditch/coin.svg" class="h-4 w-4 mr-2" alt="">
                            {{ item.points }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-16 mb-8 flex items-center justify-center text-2xl lg:text-5xl quiSlideShine">
                <img src="@/assets/img/quidditch/arrow.png" class="h-3 lg:h-5" style="transform: rotate(180deg);" alt="">
                <div class="mx-4">{{ $t('qui.faq.title') }}</div>
                <img src="@/assets/img/quidditch/arrow.png" class="h-3 lg:h-5" alt="">
            </div>
            <div class="h-200 container mx-auto">
                <QuiFaq />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import OKX from '@/assets/img/quidditch/okx.webp'
import GATE from '@/assets/img/quidditch/gate.webp'
import C98 from '@/assets/img/quidditch/c98.webp'
import BIT from '@/assets/img/quidditch/bit.webp'

import { formatAddress } from '@/libs/utils'
import { useWalletStore } from '@/stores'
import { CONFIG } from '~/constants/networks'
import { getAdjustedIsoString } from '@/libs/utils'
import { getQuidditchTgBindStatus, quidditchTgBind } from '~/api/api'
const router = useRouter()

const showList = ref([
    {
        name: 'OKX Wallet',
        img: OKX,
        des: 'Participate in the joint event of Lumoz and OKX Wallet to earn rewards.',
        points: '4M Lumoz Points',
        coming: true,
        url: ''
    },
    {
        name: 'Bitget Wallet',
        img: BIT,
        des: 'Participate in the joint event of Lumoz and Bitget Wallet to earn rewards.',
        points: '4M Lumoz Points',
        coming: true,
        url: ''
    },
    {
        name: 'Gate Wallet',
        img: GATE,
        des: 'Participate in the joint event of Lumoz and Gate Wallet to earn rewards.',
        points: '1M Lumoz Points',
        coming: false,
        url: 'https://gate.io/web3/tasks/detail?id=75&network=EVM'
    },
    {
        name: 'Coin98 Wallet',
        img: C98,
        des: 'Participate in the joint event of Lumoz and Coin98 Wallet to earn rewards.',
        points: '500K Lumoz Points',
        coming: true,
        url: ''
    }
])

const binded = ref(false)
const walletStore = useWalletStore()
const loading = ref(false)

const user = ref({
    id: 0,
    hash: '',
    first_name: '',
    username: '',
    auth_date: '',
    last_name: '',
    photo_url: ''
})


onMounted(() => {
    const id = document.getElementById('telegram-login-widget')
    window.onTelegramAuth = (_user: any) => {
        user.value = _user
    }
    const script = document.createElement('script')
    script.src = "https://telegram.org/js/telegram-widget.js?22"
    script.async = true
    script.setAttribute('data-telegram-login', CONFIG.bot_name)
    script.setAttribute('data-size', 'large')
    script.setAttribute('data-onauth', 'onTelegramAuth(user)')
    script.setAttribute('data-request-access', 'write')
    id.appendChild(script)
    if (walletStore.account) {
        getIfBind()
    }
})

watch(() => walletStore.account, () => {
    if (walletStore.account) {
        getIfBind()
    } else {
        binded.value = false
    }
})

const getIfBind = async() => {
    const timestamp = getAdjustedIsoString()
    const signature = await walletStore.simpleSign([timestamp, 'GET', `/api/lumoz_quidditch?address=${walletStore.account}`])
    const data = await getQuidditchTgBindStatus(walletStore.account, timestamp, signature)
    if (data.address) {
        data.id = data.tg_id
        binded.value = true
        user.value = data
    }
}

const bind = async() => {
    if (loading.value) {
        return
    }
    loading.value = true
    try {
        const timestamp = getAdjustedIsoString()
        const signature = await walletStore.simpleSign([timestamp, 'GET', `/api/lumoz_quidditch?address=${walletStore.account}`])
        await quidditchTgBind(walletStore.account, timestamp, signature, user.value)
        binded.value = true
        loading.value = false
    } catch(e) {
        loading.value = false
        notifyError(e?.response?.data?.describe || 'Link failed!')
    }
}

const goToGame = () => {
    window.open('https://t.me/Lumoz_Quidditch_Bot/Match')
}

const toTutorial = () => {
    window.open('https://docs.google.com/document/d/1BuLFr7pS9u04FLI6NMh3Q69J0e4c5_Z6Jkr89ZCApTE/edit?usp=sharing')
}

const goTo = (url: string) => {
    window.open(url)
}
</script>
