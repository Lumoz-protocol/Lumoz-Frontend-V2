<template></template>
<script lang="ts" setup>
import { createWeb3Modal, defaultConfig, useWeb3Modal, useWeb3ModalProvider, useWeb3ModalAccount, useDisconnect } from '@web3modal/ethers5/vue'
import { useWalletStore } from '@/stores'
const projectId = 'f84f8b1354cd3805ef4253caaadbe45f'

const { disconnect } = useDisconnect()

const networks = [
  // {
  //   chainId: 51178,
  //   name: 'Lumoz',
  //   currency: 'MOZ',
  //   explorerUrl: 'https://lumoz.info',
  //   rpcUrl: 'https://alpha-us-http-geth.lumoz.org'
  // },
  {
    chainId: 42766,
    name: 'ZKFair',
    currency: 'USDT',
    explorerUrl: 'https://scan.zkfair.io',
    rpcUrl: 'https://rpc.zkfair.io'
  },
  {
    chainId: 4200,
    name: 'Merlin',
    currency: 'BTC',
    explorerUrl: 'https://scan.merlinchain.io',
    rpcUrl: 'https://rpc.merlinchain.io'
  },
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
  allowUnsupportedChain: true,
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
