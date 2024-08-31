import { CONFIG } from '@/constants/networks'
import axios from 'axios'

const getDataUrl = (url: string) => {
  return `${CONFIG.DATA_API}${url}`
}

const getQuiUrl = (url: string) => {
  return `${CONFIG.quidditchApi}${url}`
}

const getZkvUrl = (url: string) => {
  return `${CONFIG.zkvApi}${url}`
}

export const getAchieveInfo = async (address: string, timestamp: string, signature: string) => {
  const headers = {
    'API-SIGNATURE': signature,
    'TIMESTAMP': timestamp
  };
  const { data } = await axios.get(getDataUrl(`lumoz-points?address=${address}`), { headers })
  return data.lumoz_points
}


export const getQuidditchTgBindStatus = async (address: string, timestamp: string, signature: string) => {
  const headers = {
    'API-SIGNATURE': signature,
    'TIMESTAMP': timestamp
  };
  const { data } = await axios.get(getQuiUrl(`api/quidditch/bind_status?address=${address}`), { headers })
  return data
}

export const quidditchTgBind = async (address: string, timestamp: string, signature: string, _data:any) => {
  const headers = {
    'API-SIGNATURE': signature,
    'TIMESTAMP': timestamp
  };
  const { data } = await axios.post(getQuiUrl(`api/quidditch/bind_telegram`), {
    address,
    auth_data: _data 
  }, {
    headers
  })
  return data.lumoz_points
}

export const getZkvTask = async (address: string, timestamp: string, signature: string) => {
  const headers = {
    'API-SIGNATURE': signature,
    'TIMESTAMP': timestamp
  };
  const { data } = await axios.get(getZkvUrl(`api/zkverifiers/onchain_task_status?address=${address}`), { headers })
  return data
}