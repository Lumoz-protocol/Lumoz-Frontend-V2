export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['@/assets/style/index.less', 'animate.css/animate.css','hover.css/less/hover.less'],
  typescript: {
    shim: false
  },
  modules: [
    'nuxt-windicss',
    '@pinia/nuxt',
    '@element-plus/nuxt',
    '@fullpage/nuxt-fullpage',
    '@nuxtjs/i18n'
  ],
  i18n: {
    vueI18n: './i18n.config.ts'
  },
  build: {
    transpile: ['echarts']
  },
  elementPlus: { themes: ['dark'] },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'Lumoz | ZK-RaaS Network Featuring ZKP Mining',
      meta: [
        { charset: 'utf-8' },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'zk, RaaS, zkRaaS, ZK-Rollups, PoW PoS, high throughtput, zkEVM, layer2, rollup, 0 gas'
        },
        {
          hid: 'description',
          name: 'description',
          content: 'zk, RaaS, zkRaaS, ZK-Rollups, PoW PoS, high throughtput, zkEVM, layer2, rollup, 0 gas'
        }
      ]
    }
  }
})
