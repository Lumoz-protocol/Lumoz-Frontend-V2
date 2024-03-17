import request from './request.utils'
import { DATA_API } from '@/constants/networks'
import axios from 'axios'
import { ElNotification } from 'element-plus'

const getDataUrl = (url: string) => {
  return `${DATA_API}${url}`
}

export async function getAvaliableRollupList() {
  try {
    return (await request.get(getDataUrl(`rollup/available/list`))).result
  } catch {
    return []
  }
}

export const getAchieveInfo = async (address: string, timestamp: string, signature: string) => {
  const headers = {
    'API-SIGNATURE': signature,
    'TIMESTAMP': timestamp
  };
  const { data } = await axios.get(getDataUrl(`lumoz-points?address=${address}`), { headers })
  return data.lumoz_points
}
