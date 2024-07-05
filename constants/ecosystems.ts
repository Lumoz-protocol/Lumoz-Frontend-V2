import M1 from '@/assets/img/eco/1.avif'
import M2 from '@/assets/img/eco/2.avif'
import M3 from '@/assets/img/eco/3.avif'
import M4 from '@/assets/img/eco/4.avif'
import M5 from '@/assets/img/eco/5.avif'
import M6 from '@/assets/img/eco/6.avif'
import M7 from '@/assets/img/eco/7.avif'
import M8 from '@/assets/img/eco/8.avif'
import M9 from '@/assets/img/eco/9.avif'
import M10 from '@/assets/img/eco/10.avif'
import M11 from '@/assets/img/eco/11.avif'
import M12 from '@/assets/img/eco/12.avif'
import M13 from '@/assets/img/eco/13.avif'
import M14 from '@/assets/img/eco/14.avif'
import M15 from '@/assets/img/eco/15.svg'
import M16 from '@/assets/img/eco/16.avif'
import M17 from '@/assets/img/eco/17.avif'
import M18 from '@/assets/img/eco/18.avif'
import M19 from '@/assets/img/eco/19.avif'
import M20 from '@/assets/img/eco/20.avif'
import M21 from '@/assets/img/eco/21.avif'
import M22 from '@/assets/img/eco/22.avif'
import M23 from '@/assets/img/eco/23.avif'
import M24 from '@/assets/img/eco/24.avif'
import M25 from '@/assets/img/eco/25.avif'
import M26 from '@/assets/img/eco/26.avif'
import M27 from '@/assets/img/eco/27.avif'
import M28 from '@/assets/img/eco/28.avif'
import M29 from '@/assets/img/eco/29.avif'
import M30 from '@/assets/img/eco/30.avif'
import M31 from '@/assets/img/eco/31.avif'
import M32 from '@/assets/img/eco/32.avif'
import M33 from '@/assets/img/eco/33.avif'
import M34 from '@/assets/img/eco/34.avif'
import M35 from '@/assets/img/eco/35.avif'
import M36 from '@/assets/img/eco/36.avif'
import M37 from '@/assets/img/eco/37.avif'
import M38 from '@/assets/img/eco/38.avif'
import M39 from '@/assets/img/eco/39.avif'
import M40 from '@/assets/img/eco/40.avif'
import M41 from '@/assets/img/eco/41.avif'

