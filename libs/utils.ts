import moment from 'moment'
import BSC from '@/assets/img/networks/bsc.svg'
import ETHEREUM from '@/assets/img/networks/eth.png'
import LUMOZ from '@/assets/img/networks/lumoz.svg'
import POLYGON from '@/assets/img/networks/polygon.svg'
import POLYGONLIGHT from '@/assets/img/networks/polygon-light.svg'
import ZKSYNC from '@/assets/img/networks/zksync.svg'
import ZKSYNCLIGHT from '@/assets/img/networks/zksync-light.svg'
import Scroll from '@/assets/img/networks/scroll.svg'

export function formatUnit(num: number) {
  const _num = Math.abs(num)
  try {
    if (_num < 1000) {
      return Number(num.toFixed(2))
    } else if (_num < 1000000) {
      return Number((num / 1000).toFixed(2)) + ' K'
    } else if (_num < 1000000000) {
      return Number((num / 1000000).toFixed(2)) + ' M'
    } else {
      return Number((num / 1000000000).toFixed(2)) + ' B'
    }
  } catch {
    return '-'
  }
}


export function transDateTime(londonTime: string | number) {
  const _londonTime = moment.utc(londonTime)
  const userLocalTime = moment()
  const timeDifference = userLocalTime.utcOffset() - _londonTime.utcOffset()
  return _londonTime.add(timeDifference, 'minutes').format('YYYY-MM-DD HH:mm:ss')
}

export function transUTCDateTime(localTime: string) {
  const londonTime = moment.utc()
  const userLocalTime = moment()
  const timeDifference = userLocalTime.utcOffset() - londonTime.utcOffset()
  return moment(localTime).subtract(timeDifference, 'minutes').format('YYYY-MM-DD HH:mm:ss')
}

export function getAdjustedIsoString() {
  const timestamp = new Date()
  return timestamp.toISOString()
}

export const formatAddress = (id: string, len: number) => {
  return id.substring(0, len) + '...' + id.substring(id.length - len)
}


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
