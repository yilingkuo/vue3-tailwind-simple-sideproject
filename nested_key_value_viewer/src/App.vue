<script setup>
import { ref } from 'vue'

</script>

<template>
  <div class="flex flex-col h-screen">
    <header class="flex-initial bg-white shadow" v-if="$route.meta.title">
      <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1
          @click="counter = 0"
          class="text-3xl font-bold leading-tight text-gray-900"
        >
          {{ $route.meta.title }}
        </h1>
      </div>
    </header>
    <main class="flex-1">
      <router-view />
    </main>
  </div>
</template>
