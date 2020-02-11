import colors from 'vuetify/es5/util/colors'

const { blue, grey, amber, teal, deepOrange, green } = colors;
const baseHref = process.env.BASE_HREF || '/';

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: baseHref + 'favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'material-design-icons-iconfont/dist/material-design-icons.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    'nuxt-webfontloader',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  proxy: process.env.NODE_ENV === 'production' ? {} : {
    '/api': {
      changeOrigin: false,
      target: 'http://127.0.0.1:8080/',
    },
    '/actuator': {
      changeOrigin: true,
      target: 'http://127.0.0.1:8080/',
    },
  },
  axios: {
    proxy: true,
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: blue.darken2,
          accent: grey.darken3,
          secondary: amber.darken3,
          info: teal.lighten1,
          warning: amber.base,
          error: deepOrange.accent4,
          success: green.accent3
        },
      },
    },
    icons: {
      iconfont: 'mdiSvg' // || 'md' || 'fa' || 'fa4' || 'mdi', // default - only for display purposes
    },
  },
  /*
  ** Build configuration
  */
  build: {
    // analyze: process.env.NODE_ENV === 'development',
    /*
    ** You can extend webpack config here
    */
    extend(config, { isClient }) {
      const isProd = process.env.NODE_ENV === 'production';
      if (isProd && isClient) {
        config.optimization.splitChunks.maxSize = 249856; // 244 Kib
      }
    },

  },
  webfontloader: {
    google: {
      // https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900&display=swap
      families: ['Roboto:100,300,400,500,700,900&display=swap'],
    }
  },
  generate: {
    routes: [
      '/',
    ],
    fallback: true, // make sure 404.html file exists
  },
  router: {
    base: baseHref,
    mode: 'history',
  },
}
