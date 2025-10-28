<template>
  <div>
    <h1 class="head-1">Projects we’ve crafted with care</h1>
    <div class="projects">
      <div v-for="(p, i) in Config.projects" :key="i">
        <BlockWork to="/projects/0" :image-url="p.photos[0]" hint="Work" :label="p.label" :name="p.name" />
      </div>
    </div>
    <div class="projects-real">
      <BlockGradient to="/contacts" hint="Contacts" name="Let’s build something real"/>
    </div>
  </div>
</template>

<script setup>
import Config from "~/data/config.js";

definePageMeta({
  layout: 'public',
  title: 'Interior Design Portfolio Montenegro | Our Projects | Make Spacers',
  meta: [
    { name: 'description', content: 'Explore our interior design portfolio in Montenegro. View our completed projects including residential homes, commercial spaces, and luxury properties in Budva, Kotor, Podgorica. Professional interior design examples.' },
    { name: 'keywords', content: 'interior design portfolio Montenegro, design projects Budva, completed interiors Kotor, residential design Podgorica, commercial interior Montenegro, luxury interior design, design gallery' },
    { property: 'og:title', content: 'Interior Design Portfolio Montenegro | Our Projects | Make Spacers' },
    { property: 'og:description', content: 'Explore our interior design portfolio in Montenegro. View our completed projects including residential homes, commercial spaces, and luxury properties.' },
    { property: 'og:url', content: 'https://blackrock0904.github.io/projects' },
    { name: 'twitter:title', content: 'Interior Design Portfolio Montenegro' },
    { name: 'twitter:description', content: 'Explore our interior design portfolio in Montenegro. View our completed projects and design examples.' }
  ]
});
</script>

<style lang="scss" scoped>
@include desktop {
  h1 {
    margin-top: 16rem;
    margin-bottom: 2.4rem;
  }

  .projects {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 57.5rem;
    gap: 2.4rem;
  }

  .projects-real {
    margin-top: 2.4rem;
  }
}

@include tablet {
  h1 {
    margin-top: 6.4rem;
    margin-bottom: 2.4rem;
  }

  .projects {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 38.7rem;
    gap: 1.2rem;
  }

  .projects-real {
    margin-top: 1.2rem;
  }
}

@include mobile {
  h1 {
    margin-top: 4rem;
    margin-bottom: 1.42em;
  }

  .projects {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: 35.1rem;
    gap: 1.2rem;
  }

  .projects-real {
    margin-top: 1.2rem;
  }
}
</style>
