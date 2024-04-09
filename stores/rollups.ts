import { defineStore } from 'pinia'
import TestnetRollups from './testnet.json'
import ZKF from '@/assets/img/networks/zkf.png'
import MEL from '@/assets/img/networks/merlin.jpg'
import axios from 'axios'

const MainnetRollups = [
  {
    "name": "Merlin",
    "img": MEL,
    "layer1": "Bitcoin",
    "des": "Unleashing Bitcoin's potential with native L1 assets, users and protocols.",
    "tvl": "3.51 B",
    "bridge": "https://merlinchain.io/bridge",
    "rpc": "https://rpc.merlinchain.io",
    "explorer": "https://scan.merlinchain.io",
    "chainIdHex": "0x1068",
    "symbol": "BTC",
    "decimals": "18",
    "transactions": "0",
    "addresses": "0",
    "home": "https://merlinchain.io/",
    "twitter": "https://twitter.com/MerlinLayer2",
    "dc": "https://discord.com/invite/JYqDYMu76e"
  },
  {
    "name": "ZKFair",
    "img": ZKF,
    "layer1": "Ethereum",
    "des": "The first community ZK-Rollup based on Polygon CDK and Celestia DA, 100% token airdrop. No Investors, No Reserve, No Pre-mining, It's All Community.",
    "tvl": "0.226 B",
    "bridge": "https://wallet.zkfair.io/",
    "rpc": "https://rpc.zkfair.io/",
    "explorer": "https://scan.zkfair.io/",
    "chainIdHex": "0xa70e",
    "symbol": "USDT",
    "decimals": "18",
    "transactions": "0",
    "addresses": "0",
    "home": "https://zkfair.io/",
    "twitter": "https://twitter.com/ZKFCommunity",
    "dc": "https://discord.com/invite/7JUnrh9GsF"
  }
]

export const useRollupsStore = defineStore('rollups', {
  state: () => ({
    testnetRollups: TestnetRollups,
    mainnetRollups: MainnetRollups
  }),
  actions: {
    async getMainData() {
      const merlin1 = await axios.get('https://scan.merlinchain.io/api/trpc/transaction.getTransactions?input={"json":{"take":10,"showPublicTag":false}}')
      const merlin2 = await axios.get('https://scan.merlinchain.io/api/trpc/address.getUniqueWalletCount?input={"json":null}')
      const zkfair = await axios.get('https://scan.zkfair.io/api/v2/stats')
      console.log(zkfair)
      this.mainnetRollups[0].transactions = merlin1.data.result.data.json.count
      this.mainnetRollups[0].addresses = Number(merlin2.data.result.data.json)
      this.mainnetRollups[1].addresses = zkfair.data.total_addresses
      this.mainnetRollups[1].transactions = zkfair.data.total_transactions
    }
  }
})
