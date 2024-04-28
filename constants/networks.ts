import ZKF from '@/assets/img/networks/fair.png'
import MERL from '@/assets/img/networks/merl.png'
import ARB from '@/assets/img/networks/arb.png'

const getNetwork = () => {
  return {
    name: 'Lumoz Testnet',
    chainId: 51178,
    multicallContractAddress: '0x7716B017265BFfbd7Fa6C300Bc505cE5A693E1BA',
    symbol: 'MOZ',
    decimals: 18,
    rpcUrl: 'https://alpha-us-http-geth.lumoz.org',
    explorerUrl: 'https://lumoz.info'
  }
}


export const LUMOZ = getNetwork()

export const DATA_API = 'https://lumoz.org/node/api/'

export const NODE_NETWORKS = [
  {
    name: 'ZKFair',
    chainId: 43851,
    symbol: 'USDC',
    decimals: 18,
    zkfAddress: '0xFed0Ea861B09a471cc6646c0E0b36863Be4d94e4',
    depositContract: '0x3a59464d1c529b6D53086110Baaf99e605047b13',
    rpcUrl: 'https://testnet-rpc.zkfair.io',
    explorer: 'https://testnet-scan.zkfair.io',
    img: ZKF
  },
  {
    name: 'Merlin',
    chainId: 686868,
    symbol: 'BTC',
    decimals: 18,
    depositContract: '0xeed4dA035d084b0A0fdA04444270D9383E142452',
    rpcUrl: 'https://testnet-rpc.merlinchain.io',
    explorer: 'https://testnet-scan.merlinchain.io',
    img: MERL
  },
  {
    name: 'Arbitrum One',
    chainId: 421614,
    symbol: 'ETH',
    decimals: 18,
    depositContract: '0xeed4da035d084b0a0fda04444270d9383e142452',
    rpcUrl: 'https://sepolia-rollup.arbitrum.io/rpc',
    explorer: 'https://sepolia.arbiscan.io',
    img: ARB
  },
]

export const BASE_TOKEN_CONTRACT_URL = '0x0000000000000000000000000000000000000000'