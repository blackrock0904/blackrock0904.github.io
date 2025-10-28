<template>
  <div class="home">
    <h1 class="head-1">We design with purpose for</h1>
    <span class="head-1 text-gray">&gt;</span><Typewriter class="head-1 text-gray" :strings="Config.index.titleDynamic"/>
    <Carousel class="home-slider">
      <SwiperSlide class="slide" v-for="(img, i) in Config.index.slider" :key="i">
        <img :src="img" alt="" loading="lazy">
      </SwiperSlide>
    </Carousel>
    <div class="home-projects">
      <BlockWork to="/projects/0" hint="Work" :name="Config.projects[0].name" :label="Config.projects[0].label" :image-url="Config.projects[0].photos[0]" />
      <BlockWork to="/projects/3" hint="Work" :name="Config.projects[3].name" :label="Config.projects[3].label" :image-url="Config.projects[3].photos[4]" />
    </div>
    <div class="home-info hidden-mobile">
      <div class="text-gray">We don’t just design for looks.</div>
      <div><span class="text-gray">We design to</span> solve real problems</div>
      <div><span class="text-gray">and shape</span> spaces that speak</div>
      <div class="text-gray">clearly, emotionally, and with meaning.</div>
    </div>
    <div class="home-contacts">
      <BlockGradient to="/contacts" hint="Contacts" name="Let’s build something real"/>
    </div>
    <div class="home-other">
      <div class="other-mission">
        <BlockLink to="/contacts" hint="About" label="(OUR MISSION)" text="We design with context, not just form. From spatial storytelling to bold visual systems, we create spaces that feel alive and make sense" link="Learn more" />
      </div>
      <div class="other-carousel">
        <Block light hint="Words from clients">
          <Carousel class="other-slider">
            <SwiperSlide class="other-slide" v-for="(el, i) in Config.comments" :key="i">
              <div>{{ el.text }}</div>
              <div style="text-align: center">{{ el.author }}</div>
            </SwiperSlide>
          </Carousel>
        </Block>
      </div>
      <div class="other-team">
        <BlockWork to="/contacts" hint="About" name="WHO WE ARE?" label="(TEAM)" image-url="/img/team/together.jpg" />
      </div>
        <div class="other-clients">
          <Block light to="/projects" hint="Clients">
            <LogoMarquee :logos="Config.index.clientsLogo" :duration="30" />
          </Block>
        </div>
      <div class="other-services">
        <Block light to="/services" hint="Services" label="(4)">
          <div class="other-services-block">
            <Typewriter class="head-3" :strings="['Interior design', 'Space Styling and Decoration']"/>
          </div>
        </Block>
      </div>
      <div class="other-work">
        <BlockWork to="/projects/2" hint="Work" :name="Config.projects[2].name" :label="Config.projects[2].label" :image-url="Config.projects[2].photos[1]" />
      </div>
    </div>
    <div class="home-contacts-2">
      <BlockGradient to="/contacts" hint="Contacts" name="Let’s talk in WhatsApp"/>
    </div>
  </div>
</template>

<script setup>
import {SwiperSlide} from "swiper/vue";
import Carousel from "~/components/Carousel.vue";
import LogoMarquee from "~/components/LogoMarquee.vue";
import BlockLink from "~/components/BlockLink.vue";
import Config from "~/data/config.js";


definePageMeta({
  layout: 'public',
  title: 'Interior Design Montenegro | Make Spacers - Premium Design Studio',
  meta: [
    { name: 'description', content: 'Professional interior design services in Montenegro. We create beautiful, functional spaces for homes, offices, and commercial properties. Expert design solutions for Budva, Kotor, Podgorica, and all Montenegro.' },
    { name: 'keywords', content: 'interior design Montenegro, home design Budva, office design Kotor, commercial interior Podgorica, space styling Montenegro, interior designer Montenegro, home staging, luxury interior design, modern interior Montenegro' },
    { property: 'og:title', content: 'Interior Design Montenegro | Make Spacers - Premium Design Studio' },
    { property: 'og:description', content: 'Professional interior design services in Montenegro. We create beautiful, functional spaces for homes, offices, and commercial properties.' },
    { property: 'og:url', content: 'https://blackrock0904.github.io/' },
    { name: 'twitter:title', content: 'Interior Design Montenegro | Make Spacers' },
    { name: 'twitter:description', content: 'Professional interior design services in Montenegro. Expert design solutions for your space.' }
  ]
});

