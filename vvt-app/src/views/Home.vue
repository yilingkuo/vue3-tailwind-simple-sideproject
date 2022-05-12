<script setup>
// import Card from '@/components/Card.vue'
import Card from '@/components/testCard.vue'

import { ref } from '@vue/reactivity'
import * as methods from '../commonjs/methods'
let userdata = ref([])
const randomusers = methods.getApi('https://randomuser.me/api/?results=10').then(r => userdata.value = r.results)

</script>

<template>
  <div class="bg-gray-50">
    <div
      class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:flex items-center justify-center  lg:py-16 lg:px-8"
    >
      <div class=" grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          <!-- <p>{{user.name}}</p>
          {{user.picture.medium}} -->
        <Card  v-for="(user, index) in userdata" :key="index" :profile-photo="user.picture.medium" :name="user.name" />
      </div>
    </div>
  </div>
</template>
