
<script setup>
import { ref } from 'vue'
import vueLogo from '../assets/vue.svg'
const count = ref(0)
const incrementCount = () => {
  count.value += 1
}

</script>

<template>
    <div>
      <div>
        <a href="https://react.dev" target="_blank">
          <img class="logo react" :src="vueLogo.src" alt="Vue logo" width="120" />
        </a>
      </div>
      <h1>Vue</h1>
      <div class="card">
        <button @click="incrementCount">
          count is {{ count }}
        </button>
        <p>
          Edit <code>src/App.vue</code> and save to test HMR
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Vue logos to learn more
      </p>
    </div>
  </template>
