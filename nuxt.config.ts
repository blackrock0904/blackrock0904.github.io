import { fileURLToPath } from 'url'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

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
      title: 'Interior Design Montenegro | Make Spacers - Premium Design Studio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Professional interior design services in Montenegro. We create beautiful, functional spaces for homes, offices, and commercial properties. Expert design solutions for Budva, Kotor, Podgorica, and all Montenegro.' },
        { name: 'keywords', content: 'interior design Montenegro, home design Budva, office design Kotor, commercial interior Podgorica, space styling Montenegro, interior designer Montenegro, home staging, luxury interior design' },
        { name: 'author', content: 'Make Spacers' },
        { name: 'robots', content: 'index, follow' },
        { name: 'language', content: 'en' },
        { name: 'geo.region', content: 'ME' },
        { name: 'geo.country', content: 'Montenegro' },
        { name: 'geo.placename', content: 'Montenegro' },
        { property: 'og:title', content: 'Interior Design Montenegro | Make Spacers - Design Studio' },
        { property: 'og:description', content: 'Professional interior design services in Montenegro. We create beautiful, functional spaces for homes, offices, and commercial properties.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:site_name', content: 'Make Spacers' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Interior Design Montenegro | Make Spacers' },
        { name: 'twitter:description', content: 'Professional interior design services in Montenegro. Expert design solutions for your space.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico?v=1' },
        { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico?v=1' },
        { rel: 'manifest', href: '/site.webmanifest' }
      ]
    }
  },

  modules: ['@vueuse/motion/nuxt'],
})
