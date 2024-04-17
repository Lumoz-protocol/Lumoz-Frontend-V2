import BSC from '@/assets/img/network/bsc.svg'
import ETHEREUM from '@/assets/img/network/eth.png'
import LUMOZ from '@/assets/img/network/lumoz.svg'
import POLYGON from '@/assets/img/network/polygon.svg'
import POLYGONLIGHT from '@/assets/img/network/polygon-light.svg'
import ZKSYNC from '@/assets/img/network/zksync.svg'
import ZKSYNCLIGHT from '@/assets/img/network/zksync-light.svg'
import Scroll from '@/assets/img/network/scroll.svg'

export const getNetworkImg = (name: string, light?: boolean) => {
  if (!name) {
    return ''
  }
  const _name = name.toLowerCase().trim().replace(/ +/g, '')
  if (includes(_name, ['lumoz'])) {
    return LUMOZ
  }
  if (includes(_name, ['ethereum', 'goerli'])) {
    return ETHEREUM
  }
  if (includes(_name, ['polygon', 'mumbai'])) {
    return light ? POLYGONLIGHT : POLYGON
  }
  if (includes(_name, ['bac', 'bnb'])) {
    return BSC
  }
  if (includes(_name, ['zksync'])) {
    return light ? ZKSYNCLIGHT : ZKSYNC
  }
  if (includes(_name, ['scroll'])) {
    return Scroll
  }
}

const includes = (name: string, area: string[]) => {
  for (const i in area) {
    if (name.includes(area[i])) {
      return true
    }
  }
  return false
}
