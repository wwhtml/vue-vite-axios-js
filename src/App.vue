<script setup>
import { ref, reactive } from 'vue'
import { getHosList, getHosList2 } from '@/api/index'

const params = reactive({
  page: 1,
  limit: 10,
  hostype: '1',
  districtCode: '110101'
})

const getData = () => {
  getHosList(params.page, params.limit, params.hostype, params.districtCode)
    .then((res) => {
      //请求成功之后，根据返回的数据进行不同的处理
      if (res.code == 200) {
        console.log(`output->res`, res)
      } else {
        console.log(`output->`, res)
      }
    })
    .catch((err) => {
      //处理请求错误
      console.log(`output->err`, err)
    })
}

const getData2 = async () => {
  try {
    const res = await getHosList2(params.page, params.limit, params.hostype, params.districtCode)

    //请求成功之后，根据返回的数据进行不同的处理
    if (res.code == 200) {
      console.log(`output->res`, res)
    } else {
      console.log(`output->`, res)
    }
  } catch (error) {
    console.log(`output->error.message`, error.message)
  }
}

const getAllData = () => {
  getData()
  getData2()
}
</script>

<template>
  <button class="btn" @click="getAllData">获取请求数据</button>
</template>

<style></style>
