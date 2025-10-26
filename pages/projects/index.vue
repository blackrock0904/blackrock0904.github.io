<template>
  <div>
    <h1 class="head-1">Projects we’ve crafted with care</h1>
    <div class="projects">
      <div>
        <BlockWork to="/projects/1" image-url="/img/test.png" hint="Work" label="(INTERIOR DESIGN)" name="Good Earth Project" />
      </div>
      <div>
        <BlockWork to="/projects/2" image-url="/img/test.png" hint="Work" label="(INTERIOR DESIGN)" name="Good Earth Project" />
      </div>
      <div>
        <BlockWork to="/projects/3" image-url="/img/test.png" hint="Work" label="(INTERIOR DESIGN)" name="Good Earth Project" />
      </div>
      <div>
        <BlockWork to="/projects/4" image-url="/img/test.png" hint="Work" label="(INTERIOR DESIGN)" name="Good Earth Project" />
      </div>
      <div>
        <BlockWork to="/projects/5" image-url="/img/test.png" hint="Work" label="(INTERIOR DESIGN)" name="Good Earth Project" />
      </div>
      <div>
        <BlockWork to="/projects/6" image-url="/img/test.png" hint="Work" label="(INTERIOR DESIGN)" name="Good Earth Project" />
      </div>
    </div>
    <div class="projects-real">
      <BlockGradient to="/contacts" hint="Contacts" name="Let’s build something real"/>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'public',
  title: 'Projects',
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
