<template>
  <div class="w-30">
    <select v-model="selected"  @click.prevent="emit('updatePerPage', selected)" class="form-select appearance-none
        block
        w-full
        pl-3
        pr-30
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding bg-no-repeat
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        mx-0
        mb-3
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
        <option v-for="(opt, index) in options" :key="index" :value="opt || opt.value" >
            {{ opt || opt.label }}
        </option>
    </select>
  </div>
</template>

<script setup>
const props = defineProps({
    selected: Number,
    options: Array
})
const emit = defineEmits(['updatePerPage'])
// const changePage = (page: number) => {
//   if (page > 0 && page <= totalPages.value) {
//     emit('page-changed', page)
//   }
// }
</script>

<style>

</style>