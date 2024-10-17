import { f as defineStore, g as __nuxt_component_6 } from './server.mjs';
import { ethers } from 'ethers';
import { useDisconnect } from '@web3modal/ethers5/vue';
import { useSSRContext, defineComponent, ref, useSlots } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';

const NETWORK = "mainnet";
const getNetwork = () => {
  switch (NETWORK) {
    case "testnet":
      return {
        name: "Lumoz Testnet",
        chainId: 51178,
        multicallContractAddress: "0x7716B017265BFfbd7Fa6C300Bc505cE5A693E1BA",
        symbol: "MOZ",
        decimals: 18,
        rpcUrl: "https://alpha-us-http-geth.lumoz.org",
        explorerUrl: "https://lumoz.info"
      };
    case "mainnet":
      return {
        name: "Lumoz Quidditch",
        chainId: 58680,
        multicallContractAddress: "0xac19e3648af7523d84e53996563fc93703538574",
        symbol: "MOZ",
        decimals: 18,
        rpcUrl: "https://quidditch-rpc.lumoz.org",
        explorerUrl: "https://quidditch.lumoz.info"
      };
  }
};
const getConfig = () => {
  switch (NETWORK) {
    case "testnet":
      return {
        DATA_API: "https://api.lumoz.org/lumoz-rollup/api/"
      };
    case "mainnet":
      return {
        DATA_API: "https://api.lumoz.org/lumoz-rollup/api/"
      };
  }
};
const LUMOZ = getNetwork();
const CONFIG = getConfig();
let bridge = {
  provider: null,
  web3Provider: null,
  signer: null
};
const useWalletStore = defineStore("wallet", {
  state: () => ({
    account: ""
  }),
  actions: {
    async connectWallet(provider, account) {
      if (!account) {
        this.disconnectWallet();
        return;
      }
      try {
        bridge.provider = provider;
        this.account = account;
        if (bridge.provider) {
          bridge.web3Provider = new ethers.providers.Web3Provider(provider, { name: provider.name, chainId: LUMOZ.chainId });
          bridge.signer = bridge.web3Provider.getSigner();
        }
      } catch (error) {
        this.disconnectWallet();
      }
    },
    disconnectWallet() {
      this.account = "";
      bridge = {
        provider: null,
        web3Provider: null,
        signer: null
      };
      const { disconnect } = useDisconnect();
      disconnect();
    },
    async signature(message) {
      message.message.timestamp = Number(/* @__PURE__ */ new Date());
      message.message.nonce = Math.floor(Math.random() * 1e5);
      message = JSON.stringify(message);
      const signature = await bridge.provider.request({
        method: "eth_signTypedData_v4",
        params: [this.account, message]
      });
      return {
        payload: message,
        signature
      };
    },
    async simpleSign(params) {
      const signature = await bridge.provider.request({
        method: "personal_sign",
        params: [params.join(""), this.account]
      });
      return signature;
    },
    async addNetwork(network) {
      try {
        await bridge.provider.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: network.idHex,
              chainName: network.name,
              nativeCurrency: {
                name: network.symbol,
                symbol: network.symbol,
                decimals: network.decimals
              },
              rpcUrls: [network.rpcUrl],
              blockExplorerUrls: [network.explorer]
            }
          ]
        });
      } catch (e) {
        return false;
      }
    }
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "wallet",
  __ssrInlineRender: true,
  setup(__props) {
    ref(!!useSlots().default);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_client_only = __nuxt_component_6;
      _push(ssrRenderComponent(_component_client_only, _attrs, {}, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/wallet.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { CONFIG as C, _sfc_main as _, useWalletStore as u };
//# sourceMappingURL=wallet-BRbbcLD1.mjs.map
