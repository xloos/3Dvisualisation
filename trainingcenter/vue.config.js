const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      // Všetky požiadavky na cestu /api budú presmerované na backend server
      '/api': {
        target: 'http://localhost:3000', // Zmeniť na port vášho Node.js servera
        changeOrigin: true,
      },
    },
  },
})