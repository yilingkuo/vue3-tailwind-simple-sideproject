<template>
<div class="w-full lg:max-w-full lg:flex">
    <!-- <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" :style="'background-image: url(' + profilePhoto + ')'" title="Woman holding a mug" /> -->
    <!-- <img class="w-500" :src="profilePhoto"> -->
    <div class="border-r border-b border-l border-gray-400  lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <!-- <div class="mb-8">
            
            <div class="text-gray-900 font-bold text-xl mb-2">15 Rivers In Norway</div>
            <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
        </div> -->
        <div class="flex items-center">
            <img class="w-20 h-20 rounded-full mr-4" :src="profilePhoto" alt="Avatar of Writer">
            <div class="w-20 text-sm">
                <p class="text-gray-900 leading-none">{{ fullname }}</p>
                <p class="text-gray-600">Aug 10</p>
            </div>
        </div>
    </div>
        <!-- <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div class="mb-8">
                <div class="text-gray-900 font-bold text-xl mb-2">{{ fullname }}</div>
                
            </div>
    
        </div> -->

    <!-- <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" :style="'background-image: url(`' + profilePhoto + '`)'" title="Woman holding a mug" />
    <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div class="mb-8">

            <div class="text-gray-900 font-bold text-xl mb-2">{{ fullname }}</div>
            <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
        </div>
        <div class="flex items-center">
        <img class="w-10 h-10 rounded-full mr-4" src="/img/jonathan.jpg" alt="Avatar of Jonathan Reinink">
        <div class="text-sm">
            <p class="text-gray-900 leading-none">Jonathan Reinink</p>
            <p class="text-gray-600">Aug 18</p>
        </div>
        </div>
    </div> -->
</div>
</template>

<script setup>
import { ref, computed } from "vue"
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