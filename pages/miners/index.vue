<template>
  <div class="container mx-auto">
    <div class="mt-4">
      <h1 class="mb-2">
        <div class="font-bold text-2xl py-6 lg:(text-4xl py-12) flex items-center justify-center">
          {{ $t('miner.overview.title') }}
        </div>
        <el-tabs v-model="active" class="simple_tabstabs lumoz-rollup-tabs mt-4">
          <el-tab-pane :label="$t('miner.overview.rollups')" name="rollups"></el-tab-pane>
          <el-tab-pane :label="$t('miner.overview.layer1')" name="layer1"></el-tab-pane>
        </el-tabs>
        <RollupsSelect v-if="active === 'rollups'" :rollups="rollups" @change="changeType" />
        <RollupsLayer1Select v-else @change="changeLayer1" />
      </h1>
      <div class="md:grid w-full gap-4 z-1 lg:grid-cols-2 xl:grid-cols-5">
        <Info
          :title="$t('miner.overview.miners')"
          :content="minersSta.total_miners"
          :loading="staLoading"
        >
          <div class="mt-2 text-sm font-bold h-5">
            <div v-if="!staLoading" class="flex items-center justify-between">
              <div>
                {{ minersSta.daily_miner_rate.startsWith('-') ? '' : '+'
                }}{{ minersSta.daily_miner_rate }}
                <span
                  :class="
                    minersSta.daily_miner_rate.startsWith('-')
                      ? 'text-error-900'
                      : 'text-primary-900'
                  "
                  >{{ minersSta.daily_miner_rate.startsWith('-') ? '↓' : '↑' }}</span
                >
                <span class="text-text-200 font-normal text-xs ml-1"
                  >({{ $t('miner.overview.lastDay') }})</span
                >
              </div>
              <img
                v-if="minersSta.daily_miner_rate.startsWith('-')"
                src="@/assets/img/miner/down.svg"
              />
              <img v-else src="@/assets/img/miner/up.svg" />
            </div>
          </div>
        </Info>
        <Info
          :title="$t('miner.overview.staking')"
          :content="minersSta.staked_info"
          :loading="staLoading"
          unit="MOZ"
          class="mt-4 md:mt-0"
        >
          <div class="mt-2 text-sm font-bold h-5">
            <div v-if="!staLoading" class="flex items-center justify-between">
              <div>
                {{ minersSta.daily_deposit_rate.startsWith('-') ? '' : '+'
                }}{{ minersSta.daily_deposit_rate }}
                <span
                  :class="
                    minersSta.daily_deposit_rate.startsWith('-')
                      ? 'text-error-900'
                      : 'text-primary-900'
                  "
                  >{{ minersSta.daily_deposit_rate.startsWith('-') ? '↓' : '↑' }}</span
                >
                <span class="text-text-200 font-normal text-xs ml-1"
                  >({{ $t('miner.overview.lastDay') }})</span
                >
              </div>
              <img
                v-if="minersSta.daily_deposit_rate.startsWith('-')"
                src="@/assets/img/miner/down.svg"
              />
              <img v-else src="@/assets/img/miner/up.svg" />
            </div>
          </div>
        </Info>
        <Info
          :title="$t('miner.overview.proof')"
          :content="minersSta.total_count"
          :loading="staLoading"
          class="mt-4 md:mt-0"
        >
          <div class="mt-2 text-sm font-bold h-5">
            <div v-if="!staLoading" class="flex items-center justify-between">
              <div>
                {{ minersSta.daily_submitted_rate.startsWith('-') ? '' : '+'
                }}{{ minersSta.daily_submitted_rate }}
                <span
                  :class="
                    minersSta.daily_submitted_rate.startsWith('-')
                      ? 'text-error-900'
                      : 'text-primary-900'
                  "
                  >{{ minersSta.daily_submitted_rate.startsWith('-') ? '↓' : '↑' }}</span
                >
                <span class="text-text-200 font-normal text-xs ml-1"
                  >({{ $t('miner.overview.lastDay') }})</span
                >
              </div>
              <img
                v-if="minersSta.daily_submitted_rate.startsWith('-')"
                src="@/assets/img/miner/down.svg"
              />
              <img v-else src="@/assets/img/miner/up.svg" />
            </div>
          </div>
        </Info>
        <Info
          :title="$t('miner.overview.totalIncome')"
          :content="minersSta.total_income"
          :loading="staLoading"
          unit="MOZ"
          class="mt-4 md:mt-0"
        >
          <div class="mt-2 text-sm font-bold h-5">
            <div v-if="!staLoading" class="flex items-center justify-between">
              <div>
                {{ minersSta.daily_income_rate.startsWith('-') ? '' : '+'
                }}{{ minersSta.daily_income_rate }}
                <span
                  :class="
                    minersSta.daily_income_rate.startsWith('-')
                      ? 'text-error-900'
                      : 'text-primary-900'
                  "
                  >{{ minersSta.daily_income_rate.startsWith('-') ? '↓' : '↑' }}</span
                >
                <span class="text-text-200 font-normal text-xs ml-1"
                  >({{ $t('miner.overview.lastDay') }})</span
                >
              </div>
              <img
                v-if="minersSta.daily_income_rate.startsWith('-')"
                src="@/assets/img/miner/down.svg"
              />
              <img v-else src="@/assets/img/miner/up.svg" />
            </div>
          </div>
        </Info>
        <Info
          :title="
            active === 'layer1' || !type
              ? $t('miner.overview.recommendedRollup')
              : $t('miner.overview.rollup')
          "
          :content="
            active === 'layer1' || !type ? recommend : rollups.find(item => item._id === type)?.name
          "
          :loading="staLoading"
          :format="false"
          class="mt-4 md:mt-0"
        >
          <div class="mt-2 text-sm font-bold h-5"></div>
        </Info>
      </div>
    </div>
    <h1 class="mt-8 text-lg">{{ $t('miner.overview.chart') }}</h1>
    <div class="flex items-center mt-2 flex-wrap">
      <LumozRadio
        v-for="item in chartTypes"
        :key="item.id"
        :content="item.name"
        :high-light="item.id === chartType"
        @click="chartType = item.id"
      />
    </div>
    <div class="grid md:gap-4 mt-2 grid-cols-1 lg:grid-cols-2">
      <div class="gradient-card rounded-lg">
        <client-only>
          <div id="miner-overview-chart1" class="h-78 py-4 mt-4">
            <div v-if="chart1Loading" class="flex items-center justify-center w-full h-full">
              <Loading />
            </div>
          </div>
        </client-only>
      </div>
      <div class="gradient-card p-4 rounded-lg mt-4 md:mt-0 relative">
        <client-only>
          <div class="flex h-4 -mt-2 justify-end">
            <el-select v-model="date" size="small" effect="dark" style="width:100px;">
              <el-option
                v-for="item in DATES_OPTIONS"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
                <div class="flex items-center">
                  <div class="text-xs">
                    {{ item.label }}
                  </div>
                </div>
              </el-option>
            </el-select>
          </div>
        </client-only>
        <client-only>
          <div
            v-show="active === 'layer1' || !type"
            id="miner-overview-chart2"
            class="h-74 py-4 mt-4"
          >
            <div v-if="chart2Loading" class="flex items-center justify-center w-full h-full">
             
            </div>
          </div>
          <div
            v-show="active === 'rollups' && type"
            id="miner-overview-chart3"
            class="h-74 py-4 mt-4"
          >
            <div v-if="chart2Loading" class="flex items-center justify-center w-full h-full">
              
            </div>
          </div>
        </client-only>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import moment from 'moment'
