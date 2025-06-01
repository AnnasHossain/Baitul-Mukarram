const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  chainWebpack: config => {
    config.plugin('define').tap(definitions => {
      Object.assign(definitions[0], {
        // Deaktiviert Devtools in der Produktion
        __VUE_PROD_DEVTOOLS__: 'false',
        // Deaktiviert detaillierte Hydrations-Warnungen in der Produktion
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false'
      })
      return definitions
    })
  },

  pwa: {
    name: 'Baitul Mukarram Masjid Berlin',
    short_name: 'Baitul Mukarram',
    icon: './public/favicon.ico',
    description: 'Berliner-Bangla Moschee App',
    themeColor: 'rgba(92,221,41,0.35)',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black-translucent',
    workboxPluginOptions: {
      swSrc: 'src/service-worker.js'
    }
  }
}
