import { DATA_API } from '@/constants/networks'
import axios from 'axios'

const getDataUrl = (url: string) => {
  return `${DATA_API}${url}`
}

export const getAchieveInfo = async (address: string, timestamp: string, signature: string) => {
  const headers = {
    'API-SIGNATURE': signature,
    'TIMESTAMP': timestamp
  };
  const { data } = await axios.get(getDataUrl(`lumoz-points?address=${address}`), { headers })
  return data.lumoz_points
}
