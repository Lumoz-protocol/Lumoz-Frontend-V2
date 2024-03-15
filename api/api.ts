import request from './request.utils'
import { DATA_API } from '@/constants/networks'
import axios from 'axios'
import { ElNotification } from 'element-plus'

const getDataUrl = (url: string) => {
  return `${DATA_API}${url}`
}

// export async function getSailDashBoard() {
//   return await request.get(getDataUrl(`dashboard`))
// }

// export async function getUserInfo(address: string, phase:number, timestamp: string, signature: string) {
//   const headers = {
//     'API-SIGNATURE': signature,
//     'TIMESTAMP': timestamp
//   }
//   const { data } = await axios.get(getDataUrl(`dragon-slayer-info?address=${address}&phase=${phase}`), { headers })
//   return data
// }

