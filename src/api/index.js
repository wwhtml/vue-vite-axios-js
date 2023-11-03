import request from '../utils/axiosConfig'
import axios from 'axios'

export const getHosList = (page = 1, limit = 10, hostype = '', districtCode = '') => {
  return request.get(
    `/hosp/hospital/${page}/${limit}?hostype=${hostype}&districtCode=${districtCode}`
  )
}

export const getHosList2 = (page = 1, limit = 10, hostype = '', districtCode = '') => {
  return request.get(`/hosp/hospital/${page}/${limit}`, {
    params: {
      hostype,
      districtCode
    }
  })
}

export const getHosTow = () => {
  return axios.all([getHosList(1, 10, 1, 110101), getHosList2(1, 10, 1, 110101)])
}

//多并发请求
// export const getHosTow = () => {
//   return axios.all([getHosList(1, 10, 1, 110101), getHosList2(1, 10, 1, 110101)]).then((res) => {
//     console.log(`output->res`, res)
//   })
// }

// //多并发请求
// export const getHosTow = () => {
//   return axios.all([getHosList(1, 10, 1, 110101), getHosList2('ssss')]).then(
//     axios.spread(function (acct, perms) {
//       // 两个请求现在都执行完成
//       // console.log(`output->acct`, acct)
//       // console.log(`output->perms`, perms)
//       return [acct, perms]
//     })
//   )
// }
