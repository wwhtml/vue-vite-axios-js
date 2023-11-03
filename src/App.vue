<script setup>
import { ref, reactive } from 'vue'
import { getHosTow } from '@/api/index'

const params = reactive({
  page: 1,
  limit: 10,
  hostype: '1',
  districtCode: '110101'
})

const getData = async () => {
  try {
    const res = await getHosTow()
    console.log(`output->res`, res)
  } catch (error) {
    console.log(`output->error`, error)
  }
}

getData()

const getAllData = () => {
  getData()
}
</script>

<template>
  <button class="btn" @click="getAllData">获取请求数据</button>
</template>

<style></style>
