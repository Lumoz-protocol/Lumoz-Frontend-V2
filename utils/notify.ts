import { ElNotification } from 'element-plus'

export const notifyInfo = (title = '', text = '') => {
    ElNotification({
      title,
      message: text,
      showClose: false
    })
}
  
export const notifySuccess = (title = '', text = '') => {
    ElNotification({
        title,
        type: 'success',
        message: text,
        showClose: false,
        customClass: 'el-notification-success'
    })
}
  
export const notifyError = (title = '', text = '') => {
    ElNotification({
      title,
      type: 'error',
      message: text,
      showClose: false,
      customClass: 'el-notification-error'
    })
}