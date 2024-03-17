module.exports = {
  apps: [
    {
      name: 'lumoz-frontend-v2',
      script: './.output/server/index.mjs',
      env: {
        NUXT_HOST: '0.0.0.0',
        PORT: 10065
      }
    }
  ]
}
