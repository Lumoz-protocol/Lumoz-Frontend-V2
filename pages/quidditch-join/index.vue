<template>
    <div class="quidditch-bg">
        <div class="quidditch-bg-inner-2 h-full min-h-screen">
            <div class="flex items-center justify-center text-lg lg:text-5xl quiSlideShine pt-8 lg:pt-12">
                <img src="@/assets/img/quidditch/arrow.png" class="h-3 lg:h-5" style="transform: rotate(180deg);" alt="">
                <div class="mx-4 text-center">
                    <div>{{ $t('qui.joint1') }}</div>
                    <div>{{ $t('qui.joint2') }}</div>
                </div>
                <img src="@/assets/img/quidditch/arrow.png" class="h-3 lg:h-5" alt="">
            </div>
            <div class="quiSlideShine lg:(w-3/5 ml-1/5) text-center mt-8">
                {{ $t('qui.joinc') }}
            </div>
            <div class="container mx-auto mt-8 relative">
                <div class="qui-wallet-box flex items-start flex-col justify-center">
                    <div class="lg:ml-1/20 qui-wallet-box-tag font-bold h-16 lg:h-20 text-[#4C2F1E] text-base lg:text-2xl flex items-center justify-start pl-4 pb-4">
                        Rewards: +10Points <img src="@/assets/img/quidditch/flash.svg" class="ml-2 w-6 lg:w-8" alt="">
                    </div>
                    <div class="pl-8 lg:pl-1/15 text-xl lg:flex items-center lg:w-1/2 justify-between text-[#4C2F1E] mt-0 lg:mt-8">
                        {{ $t('qui.connect1') }}
                        <Wallet v-if="!walletStore.account">
                            <QuiButton class="w-50 mt-2 lg:(ml-24 mt-0) text-base">Connect Wallet</QuiButton>
                        </Wallet>
                        <div v-else class="h-12 flex items-center w-50 justify-end pr-4">
                            {{ formatAddress(walletStore.account, 6) }} 
                            <img src="@/assets/img/quidditch/exit.svg" class="w-6 ml-2 hvr-grow cursor-pointer" @click="walletStore.disconnectWallet" alt="">
                        </div>
                    </div>
                    <div class="pl-8 lg:pl-1/15 text-xl lg:flex items-start lg:w-1/2 justify-between text-[#4C2F1E] mt-4">
                        <div class="pt-2">{{ $t('qui.connect2') }}</div>
                        <!-- <QuiButton v-if="!user.id" class="w-50 text-base mt-2 lg:mt-0" >Connect Telegram</QuiButton> -->
                        <div v-show="!user.id" id="telegram-login-widget hvr-grow" class="qui-tg-login-button w-50 text-base mt-2 lg:mt-0"></div>
                        <div v-show="user.id" class="flex items-center">
                            {{ user.username || user.first_name }}
                            <img v-if="user.photo_url" :src="user.photo_url" class="w-10 h-10 ml-2 rounded-full" alt="">
                        </div>
                    </div>
                    <div class="pl-8 lg:pl-1/15 text-xl lg:flex items-start lg:w-1/2 justify-between text-[#4C2F1E] mt-4">
                        <div class="pt-2">3、 Bind</div>
                        <QuiButton v-if="walletStore.account && user.id" class="w-50 mt-2 lg:(ml-24 mt-0) text-base">Bind</QuiButton>
                    </div>
                </div>
                <img src="@/assets/img/quidditch/paper-right-1.avif" class="hidden lg:block absolute right-0 top-0 bottom-0 left-1/2 h-full" alt="">
                <img src="@/assets/img/quidditch/badge.avif" class="hidden lg:block w-32 absolute right-1/8 top-1/15 bottom-0" alt="">
            </div>
            <div class="h-120">
                <!-- {{ user }} -->
                <div class="text-center quiSlideShine mt-8">Congratulations! Now enter the game to collect more rewards.</div>
                <div class="flex justify-center">
                    <div class="hvr-grow w-60 mx-auto">
                        <div class="w-60 flex items-center justify-center mt-8 qui-start-button-bg py-1 cursor-pointer">
                            <img src="@/assets/img/quidditch/start-button-arrow.png" class="w-8" alt="">
                            <div class="text-[#FFF09E] text-xl mx-4">Enter Game</div>
                            <img src="@/assets/img/quidditch/start-button-arrow.png" class="w-8" style="transform: rotate(180deg);" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { formatAddress } from '@/libs/utils'
import { useWalletStore } from '@/stores'

const walletStore = useWalletStore()
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
    script.setAttribute('data-telegram-login', 'qianyikexin_bot')
    script.setAttribute('data-size', 'large')
    script.setAttribute('data-onauth', 'onTelegramAuth(user)')
    script.setAttribute('data-request-access', 'write')
    id.appendChild(script)
    setUpTimer()
})

function setUpTimer() {
    let timer = null
    timer = setInterval(() => {
        try {
            document.getElementsByClassName('tgme_widget_login_button')[0].innerHTML = '<i class="tgme_widget_login_button_icon"></i>Log In Telegram'
            clearInterval(timer)
        } catch {}
    }, 500)
}

</script>
