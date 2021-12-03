<script setup lang="ts">
  import "./button.css";
  import type { ButtonProps, ButtonEmits } from "./types";
  import { computed } from "vue";

  // export interface ButtonProps {
  //     label: string;
  //     primary?: boolean;
  //     size?: 'small' | 'medium' | 'large';
  //     backgroundColor?: string;
  // }

  // export interface ButtonEmits {
  //     (e: 'click'): void;
  // }
  const props = defineProps<ButtonProps>();
  const emit = defineEmits<ButtonEmits>();

  const classes = computed(() => ({
    "storybook-button": true,
    "storybook-button--primary": props.primary,
    "storybook-button--secondary": !props.primary,
    [`storybook-button--${props.size || "medium"}`]: true,
  }));

  const style = computed(() => ({
    backgroundColor: props.backgroundColor,
  }));

  defineExpose({
    classes,
    style,
    onClick() {
      emit("click");
    },
  });
</script>

<template>
  <button type="button" :class="classes" :style="style" @click="onClick">
    {{ label }}
  </button>
</template>
