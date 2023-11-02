import request from '../utils/axiosConfig'

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
