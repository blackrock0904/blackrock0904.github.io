<template>
  <Block :to="to" :hint="hint" :label="label" image-url="/img/main-gradient.png" class="gradient-block">
    <div class="gradient-circle"></div>
    <div class="content">
      <div class="name">{{ name }}</div>
    </div>
  </Block>
</template>

<script setup lang="ts">
interface IProps {
  to: string;
  hint: string;
  name: string;
  label?: string;
}
defineProps<IProps>();
</script>

<style scoped lang="scss">
.gradient-block {
  position: relative;
  overflow: hidden;
  height: 27.2rem;

  &:hover {
    .gradient-circle {
      width: 1500px;
      height: 1500px;
      opacity: 1;
    }

    :deep(.hint span) {
      color: #FFFFFF;
    }
  }
}

.gradient-circle {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgb(31, 33, 93, 0.2);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.1s linear;
  z-index: 1;
  opacity: 0;
}

.content {
  padding: 2.4rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.name {
  z-index: 2;
  font-size: 4.8rem;
  color: #4E4E4EE5;
  text-align: center;
  transition: all 0.2s ease;
}

:deep(.hint span) {
  color: #4E4E4EE5;
}

.gradient-block:hover .name {
  color: $color-white;
}

@include tablet {
  .content {
    padding: 1.4rem;
  }

  .name {
    font-size: 4rem;
  }
}

@include mobile {
  .content {
    padding: 1.4rem;
  }

  .name {
    font-size: 2.8rem;
  }

  .gradient-block {
    height: 19rem;

    &:hover {
      .gradient-circle {
        width: 400px;
        height: 400px;
        opacity: 1;
      }
    }
  }
}
</style>