import { TESTNETD } from '@/stores/testnet' 
import {
  getRollupsInfo,
  getTotalMiners,
  getTotalMinersChange,
  getMinerOverview,
  getMinerOverviewLineChart
} from '@/libs/data-api'
const DATES_OPTIONS = [
  { label: '7 days', value: 7 },
  { label: '30 days', value: 30 },
  { label: '365 days', value: 365 }
]

const router = useRouter()
const vm = getCurrentInstance()?.proxy
const instance = getCurrentInstance()
const echarts = instance.appContext.config.globalProperties.$echarts
let chart1 = null
let chart2 = null
const chart1Loading = ref(true)
const chart2Loading = ref(true)

const chartTypes = [
  {
    id: 'proof',
    name: vm.$t('miner.overview.submitted')
  },
  {
    id: 'miners',
    name: vm.$t('miner.overview.miners')
  },
  {
    id: 'stake',
    name: vm.$t('miner.overview.staked')
  },
  {
    id: 'income',
    name: vm.$t('miner.overview.incomeMOZ')
  }
]
const minersSta = ref({
  total_count: '0',
  total_income: '0',
  total_miners: '0',
  staked_info: '0',
  daily_deposit_rate: '',
  daily_income_rate: '',
  daily_miner_rate: '',
  daily_submitted_rate: ''
})
const active = ref('rollups')
const layer1 = ref('')
const date = ref(7)
const rollups = ref([])
const rollupDatas = ref([])
const type = ref('')
const chartType = ref('proof')
const staLoading = ref(true)
const chartBars = ref([])
const lineCharts = ref([])

