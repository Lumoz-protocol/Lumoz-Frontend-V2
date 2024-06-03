<template>
  <div>
    <HomeButton v-if="!slotDefault && !walletStore.account" @click="modal.open()" class="w-40 ml-8" :word="$t('wallet.connect')" />
    <div v-if="slotDefault && !walletStore.account" @click="modal.open()">
      <slot></slot>
    </div>
    <button v-if="walletStore.account" class="home-button-corner px-4 py-1.5 flex items-center justify-center" :class="light ? 'home-button-corner-light text-white' : 'home-button-corner text-black'">
        {{ formatAddress(walletStore.account, 6) }}
        <img src="@/assets/img/share/exit.svg" @click="dis" class="opacity-80 hover:opacity-100 w-6 ml-2 hvr-grow">
      </button>
  </div>
</template>
<script lang="ts" setup>
import { useWeb3Modal, useDisconnect } from '@web3modal/ethers5/vue'
import { useWalletStore } from '@/stores'
import { formatAddress } from '@/libs/utils'
const slotDefault = ref(!!useSlots().default)

const modal = useWeb3Modal()
const { disconnect } = useDisconnect()

const walletStore = useWalletStore()

const dis = async() => {
  await disconnect()
}
</script>
<style scoped>
/* .wallet-button {
  background: url('@/assets/img/share/button-check.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.user-bg {
  background: url('@/assets/img/share/user-bg.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  aspect-ratio: 3/1;
} */
</style>