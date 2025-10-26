<template>
  <div class="about">
    <h1 class="head-1">We’d love to hear from You</h1>

    <div class="about-team">
      <div>
        <Block hint="Team" image-url="/img/team.svg" />
      </div>
      <div>
        <Block hint="Ksenia" image-url="/img/team.svg" label="(DESIGNER)" />
      </div>
      <div>
        <Block hint="Anastasia" image-url="/img/team.svg" label="(DESIGNER)" />
      </div>
      <div>
        <Block hint="Liza" image-url="/img/team.svg" label="(DECORATION)" />
      </div>
      <div>
        <BlockLink hint="Team" to="/contacts" text="Wanna build with us? We’re always open to collaborations" link="Let’s collaborate" />
      </div>
    </div>

    <div class="about-intro">
      <div>We’re Space Makers, a compact team of designers who work at the intersection of interior and visual design.</div>
      <div>We create spaces with feeling and purpose whether it’s a website, a room, a brand, or a story told through light, materials, and structure.</div>
      <div>Our process is intuitive and collaborative. We dive into context, ask a lot of questions, and build things that not only look good but actually work — for people, brands, and life.</div>
    </div>

    <h2 class="head-1">This is what we build</h2>

    <div class="about-services">
      <div>
        <Expand title="Interior design" label="(01)" text="Our process is intuitive and collaborative. We dive into context, ask a lot of questions, and build things that not only look good but actuallywork" />
      </div>
      <div>
        <Expand title="Space Styling  & Decoration" label="(02)" text="Our process is intuitive and collaborative. We dive into context, ask a lot of questions, and build things that not only look good but actuallywork" />
      </div>
    </div>

    <div class="about-real">
      <BlockGradient to="/contacts" hint="Contacts" name="Let’s build something real"/>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'public',
  title: 'About',
  meta: [
    { name: 'description', content: 'Создаем красивые и функциональные веб-решения для вашего бизнеса' }
  ]
});
</script>

<style lang="scss" scoped>
@include desktop {
  h1 {
    margin-top: 16rem;
    margin-bottom: 2.4rem;
  }

  h2 {
    margin-top: 6.4rem;
    margin-bottom: 4.8rem;
  }

  .about {
    &-real {
      margin-top: 2.4rem;
    }

    &-team {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 44.8rem 44.8rem;
      gap: 2.4rem;

      & > *:nth-child(1) {
        grid-column: 1;
        grid-row: 1 / 3;
      }
    }

    &-intro {
      margin-top: 6.4rem;
      display: flex;
      flex-direction: column;
      gap: 2.4rem;
      max-width: 70%;

      * {
        font-size: 3.6rem;
      }
    }

    &-services {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2.4rem;
      height: 44.8rem;
    }
  }
}

@include tablet {
  h1 {
    margin-top: 6.4rem;
    margin-bottom: 2.4rem;
  }

  h2 {
    margin-top: 10rem;
    margin-bottom: 4.8rem;
  }

  .about {
    &-real {
      margin-top: 1.2rem;
    }

    &-team {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 25.4rem 25.4rem;
      gap: 1.2rem;

      & > *:nth-child(1) {
        grid-column: 1;
        grid-row: 1 / 3;
      }
    }

    &-intro {
      margin-top: 4.8rem;
      display: flex;
      flex-direction: column;
      gap: 1.4rem;

      * {
        font-size: 3.6rem;
      }
    }

    &-services {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.2rem;
      height: 38.7rem;
    }
  }
}

@include mobile {
  h1 {
    margin-top: 4rem;
    margin-bottom: 1.42em;
  }

  h2 {
    margin-top: 4rem;
    margin-bottom: 3.1rem;
  }

  .about {
    &-real {
      margin-top: 1.2rem;
    }

    &-team {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 20.4rem 20.4rem 20.4rem 20.4rem;
      gap: 1.2rem;

      & > *:nth-child(1) {
        grid-column: 1 / 3;
        grid-row: 1;
      }

      & > *:nth-child(3) {
        grid-column: 1 / 3;
        grid-row: 3;
      }

      & > *:nth-child(5) {
        grid-column: 1 / 3;
        grid-row: 4;
      }
    }

    &-intro {
      margin-top: 3.2rem;
      display: flex;
      flex-direction: column;
      gap: 1.2rem;

      * {
        color: $color-gray;
        font-size: 1.6rem;
      }
    }

    &-services {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 22.4rem 22.4rem;
      gap: 1.2rem;
    }
  }
}
</style>
