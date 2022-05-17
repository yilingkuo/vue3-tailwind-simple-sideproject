<script>

</script>
<script setup>
import { ref, computed } from "vue"
import { HeartIcon } from '@heroicons/vue/solid'
import { HeartIcon as HeartOutline } from '@heroicons/vue/outline'
import Spinner from '@/components/Spinner.vue'

const props = defineProps({
    profilePhoto: String,
    name: Object
})

let fullname = computed({
    get: () => props.name.first + ' ' + props.name.last
})
// img loading state
let isLoaded = ref(false)
let isLoading = ref(true)
const loaded = () => {
  isLoaded.value = true
  isLoading.value = false
}
</script>

<style>

</style>
<template lang="pug">
div(class=' h-60 w-full lg:max-w-full lg:flex')
  div(class=' shadow-lg bg-white rounded lg:rounded-md xl:rounded-lg p-4 flex flex-col justify-between items-center leading-normal')
    div.w-40.h-40.items-center.justify-center.flex(v-if="isLoading" )
      Spinner(size="10" color="teal-400" backgroudColor="gray-300")
    img.w-40.h-40.rounded-full(v-show="isLoaded" @load="loaded" :src='profilePhoto' alt='Avatar of Writer')
    .flex.justify-between.pt-3.w-40.text-md
      .col-10
        p.text-gray-900.leading-none {{ fullname }}
        p.text-gray-600 Aug 10
      .col-2.text-center
        HeartIcon(class='h-10 w-10 text-red-400 hover:animate-bounce')
        HeartOutline(class='h-10 w-10 text-red-400 hover:animate-bounce')
            
            
</template>