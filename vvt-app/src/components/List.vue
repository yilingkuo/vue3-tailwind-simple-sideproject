<script setup>
import { ref, computed } from "vue"
import { HeartIcon } from '@heroicons/vue/solid'
import { HeartIcon as HeartOutline } from '@heroicons/vue/outline'
import Spinner from '@/components/Spinner.vue'
import Dialog from '@/components/Dialog.vue'
// set favorites write to db
import { ref as firebaseRef, set, push } from "firebase/database";
import { db } from '../firebase'
import { getSessionStorage } from '../commonjs/methods'
const props = defineProps({
    profilePhoto: String,
    name: Object,
    detail: Object
})

const fullname = computed({
    get: () => props.name.first + ' ' + props.name.last
})
// img loading state
const isLoaded = ref(false)
const isLoading = ref(true)
const loaded = () => {
  isLoaded.value = true
  isLoading.value = false
}
const showDialog = ref(false)
const showD = () => {
  showDialog.value = true
  console.log(showDialog)
}

const userprofile =  getSessionStorage('auth')
// console.log('user profile :', userprofile)
const postListRef = firebaseRef(db, 'users_fav/' + userprofile.uid);
const newPostRef = push(postListRef);
const writeUserFav = () => {
  console.log(props)
  set(newPostRef, props.detail)
}
const isFav = ref(false)
const setFav = () => {
  console.log(isFav.value)
  console.log(props.detail)
  if (!isFav.value) {
    writeUserFav()
    isFav.value = true
  } else {
    // unset
    isFav.value = false
  }
}
// var click open dialog
</script>
<!-- 
  .q-item {
    position: relative;
}
.q-item {
    min-height: 48px;
    padding: 8px 16px;
    color: inherit;
    transition: color .3s,background-color .3s;
}
 -->
<template lang="pug">
div
  li(@click="showD" class='shadow-lg bg-white rounded lg:rounded-md xl:rounded-lg p-4 flex flex-row justify-between items-center leading-normal')
    div(class="float=left")
      img.w-30.h-30.rounded-full(v-show="isLoaded" @load="loaded" :src='profilePhoto' alt='Avatar of Writer')
    .flex.justify-between.pt-3.w-40.text-md {{ fullname }}
    .row-10
      //- p.text-gray-900.leading-none {{ fullname }}
      p.text-gray-600(v-if="detail['gender']==='female'") Aug 10
    div(class='col-2 text-center' @click="setFav")
      HeartIcon(v-if="isFav" class='h-10 w-10 text-red-400 hover:animate-bounce')
      HeartOutline(v-else class='h-10 w-10 text-red-400 hover:animate-bounce')
  Dialog(:showing="showDialog" @close="showDialog = false")
    div(v-for="(key, index) in Object.keys(detail)"  :key="index") {{ key + detail[key] }}測試default slot
    template(v-slot:footer)
      div(class='justify-items-end text-center' @click="setFav")
        HeartIcon(v-if="isFav" class='h-10 w-10 text-red-400 hover:animate-bounce')
        HeartOutline(v-else class='h-10 w-10 text-red-400 hover:animate-bounce')
</template>
