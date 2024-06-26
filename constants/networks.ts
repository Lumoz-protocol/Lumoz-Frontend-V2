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

export const DATA_API = 'https://api.lumoz.org/lumoz-rollup/api/'