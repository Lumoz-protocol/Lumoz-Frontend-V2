<template></template>
<script lang="ts" setup>
import { createWeb3Modal, defaultConfig, useWeb3Modal, useWeb3ModalProvider, useWeb3ModalAccount, useDisconnect } from '@web3modal/ethers5/vue'
import { useWalletStore } from '@/stores'
const projectId = 'f84f8b1354cd3805ef4253caaadbe45f'

const { disconnect } = useDisconnect()

const mainnet = {
  chainId: 42766,
  name: 'ZKFair',
  currency: 'USDT',
  explorerUrl: 'https://scan.zkfair.io',
  rpcUrl: 'https://rpc.zkfair.io'
}

const metadata = {
  name: 'Dragon Slayer',
  description: 'Dragon Slayer',
  url: 'https://dragon-slayer.zkfair.io/',
  icons: []
}

const modal = createWeb3Modal({
  ethersConfig: defaultConfig({
    metadata,
    defaultChainId: 42766,
    enableEIP6963: true,
    enableInjected: true,
    enableCoinbase: false,
    rpcUrl: 'https://rpc.zkfair.io'
  }),
  chains: [mainnet],
  projectId,
  enableAnalytics: false
})

const {address} = useWeb3ModalAccount()
const { walletProvider } = useWeb3ModalProvider()
const walletStore = useWalletStore()
watch(() => address.value, () => {
  connect()
}, { deep: true })

onMounted(async () => {
  if (address.value) {
    connect()
  }
})

const connect = async() => {
  await walletStore.connectWallet(walletProvider.value, address.value)
  if (!address.value) {
    try {
      await disconnect()
    } catch {}
  }
}
</script>
