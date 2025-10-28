<template>
  <div>
    <h1 class="head-1">What we do — and how we do it</h1>
    <div class="services-list">
      <ParallaxCards />
    </div>
    <h2 class="head-1">The process:</h2>
    <div class="services-progress">
      <div>
        <Expand title="Discovery & Brief" label="(01)" text="We discuss your goals, style, budget, and timeline." />
      </div>
      <div>
        <Expand title="Concept Direction" label="(02)" text="We propose ideas and mood boards to set the right direction." />
      </div>
      <div>
        <Expand title="Design Development" label="(03)" text="We create layouts, select materials, furniture, and details." />
      </div>
      <div>
        <Expand title="Visualization" label="(04)" text="We show how the space will look through 3D or collages." />
      </div>
      <div>
        <Expand title="Implementation Support" label="(05)" text="We guide the process, assist contractors, and control execution." />
      </div>
      <div>
        <Expand title="Post-Launch Support" label="(06)" text="Final touches, décor styling, and support after project delivery." />
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
  title: 'Interior Design Services Montenegro | Make Spacers',
  meta: [
    { name: 'description', content: 'Professional interior design services in Montenegro. We offer interior design, space styling, decoration, and home staging services for residential and commercial properties in Budva, Kotor, Podgorica.' },
    { name: 'keywords', content: 'interior design services Montenegro, space styling Montenegro, home decoration Budva, office design Kotor, commercial interior Podgorica, home staging Montenegro, interior consultation' },
    { property: 'og:title', content: 'Interior Design Services Montenegro | Make Spacers' },
    { property: 'og:description', content: 'Professional interior design services in Montenegro. We offer interior design, space styling, decoration, and home staging services.' },
    { property: 'og:url', content: 'https://blackrock0904.github.io/services' },
    { name: 'twitter:title', content: 'Interior Design Services Montenegro' },
    { name: 'twitter:description', content: 'Professional interior design services in Montenegro. Interior design, space styling, decoration, and home staging.' }
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
