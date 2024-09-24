<template></template>
<script lang="ts" setup>
import { createWeb3Modal, defaultConfig, useWeb3Modal, useWeb3ModalProvider, useWeb3ModalAccount, useDisconnect } from '@web3modal/ethers5/vue'
import { useWalletStore } from '@/stores'
const projectId = 'f84f8b1354cd3805ef4253caaadbe45f'
import OXKIMG from '@/assets/img/networks/okx.png'
import C98 from '@/assets/img/networks/c98.png'
import GATE from '@/assets/img/networks/gate.webp'
import BITGET from '@/assets/img/networks/bitget.webp'
import BYBIT from '@/assets/img/networks/bybit.webp'

const { disconnect } = useDisconnect()

let customWallets = []
if (!window.bybitWallet) {
  customWallets.push({
    id: "Bybit Wallet",
    name: "Bybit Wallet",
    image_url: BYBIT,
    desktop_link: 'https://bybit-web3.github.io/getting-started#installation'
  })
}
if (!window.okxwallet) {
  customWallets.push({
    id: "OKX Wallet",
    name: "OKX Wallet",
    image_url: OXKIMG,
    desktop_link: 'https://chromewebstore.google.com/detail/%E6%AC%A7%E6%98%93-web3-%E9%92%B1%E5%8C%85/mcohilncbfahbmgdjkbpemcciiolgcge?hl=zh-CN&utm_source=ext_sidebar'
  })
}
if (!window.gatewallet) {
  customWallets.push({
    id: "Gate Wallet",
    name: "Gate Wallet",
    image_url: GATE,
    desktop_link: 'https://chromewebstore.google.com/detail/gate-wallet/cpmkedoipcpimgecpmgpldfpohjplkpp?hl=zh-CN&utm_source=ext_sidebar'
  })
}
if (!window.bitgetWallet) {
  customWallets.push({
    id: "Bitget Wallet",
    name: "Bitget Wallet",
    image_url: BITGET,
    desktop_link: 'https://chromewebstore.google.com/detail/bitget-wallet-formerly-bi/jiidiaalihmmhddjgbnbgdfflelocpak'
  })
}

if (!window.coin98) {
  customWallets.push({
    id: "Coin98 Wallet",
    name: "Coin98 Wallet",
    image_url: C98,
    desktop_link: 'https://chromewebstore.google.com/detail/coin98-wallet/aeachknmefphepccionboohckonoeemg'
  })
}






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
  customWallets,
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
