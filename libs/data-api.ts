import axios from 'axios'
import ETH from '@/assets/img/networks/eth.png'
import LUMOZ from '@/assets/img/networks/lumoz.svg'
import POLYGON from '@/assets/img/networks/polygon.svg'
import BNB from '@/assets/img/networks/bsc.svg'
const DATA_API = 'https://api.lumoz.org/data/api/'
const lumozTestnetNetworkId = 51178
const goerliNetworkId = 5
const mumbaiNetworkId = 80001
const bnbTestNetworkId = 97

export const NETWORKS = [
  {
    name: 'Lumoz Testnet',
    chainId: lumozTestnetNetworkId,
    img: LUMOZ,
    chain: 'Lumoz',
    id: lumozTestnetNetworkId,
    idHex: `0x${lumozTestnetNetworkId.toString(16)}`,
    symbol: 'MOZ',
    decimals: 18,
    rpcUrl: 'https://alpha-us-http-geth.lumoz.org',
    explorer: 'https://lumoz.info',
    explorerName: 'Lumoz.info',
    wallet: 'metamask',
    rollupApplyContractAddress: '0xd57FE97DC021D7E2E3e96834F721a08E7E6a9014',
    multicallAddress: '0x7716B017265BFfbd7Fa6C300Bc505cE5A693E1BA',
    wmozAddress: ''
  },
  {
    name: 'ETH(goerli)',
    chainId: goerliNetworkId,
    chain: 'Goerli',
    img: ETH,
    id: goerliNetworkId,
    idHex: `0x${goerliNetworkId.toString(16)}`,
    symbol: 'ETH',
    decimals: 18,
    rpcUrl: 'https://ethereum-goerli.publicnode.com',
    explorer: 'https://goerli.etherscan.io/',
    explorerName: 'Etherscan',
    wallet: 'metamask',
    rollupApplyContractAddress: '0xe077c0E55d7461F8C9357e3fCcfaFc0920b807F7',
    multicallAddress: '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696',
    wmozAddress: '0x80920B48664b45c8FD9C2f4201AcFf6249c72768'
  },
  {
    name: 'Polygon Mumbai',
    chainId: mumbaiNetworkId,
    chain: 'Mumbai',
    img: POLYGON,
    id: mumbaiNetworkId,
    idHex: `0x${mumbaiNetworkId.toString(16)}`,
    symbol: 'MATIC',
    decimals: 18,
    rpcUrl: 'https://polygon-mumbai-bor.publicnode.com',
    explorer: 'https://mumbai.polygonscan.com/',
    explorerName: 'Polygonscan',
    wallet: 'metamask',
    multicallAddress: '',
    rollupApplyContractAddress: '',
    wmozAddress: ''
  },
  {
    name: 'BNB Testnet',
    chainId: bnbTestNetworkId,
    chain: 'BNB Testnet',
    img: BNB,
    id: bnbTestNetworkId,
    idHex: `0x${bnbTestNetworkId.toString(16)}`,
    symbol: 'BNB',
    decimals: 18,
    rpcUrl: 'https://endpoints.omniatech.io/v1/bsc/testnet/public',
    explorer: 'https://testnet.bscscan.com/',
    explorerName: 'Bscscan',
    wallet: 'metamask',
    multicallAddress: '',
    rollupApplyContractAddress: '',
    wmozAddress: ''
  }
]

const dataUrl = (path: string) => {
  return `${DATA_API}${path}`
}


const getNetworksId = (layer1: string) => {
  const network = NETWORKS.find(item => item.chain === layer1)
  return network?.id || ''
}


export const getTotalMiners = async (layer1: string, rollupId?: string, phase?: string) => {
  const { data } = await axios.get(dataUrl(`total-miners`), {
    params: {
      layer1: getNetworksId(layer1),
      rollup_id: rollupId,
      phase
    }
  })
  return data
}


export const getTotalMinersChange = async (layer1: string, rollupId?: string) => {
  const { data } = await axios.get(dataUrl(`daily-rollup-change-rate`), {
    params: {
      layer1: getNetworksId(layer1),
      rollup_id: rollupId
    }
  })
  return data
}


export const getRollupsInfo = async (phase: string) => {
  if (phase) {
    const { data } = await axios.get(dataUrl(`rollups-info?start=2023-12-31&phase=${phase}`))
    return data
  } else {
    const { data } = await axios.get(dataUrl('rollups-info?start=2023-12-31'))
    return data
  }
}


export const getMinerOverview = async (layer1: string) => {
  const { data } = await axios.get(dataUrl(`miner-overview`), {
    params: {
      layer1: getNetworksId(layer1)
    }
  })
  return data
}


export const getMinerOverviewLineChart = async (layer1: string, start: string) => {
  const { data } = await axios.get(dataUrl(`daily-rollup-overview`), {
    params: {
      layer1: getNetworksId(layer1),
      start
    }
  })
  return data
}