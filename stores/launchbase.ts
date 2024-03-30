import { defineStore } from 'pinia'

export const useLaunchStore = defineStore('launch', {
  state: () => ({
    layer1: '',
    zkevmType: '',
    da: '',
    sequencer: '',
    gas: '',
    prover: 'Lumoz'
  }),
  actions: {
    setLayer1(layer1: string) {
      this.layer1 = layer1
    },
    setEvmType(type: string) {
      this.zkevmType = type
    },
    setDa(da: string) {
      this.da = da
    },
    setSequencer(sequencer: string) {
      this.sequencer = sequencer
    },
    setGas(gas: string) {
      this.gas = gas
    },
    setProver(prover: string) {
      this.prover = prover
    }
  }
})
