import { defineStore } from 'pinia'
import { getAvaliableRollupList } from '@/api/api'

export const useRollupsStore = defineStore('rollups', {
  state: () => ({
    testnetRollups: [],
    mainnetRollups: []
  }),
  actions: {
    async getMainnetRollups() {

    },
    async getTestnetRollups() {
      this.testnetRollups = await getAvaliableRollupList()
    }
  }
})
