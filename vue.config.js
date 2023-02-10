const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.VUE_APP_PUBLIC_PATH,
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    proxy: {
      '/api/mock': {
        target: process.env.VUE_APP_BASE_URL_MOCK,
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api/mock': ''
        }
      },
      '/api': {
        target: process.env.VUE_APP_BASE_URL,
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
})
