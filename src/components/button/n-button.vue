<script lang="ts" setup>
import type { PropType } from 'vue';
import { ESize, EColor } from '../enums';
/**
 * * Свойства
 */
const props = defineProps({
  /**
   * * Цвет
   */
  color: { type: String as PropType<EColor>, default: EColor.Default },
  /**
   * * Размер
   */
  size: { type: String as PropType<ESize>, default: ESize.Default },
  /**
   * * Убрать заливку
   */
  noFill: { type: Boolean, default: false },
  /**
   * * Квадратная кнопка
   */
  square: { type: Boolean, default: false },
  /**
   * * Неактивность
   */
  disabled: { type: Boolean, default: false },
});
</script>

<template>
  <button
    :class="[
      'n-button',
      {
        'n-button_bool-no_fill': noFill,
        'n-button_bool-square': square,
        'n-button_bool-disabled': disabled,
      },
      `n-button_color-${color}`,
      `n-button_size-${size}`,
    ]"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<style lang="scss">
:root {
  --n-button-tx: var(--n-default);
  --n-button-bg: var(--n-default);
  --n-button-px: var(--n-ctrl-default-px);
  --n-button-py: var(--n-ctrl-default-py);
  --n-button-br: var(--n-ctrl-default-br);
  --n-button-sz: var(--n-ctrl-default-sz);
  --n-button-bw: var(--n-ctrl-bw);
  --n-button-bc: var(--n-ctrl-bc);
  --n-button-br: var(--n-ctrl-br);
}
</style>

<style lang="scss" scoped>
$tx: var(--n-button-tx);
$bg: var(--n-button-bg);
$px: var(--n-button-px);
$py: var(--n-button-py);
$br: var(--n-button-br);
$sz: var(--n-button-sz);
$bw: var(--n-button-bw);
$bc: var(--n-button-bc);
$br: var(--n-button-br);
.n-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  outline: none;
  font-size: inherit;
  font-weight: inherit;
  padding: $py $px;
  min-height: $sz;
  min-width: $sz;
  background-color: $bg;
  border-radius: $br;
  color: $tx;
  &_size {
    &-small {
      --n-button-px: var(--n-ctrl-small-px);
      --n-button-py: var(--n-ctrl-small-py);
      --n-button-sz: var(--n-ctrl-small-sz);
    }
    &-default {
      --n-button-px: var(--n-ctrl-default-px);
      --n-button-py: var(--n-ctrl-default-py);
      --n-button-sz: var(--n-ctrl-default-sz);
    }
    &-large {
      --n-button-px: var(--n-ctrl-large-px);
      --n-button-py: var(--n-ctrl-large-py);
      --n-button-sz: var(--n-ctrl-large-sz);
    }
  }
  &_color {
    &-default {
      --n-button-bg: var(--n-default);
    }
    &-base {
      --n-button-bg: var(--n-base);
    }
    &-second {
      --n-button-bg: var(--n-second-100);
    }
    &-brand {
      --n-button-bg: var(--n-brand);
    }
    &-success {
      --n-button-bg: var(--n-success);
    }
    &-warn {
      --n-button-bg: var(--n-warn);
    }
    &-danger {
      --n-button-bg: var(--n-danger);
    }
  }
  &_bool {
    &-no_fill {
      background-color: transparent;
      outline: $bw solid $bc;
      outline-offset: calc($bw * -1);
      --n-button-tx: var(--n-button-bg);
      --n-button-bc: var(--n-button-bg);
    }
    &-square {
      --n-button-px: 0;
      --n-button-py: 0;
    }
    &-disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
  }
  &:not(.n-button_bool-disabled) {
    &:hover {
      filter: brightness(110%);
    }
    &:active {
      filter: brightness(90%);
    }
  }
}
</style>
