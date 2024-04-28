import { defineStore } from 'pinia'
import { getWhitelistTiers, getPrices, getDepositAmount, getTokenPrice, getUserWhiteTierInfo } from '@/api/api'
import { utils } from 'ethers'
import { DepositContract } from '@/libs/ethers/contract'
import { NODE_NETWORKS } from '@/constants/networks'
import { useWalletStore } from '@/stores'
import { getAdjustedIsoString } from '@/libs/utils'

export const useTierStore = defineStore('tier', {
  state: () => ({
    pre: {
      current_tier_number: 1,
      sell_count: 0,
      volume: 0
    },
    prices: [],
    depositAmount: {
      arbitrum: 0,
      merlin: 0,
      zkfair: 0
    },
    tokenPrices: {
      btc: 0,
      eth: 0,
      zkf: 0
    },
    user: {
      whiteDeposited: -1,
      preTier: -1
    }
  }),
  actions: {
    async getWhiteTiers() {
      this.pre = await getWhitelistTiers()
    },
    async getPrices() {
      this.prices = (await getPrices()).tier
    },
    async getDepositAmount() {
      const { deposit_amount } = await getDepositAmount()
      try {
        this.depositAmount = {
          arbitrum: Number(utils.formatEther(deposit_amount.arbitrum)),
          merlin: Number(utils.formatEther(deposit_amount.merlin)),
          zkfair: Number(utils.formatEther(deposit_amount.zkfair))
        }
      } catch {}
    },
    async getTokenPrice() {
      const data = await getTokenPrice()
      try {
        this.tokenPrices = {
          btc: Number(Number(data.btc).toFixed(4)),
          eth: Number(Number(data.eth).toFixed(4)),
          zkf: Number(Number(data.zkf).toFixed(4))
        }
      } catch{}
    },
    async getUser(account: string) {
      const walletStore = useWalletStore()

      const timestamp = getAdjustedIsoString()
      const signature = await walletStore.simpleSign([timestamp, 'GET', `/api/lumoz_nodes_whitelist?address=${walletStore.account}`])
      const data = await getUserWhiteTierInfo(walletStore.account, timestamp,  signature)
      
      if (data.tier_number) {
        this.user.preTier = data.tier_number
      }

      try {
        const list = ['ZKFair', 'Merlin', 'Arbitrum One']
        let pList = []
        for (let i in list) {
          const _network:any = NODE_NETWORKS.find(item => item.name === list[i])
          const contract = new DepositContract(_network.depositContract, _network?.rpcUrl, _network?.chainId)
          pList.push(contract.hasDeposited(account))
        }
        const data = await Promise.all(pList)
        let results = [Number(utils.formatEther(data[0])), Number(utils.formatEther(data[1])), Number(utils.formatEther(data[2]))]
        if (results.find(item => item)) {
          this.user.whiteDeposited = 1
        } else {
          this.user.whiteDeposited = 0
        }
      } catch {
        this.user.whiteDeposited = -1
      }
    },
    async resetUser() {
      this.user.whiteDeposited = -1
    },
    depositSuccess(tier: number) {
      this.user.preTier = tier
      this.user.whiteDeposited = 1
    }
  }
})