onMounted(async () => {
  await getRollups()
  getMinersSta()
  getOverview()
  getLineChart()
})

const recommend = computed(() => {
  let datas = rollupDatas.value
  if (active.value === 'layer1') {
    if (!layer1.value) {
      return rollups.value.find(item => item._id === datas[0]?.id)?.name || ''
    } else {
      datas = rollupDatas.value.filter(item => item.layer1 === layer1.value)
      return rollups.value.find(item => item._id === datas[0]?.id)?.name || ''
    }
  } else if (!type.value) {
    return rollups.value.find(item => item._id === datas[0]?.id)?.name || ''
  } else {
    return ''
  }
})

watch(
  () => [type.value, active.value, layer1.value],
  () => {
    getMinersSta()
    initMinerChart2()
  }
)

watch(
  () => [active.value],
  () => {
    initMinerChart1()
  }
)

watch(
  () => [active.value, layer1.value],
  () => {
    if (active.value === 'layer1' || !type.value) {
      getOverview()
    }
  }
)

watch(
  () => chartType.value,
  () => {
    initMinerChart2()
    initMinerChart1()
  }
)

watch(
  () => [date.value, layer1.value, active.value, type.value],
  () => {
    getLineChart()
  }
)

const getMinersSta = async () => {
  staLoading.value = true
  minersSta.value = {
    total_count: '0',
    total_income: '0',
    total_miners: '0',
    staked_info: '0',
    daily_deposit_rate: '',
    daily_income_rate: '',
    daily_miner_rate: '',
    daily_submitted_rate: ''
  }
  let total: any
  let change: any
  if (active.value === 'layer1') {
    total = await getTotalMiners(layer1.value, '')
    change = await getTotalMinersChange(layer1.value, '')
  } else {
    const _layer1 = rollups.value.find(item => item._id === type.value)?.layer1
    total = await getTotalMiners(_layer1 || '', type.value)
    change = await getTotalMinersChange(_layer1 || '', type.value)
  }
  minersSta.value = {
    ...total,
    ...change
  }
  staLoading.value = false
}

const getRollups = async () => {
  const list = [{ name: vm.$t('miner.overview.all'), id: '' }]
  const rollupList = TESTNETD
  rollups.value = rollupList
  type.value = list[0].id
  const rollupDataList = await getRollupsInfo()
  rollupDataList.sort((a, b) => Number(b.popularity) - Number(a.popularity))
  rollupDataList.forEach(item => {
    const rollup = rollupList.find(_item => _item._id === item.id)
    item.layer1 = rollup?.layer1
  })
  rollupDatas.value = rollupDataList
}

