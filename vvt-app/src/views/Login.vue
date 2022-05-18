<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from "vue-router"
import { firbase, auth } from '../firebase'
import { setSessionStorage } from '../commonjs/methods'
import ButtonRepo from '@/components/ButtonRepo.vue'
import Input from '@/components/Input.vue'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth"
const token = sessionStorage.getItem('auth') || ''

const email = ref('')
const password = ref('') 
const router = useRouter()
const route = useRoute()

const login = () => {
  console.log(email.value, password.value)
  signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    console.log('credential:' ,userCredential.user)
    // Signed in 
    const user = userCredential.user;
    // 存登入status 有效一天
    setSessionStorage('auth', user, 1440)
    // 跳轉至主頁
    router.push({
      path: '/main',
      replace: true
    })
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  })
}

const register = () => {
  console.log(email.value, password.value)
  createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    console.log('credential:' ,userCredential.user)
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  })
}


</script>

<template>
  <div class="h-full">
    <div
      class="h-full mx-auto max-w-screen-xl p-4 sm:px-6 lg:flex items-center justify-center  lg:p-6"
    >
     
      <div class="h-60 shadow-lg bg-white rounded lg:rounded-md xl:rounded-lg p-4 flex flex-col justify-center items-center leading-normal">
        <!-- <div class="inline-flex rounded-md">
          <input id="input1" class="w-full border px-4 py-2 rounded focus:border-blue-500 focus:shadow-outline outline-none" type="text" autofocus placeholder="Full name..." />
        </div>
        <div class="inline-flex rounded-md">
           <label class="block mb-1 text-sm" for="input1">Full name:</label>
          <input id="input1" class="w-full border px-4 py-2 rounded focus:border-blue-500 focus:shadow-outline outline-none" type="text" autofocus placeholder="Full name..." />
        </div> -->
        <div class="py-2">
          <Input placeholder="信箱" v-model="email" />
        </div>
        <div class="py-2">
          <Input placeholder="密碼" v-model="password" />
        </div>
        <div class="py-1 w-full">
          <button type="button" @click="login" class="block w-full 
            mr-4 py-2 px-4
            rounded-full border-0
            text-sm font-semibold
            bg-violet-50 text-violet-700
            hover:bg-violet-100
          ">登入</button>
        </div>
        <div class="py-1 w-full">
          <span class="sr-only">Choose profile photo</span>
          <button type="button" @click="login" class="block w-full  
            mr-4 py-2 px-4
            rounded-full border-0
            text-xs font-normal
            bg-transparent text-gray-500
            hover:bg-teal-100
          ">初次使用由此註冊</button>
        </div>
      </div>
    </div>
  </div>
</template>
