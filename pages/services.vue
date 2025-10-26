<template>
  <div>
    <h1 class="head-1">What we do — and how we do it</h1>
    <div class="services-list">
      <ParallaxCards />
    </div>
    <h2 class="head-1">The process:</h2>
    <div class="services-progress">
      <div>
        <Expand title="Discovery & Brief" label="(01)" text="Our process is intuitive and collaborative. We dive into context, ask a lot of questions, and build things that not only look good but actuallywork" />
      </div>
      <div>
        <Expand title="Concept Direction" label="(02)" text="Our process is intuitive and collaborative. We dive into context, ask a lot of questions, and build things that not only look good but actuallywork" />
      </div>
      <div>
        <Expand title="Design Development" label="(03)" text="Our process is intuitive and collaborative. We dive into context, ask a lot of questions, and build things that not only look good but actuallywork" />
      </div>
      <div>
        <Expand title="Visualization" label="(04)" text="Our process is intuitive and collaborative. We dive into context, ask a lot of questions, and build things that not only look good but actuallywork" />
      </div>
      <div>
        <Expand title="Implementation Support" label="(05)" text="Our process is intuitive and collaborative. We dive into context, ask a lot of questions, and build things that not only look good but actuallywork" />
      </div>
      <div>
        <Expand title="Post-Launch Support" label="(06)" text="Our process is intuitive and collaborative. We dive into context, ask a lot of questions, and build things that not only look good but actuallywork" />
      </div>
    </div>
    <div class="services-real">
      <BlockGradient to="/contacts" hint="Contacts" name="We are here — lets talk "/>
    </div>
  </div>
</template>

<script setup>
import ParallaxCards from "~/components/ParallaxCards.vue";

definePageMeta({
  layout: 'public',
  title: 'Services',
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

  .services-real {
    margin-top: 2.4rem;
  }

  .services-progress {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 21.1rem;
    gap: 2.4rem;
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

  .services-real {
    margin-top: 1.2rem;
  }

  .services-progress {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 21.1rem;
    gap: 2.4rem;
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

  .services-real {
    margin-top: 1.2rem;
  }

  .services-progress {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: 18.1rem;
    gap: 1.2rem;
  }
}
</style>
