// import axios, { AxiosResponse, AxiosRequestConfig, AxiosInstance, AxiosPromise } from 'axios'
import axios, { AxiosResponse, AxiosRequestConfig, AxiosInstance } from 'axios'
import { stringify } from 'qs'
import { notification } from 'antd'

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

const { CancelToken } = axios
const httpPending: Array<{
  u: string
  f: Function
}> = [] // 用于存储每个ajax请求的取消函数和ajax标识

/**
 * 取消请求
 * @param {AxiosRequestConfig} config
 */
const cancelHttp = (config: AxiosRequestConfig = {}) => {
  const url: string | undefined = config.url?.substring(0, config.url.indexOf('?'))

  httpPending.forEach((e, i) => {
    if (e.u === `${url}&${config.method}`) {
      // 当前请求在数组中存在时执行函数体
      e.f() // 执行取消操作
      httpPending.splice(i, 1) // 把这条记录从数组中移除
    }
  })
}

/**
 * 确认请求状态
 * @param {AxiosResponse} response
 */
const checkStatus = (response: AxiosResponse) => {
  if (!response.data) {
    notification.error({
      description: '您的网络发生异常，无法连接服务器',
      message: '网络异常',
    })
  }

  if (response.status >= 200 && response.status < 300) {
    return response.data
  }
}

// 创建axios实例
const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false, // 是否有证书，
  timeout: 30000,
})

// 请求拦截器
axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // 取消上一次未完成的相同请求，注意项目中是否存在风险
    cancelHttp(config)

    // const token = Vue.ls.get(ACCESS_TOKEN)
    // if (token) {
    //   config.headers[ 'X-Access-Token' ] = token // 让每个请求携带自定义 token 请根据实际情况自行修改
    // }

    const url: string | undefined = config.url?.substring(0, config.url.indexOf('?'))

    config.cancelToken = new CancelToken(c => {
      // 这里的axios标识我是用请求地址&请求方式拼接的字符串，当然你可以选择其他的一些方式
      httpPending.push({ u: `${url}&${config.method}`, f: c })
    })

    // 针对 post 请求参数字符串化
    if (config.method === 'post') {
      config.data = stringify(config.data)
    }

    return config
  },
  error => {
    // 错误
    Promise.reject(error)
  }
)

// 响应拦截器
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    cancelHttp(response.config)

    return checkStatus(response)
  },
  error => {
    if (axios.isCancel(error)) {
      Promise.reject(error)
      return
    }
    // 错误
    Promise.reject(error)
    return { code: 999, message: error, result: {} }
  }
)

export default axiosInstance

// const err = (error) => {
//   if (error.response) {
//     let data = error.response.data
//     const token = Vue.ls.get(ACCESS_TOKEN)
//     console.log("------异常响应------",token)
//     console.log("------异常响应------",error.response.status)
//     switch (error.response.status) {
//       case 403:
//         Vue.prototype.$Jnotification.error({ message: '系统提示', description: '拒绝访问',duration: 4})
//         break
//       case 500:
//         console.log("------error.response------",error.response)
//         // update-begin- --- author:liusq ------ date:20200910 ---- for:处理Blob情况----
//         let type=error.response.request.responseType;
//         if(type === 'blob'){
//           blobToJson(data);
//           break;
//         }
//         // update-end- --- author:liusq ------ date:20200910 ---- for:处理Blob情况----
//         if(token && data.message.includes("Token失效")){
//           // update-begin- --- author:scott ------ date:20190225 ---- for:Token失效采用弹框模式，不直接跳转----
//           if (/wxwork|dingtalk/i.test(navigator.userAgent)) {
//             Vue.prototype.$Jmessage.loading('登录已过期，正在重新登陆', 0)
//           } else {
//             Vue.prototype.$Jmodal.error({
//               title: '登录已过期',
//               content: '很抱歉，登录已过期，请重新登录',
//               okText: '重新登录',
//               mask: false,
//               onOk: () => {
//                 store.dispatch('Logout').then(() => {
//                   Vue.ls.remove(ACCESS_TOKEN)
//                   try {
//                     let path = window.document.location.pathname
//                     console.log('location pathname -> ' + path)
//                     if (path != '/' && path.indexOf('/user/login') == -1) {
//                       window.location.reload()
//                     }
//                   } catch (e) {
//                     window.location.reload()
//                   }
//                 })
//               }
//             })
//           }
//           // update-end- --- author:scott ------ date:20190225 ---- for:Token失效采用弹框模式，不直接跳转----
//         }
//         break
//       case 404:
//           Vue.prototype.$Jnotification.error({ message: '系统提示', description:'很抱歉，资源未找到!',duration: 4})
//         break
//       case 504:
//         Vue.prototype.$Jnotification.error({ message: '系统提示', description: '网络超时'})
//         break
//       case 401:
//         Vue.prototype.$Jnotification.error({ message: '系统提示', description:'未授权，请重新登录',duration: 4})
//         if (token) {
//           store.dispatch('Logout').then(() => {
//             setTimeout(() => {
//               window.location.reload()
//             }, 1500)
//           })
//         }
//         break
//       default:
//         Vue.prototype.$Jnotification.error({
//           message: '系统提示',
//           description: data.message,
//           duration: 4
//         })
//         break
//     }
//   } else if (error.message) {
//     if (error.message.includes('timeout')) {
//       Vue.prototype.$Jnotification.error({message: '系统提示', description: '网络超时'})
//     } else {
//       Vue.prototype.$Jnotification.error({message: '系统提示', description: error.message})
//     }
//   }
//   return Promise.reject(error)
// }
