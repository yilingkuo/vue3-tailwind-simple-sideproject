<script>

</script>
<script setup>
import { ref, computed } from "vue"
import { HeartIcon } from '@heroicons/vue/solid'
import { HeartIcon as HeartOutline } from '@heroicons/vue/outline'

const props = defineProps({
    profilePhoto: String,
    name: Object
})
// function fullname ()= computed(() => {
//     console.log(props.name)
//     return props.name.first + ' ' + props.name.last
// })
let fullname = computed({
    get: () => props.name.first + ' ' + props.name.last
})
</script>

<style>

</style>
<template lang="pug">
div(class=' h-60 w-full lg:max-w-full lg:flex')
  div(class=' shadow-lg bg-white rounded lg:rounded-md xl:rounded-lg p-4 flex flex-col justify-between items-center leading-normal')
    img.w-40.h-40.rounded-full(:src='profilePhoto' alt='Avatar of Writer')
    .flex.justify-between.pt-3.w-40.text-md
      .col-10
        p.text-gray-900.leading-none {{ fullname }}
        p.text-gray-600 Aug 10
      .col-2.text-center
        HeartIcon(class='h-10 w-10 text-red-400')
        HeartOutline(class='h-10 w-10 text-red-400')
            
            
</template>