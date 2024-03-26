const getNetwork = () => {
  return {
    name: "Lumoz Testnet",
    chainId: 51178,
    multicallContractAddress: "0x7716B017265BFfbd7Fa6C300Bc505cE5A693E1BA",
    symbol: "MOZ",
    decimals: 18,
    rpcUrl: "https://alpha-us-http-geth.lumoz.org",
    explorerUrl: "https://lumoz.info"
  };
};
const LUMOZ = getNetwork();
const DATA_API = "https://lumoz.org/lumoz-rollup/api/";
const IFRAME_PREFIX = "https://launch.lumoz.org/";

export { DATA_API as D, IFRAME_PREFIX as I, LUMOZ as L };
//# sourceMappingURL=networks-K8kDI_xQ.mjs.map
