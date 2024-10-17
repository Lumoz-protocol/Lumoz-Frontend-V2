import { defineStore } from 'pinia'
import ZKF from '@/assets/img/networks/zkf.png'
import MEL from '@/assets/img/networks/merlin.jpg'
import MAT from '@/assets/img/networks/mat.png'
import ULT from '@/assets/img/networks/ult.png'
import DUCK from '@/assets/img/networks/duck.png'
import READ from '@/assets/img/networks/read.png'


const MainnetRollups = [
  {
    "name": "Merlin",
    "img": MEL,
    "des": "Unleashing Bitcoin's potential with native L1 assets, users and protocols.",
    "home": "https://merlinchain.io/",
    "twitter": "https://twitter.com/MerlinLayer2",
    "dc": "https://discord.com/invite/JYqDYMu76e"
  },
  {
    "name": "ZKFair",
    "img": ZKF,
    "des": "The first community ZK-Rollup based on Polygon CDK and Celestia DA, 100% token airdrop. No Investors, No Reserve, No Pre-mining, It's All Community.",
    "home": "https://zkfair.io/",
    "twitter": "https://twitter.com/ZKFCommunity",
    "dc": "https://discord.com/invite/7JUnrh9GsF"
  },
  {
    "name": "MATR1X",
    "img": MAT,
    "des": "MATR1X is an innovative cultural and entertainment platform combining gaming, AI, Esports and blockchain infrastructure. We strive to revolutionize the global gaming and digital content industry via blockchain and AI technology.",
    "home": "https://matr1x.io/",
    "twitter": "https://x.com/Matr1xOfficial",
    "dc": "https://discord.com/invite/matr1x"
  },
  {
    "name": "Ultiverse",
    "img": ULT,
    "des": "Ultiverse is an integrated Web3 platform combining GameFi, NFTs, DeFi, Marketplace, and Liquid Staking. Ultiverse aims at building the next-generation entrance connecting Web3 with players all around the world.",
    "home": "https://www.ultiverse.io/",
    "twitter": "https://twitter.com/UltiverseDAO",
    "dc": "https://discord.com/invite/ultiverse"
  },
  {
    "name": "DuckChain",
    "img": DUCK,
    "des": "The first #TON consumer layer connecting TON with EVM, BTC, and more!",
    "home": "https://duckchain.io/",
    "twitter": "https://x.com/Duck_Chain",
    "dc": ""
  },
  {
    "name": "REVOX",
    "img": READ,
    "des": "Agents in Smart Contracts.",
    "home": "https://www.revox.ai/",
    "twitter": "https://twitter.com/ReadOnMe3",
    "dc": "https://discord.com/invite/readon/"
  }
]

export const useRollupsStore = defineStore('rollups', {
  state: () => ({
    mainnetRollups: MainnetRollups
  })
})
