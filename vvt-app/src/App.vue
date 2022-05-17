<script setup>
import { ref } from 'vue'

// let counter = ref(0)

// setInterval(() => {
//   counter.value++
// }, 1000)
</script>

<template>
  <div class="flex flex-col h-screen bg-dunes bg-cover bg-center bg-coral">
    <header class="flex-initial " v-if="$route.meta.title">
      <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1
          @click="counter = 0"
          class="text-3xl font-bold leading-tight text-white"
        >
          {{ $route.meta.title }} 
        </h1>
      </div>
    </header>
    <main class="flex-1 bg-transparent overflow-y-auto">
      <router-view />
    </main>
  </div>
</template>
