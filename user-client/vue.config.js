const { defineConfig } = require('@vue/cli-service')
const target = "http://localhost:5000";

module.exports = defineConfig({
  transpileDependencies: true,
  devServer : {
    proxy : {
      '^/api' : {
        target,
        changeOrigin : true,
        ws : false, // 웹소켓
        pathRewrite : {'^/api' : '/'}
      }
    }
  }
})