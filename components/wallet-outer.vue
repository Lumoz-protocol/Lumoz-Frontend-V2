<template></template>
<script lang="ts" setup>
import { createWeb3Modal, defaultConfig, useWeb3Modal, useWeb3ModalProvider, useWeb3ModalAccount, useDisconnect } from '@web3modal/ethers5/vue'
import { useWalletStore } from '@/stores'
import { NODE_NETWORKS } from '@/constants/networks'
const projectId = 'f84f8b1354cd3805ef4253caaadbe45f'

const { disconnect } = useDisconnect()
const otherNetwork = JSON.parse(JSON.stringify(NODE_NETWORKS)).map(item => {
  return {
    chainId: item.chainId,
    name: item.name,
    currency: item.symbol,
    explorerUrl: item.explorer,
    rpcUrl: item.rpcUrl
  }
})
const networks = [
  {
    chainId: 51178,
    name: 'Lumoz',
    currency: 'MOZ',
    explorerUrl: 'https://lumoz.info',
    rpcUrl: 'https://alpha-us-http-geth.lumoz.org'
  },
  ...otherNetwork
]

const metadata = {
  name: 'Lumoz',
  description: 'Lumoz',
  url: 'https://lumoz.org',
  icons: []
}

const modal = createWeb3Modal({
  ethersConfig: defaultConfig({
    metadata,
    enableEIP6963: true,
    enableInjected: true,
    enableCoinbase: false,
    rpcUrl: 'https://alpha-us-http-geth.lumoz.org'
  }),
  chains: networks,
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
