<template>
  <component :is="to ? Block : 'div'" light :to="to" :hint="hint" :label="label">
    <div class="link-block">
      <div>{{ text }}</div>
      <div>{{ link }}</div>
    </div>
  </component>
</template>

<script setup lang="ts">
import {Block} from "#components";

interface IProps {
  to?: string;
  hint: string;
  label?: string;
  text: string;
  link: string;
}
defineProps<IProps>();
</script>

<style scoped lang="scss">
@include desktop {
  .link-block {
    padding: 2.4rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2.4rem;

    & > :first-child {
      text-align: center;
    }

    & > :last-child {
      position: relative;
      transition: all linear 0.2s;

      &::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 0;
        height: 2px;
        background-color: currentColor;
        transition: width 0.2s ease;
      }
    }

    &:hover {
      & > :last-child {
        &::after {
          width: 100%;
        }
      }
    }
  }
}

@include tablet {
  .link-block {
    padding: 2.4rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2.4rem;

    & > :first-child {
      text-align: center;
    }

    & > :last-child {
      position: relative;
      transition: all linear 0.2s;

      &::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 0;
        height: 2px;
        background-color: currentColor;
        transition: width 0.2s ease;
      }
    }

    &:hover {
      & > :last-child {
        &::after {
          width: 100%;
        }
      }
    }
  }
}

@include mobile {
  .link-block {
    padding: 1.4rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;

    & > :first-child {
      text-align: center;
    }

    & > :last-child {
      position: relative;
      transition: all linear 0.2s;

      &::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 0;
        height: 2px;
        background-color: currentColor;
        transition: width 0.2s ease;
      }
    }

    &:hover {
      & > :last-child {
        &::after {
          width: 100%;
        }
      }
    }
  }
}
</style>