const reviews =  [
  { text: '“This studio helped us rethink our space from the ground up. The result is not just a beautiful environment it’s an experience that speaks our brand. The process was smooth and truly collaborative.”', author: '— Julia M., Art Director, lifestyle-brand' },
  { text: '“This studio helped us rethink our space from the ground up. The result is not just a beautiful environment it’s an experience that speaks our brand. The process was smooth and truly collaborative.”', author: '— Julia M., Art Director, lifestyle-brand' },
  { text: '“This studio helped us rethink our space from the ground up. The result is not just a beautiful environment it’s an experience that speaks our brand. The process was smooth and truly collaborative.”', author: '— Julia M., Art Director, lifestyle-brand' },
];



</script>

<style lang="scss" scoped>
@include desktop {
  .home {
    padding-top: 16rem;

    &-slider {
      margin-top: 4.8rem;
      height: 85rem;
    }

    &-projects {
      margin-top: 2.4rem;
      display: grid;
      grid-template-columns: 2fr 1fr;
      height: 74rem;
      gap: 2.4rem;
    }

    &-info {
      display: flex;
      flex-direction: column;
      gap: 0.9rem;
      margin: 6.4rem 0;

      * {
        font-size: 4.8rem;
      }
    }

    &-contacts-2 {
      margin-top: 2.4rem;
    }

    &-other {
      margin-top: 2.4rem;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: repeat(10, 1fr);
      gap: 2.4rem;
      height: 101rem;
    }
  }

  .other {
    &-slider {
      height: 100%;
      width: 100%;
    }

    &-slide {
      padding: 2.4rem;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2.4rem;

      & > :first-child {
        text-align: center;
      }
    }

    &-mission {
      grid-row: 1 / 7;
      grid-column: 1;
    }

    &-services-block {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 3.6rem;
    }

    &-carousel {
      grid-row: 7 / 11;
      grid-column: 1;
      overflow: hidden;
    }

    &-team {
      grid-row: 1 / 8;
      grid-column: 2;
    }

    &-work {
      grid-row: 5 / 11;
      grid-column: 3;
    }

    &-services {
      grid-row: 1 / 5;
      grid-column: 3;
    }

    &-clients {
      grid-row: 8 / 11;
      grid-column: 2;
      overflow: hidden;
    }
  }
}

@include tablet {
  .home {
    padding-top: 6.4rem;

    &-slider {
      margin-top: 4.8rem;
      height: 57rem;
    }

    &-projects {
      margin-top: 1.2rem;
      display: grid;
      grid-template-columns: 2fr 1fr;
      height: 57rem;
      gap: 1.2rem;
    }

    &-info {
      display: flex;
      flex-direction: column;
      gap: 0.9rem;
      margin: 6.4rem 0;

      * {
        font-size: 3.6rem;
      }
    }

    &-contacts-2 {
      margin-top: 1.2rem;
    }

    &-other {
      margin-top: 1.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: repeat(3, 38.7rem);
      gap: 1.2rem;
    }
  }

  .other {
    &-slider {
      height: 100%;
      width: 100%;
    }

    &-slide {
      padding: 1.4rem;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1.2rem;

      & > :first-child {
        text-align: center;
      }
    }

    &-services-block {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &-carousel {
      overflow: hidden;
    }

    &-clients {
      overflow: hidden;
    }
  }
}

@include mobile {
  .home {
    padding-top: 4rem;

    &-slider {
      margin-top: 3.2rem;
      height: 53.7rem;
    }

    &-projects {
      margin-top: 1.2rem;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 35rem 35rem;
      gap: 1.2rem;
    }

    &-contacts {
      margin-top: 1.2rem;
    }

    &-contacts-2 {
      margin-top: 1.2rem;
    }

    &-other {
      margin-top: 1.2rem;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(6, auto);
      gap: 1.2rem;
    }
  }

  .other {
    &-team {
      height: 35rem;
    }

    &-work {
      height: 35rem;
    }

    &-mission {
      height: 21rem;
    }

    &-slider {
      height: 100%;
      width: 100%;
    }

    &-slide {
      padding: 1.4rem;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1.2rem;

      & > :first-child {
        text-align: center;
      }
    }

    &-services-block {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &-carousel {
      overflow: hidden;
      height: 35rem;
    }

    &-clients {
      overflow: hidden;
      height: 21rem;
    }

    &-services {
      height: 21rem;
    }
  }
}
</style>
