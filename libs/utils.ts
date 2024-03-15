import moment from 'moment'

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