<template>
  <span class="label">{{ text }}</span>
</template>

<script setup lang="ts">
interface IProps {
  text: string;
}

defineProps<IProps>();
</script>

<style scoped lang="scss">
.label {
  color: #F5F5F5;
  font-size: 1.2rem;

  @include desktop {
    font-size: 1.4rem;
  }
}
</style>