const changeType = (val: string) => {
  type.value = val
}

const changeLayer1 = (val: string) => {
  layer1.value = val
}

const getOverview = async () => {
  let params = layer1.value
  if (active.value === 'rollups') {
    params = ''
  }
  const data = await getMinerOverview(params)
  chartBars.value = data.rollups
  initMinerChart1()
}

const getLineChart = async () => {
  const start = moment().subtract(date.value, 'days').format('YYYY-MM-DD')
  let params = layer1.value
  if (active.value === 'rollups') {
    params = ''
  }
  lineCharts.value = await getMinerOverviewLineChart(params, start)

  setTimeout(() => {
    initMinerChart2()
  }, 200)
}

const initMinerChart1 = () => {
  let total = 0
  let key = ''
  chartBars.value.forEach(item => {
    switch (chartType.value) {
      case 'miners':
        total += Number(item.miner_count || 0)
        key = 'miner_count'
        break
      case 'stake':
        total += Number(item.rollup_staked_info || 0)
        key = 'rollup_staked_info'
        break
      case 'proof':
        total += Number(item.submitted_count || 0)
        key = 'submitted_count'
        break
      case 'income':
        total += Number(item.rollup_income || 0)
        key = 'rollup_income'
        break
    }
  })
  const datas = []
  if (active.value === 'rollups' && type.value) {
    const item = rollups.value.find(_item => _item._id === type.value)
    const chartData = chartBars.value.find(_item => _item.rollup_id === item._id)
    total = chartData[key]
    datas.push({
      value: parseInt(chartData[key]),
      name: item.name
    })
  } else {
    chartBars.value.forEach(item => {
      const name = rollups.value.find(_item => _item._id === item.rollup_id)?.name
      if (!name) {
        datas.push({
          value: parseInt(item[key]),
          name: 'Others'
        })
      } else {
        datas.push({
          value: parseInt(item[key]),
          name
        })
      }
    })
  }

  const dom = document.getElementById('miner-overview-chart1')
  dom.removeAttribute('_echarts_instance_')
  chart1 = echarts.init(dom)
  chart1.setOption({
    color: [
      '#BFFE00',
      '#00FFB2',
      '#00C589',
      '#64AB9E',
      '#00899C',
      '#003959',
      '#084E39',
      '#5B8F18',
      '#74CB06',
      '#8EFE00'
    ],
    tooltip: {
      trigger: 'item',
      backgroundColor: '#000000',
      borderColor: '#000000',
      textStyle: {
        color: '#FFFFFF'
      }
    },
    legend: {
      align: 'auto',
      itemWidth: 12,
      itemHeight: 12,
      orient: 'vertical',
      right: '20',
      top: '20',
      icon: 'circle',
      inactiveBorderWidth: 0,
      formatter: function (name) {
        const rollupId = rollups.value.find(item => item.name === name)?._id || ''
        const item = chartBars.value.find(item => item.rollup_id === rollupId)
        const val = item ? Number(item[key]) : 0

        const arr = [
          '{a|' + name + '}',
          '  {b|' + Number((val / total * 100).toFixed(1)) + '%}'
        ]
        return arr.join('  ')
      },
      textStyle: {
        rich: {
          a: {
            fontSize: 12,
            width: 140,
            color: '#737373'
          },
          b: {
            fontSize: 12,
            width: 0,
            color: '#FFFFFF'
          }
        }
      }
    },
    series: [
      {
        type: 'pie',
        radius: ['70%', '95%'],
        center: ['34%', '50%'],
        label: {
          normal: {
            show: true,
            position: 'center',
            color: '#FFFFFF',
            formatter: () =>
              key === 'rollup_staked_info' || key === 'rollup_income'
                ? Math.floor(total).toLocaleString() + ' MOZ'
                : total.toLocaleString(),
            fontSize: '18',
            fontWeight: 'bolder'
          }
        },
        itemStyle: {
          normal: {
            borderWidth: 1,
            borderColor: '#000000'
          }
        },
        data: datas
      }
    ]
  })

  window.onresize = resize
  chart1Loading.value = false
}

