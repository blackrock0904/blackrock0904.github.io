<template>
  <div class="card">
    <div class="img">
      <img :src="imgUrl" alt="" loading="lazy">
    </div>
    <div class="info">
      <h3>{{ title }}</h3>
      <ul>
        <li v-for="(el, i) in texts" :key="i"><p class="text-gray">{{ el }}</p></li>
      </ul>
  </div>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  imgUrl: string;
  title: string;
  texts: string[];
}

defineProps<IProps>();
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.img {
  border-radius: 1.6rem;
  overflow: hidden;
}

.info {
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
}

@include desktop {
  .card {
    display: grid;
    grid-template-columns: 73rem 1fr;
    gap: 2.4rem;
  }

  h3 {
    font-size: 4.8rem;
    font-weight: 400;
  }

  p {
    font-size: 1.8rem;
  }
}

@include tablet {

}

@include mobile {

}
</style>
