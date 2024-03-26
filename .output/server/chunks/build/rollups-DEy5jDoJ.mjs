import { b as buildAssetsURL } from '../routes/renderer.mjs';
import { f as defineStore } from './server.mjs';
import { ethers } from 'ethers';
import { L as LUMOZ } from './networks-K8kDI_xQ.mjs';
import axios from 'axios';

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
const TestnetRollups = [
  {
    name: "Lumoz Public zkEVM V2",
    img: "https://lumoz.org/admin/file/2023-10-10-1696927783550.png",
    layer1: "Lumoz",
    zkevmType: "Polygon zkEVM",
    da: "Lumoz Testnet",
    gasToken: "MOZ"
  },
  {
    name: "CB zkEVM",
    img: "https://lumoz.org/admin/file/2023-10-10-1696927791950.png",
    layer1: "Lumoz",
    zkevmType: "Polygon zkEVM",
    da: "Lumoz Testnet",
    gasToken: "MOZ"
  },
  {
    name: "LAW Chain",
    img: "https://lumoz.org/admin/file/2023-10-10-1696927803717.png",
    layer1: "Lumoz",
    zkevmType: "Polygon zkEVM",
    da: "Lumoz Testnet",
    gasToken: "MOZ"
  },
  {
    name: "XThrill",
    img: "https://lumoz.org/admin/file/2023-10-10-1696927811298.png",
    layer1: "Lumoz",
    zkevmType: "Polygon zkEVM",
    da: "Lumoz Testnet",
    gasToken: "MOZ"
  },
  {
    name: "SoQuest zkEVM",
    img: "https://lumoz.org/admin/file/2023-10-10-1696927818345.jpeg",
    layer1: "Lumoz",
    zkevmType: "Polygon zkEVM",
    da: "Lumoz Testnet",
    gasToken: "MOZ"
  },
  {
    name: "ReadON Content Test Chain",
    img: "https://lumoz.org/admin/file/2023-10-10-1696927826865.png",
    layer1: "Lumoz",
    zkevmType: "Polygon zkEVM",
    da: "Lumoz Testnet",
    gasToken: "READ"
  },
  {
    name: "Relation",
    img: "https://lumoz.org/admin/file/2023-10-10-1696927834174.png",
    layer1: "Lumoz",
    zkevmType: "Polygon zkEVM",
    da: "Lumoz Testnet",
    gasToken: "MOZ"
  },
  {
    name: "VIP3",
    img: "https://lumoz.org/admin/file/2023-10-10-1696927840742.png",
    layer1: "Lumoz",
    zkevmType: "Polygon zkEVM",
    da: "Lumoz Testnet",
    gasToken: "MOZ"
  },
  {
    name: "DeBox",
    img: "https://lumoz.org/admin/file/2023-10-10-1696927852291.png",
    layer1: "Lumoz",
    zkevmType: "Polygon zkEVM",
    da: "Lumoz Testnet",
    gasToken: "MOZ"
  },
  {
    name: "ODX zkEVM Testnet",
    img: "https://lumoz.org/admin/file/2023-10-10-1696927860275.png",
    layer1: "Goerli",
    zkevmType: "Polygon zkEVM",
    da: "Goerli",
    gasToken: "ETH"
  },
  {
    name: "aaww",
    img: "https://lumoz.org/admin/file/2023-10-10-1696927870426.png",
    layer1: "Goerli",
    zkevmType: "Polygon zkEVM",
    da: "Goerli",
    gasToken: "ETH"
  },
  {
    name: "Public zkSync V2",
    img: "https://lumoz.org/admin/file/2023-10-10-1696927946984.png",
    layer1: "Goerli",
    zkevmType: "zkSync",
    da: "Goerli",
    gasToken: "ETH"
  },
  {
    name: "Decibling",
    img: "https://lumoz.org/admin/file/2023-10-10-1696927940562.jpeg",
    layer1: "Goerli",
    zkevmType: "zkSync",
    da: "Goerli",
    gasToken: "ETH"
  },
  {
    name: "Polygon CDK DEMO",
    img: "https://lumoz.org/admin/file/2023-10-18-1697596346142.png",
    layer1: "Goerli",
    zkevmType: "Polygon zkEVM",
    da: "Goerli",
    gasToken: "ETH"
  },
  {
    name: "StarkSport Rollup",
    img: "https://lumoz.org/admin/file/2023-10-12-1697106379207.png",
    layer1: "Lumoz",
    zkevmType: "Polygon zkEVM",
    da: "Lumoz Testnet",
    gasToken: "SFN"
  },
  {
    name: "Public Scroll",
    img: "https://lumoz.org/admin/file/2023-10-26-1698289010503.png",
    layer1: "Goerli",
    zkevmType: "Scroll",
    da: "Goerli",
    gasToken: "ETH"
  }
];
const ZKF = "" + buildAssetsURL("zkf.Ccxd1MoM.png");
const MEL = "" + buildAssetsURL("merlin.Bkbi66L5.jpg");
const MainnetRollups = [
  {
    "name": "Merlin",
    "img": MEL,
    "layer1": "Bitcoin",
    "des": "Unleashing Bitcoin's potential with native L1 assets, users and protocols.",
    "tvl": "3.51 B",
    "bridge": "https://merlinchain.io/bridge",
    "rpc": "https://rpc.merlinchain.io",
    "explorer": "https://scan.merlinchain.io",
    "chainIdHex": "0x1068",
    "symbol": "BTC",
    "decimals": "18",
    "transactions": "0",
    "addresses": "0",
    "home": "https://merlinchain.io/",
    "twitter": "https://twitter.com/MerlinLayer2",
    "dc": "https://discord.com/invite/JYqDYMu76e"
  },
  {
    "name": "ZKFair",
    "img": ZKF,
    "layer1": "Ethereum",
    "des": "The first community ZK-Rollup based on Polygon CDK and Celestia DA, 100% token airdrop. No Investors, No Reserve, No Pre-mining, It's All Community.",
    "tvl": "0.226 B",
    "bridge": "https://wallet.zkfair.io/",
    "rpc": "https://rpc.zkfair.io/",
    "explorer": "https://scan.zkfair.io/",
    "chainIdHex": "0xa70e",
    "symbol": "USDT",
    "decimals": "18",
    "transactions": "0",
    "addresses": "0",
    "home": "https://zkfair.io/",
    "twitter": "https://twitter.com/ZKFCommunity",
    "dc": "https://discord.com/invite/7JUnrh9GsF"
  }
];
const useRollupsStore = defineStore("rollups", {
  state: () => ({
    testnetRollups: TestnetRollups,
    mainnetRollups: MainnetRollups
  }),
  actions: {
    async getMainData() {
      const merlin = await axios.get("https://scan.merlinchain.io/api/v2/stats");
      const zkfair = await axios.get("https://scan.zkfair.io/api/v2/stats");
      this.mainnetRollups[0].addresses = merlin.data.total_addresses;
      this.mainnetRollups[0].transactions = merlin.data.total_transactions;
      this.mainnetRollups[1].addresses = zkfair.data.total_addresses;
      this.mainnetRollups[1].transactions = zkfair.data.total_transactions;
    }
  }
});

export { useWalletStore as a, useRollupsStore as u };
//# sourceMappingURL=rollups-DEy5jDoJ.mjs.map
