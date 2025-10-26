<template>
  <div class="hint">
    <div class="round"><span /></div>
    <span v-if="text" :style="{ color: color }" >{{ text }}</span>
  </div>

</template>

<script setup lang="ts">
interface IProps {
  text?: string;
  color?: string;
}

defineProps<IProps>();
</script>

<style scoped lang="scss">
.hint {
  display: flex;
  align-items: center;
  gap: 0.8rem;

  * {
    font-size: 1.4rem;
    color: $color-white;
  }
}

.round {
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 50%;
  background-color: #BFB3E0;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 50%;
    background-color: $color-white;
    font-size: 1.2rem;
  }
}

@include desktop {
  .round {
    width: 2rem;
    height: 2rem;

    span {
      width: 0.8rem;
      height: 0.8rem;
      font-size: 1.4rem;
    }
  }
}
</style>
