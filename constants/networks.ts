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
        name: 'Lumoz Quidditch',
        chainId: 58680,
        multicallContractAddress: '0xac19e3648af7523d84e53996563fc93703538574',
        symbol: 'MOZ',
        decimals: 18,
        rpcUrl: 'https://quidditch-rpc.lumoz.org',
        explorerUrl: 'https://quidditch.lumoz.info'
      }
  }
}

const getConfig = () => {
  switch(NETWORK) {
    case 'testnet':
      return {
        zkvApi: 'https://alpha-zkrollup-service.lumoz.org/quidditch-testnet/',
        quidditchApi: 'https://alpha-zkrollup-service.lumoz.org/quidditch-testnet-api/',
        bot_name: 'qianyikexin_bot',
        DATA_API: 'https://api.lumoz.org/lumoz-rollup/api/'
      }
    case 'mainnet':
      return {
        zkvApi: 'https://quidditch-zkverifiers-api.lumoz.org/',
        quidditchApi: 'https://quidditch-api.lumoz.org/',
        bot_name: 'Lumoz_Quidditch_Bot',
        DATA_API: 'https://api.lumoz.org/lumoz-rollup/api/'
      }
  }
}

export const LUMOZ = getNetwork()
export const CONFIG = getConfig()