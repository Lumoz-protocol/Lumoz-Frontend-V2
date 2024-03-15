module.exports = {
  apps: [
    {
      name: 'lumoz-frontend',
      script: './.output/server/index.mjs',
      env: {
        NUXT_HOST: '0.0.0.0',
        PORT: 10055
      }
    }
  ]
}
