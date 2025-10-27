import { fileURLToPath } from 'url'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

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
    preset: 'static',
    prerender: {
      routes: [
        '/',
        '/about',
        '/contacts', 
        '/services',
        '/projects',
        '/projects/1',
        '/projects/2',
        '/projects/3',
        '/projects/4',
        '/projects/5',
        '/projects/6',
        '/404'
      ],
      ignore: ['/404.html', '/200.html'],
      failOnError: false
    }
  },

  // App configuration
  app: {
    baseURL: '/',
    buildAssetsDir: '/assets/',
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
