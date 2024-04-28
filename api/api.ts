import request from './request.utils'
import { DATA_API } from '@/constants/networks'
import axios from 'axios'


const getDataUrl = (url: string) => {
  return `${DATA_API}${url}`
}

export async function getWhitelistTiers() {
  try {
    return (await request.get(getDataUrl(`whitelist/get_cur_tier_number`)))
  } catch {
    return []
  }
}

export async function getPrices() {
  try {
    return (await request.get(getDataUrl(`whitelist/get_tier_price`)))
  } catch {
    return []
  }
}

export async function getDepositAmount() {
  try {
    return (await request.get(getDataUrl(`whitelist/get_network_info`)))
  } catch {
    return []
  }
}

export async function getTokenPrice() {
  try {
    return (await request.get(getDataUrl(`whitelist/get_token_price`)))
  } catch {
    return []
  }
}

export async function getUserWhiteTierInfo(address: string, timestamp: string, signature: string) {
  try {
    const headers = {
      'API-SIGNATURE': signature,
      'TIMESTAMP': timestamp
    }
    const { data } = await axios.get(getDataUrl(`whitelist/get_user_whitelist?address=${address}`), { headers })
    return data
  } catch {
    return {}
  }
}