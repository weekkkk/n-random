<script lang="ts" setup>
import { useRouter } from 'vue-router';

import NButton from '@/components/button/n-button.vue';
import { EColor, ESize } from '@/components/enums';

const router = useRouter();
</script>

<template>
  <NButton
    @click="router.push('/')"
    class="nav-button"
    :color="EColor.Second"
    :size="ESize.Small"
    square
    no-fill
  >
    <p class="fw-bold">&lt;</p>
  </NButton>

  <section class="f fd-col ai-c ta-c">
    <h2 class="c-success">#about_me</h2>
    <p class="fw-medium">social</p>
  </section>

  <section class="f fw-wrap g-3">
    <a
      href="https://t.me/weekkkkkkkk"
      target="_blank"
      class="social bg-second-0 p-1"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/1200px-Telegram_2019_Logo.svg.png"
      />
    </a>
    <a
      href="https://github.com/weekkkk"
      target="_blank"
      class="social bg-second-0 p-1"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
      />
    </a>
  </section>
</template>

<style lang="scss" scoped>
.social {
  border-radius: 50%;
  height: 48px;
  width: 48px;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
}
</style>
