import axios from 'axios'

const instance = axios.create({
  baseURL: '/api',
  timeout: 3000,
  timeoutErrorMessage: '请求超时'
})

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    return config
  },
  function (error) {
    //提问：请求错误可能是什么？什么情况下会出现请求拦截？
    // console.log(`output->error1111`, error)
    //提问：请求错误可能是什么？
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    // return response

    const { data } = response
    return data
  },
  function (error) {
    // 对响应错误做点什么

    return Promise.reject(error)
  }
)
export default instance
