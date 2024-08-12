import { NETWORK } from "~/env"

const getNetwork = () => {
  switch(NETWORK) {
    case 'testnet':
      return {
        name: 'Lumoz Testnet',
        chainId: 51178,
        multicallContractAddress: '0x7716B017265BFfbd7Fa6C300Bc505cE5A693E1BA',
        symbol: 'MOZ',
        decimals: 18,
        rpcUrl: 'https://alpha-us-http-geth.lumoz.org',
        explorerUrl: 'https://lumoz.info'
      }
    case 'mainnet':
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
}

const getConfig = () => {
  switch(NETWORK) {
    case 'testnet':
      return {
        quidditchApi: 'https://alpha-zkrollup-service.lumoz.org/quidditch-testnet-api/'
      }
    case 'mainnet':
      return {
        quidditchApi: ''
      }
  }
}

export const LUMOZ = getNetwork()
export const CONFIG = getConfig()
export const DATA_API = 'https://api.lumoz.org/lumoz-rollup/api/'