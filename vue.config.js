const { defineConfig } = require('@vue/cli-service')

const publicPath = process.env.NODE_ENV === 'production'
  //? 'https://mark.findcreek.com/'
  ? '/pwa-test/'
  : '/'

module.exports = defineConfig({
  transpileDependencies: true,

  publicPath,

  pwa: {
    //workboxPluginMode: 'GenerateSW',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      //navigateFallback: '/index.html',
      swSrc: '/service-worker.js',
      include: [
        ///fonts\.googleapis\.com/
        'https://fonts.googleapis.com/css?family=Open+Sans:400,600&subset=cyrillic'
      ]
    },
    name: 'TEST',
    themeColor: '#42A3FD',
    manifestOptions: {
      display: 'standalone',
      icons: [
        {
          src: "/mark/icons/icon-512x512.png",
          sizes: "512x512",
          type: "image/png"
        },
        {
          src: "/mark/icons/icon-384x384.png",
          sizes: "384x384",
          type: "image/png"
        },
        {
          src: "/mark/icons/icon-256x256.png",
          sizes: "256x256",
          type: "image/png"
        },
        {
          src: "/mark/icons/icon-192x192.png",
          sizes: "192x192",
          type: "image/png"
        },
        {
          src: "/mark/icons/icon-144x144.png",
          sizes: "144x144",
          type: "image/png"
        },
        {
          src: "/mark/icons/icon-96x96.png",
          sizes: "96x96",
          type: "image/png"
        }
      ]
    }
  }
})
