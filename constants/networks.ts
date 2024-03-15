const getZkFairNetwork = () => {
  return {
    name: 'ZKFair',
    chainId: 42766,
    customizeGasName: 'USD Coin',
    multicallContractAddress: '0x1CbC08bf0D48b18F9f97796c61352b192d1850A5',
    symbol: 'USDC',
    decimals: 18,
    customizeGasAddress: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    rpcUrl: 'https://rpc.zkfair.io',
    explorerUrl: 'https://scan.zkfair.io',
    assetsUrl: 'https://wallet.zkfair.io'
  }
}


export const ZKFAIR = getZkFairNetwork()

export const DATA_API = 'https://api.zkfair.io/dragon/api/'
