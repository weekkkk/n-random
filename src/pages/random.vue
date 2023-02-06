<script lang="ts" setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

import NCounter from '@/components/counter/n-counter.vue';
import { EColor, ESize } from '@/components/enums';
import NButton from '@/components/button/n-button.vue';
import NInput from '@/components/input/n-input.vue';
import NPopover from '@/components/popover/n-popover.vue';
import { EPosition } from '@/components/popover/enums';

/**
 * * Минимальное значение
 */
const min = ref<number | undefined>(0);
/**
 * * Максимальное значение
 */
const max = ref<number | undefined>(2);
/**
 * * Получить рандомное число из промежутка
 */
function getRandomInRange(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
/**
 * * Максимум поля минимума
 */
const minMax = computed(() => {
  if (max.value != undefined) return max.value - 2;
  return 99 - 2;
});
/**
 * * Минимум поля максимума
 */
const maxMin = computed(() => {
  if (min.value != undefined) return min.value + 2;
  return -99 + 2;
});
/**
 * * Неактивность
 */
const disabled = computed(
  () => min.value == undefined || max.value == undefined
);
/**
 * * Значение
 */
const value = ref<number>();
/**
 * * Установить значение
 */
function setValue() {
  if (disabled.value || min.value == undefined || max.value == undefined)
    return;
  value.value = getRandomInRange(min.value, max.value);
  result.value?.focus();
}
/**
 * * Поповер минимума
 */
const minPopover = ref<InstanceType<typeof NPopover>>();
/**
 * * Поповер максимума
 */
const maxPopover = ref<InstanceType<typeof NPopover>>();
/**
 * * Поле с результатом
 */
const result = ref<InstanceType<typeof NInput>>();
/**
 * * Поповер результат
 */
const resultPopover = ref<InstanceType<typeof NPopover>>();

const router = useRouter();
</script>

<template>
  <NButton
    @click="router.push('/about')"
    class="nav-button"
    :color="EColor.Second"
    :size="ESize.Small"
    square
    no-fill
  >
    <p class="fw-bold">?</p>
  </NButton>

  <section class="f fd-col ai-c ta-c">
    <h2 class="c-brand">@n-random</h2>
    <p class="fw-medium">by <i class="c-success">weekkkkkk</i></p>
  </section>

  <section class="f jc-c cg-3 rg-2 fw-wrap">
    <div class="f fd-col ai-c rg-1">
      <label class="fs-small-p c-second-100 lh-no" for="min">min</label>
      <NPopover
        ref="minPopover"
        classes="p-1 fs-caption br-3 ta-c"
        :color="min == undefined ? EColor.Danger : EColor.Success"
        :position="EPosition.Bottom"
        disabled
        width="64px"
      >
        <template #content>
          <i>
            {{ min == undefined ? 'error' : 'good' }}
          </i>
        </template>
        <NCounter
          class="fw-medium"
          :danger="min == undefined"
          v-model="min"
          @focus="minPopover?.open()"
          @blur="minPopover?.close()"
          :max="minMax"
          :min="-99"
          style="max-width: min-content"
          placeholder=">"
          id="min"
          :size="ESize.Large"
          input
        >
          <template #down>
            <h4 class="fw-medium">-</h4>
          </template>
          <template #up>
            <h4 class="fw-medium">+</h4>
          </template>
        </NCounter>
      </NPopover>
    </div>

    <div class="f fd-col ai-c rg-1">
      <label class="fs-small-p c-second-100 lh-no" for="max">max</label>
      <NPopover
        ref="maxPopover"
        classes="p-1 fs-caption br-3 ta-c"
        :position="EPosition.Bottom"
        :color="max == undefined ? EColor.Danger : EColor.Success"
        disabled
        width="64px"
      >
        <template #content>
          <i>
            {{ max == undefined ? 'error' : 'good' }}
          </i>
        </template>
        <NCounter
          class="fw-medium"
          :danger="max == undefined"
          v-model="max"
          @focus="maxPopover?.open()"
          @blur="maxPopover?.close()"
          :min="maxMin"
          :max="99"
          style="max-width: min-content"
          placeholder="<"
          id="max"
          :size="ESize.Large"
          input
        >
          <template #down>
            <h4 class="fw-medium">-</h4>
          </template>
          <template #up>
            <h4 class="fw-medium">+</h4>
          </template>
        </NCounter>
      </NPopover>
    </div>
  </section>

  <section class="f jc-c">
    <NButton
      @click="setValue"
      :disabled="disabled"
      :color="EColor.Brand"
      :size="ESize.Large"
    >
      <p class="fw-bold lh-no">GO</p>
    </NButton>
  </section>

  <section class="f fd-col ai-c rg-1 w-100">
    <label class="c-brand lh-no fw-medium" for="result">result (!)</label>

    <NPopover
      ref="resultPopover"
      classes="py-1 px-2 fs-caption br-3 ta-c"
      :color="value == undefined ? EColor.Danger : EColor.Success"
      :position="EPosition.Bottom"
      disabled
      :width="value == undefined ? '200px' : '68px'"
    >
      <template #content>
        <i>
          {{ value == undefined ? 'enter data and click to "GO"' : 'result' }}
        </i>
      </template>
      <NInput
        ref="result"
        @focus="resultPopover?.open()"
        @blur="resultPopover?.close()"
        :model-value="value"
        placeholder="?"
        class="result fs-h1 fw-bold of-h ta-c"
        readonly
        id="result"
      />
    </NPopover>
  </section>
</template>

<style lang="scss" scoped>
.result {
  --n-input-sz: 64px;
  --n-input-br: calc(var(--n-input-sz) / 2);
  --n-input-bw: 2px;
  --n-input-px: 0;
  max-width: var(--n-input-sz);
}
</style>
