<template>
  <div class="contacts">
    <h1 class="head-1">We’d love to hear from You</h1>
    <div class="subtitle body-2 text-gray">We’re always open to new projects and collaborations.</div>
    <div class="list">
        <a class="contact-item" :href="`tel:${Config.contacts.phones[0]?.replace(' ', '')}`" target="_blank" rel="noopener noreferrer">
          <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.2" d="M24.5703 33.15C26.757 37.6656 30.4084 41.3077 34.9297 43.4828C35.2632 43.6407 35.6321 43.709 36 43.6811C36.368 43.6532 36.7223 43.5299 37.0281 43.3234L43.6687 38.8875C43.9621 38.6885 44.3012 38.5671 44.6542 38.5345C45.0072 38.502 45.3627 38.5595 45.6875 38.7015L58.1188 44.0406C58.5436 44.2174 58.8986 44.529 59.129 44.9274C59.3593 45.3258 59.4524 45.7888 59.3938 46.2453C58.9997 49.3205 57.4987 52.1468 55.1715 54.1954C52.8443 56.2439 49.8504 57.3743 46.75 57.375C37.1691 57.375 27.9805 53.5689 21.2058 46.7942C14.431 40.0194 10.625 30.8309 10.625 21.25C10.6257 18.1496 11.7561 15.1557 13.8046 12.8285C15.8531 10.5013 18.6794 9.00022 21.7547 8.60622C22.2111 8.54758 22.6742 8.64062 23.0726 8.87101C23.4709 9.1014 23.7825 9.45635 23.9594 9.88121L29.2984 22.339C29.4373 22.6587 29.4954 23.0076 29.4676 23.355C29.4398 23.7024 29.327 24.0377 29.1391 24.3312L24.7031 31.0781C24.5056 31.3832 24.3897 31.734 24.3665 32.0967C24.3432 32.4594 24.4134 32.8221 24.5703 33.15Z" fill="#FFC830"/>
            <path d="M24.5703 33.15C26.757 37.6656 30.4084 41.3077 34.9297 43.4828C35.2632 43.6407 35.6321 43.709 36 43.6811C36.368 43.6532 36.7223 43.5299 37.0281 43.3234L43.6687 38.8875C43.9621 38.6885 44.3012 38.5671 44.6542 38.5345C45.0072 38.502 45.3627 38.5595 45.6875 38.7015L58.1188 44.0406C58.5436 44.2174 58.8986 44.529 59.129 44.9274C59.3593 45.3258 59.4524 45.7888 59.3938 46.2453C58.9997 49.3205 57.4987 52.1468 55.1715 54.1954C52.8443 56.2439 49.8504 57.3743 46.75 57.375C37.1691 57.375 27.9805 53.5689 21.2058 46.7942C14.431 40.0194 10.625 30.8309 10.625 21.25C10.6257 18.1496 11.7561 15.1557 13.8046 12.8285C15.8531 10.5013 18.6794 9.00022 21.7547 8.60622C22.2111 8.54758 22.6742 8.64062 23.0726 8.87101C23.4709 9.1014 23.7825 9.45635 23.9594 9.88122L29.2984 22.339C29.4373 22.6587 29.4954 23.0076 29.4676 23.355C29.4398 23.7024 29.327 24.0377 29.1391 24.3312L24.7031 31.0781C24.5056 31.3832 24.3897 31.734 24.3665 32.0967C24.3432 32.4594 24.4134 32.8221 24.5703 33.15Z" stroke="#FFC830" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M42.3398 10.625C45.9442 11.5923 49.2308 13.4907 51.8696 16.1296C54.5085 18.7684 56.4069 22.055 57.3742 25.6594" stroke="#FFC830" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M40.1367 18.8328C42.3045 19.4085 44.2816 20.5471 45.8677 22.1331C47.4537 23.7191 48.5922 25.6962 49.168 27.864" stroke="#FFC830" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <h3>CALL US</h3>
          <span class="contact">{{ Config.contacts.phones[0] }}</span>
          <span class="contact">{{ Config.contacts.phones[1] }}</span>
        </a>
        <a class="contact-item" :href="`mailto:${ Config.contacts.email }`" target="_blank" rel="noopener noreferrer">
          <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.2" d="M59.5 14.875L34 38.25L8.5 14.875H59.5Z" fill="#FFC830"/>
            <path d="M8.5 14.875H59.5V51C59.5 51.5636 59.2761 52.1041 58.8776 52.5026C58.4791 52.9011 57.9386 53.125 57.375 53.125H10.625C10.0614 53.125 9.52091 52.9011 9.1224 52.5026C8.72388 52.1041 8.5 51.5636 8.5 51V14.875Z" stroke="#FFC830" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M59.5 14.875L34 38.25L8.5 14.875" stroke="#FFC830" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <h3>EMAIL</h3>
          <span class="contact">{{ Config.contacts.email}}</span>
        </a>
    </div>
  </div>
</template>

<script setup>
import Config from "~/data/config.js";

definePageMeta({
  layout: 'public',
  title: 'Contact Us | Interior Design Montenegro | Make Spacers',
  meta: [
    { name: 'description', content: 'Contact our interior design team in Montenegro. Get in touch for professional interior design services in Budva, Kotor, Podgorica. WhatsApp, Telegram, Instagram available. Free consultation.' },
    { name: 'keywords', content: 'contact interior designer Montenegro, interior design consultation Budva, design services Kotor, interior design contact Podgorica, WhatsApp design consultation, design studio Montenegro' },
    { property: 'og:title', content: 'Contact Us | Interior Design Montenegro | Make Spacers' },
    { property: 'og:description', content: 'Contact our interior design team in Montenegro. Get in touch for professional interior design services. Free consultation available.' },
    { property: 'og:url', content: 'https://blackrock0904.github.io/contacts' },
    { name: 'twitter:title', content: 'Contact Us | Interior Design Montenegro' },
    { name: 'twitter:description', content: 'Contact our interior design team in Montenegro. Professional design services available.' }
  ]
});
</script>

<style lang="scss" scoped>
.list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.4rem;
  margin-top: 4.8rem;
}

.contact-item {
  background-color: #F5F5F5;
  border-radius: 1.6rem;
  padding: 3.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;

  h3 {
    font-size: 3.6rem;
    font-weight: 400;
  }
}

.contact {
  font-size: 2.4rem;
  font-weight: 500;
}

@include desktop {
  h1 {
    margin-top: 16rem;
    margin-bottom: 2.4rem;
  }
}

@include tablet {
  h1 {
    margin-top: 6.4rem;
    margin-bottom: 2.4rem;
  }

  .list {
    gap: 1.2rem;
    margin-top: 4.8rem;
  }

  .contact-item {
    padding: 3rem;
    gap: 1.2rem;

    h3 {
      font-size: 2.4rem;
    }
  }

  .contact {
    font-size: 1.4rem;
  }
}

@include mobile {
  h1 {
    margin-top: 4rem;
    margin-bottom: 1.42em;
  }

  .list {
    grid-template-columns: 1fr;
    gap: 1.2rem;
    margin-top: 4.8rem;
  }

  .contact-item {
    padding: 3rem;
    gap: 1.2rem;

    h3 {
      font-size: 2.4rem;
    }
  }

  .contact {
    font-size: 1.4rem;
  }
}
</style>
