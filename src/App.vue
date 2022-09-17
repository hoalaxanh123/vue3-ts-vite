<template>
  <div>
    <a href="https://vitejs.dev" target="_blank" title="Vite">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank" title="Vue">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>

    <a
      href="https://vuejs.org/guide/typescript/overview.html"
      target="_blank"
      title="TypeScript"
    >
      <img src="./assets/TS.png" class="logo ts" alt="TypeScript logo" />
    </a>

    <a href="https://eslint.vuejs.org/" target="_blank" title="Eslint">
      <img src="./assets/Eslint.png" class="logo eslint" alt="Eslint logo" />
    </a>

    <a
      href="https://www.npmjs.com/package/eslint-plugin-prettier-vue"
      target="_blank"
      title="Prettier"
    >
      <img
        src="./assets/Prettier.png"
        class="logo prettier"
        alt="Prettier logo"
      />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue + TS + Eslint + Prettier" />
</template>

<script setup lang="ts">
  // This starter template is using Vue 3 <script setup> SFCs
  // Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
  import HelloWorld from './components/HelloWorld.vue'
</script>

<style scoped>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
  .logo.ts:hover {
    filter: drop-shadow(0 0 2em #0482d6aa);
  }
  .logo.eslint:hover {
    filter: drop-shadow(0 0 2em #034875aa);
  }
  .logo.prettier:hover {
    filter: drop-shadow(0 0 2em #d14ee2d8);
  }
</style>