const initMinerChart2 = () => {
  let key = ''
  switch (chartType.value) {
    case 'miners':
      key = 'daily_miner_count'
      break
    case 'stake':
      key = 'daily_deposit'
      break
    case 'proof':
      key = 'daily_submitted_count'
      break
    case 'income':
      key = 'daily_income'
      break
  }

  let data = JSON.parse(JSON.stringify(lineCharts.value))

  if (active.value === 'rollups' && type.value) {
    data = data.filter(item => item.rollup_id === type.value)
    const dom = document.getElementById('miner-overview-chart3')
    dom.removeAttribute('_echarts_instance_')
    chart2 = echarts.init(dom)
  } else {
    const dom = document.getElementById('miner-overview-chart2')
    dom.removeAttribute('_echarts_instance_')
    chart2 = echarts.init(dom)
  }

  const names = []
  const datas = []
  let xAxis = []
  for (const i in data) {
    const item = rollups.value.find(item => item._id === data[i].rollup_id)
    if (item) {
      names.push(item.name)
      datas.push(data[i].daily_data)
    }
  }
  const startDates = datas.map(item => (item[0] ? item[0].day : '')).filter(item => item)
  const endDates = datas
    .map(item => (item[item.length - 1] ? item[item.length - 1].day : ''))
    .filter(item => item)
  const startDate = moment.min(startDates.map(item => moment(item))).format('YYYY-MM-DD')
  const endDate = moment.max(endDates.map(item => moment(item))).format('YYYY-MM-DD')

  xAxis = [startDate]
  let current = moment(startDate).add(1, 'days')
  while (current.isBetween(startDate, endDate)) {
    xAxis.push(current.format('YYYY-MM-DD'))
    current = current.add(1, 'days')
  }
  xAxis.push(endDate)

  const series = []
  names.forEach((item, index) => {
    const y = []
    for (const i in xAxis) {
      const x = datas[index].find(_item => _item.day === xAxis[i])
      if (x) {
        y.push(Math.floor(Number(x[key])))
      } else {
        y.push(0)
      }
    }
    series.push({
      name: item,
      type: 'line',
      showSymbol: false,
      data: y
    })
  })

  chart2.setOption({
    color: [
      '#BFFE00',
      '#00FFB2',
      '#00C589',
      '#64AB9E',
      '#00899C',
      '#003959',
      '#084E39',
      '#5B8F18',
      '#74CB06',
      '#8EFE00'
    ],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      },
      backgroundColor: '#000000',
      borderColor: '#000000',
      textStyle: {
        color: '#FFFFFF'
      }
    },
    grid: {
      top: '20px',
      left: '20px',
      right: '35px',
      bottom: '0',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: xAxis
      }
    ],
    yAxis: [
      {
        type: 'value',
        splitLine: {
          lineStyle: {
            color: 'rgba(255, 255, 255, 0.2)'
          }
        }
      }
    ],
    series
  })
  window.onresize = resize
  resize()
  chart2Loading.value = false
}

function resize() {
  chart1?.resize()
  chart2?.resize()
}
</script>
<style scoped>

.gradient-card{
  background: -webkit-linear-gradient(0deg,  #DBFF3422, #222222 40%); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(0deg,  #DBFF3422, #222222 40%); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(0deg,  #DBFF3422, #222222 40%); /* Firefox 3.6 - 15 */
  background: linear-gradient(0deg,  #DBFF3422, #222222 40%);
}
</style>