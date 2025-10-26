<template>
  <span>
    <span ref="el" class="typed"></span>
  </span>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Typed from 'typed.js';

const props = defineProps<{ strings: string[]}>();

const el = ref<HTMLElement | null>(null);
let typed: Typed | null = null;

onMounted(() => {
  watch(() => props.strings, () => {
    typed?.destroy();
    typed = new Typed(el.value as HTMLElement, {
      strings: props.strings,
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 1500,
      loop: true,
      showCursor: true,
      cursorChar: '_',
    })
  }, { immediate: true });
});

onBeforeUnmount(() => {
  if (typed) {
    typed?.destroy();
    typed = null;
  }
})
</script>

<style scoped>
.typed-cursor {
  font-weight: 400;
  color: #9ca3af;
  animation: blink 0.8s steps(1) infinite;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  50.01%, 100% { opacity: 0; }
}
</style>
