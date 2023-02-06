<script lang="ts" setup></script>

<template>
  <main class="f fd-col ai-c bg-default br-3 p-3 rg-3">
    <RouterView />
  </main>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  font-family: 'Montserrat';
  line-height: var(--n-lh-regular);
  font-size: var(--n-fs-p);
}
body {
  background-color: var(--n-second-0);
  padding: var(--n-indent-3);
  min-height: 100vh;
  display: flex;
  color: var(--n-base);
}
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}
main {
  position: relative;
  max-width: 400px;
  width: 100%;
}
button.n-button.nav-button {
  position: absolute;
  left: -8px;
  top: -8px;
  --n-button-bw: 2px;
}
</style>
