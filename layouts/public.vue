<template>
  <div class="hidden-tablet hidden-desktop">
    <input ref="toggler" id="toggler" name="toggler" type="checkbox" style="display: none">
    <label class="mobile-open" for="toggler">
      <svg  width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <foreignObject x="-24" y="-24" width="88" height="88"><div xmlns="http://www.w3.org/1999/xhtml" style="backdrop-filter:blur(12px);clip-path:url(#bgblur_0_1107_5330_clip_path);height:100%;width:100%"></div></foreignObject><g data-figma-bg-blur-radius="24">
        <rect width="40" height="40" rx="4" fill="#EAE8E8" fill-opacity="0.6"/>
        <rect x="8" y="9" width="24" height="2" fill="black"/>
        <rect x="8" y="19" width="24" height="2" fill="black"/>
        <rect x="8" y="29" width="24" height="2" fill="black"/>
      </g>
        <defs>
          <clipPath id="bgblur_0_1107_5330_clip_path" transform="translate(24 24)"><rect width="40" height="40" rx="4"/>
          </clipPath></defs>
      </svg>
    </label>
    <label class="mobile-close" for="toggler">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <foreignObject x="-24" y="-24" width="88" height="88"><div xmlns="http://www.w3.org/1999/xhtml" style="backdrop-filter:blur(12px);clip-path:url(#bgblur_0_742_6842_clip_path);height:100%;width:100%"></div></foreignObject><g data-figma-bg-blur-radius="24">
        <rect width="40" height="40" rx="4" fill="#EAE8E8" fill-opacity="0.6"/>
        <rect x="10.8066" y="27.7783" width="24" height="2" transform="rotate(-45 10.8066 27.7783)" fill="black"/>
        <rect x="12.2227" y="10.8076" width="24" height="2" transform="rotate(45 12.2227 10.8076)" fill="black"/>
      </g>
        <defs>
          <clipPath id="bgblur_0_742_6842_clip_path" transform="translate(24 24)"><rect width="40" height="40" rx="4"/>
          </clipPath></defs>
      </svg>
    </label>
    <nav class="mobile-menu">
      <div><NuxtLink class="underline" to="/" @click="closeMenu">Home</NuxtLink></div>
      <div><NuxtLink class="underline" to="/projects" @click="closeMenu">Work</NuxtLink></div>
      <div><NuxtLink class="underline" to="/services" @click="closeMenu">Services</NuxtLink></div>
      <div><NuxtLink class="underline" to="/about" @click="closeMenu">About</NuxtLink></div>
      <div><NuxtLink class="underline" to="/contacts" @click="closeMenu">Contacts</NuxtLink></div>
    </nav>
  </div>
  <div class="layout">
    <AppHeader />
    <main>
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppHeader from "../components/AppHeader.vue";
import AppFooter from "../components/AppFooter.vue";

const toggler = ref();

const closeMenu = () => {
  if (toggler.value) {
    toggler.value.checked = false;
  }
};

useHead({
  title: 'Main',
  meta: [
    { name: 'description', content: 'Создаем красивые и функциональные веб-решения для вашего бизнеса. Современный дизайн, адаптивная верстка, быстрая загрузка.' },
    { name: 'keywords', content: 'веб-разработка, дизайн, сайты, мобильные приложения, UI/UX' },
    { property: 'og:title', content: 'Anastasiia - Веб-разработка и дизайн' },
    { property: 'og:description', content: 'Создаем красивые и функциональные веб-решения для вашего бизнеса.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
  ]
})
</script>

<style scoped lang="scss">
.layout {
  margin-left: auto;
  margin-right: auto;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
  padding-top: 0;
}

@include desktop {
  .layout {
    max-width: 1440px;
    padding: 3.2rem 2.4rem;
  }
}

@include tablet {
  .layout {
    max-width: 810px;
    padding: 2.4rem 1.2rem;
  }
}

@include mobile {
  .layout {
    margin-top: 4rem;
    max-width: 375px;
    padding: 2.4rem 1.2rem;
  }
}

.mobile-menu {
  z-index: 10;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 30rem;
  padding: 9.4rem 1.6rem 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  background-color: #605DEC;
  transform: translateX(100%);
  transition: all 0.2s ease-in-out;
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.3);

  a {
    color: $color-white;
    font-size: 1.6rem;
    font-weight: 500;
  }
}

.mobile-open,
.mobile-close {
  z-index: 11;
  position: fixed;
  right: 1.2rem;
  top: 1.2rem;
  cursor: pointer;

  * {
    pointer-events: none;
  }
}

.mobile-close {
  display: none;
}

#toggler:checked ~ .mobile-menu {
  transform: translate(0);
}

#toggler:checked ~ .mobile-close {
  display: block;
}

#toggler:checked ~ .mobile-open {
  display: none;
}
</style>
