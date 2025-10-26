<template>
  <Block :hint="hint" :label="label" class="block" :to="to" :image-url="imageUrl">
    <div class="block-overlay"></div>
    <div class="content">
      <div class="name">{{ name }}</div>
      <svg class="arrow" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="19" cy="19" r="19" fill="#EAE8E8" fill-opacity="0.6"/>
        <path d="M13.2134 12.261L14.0266 9.21115L27.7344 12.8842C28.5755 13.1095 29.0746 13.9739 28.8492 14.8151L25.1762 28.5229L22.1305 27.7068L24.8183 17.6757L10.3632 26.0214L8.78644 23.2904L23.2416 14.9447L13.2105 12.2569L13.2134 12.261Z" fill="white"/>
      </svg>
    </div>
  </Block>
</template>

<script setup lang="ts">
interface IProps {
  imageUrl: string;
  to: string;
  hint: string;
  name: string;
  label: string;
}
defineProps<IProps>();
</script>

<style scoped lang="scss">
.block {
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    .block-overlay {
      backdrop-filter: blur(1px);
      background-color: rgba(0, 0, 0, 0.4);
    }
  }
}

.block-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  z-index: 1;
}

.content {
  padding: 2.4rem;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;

  &:hover {
    .name {
      opacity: 1;
    }

    .arrow {
      transform: unset;
    }
  }
}

.name {
  font-size: 4.8rem;
  color: $color-white;
  text-align: center;
  transition: all 0.2s linear;
  flex-grow: 1;
  opacity: 0;
  align-items: center;
}

.arrow {
  position: absolute;
  right: 2.4rem;
  bottom: 2.4rem;
  width: 3.8rem;
  height: 3.8rem;
  margin-left: auto;
  transition: all 0.2s linear;
  transform: translateX(-100%) rotate(40deg) scale(0);
}

@include tablet {
  .content {
    padding: 1.4rem;
  }

  .name {
    font-size: 2.4rem;
  }

  .arrow {
    right: 1.4rem;
    bottom: 1.4rem;
  }
}

@include mobile {
  .content {
    padding: 1.4rem;
  }

  .name {
    font-size: 2.4rem;
  }

  .arrow {
    right: 1.4rem;
    bottom: 1.4rem;
  }
}
</style>
