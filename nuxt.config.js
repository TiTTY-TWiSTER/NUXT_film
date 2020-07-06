
module.exports = {
    serverMiddleware: [
    // Will register redirect-ssl npm package
    'redirect-ssl'
  ],
  mode: 'universal',
  /*
  ** Headers of the page
  */

  head: {
    htmlAttrs: {
      lang: 'ru-RU'
    },
    title:'Выбрать Случайный фильм по категориям | films-generator',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Случайный фильм на сегодня - генератор. Выбирай по категориям. Только лучшее из мира синематографа.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3291ff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    "@/plugins/vue-social-sharing.js",
    "@/plugins/vue-scroll.js"
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@neneos/nuxt-animate.css',
    '@nuxtjs/sitemap',
    'nuxt-lazy-load',
    [
      '@nuxtjs/yandex-metrika',
      {
        id: '61239253',
        webvisor: true,
        clickmap:true,
        // useCDN:false,
        // trackLinks:true,
        // accurateTrackBounce:true,
      }
    ],
  ],
  

  sitemap: {
    hostname: 'https://films-generator.ru',
    gzip: true,
  },

  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
