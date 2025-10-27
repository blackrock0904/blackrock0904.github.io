<template>
  <div class="marquee-container">
    <div class="marquee-track" :style="{ animationDuration: `${duration || 20}s` }">
      <div v-for="(logo, index) in logos" :key="index" class="marquee-item">
        <img :src="logo" alt="" class="logo-image"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

interface Props {
  logos: string[];
  duration?: number;
}

withDefaults(defineProps<Props>(), {
  duration: 20
})
</script>

<style scoped lang="scss">
.marquee-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
}

.marquee-track {
  display: flex;
  align-items: center;
  gap: 4rem;
  animation: scroll linear infinite;
  white-space: nowrap;
}

.marquee-item {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 6.8rem;
}

.logo-image {
  max-height: 100%;
  width: auto;
  height: 100%;
  object-fit: contain;

  &:hover {
    filter: grayscale(0%) opacity(1);
  }
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@include tablet {
  .marquee-item {
    height: 5rem;
  }
}

@include tablet {
  .marquee-item {
    height: 4.8rem;
  }
}
</style>
