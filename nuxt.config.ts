// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'url'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // CSS configuration
  // css: ['~/assets/scss/main.scss'],

  // Vite configuration for SCSS
  vite: {
    resolve: {
      alias: {
        '~': fileURLToPath(new URL('./', import.meta.url))
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "~/assets/scss/variables.scss"; @import "~/assets/scss/mixins.scss"; @import "~/assets/scss/main.scss"; '
        }
      }
    }
  },

  // SSR/SSG configuration
  ssr: true,
  nitro: {
    prerender: {
      routes: ['/']
    }
  },

  // App configuration
  app: {
    head: {
      title: 'Make spacers',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'TODO' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' }
      ]
    }
  },
  modules: ['@vueuse/motion/nuxt'],
})
