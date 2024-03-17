const getZkFairNetwork = () => {
  return {
    name: "ZKFair",
    chainId: 42766,
    customizeGasName: "USD Coin",
    multicallContractAddress: "0x1CbC08bf0D48b18F9f97796c61352b192d1850A5",
    symbol: "USDC",
    decimals: 18,
    customizeGasAddress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    rpcUrl: "https://rpc.zkfair.io",
    explorerUrl: "https://scan.zkfair.io",
    assetsUrl: "https://wallet.zkfair.io"
  };
};
const ZKFAIR = getZkFairNetwork();
const DATA_API = "https://lumoz.org/lumoz-rollup/api/";
const IFRAME_PREFIX = "https://lumoz.org/";

export { DATA_API as D, IFRAME_PREFIX as I, ZKFAIR as Z };
//# sourceMappingURL=networks-D5gBYVoB.mjs.map
