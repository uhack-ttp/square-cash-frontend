module.exports = {
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  /*
  ** Headers
  ** Common headers are already provided by @nuxtjs/pwa preset
  */
  head: {
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,700' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#ff9c40' },
  /*
  ** Customize app manifest
  */
  manifest: {
    theme_color: '#ff9c40'
  },
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/font-awesome',
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],

  css: [
    '~assets/sass/app.scss',
    'tachyons/css/tachyons.min.css'
  ],

  plugins: [
    '@/plugins/vue-qriously.js',
    '@/plugins/vue-qrcode-reader.js'
  ],

  proxy: [
    ['/api', { target: 'http://172.20.10.4:3000', pathRewrite: { '^/api': '/api/v1' } }]
  ],

  axios: {
    baseURL: '/api',
    credentials: false,
    requestInterceptor: (config) => {
      config.headers.common['Authorization'] = 'Token 2ceeb09f87f545569895c51f31e99b4c'

      return config
    }
  }
}
