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
// // set favorites write to db
// import { ref as firebaseRef, set, push, child, get } from "firebase/database";
// import { db } from './firebase'
// const userprofile =  getSessionStorage('auth')
// // console.log('user profile :', userprofile)
// const postListRef = firebaseRef(db, 'users_fav/' + userprofile.uid);
// const checkFav = () => {
//   console.log(postListRef)
//   get(postListRef).then((snapshot) => {
//     if (snapshot.exists()) {
//       console.log(snapshot.val());
//     } else {
//       console.log("No data available");
//     }
//   }).catch((error) => {
//     console.error(error);
//   });
// }
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
        <div v-if="$route.path !== '/'" class="col-3 flex flex-nowrap">
          <button type="button" @click="checkFav" class="block w-full  whitespace-nowrap
            mr-4 py-2 px-4
            rounded-full border-0
            text-sm font-bold
            bg-transparent text-gray-100
            hover:bg-teal-100 hover:text-teal-700
          ">收藏清單</button>
          <button type="button" @click="logout" class="no-wrap block w-full  whitespace-nowrap
            mr-4 py-2 px-4
            rounded-full border-0
            text-sm font-bold
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
