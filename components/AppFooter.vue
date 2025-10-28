<template>
  <footer>
    <img src="/img/logo-footer.svg" alt="">
    <div class="mail">
      <a class="underline" target="_blank" rel="noopener noreferrer" :href="`mailto:${ Config.contacts.email }`">{{ Config.contacts.email }}</a>
    </div>
    <div class="right">
      <ul class="list">
        <li class="text-gray">PAGES</li>
        <li><NuxtLink class="underline" to="/">Home</NuxtLink></li>
        <li><NuxtLink class="underline" to="/projects">Work</NuxtLink></li>
        <li><NuxtLink class="underline" to="/services">Services</NuxtLink></li>
        <li><NuxtLink class="underline" to="/about">About</NuxtLink></li>
        <li><NuxtLink class="underline" to="/contacts">Contacts</NuxtLink></li>
      </ul>
      <ul class="list">
        <li class="text-gray">SOCIALS</li>
        <li v-if="Config.contacts.instagram"><a class="underline" :href="Config.contacts.instagram" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        <li v-if="Config.contacts.telegram"><a class="underline" :href="Config.contacts.telegram" target="_blank" rel="noopener noreferrer">Telegram</a></li>
        <li v-if="Config.contacts.whatsapp"><a class="underline" :href="Config.contacts.whatsapp" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
      </ul>
    </div>
  </footer>
</template>

<script setup lang="ts">
import Config from "~/data/config";
</script>

<style lang="scss" scoped>
footer {
  display: grid;
  background-color: #F5F5F5;
  margin-top: 2.4rem;
  border-radius: 1.6rem;
  overflow: hidden;
  padding: 2.4rem 13.5rem 2.4rem 2.4rem;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto auto;

  img {
    height: 7.7rem;
  }

  .mail {
    grid-row: 2;
    grid-column: 1;

    * {
      font-size: 2.4rem;
    }
  }

  .right {
    display: flex;
    gap: 10rem;
    grid-column: 2;
  }

  .list {
    display: flex;
    flex-direction: column;
    gap: 3rem;

    * {
      font-size: 1.6rem;
      font-weight: 500;
    }
  }
}

@include tablet {
  footer {
    margin-top: 1.2rem;
    border-radius: 0.8rem;
    padding: 1.4rem;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    gap: 6.5rem;

    img {
      height: 4rem;
    }

    .mail {
      grid-row: 3;
      grid-column: 1;

      * {
        font-size: 1.6rem;
      }
    }

    .right {
      gap: 35rem;
      grid-column: 1;
    }
  }
}

@include mobile {
  footer {
    margin-top: 1.2rem;
    border-radius: 0.8rem;
    padding: 1.4rem;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    gap: 4.8rem;

    img {
      height: 2.7rem;
    }

    .mail {
      grid-row: 3;
      grid-column: 1;

      * {
        font-size: 1.2rem;
      }
    }

    .right {
      gap: 9rem;
      grid-column: 1;

      * {
        font-size: 1.2rem;
      }
    }
  }
}
</style>
