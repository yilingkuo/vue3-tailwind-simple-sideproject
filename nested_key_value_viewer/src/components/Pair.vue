<template>
  <div class="block flex">
      <div class="col-8">
        <input
          class="w-full border px-4 py-2 rounded focus:border-blue-500 focus:shadow-outline outline-none"
          :value="keyModel"
          @input="$emit('update:keyModel', $event.target.value)"
          placeholder="Key (split with comma)"
        >
      </div>
      <div class="col-4">
        <input
          class="w-full border px-4 py-2 rounded focus:border-blue-500 focus:shadow-outline outline-none"
          :value="valueModel"
          @input="$emit('update:valueModel', $event.target.value)"
          placeholder="Value"
        >
      </div>
      <div>
        <button @click="emit('removePair')" class="block w-full 
          mr-4 py-2 px-4
          rounded-full border-0
          text-sm font-semibold
          bg-red-200 text-red-700
          hover:bg-red-100
        ">-</button>
      </div>
  </div>
</template>

<script setup>
const props = defineProps({
  keyModel: {
    type: String,
    default: ''
  },
  valueModel: {
    type: String,
    default: ''
  }
})
const emit = defineEmits(['update:valueModel', 'update:keyModel', 'removePair'])

</script>

<style>

</style>