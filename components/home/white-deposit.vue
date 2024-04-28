<template>
  <HomeCard>
    <div class="text-2xl slideShineY font-bold mb-8">{{ $t('home.white.deposit') }}</div>
    <div class="flex items-center justify-between">
      <div class="mr-4">{{ $t('home.white.network') }}</div>
      <div>
        <div class="hvr-float" v-for="item in NODE_NETWORKS" :key="item.name">
          <div class="p-2 py-2 mr-4 rounded-xl flex items-center border-2 cursor-pointer hover:border-primary-900" :class="now === item.name ? 'bg-[#BEFE001A] border-primary-900 text-primary-900' : 'bg-[#353533] border-[#353533]'" @click="now = item.name">
            <img :src="item.img" alt="" class="w-6 mr-2">
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>

    <div class="p-8 border home-deposit-box rounded-2xl mt-4 border-[#FFFFFF22]">
      <div class="flex justify-between">
        <div>{{ $t('home.white.current') }}</div>
        <div class="font-bold">Tier {{ tierStore.pre.current_tier_number }}</div>
      </div>
      <div class="flex justify-between mt-8">
        <div>{{ $t('home.white.pricepnode') }}</div>
        <div class="font-bold">{{ price }}</div>
      </div>
      <div class="flex justify-between mt-8">
        <div>{{ $t('home.white.depositToken') }}</div>
        <div class="text-right">
          <div class="font-bold">{{ depositAmount }} (50 USD)</div>
          <div class="text-xs">{{ tokenPrice }}</div>
        </div>
      </div>
    </div>
    <div class="mt-8 mb-4 flex items-center justify-center">
      <Wallet v-if="!walletStore.account" />
      <HomeButton v-else class="w-32" :class="(loading || buttonDisabled) ? 'cursor-not-allowed' : ''" :light="buttonDisabled" @click="confirm">
        <div class="flex items-center justify-center">
          <img v-if="loading" src="@/assets/img/icon/loading.svg" class="w-6 mr-2 img-rotate" alt="">
          {{ tierStore.user.whiteDeposited === 1 ? $t('home.white.deposited') : $t('home.white.confirm') }}
        </div>
      </HomeButton>
    </div>
  </HomeCard>
</template>
<script setup lang="ts">
import { NODE_NETWORKS } from '@/constants/networks'
import { notifyError, notifySuccess } from '@/libs/utils'
import { useWalletStore, useTierStore } from '@/stores'
import { getBridge } from '@/stores/wallet'
import { Erc20Contract, DepositContract } from '@/libs/ethers/contract'
const walletStore = useWalletStore()
const tierStore = useTierStore()
const now = ref(NODE_NETWORKS[0].name)
const loading = ref(false)

const price = computed(() => {
  if (!tierStore.pre.current_tier_number) {
    return '-'
  }
  const item = tierStore.prices.find(_item => _item.tier_number == tierStore.pre.current_tier_number)
  if (!item) {
    return '-'
  }
  return item.price + ' USD'
})

const depositAmount = computed(() => {
  if (now.value === 'ZKFair') {
    return tierStore.depositAmount.zkfair + ' ZKF'
  } else if(now.value === 'Merlin') {
    return tierStore.depositAmount.merlin + ' BTC'
  } else if(now.value === 'Arbitrum One') {
    return tierStore.depositAmount.arbitrum + ' ETH'
  }
  return '-'
})

const tokenPrice = computed(() => {
  if (now.value === 'ZKFair') {
    return `1 ZKF = ${tierStore.tokenPrices.zkf} USD(Price Now)`
  } else if(now.value === 'Merlin') {
    return `1 BTC = ${tierStore.tokenPrices.btc} USD(Price Now)`
  } else if(now.value === 'Arbitrum One') {
    return `1 ETH = ${tierStore.tokenPrices.eth} USD(Price Now)`
  }
  return '-'
})

const buttonDisabled = computed(() => {
  if (tierStore.user.whiteDeposited === 1) {
    return true
  } else {
    return false
  }
})

const confirm = async() => {
  if (loading.value || buttonDisabled.value) {
    return
  }
  loading.value = true
  try {
    const _network = NODE_NETWORKS.find(item => item.name === now.value)
    let amount = 0

    switch(_network?.name) {
      case 'ZKFair': amount = tierStore.depositAmount.zkfair; break;
      case 'Merlin': amount = tierStore.depositAmount.merlin; break;
      case 'Arbitrum One': amount = tierStore.depositAmount.arbitrum; break;
    }

    const switched = await walletStore.checkAndSwitchNetwork(_network)
    if (!switched) {
      throw new Error()
    }
    await walletStore.setNetwork(_network?.name, _network?.chainId)
    if (_network && _network.name === 'ZKFair') {
      let transContract = new Erc20Contract(_network.zkfAddress, _network.rpcUrl, _network.chainId)
      const allowance = await transContract.allowance(walletStore.account, _network.depositContract)
      if (Number(allowance) < amount) {
        transContract = new Erc20Contract(
          _network.zkfAddress,
          '',
          null,
          getBridge().web3Provider.getSigner()
        )
        const result = await transContract.approve(_network.depositContract)
        if (!result) {
          loading.value = false
          return
        }
        await result.wait()
      }
    }

    let tx
    const depositContract = new DepositContract(
      _network.depositContract,
      _network?.rpcUrl,
      _network?.chainId,
      getBridge().web3Provider.getSigner()
    )
    tx = await depositContract.deposit(_network.name === 'ZKFair' ? 0 : amount)
    await tx.wait()
    tierStore.depositSuccess(tierStore.pre.current_tier_number)
    tierStore.getUser()
    notifySuccess('Deposit success!')
    loading.value = false
  } catch(e) {
    notifyError('Deposit failed!')
    loading.value = false
  }
}
</script>
<style scoped>
.home-deposit-box {
  box-shadow: 0px 1px 2px 0px #52515440 inset;
  background: linear-gradient(180deg, #242325 0%, #171619 100%);
}
</style>