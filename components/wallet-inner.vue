<template>
  <div>
    <button v-if="!walletStore.account" @click="modal.open()" class="wallet-button text-red-900 opacity-90 hover:opacity-100 py-2 px-4">
      Connect Wallet
    </button>
    <button v-else class="user-bg h-20 flex items-center justify-end">
      <a class="text-xs ml-10 hover:(underline text-[#E13022]) mt-1" :href="'https://scan.zkfair.io/address/'+walletStore.account" target="blank">{{ formatAddress(walletStore.account, 6) }}</a>
      <!-- <img src="@/assets/img/share/exit.png" class="w-7 mx-2 mt-1 opacity-90 hover:opacity-100" @click="dis"> -->
      <div @click="dis">111</div>
    </button>
  </div>
</template>
<script lang="ts" setup>
import { useWeb3Modal, useDisconnect } from '@web3modal/ethers5/vue'
import { useWalletStore } from '@/stores'
import { formatAddress } from '@/libs/utils'

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