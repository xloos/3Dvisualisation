const fs = require('fs');
const path = require('path');

const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'src/keys/key.pem')),
      cert: fs.readFileSync(path.resolve(__dirname, 'src/keys/cert.pem')),
    },
    proxy: {
      // Všetky požiadavky na cestu /api budú presmerované na backend server
      '/api': {
        target: 'https://localhost:3000', 
        changeOrigin: true,
        secure: false, // Toto akceptuje self-signed certifikáty
      },
    },
  },
})