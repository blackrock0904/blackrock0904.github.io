<template>
  <div>
    <div class="top">
      <h1 class="head-1">{{ data.name}}</h1>
      <ul>
        <li>
          <span class="text-gray">CLIENT</span><span>{{ data.client }}</span>
        </li>
        <li>
          <span class="text-gray">YEAR</span><span>{{ data.year }}</span>
        </li>
        <li>
          <span class="text-gray">SERVICE</span><span>{{ data.service }}</span>
        </li>
      </ul>
    </div>

    <div class="data">
      <div class="blocks">
        <div class="info" v-for="(b, i) in (data.info || [])" :key="i">
          <div class="title">{{ b.title}}</div>
          <div class="list">
            <p v-for="(el, j) in (b.texts || [])" :key="j">{{ el }}</p>
          </div>
        </div>
      </div>
      <div class="images hidden-mobile">
        <img v-for="(src, i) in (data.photos || [])" :key="i" :src="src" alt="" loading="lazy">
      </div>
      <div class="carousel hidden-desktop hidden-tablet">
        <Carousel>
          <SwiperSlide class="slide" v-for="(img, i) in (data.photos || [])" :key="i">
            <img :src="img" alt="" loading="lazy">
          </SwiperSlide>
        </Carousel>
      </div>
    </div>

    <h2 class="head-1">Check out Case studies</h2>

    <div class="works">
      <BlockWork to="/projects/1" hint="Work" name="GOOD ARCH PROJECT" label="(ARCHITECT / INTERIOR DESIGN)" image-url="/img/test.png" />
      <BlockWork to="/projects/2" hint="Work" name="BAZAR HUB" label="(INTERIOR DESIGN)" image-url="/img/test.png" />
    </div>

    <div class="contacts">
      <BlockGradient to="/contacts" hint="Contacts" name="Let’s talk in Telegram"/>
    </div>
  </div>
</template>

<script setup>
import projects from '/data/projects.json';
import Carousel from "~/components/Carousel.vue";
import {SwiperSlide} from "swiper/vue";

definePageMeta({
  layout: 'public',
  title: 'Projects',
  meta: [
    { name: 'description', content: 'Создаем красивые и функциональные веб-решения для вашего бизнеса' }
  ]
});

const route = useRoute();
const slug = computed(() => route.params.slug);
const data = computed(() => projects[slug.value]);
</script>

<style lang="scss" scoped>
.slide {
  height: 54rem;
}

h1 {
  font-weight: 400 !important;
}

@include desktop {
  .top {
    margin-top: 16rem;
    margin-bottom: 2.4rem;
    display: flex;
    justify-content: space-between;

    ul {
      display: flex;
      flex-direction: column;
      gap: 3rem;

      * {
        font-size: 1.6rem;
      }

      li {
        display: grid;
        grid-template-columns: 10rem 20rem;
        gap: 16rem;
        & > :nth-child(2) {
          font-weight: 500;
        }
      }
    }
  }

  h2 {
    margin-top: 6.4rem;
    margin-bottom: 4.8rem;
  }

  .projects-real {
    margin-top: 2.4rem;
  }

  .data {
    display: grid;
    grid-template-columns: 1fr 92rem;
    gap: 2.4rem;
    min-height: 100vh;
  }

  .images {
    display: grid;

    grid-template-columns: 1fr;
    grid-auto-rows: 76.5rem;
    gap: 2.4rem;

    img {
      border-radius: 1.6rem;
      overflow: hidden;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .blocks {
    position: sticky;
    top: 0;
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    align-self: start;
  }

  .info {
    background-color: #F5F5F5;
    border-radius: 1.6rem;
    padding: 2.4rem;

    .title {
      font-size: 2.8rem;
    }

    p {
      font-size: 1.6rem;
      font-weight: 300;
      line-height: 130%;
    }
  }

  .works {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2.4rem;
    grid-template-rows: 74rem;
  }

  .contacts {
    margin-top: 2.4rem;
  }
}

@include tablet {
  .top {
    margin-top: 6.4rem;
    margin-bottom: 2.4rem;
    display: flex;
    justify-content: space-between;

    h1 {
      font-size: 2.8rem;
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 3rem;

      * {
        font-size: 1.2rem;
      }

      li {
        display: grid;
        grid-template-columns: 10rem 15rem;
        gap: 6rem;

        & > :nth-child(2) {
          font-weight: 500;
        }
      }
    }
  }

  h2 {
    margin-top: 10rem;
    margin-bottom: 4.8rem;
  }

  .projects-real {
    margin-top: 1.2rem;
  }

  .data {
    display: grid;
    grid-template-columns: 1fr 51.9rem;
    gap: 1.2rem;
    min-height: 100vh;
  }

  .images {
    display: grid;

    grid-template-columns: 1fr;
    grid-auto-rows: 43.4rem;
    gap: 1.2rem;

    img {
      border-radius: 1.6rem;
      overflow: hidden;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .blocks {
    position: sticky;
    top: 0;
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    align-self: start;
  }

  .info {
    background-color: #F5F5F5;
    border-radius: 1.6rem;
    padding: 1.4rem;

    .title {
      font-size: 2.8rem;
    }

    p {
      font-size: 1.6rem;
      font-weight: 300;
      line-height: 130%;
    }
  }

  .works {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.2rem;
    grid-template-rows: 38.7rem;
  }

  .contacts {
    margin-top: 1.2rem;
  }
}

@include mobile {
  .top {
    margin-top: 4rem;
    margin-bottom: 1.42em;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    h1 {
      font-size: 2.4rem;
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;

      * {
        font-size: 1.2rem;
      }

      li {
        display: grid;
        grid-template-columns: 4rem auto;
        gap: 6rem;

        & > :nth-child(2) {
          font-weight: 500;
        }
      }
    }
  }

  h2 {
    margin-top: 4rem;
    margin-bottom: 3.1rem;
  }

  .projects-real {
    margin-top: 1.2rem;
  }

  .data {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }

  .blocks {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    order: 1;
  }

  .info {
    background-color: #F5F5F5;
    border-radius: 0.8rem;
    padding: 1.4rem;

    .title {
      font-size: 1.6rem;
    }

    p {
      font-size: 1.2rem;
      font-weight: 300;
      line-height: 130%;
    }
  }

  .works {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.2rem;
    grid-auto-rows: 35.1rem;
  }

  .contacts {
    margin-top: 1.2rem;
  }
}
</style>
