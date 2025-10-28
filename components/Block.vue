<template>
  <component :is="to ? NuxtLink : 'div'" :to="to" class="project" :class="{ light }" :style="styles">
    <div class="project-header flex justify-between align-center">
      <Point :text="hint"/>
      <Label v-if="label" :text="label" />
    </div>
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import { NuxtLink } from "#components";

interface IProps {
  imageUrl?: string;
  to?: string;
  hint: string;
  label?: string;
  light?: boolean;
}
const props = defineProps<IProps>();

const styles = computed(() => {
  if (!props.imageUrl) return '';

  return {
    backgroundImage: `url(${props.imageUrl})`
  }
})
</script>

<style scoped lang="scss">
.project {
  display: block;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 1.6rem;
  overflow: hidden;
  text-decoration: none;
  position: relative;

  &.light {
    background-color: #F5F5F5;

    :deep(.hint span) {
      color: #4E4E4EE5;
    }

    :deep(.label) {
      color: #4E4E4EE5;
    }
  }

  &-header {
    z-index: 2;
    position: absolute;
    left: 2.4rem;
    right: 2.4rem;
    top: 2.4rem;
  }

  @include tablet {
    border-radius: 0.8rem;

    &-header {
      left: 1.4rem;
      right: 1.4rem;
      top: 1.4rem;
    }
  }

  @include mobile {
    border-radius: 0.8rem;

    &-header {
      left: 1.4rem;
      right: 1.4rem;
      top: 1.4rem;
    }
  }
}
</style>
