<template>
  <Swiper
      :modules="[Autoplay, Pagination, Navigation]"
      :slides-per-view="1"
      :pagination="{ clickable: true }"
      :loop="true"
      :autoplay="{ delay: 3000 }"
      class="swiper"
  >
    <slot></slot>
  </Swiper>
</template>

<script setup lang="ts">
import { Swiper } from 'swiper/vue';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
</script>

<style lang="scss" scoped>
.swiper {
  width: 100%;
  border-radius: 1.6rem;
  overflow: hidden;
}

:deep(.swiper-slide img) {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

:deep(.swiper-pagination) {
  padding: 1.6rem 2.4rem;
  display: inline-flex;
  width: min-content;
  border-radius: 10rem;
  gap: 1rem;
  backdrop-filter: blur(1px);
  background-color: rgba(0, 0, 0, 0.3);
  left: 50%;
  transform: translateX(-50%);
  bottom: 3.2rem;
}

:deep(.swiper-pagination-bullet) {
  width: 1.4rem;
  height: 1.4rem;
  background-color: $color-white;
  border-radius: 50%;
}

@include tablet {
  .swiper {
    border-radius: 0.8rem;
  }

  :deep(.swiper-pagination) {
    padding: 0.8rem 1.4rem;
    border-radius: 2rem;
    gap: 0.8rem;
    bottom: 2.4rem;
  }

  :deep(.swiper-pagination-bullet) {
    width: 0.6rem;
    height: 0.6rem;
  }
}

@include mobile {
  .swiper {
    border-radius: 0.8rem;
  }

  :deep(.swiper-pagination) {
    padding: 0.8rem 1.2rem;
    border-radius: 2rem;
    gap: 0.8rem;
    bottom: 1.6rem;
  }

  :deep(.swiper-pagination-bullet) {
    width: 0.6rem;
    height: 0.6rem;
  }
}
</style>