const getEcosystems = () => {
    return [
      {
        name: 'Ethereum',
        url: 'https://ethereum.foundation/',
        img: M1,
        category: 'Settlement'
      },
      {
        name: 'Polygon',
        url: 'https://polygon.technology/',
        img: M2,
        category: 'Settlement'
      },
      {
        name: 'BNB Chain',
        url: 'https://t.co/eALxNqLXwS',
        img: M3,
        category: 'Settlement'
      },
      {
        name: 'Bitcoin',
        url: '',
        img: M4,
        category: 'Settlement'
      },
      {
        name: 'Solana',
        url: 'https://solana.com/',
        img: M5,
        category: 'Settlement'
      },
      {
        name: 'Blast',
        url: 'https://blastapi.io/',
        img: M6,
        category: 'API'
      },
      {
        name: 'Covalent',
        url: 'https://www.covalenthq.com/',
        img: M7,
        category: 'API'
      },
      {
        name: 'Blockscout',
        url: 'https://www.blockscout.com/',
        img: M8,
        category: 'Explorer'
      },
      {
        name: 'Unifra',
        url: 'https://unifra.io/',
        img: M9,
        category: 'Explorer'
      },
      {
        name: 'Biconomy',
        url: 'https://www.biconomy.io/',
        img: M10,
        category: 'Account Abstraction'
      },
      {
        name: 'Particle Network',
        url: 'https://particle.network/',
        img: M11,
        category: 'Account Abstraction'
      },
      {
        name: 'Supra Oracles',
        url: 'https://supra.com/',
        img: M12,
        category: 'Oracle'
      },
      {
        name: 'Pyth Network',
        url: 'https://pyth.network/',
        img: M13,
        category: 'Oracle'
      },
      {
        name: 'Orbiter Finance',
        url: 'https://www.orbiter.finance/',
        img: M14,
        category: 'Bridge'
      },
      {
        name: 'Meson',
        url: 'https://meson.fi/',
        img: M15,
        category: 'Bridge'
      },
      {
        name: 'oooo',
        url: 'https://oooo.money',
        img: M38,
        category: 'Bridge'
      },
      {
        name: 'Polygon zkEVM',
        url: 'https://polygon.technology/polygon-zkevm',
        img: M16,
        category: 'ZK Rollups SDKs'
      },
      {
        name: 'Linea',
        url: 'https://linea.build/',
        img: M17,
        category: 'ZK Rollups SDKs'
      },
      {
        name: 'Scroll',
        url: 'https://scroll.io/',
        img: M18,
        category: 'ZK Rollups SDKs'
      },
      {
        name: 'Starknet',
        url: 'https://www.starknet.io/',
        img: M19,
        category: 'ZK Rollups SDKs'
      },
      {
        name: 'zkSync',
        url: 'https://zksync.io/',
        img: M20,
        category: 'ZK Rollups SDKs'
      },

      {
        name: 'ZKFair',
        url: 'https://zkfair.io/',
        img: M21,
        category: 'ZK Rollups'
      },
      {
        name: 'Merlin Chain',
        url: 'https://merlinchain.io/',
        img: M22,
        category: 'ZK Rollups'
      },

      {
        name: 'Espresso Systems',
        url: 'https://www.espressosys.com/',
        img: M23,
        category: 'Sequencer'
      },
      {
        name: 'Radius',
        url: 'https://www.theradius.xyz/',
        img: M24,
        category: 'Sequencer'
      },

      {
        name: 'Ethereum',
        url: 'https://ethereum.foundation/',
        img: M25,
        category: 'Data Availabilty'
      },
      {
        name: 'Celestia',
        url: 'https://celestia.org/',
        img: M26,
        category: 'Data Availabilty'
      },
      {
        name: 'Avail',
        url: 'https://www.availproject.org/',
        img: M27,
        category: 'Data Availabilty'
      },

      {
        name: 'OKX Wallet',
        url: 'https://t.co/CgWe19Alot',
        img: M28,
        category: 'Wallet'
      },
      {
        name: 'Bitget Wallet',
        url: 'https://t.co/4485dPwe7B',
        img: M29,
        category: 'Wallet'
      },
      {
        name: 'Fox Wallet',
        url: 'https://t.co/hpl2ZlviNT',
        img: M30,
        category: 'Wallet'
      },
      {
        name: 'ONTO Wallet',
        url: 'https://onto.app/',
        img: M31,
        category: 'Wallet'
      },
      {
        name: 'Coin98 Wallet',
        url: 'https://coin98.com/',
        img: M32,
        category: 'Wallet'
      },

      {
        name: 'BITMAIN',
        url: 'https://www.bitmain.com/',
        img: M33,
        category: 'Miners&Hardware'
      },
      {
        name: 'Cysic',
        url: 'https://cysic.xyz/',
        img: M34,
        category: 'Miners&Hardware'
      },
      {
        name: 'Ingonyama',
        url: 'https://www.ingonyama.com/',
        img: M35,
        category: 'Miners&Hardware'
      },
      {
        name: '6Block',
        url: 'https://6block.com/',
        img: M36,
        category: 'Miners&Hardware'
      },
      {
        name: 'ZK.WORK',
        url: 'https://zk.work/',
        img: M37,
        category: 'Miners&Hardware'
      },
      {
        name: 'Nodeops',
        url: 'https://nodeops.xyz',
        img: M39,
        category: 'Node-as-a-Service'
      },
      {
        name: 'Infstones',
        url: 'https://infstones.com',
        img: M40,
        category: 'Node-as-a-Service'
      },
      {
        name: 'Infstones',
        url: 'https://bwarelabs.com',
        img: M41,
        category: 'Node-as-a-Service'
      },
    ]
}

export const ECOSYSTEMS = getEcosystems()

