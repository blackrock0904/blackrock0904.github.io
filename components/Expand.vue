<template>
  <div @click="toggleExpand" class="expand" :class="{ expanded }" :style="{ '--text-height': textHeight + 'px' }">
    <div class="expand-header">
      <svg  width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12.5" cy="12.5" r="12.5" fill="#FFC830"/>
        <path d="M14 11H20V14H14V20H11V14H5V11H11V5H14V11Z" fill="white"/>
      </svg>
      <div class="label">{{ label }}</div>
    </div>
    <div class="title">{{ title }}</div>
    <div ref="textRef" class="text text-gray">{{ text }}</div>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  label: string;
  title: string;
  text: string;
}

defineProps<IProps>();

const expanded = ref(false);
const textRef = ref<HTMLElement>();
const textHeight = ref(0);

const toggleExpand = () => {
  if (!expanded.value) {
    if (textRef.value) {
      textHeight.value = textRef.value.scrollHeight;
    }
  }
  expanded.value = !expanded.value;
};

onMounted(() => {
  if (textRef.value) {
    textHeight.value = textRef.value.scrollHeight;
  }
});
</script>

<style lang="scss" scoped>
.expand {
  cursor: pointer;
  padding: 2.4rem;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #F5F5F5;
  border-radius: 1.6rem;
  will-change: auto;

  &-header {
    position: absolute;
    left: 2.4rem;
    right: 2.4rem;
    top: 2.4rem;
    display: flex;
    justify-content: space-between;
  }

  &.expanded {
    svg {
      transform: rotate(45deg);
      transition: transform 0.2s ease;
    }

    .text {
      margin-top: 2.4rem;
      height: var(--text-height);
      opacity: 1;
    }
  }
}

svg {
  cursor: pointer;
}

.title {
  text-align: center;
  font-size: 3.6rem;
}

.text {
  text-align: center;
  height: 0;
  font-size: 2rem;
  overflow: hidden;
  opacity: 0;
  transition: height 0.2s ease, opacity 0.2s ease;
}

@include tablet {
  svg {
    width: 2.5rem;
    height: 2.5rem;
  }

  .title {
    font-size: 2.4rem;
  }

  .text {
    font-size: 1.4rem;
  }


  .expand {
    padding: 1.4rem;

    &-header {
      left: 1.4rem;
      right: 1.4rem;
      top: 1.4rem;
    }
  }
}

@include mobile {
  svg {
    width: 2.5rem;
    height: 2.5rem;
  }

  .title {
    font-size: 2.8rem;
  }

  .text {
    font-size: 1.4rem;
  }


  .expand {
    border-radius: 0.8rem;
    padding: 1.4rem;

    &-header {
      left: 1.4rem;
      right: 1.4rem;
      top: 1.4rem;
    }

    &.expanded {
      .text {
        margin-top: 1.2rem;
      }
    }
  }
}
</style>
