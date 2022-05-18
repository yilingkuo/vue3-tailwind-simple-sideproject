<script setup>
import { ref } from 'vue'
import { useRouter } from "vue-router"
import { getSessionStorage } from './commonjs/methods'
const router = useRouter()
const logout = () => {
  try {
    const auth = getSessionStorage('auth')
    if (auth) {
      console.log(auth.stsTokenManager)
      if (auth.stsTokenManager?.accessToken) {
        // sessionStorage.clear()
        router.push({
          path: '/',
          replace: true
        })
      }
    }
  } catch (error) {
    
  }
}
</script>

<template>
  <div class="flex flex-col h-screen bg-dunes bg-cover bg-center bg-coral">
    <header class="flex-initial " v-if="$route.meta.title">
      <div class="flex justify-between mx-auto max-w-7xl px-6 py-6 lg:px-8">
        <div class="">
          <h1
            @click="counter = 0"
            class="text-3xl font-bold leading-tight text-white"
          >
            {{ $route.meta.title }} 
          </h1>
        </div>
        <div v-if="$route.path !== '/'" class="col-1 ">
          <button type="button" @click="logout" class="block w-full  
            mr-4 py-2 px-4
            rounded-full border-0
            text-xs font-bold
            bg-transparent text-gray-100
            hover:bg-teal-100 hover:text-teal-700
          ">登出</button>
        </div>
      </div>
    </header>
    <main class="flex-1 bg-transparent overflow-y-auto">
      <router-view />
    </main>
  </div>
</template>
