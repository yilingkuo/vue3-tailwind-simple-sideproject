<template>
  <label class="block">
    <span class="font-medium text-gray-700">{{ label }}</span>
    <input
      class="w-full border px-4 py-2 rounded focus:border-blue-500 focus:shadow-outline outline-none"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :type="type"
      :id="id"
      :name="name"
      :class="{'is-invalid': error, bg}"
      :placeholder="placeholder"
    >
    <transition name="slide">
      <p v-show="error" class="invalid-feedback">{{ error }}</p>
    </transition>
  </label>
</template>

<script setup>
const props = defineProps({
    modelValue: {
      type: String,
      required: false
    },
    error: {
      type: String,
      required: false
    },
    placeholder: {
      type: String,
      required: false
    },
    id: {
      type: String,
      required: false
    },
    name: {
      type: String,
      required: false
    },
    label: {
      type: String
    },
    bg: {
      type: String,
      required: false
    },
    type: {
      type: String,
      default: "text",
      validator: val => {
        return (
          ["url", "text", "password", "email", "search"].indexOf(val) !== -1
        );
      }
    }
  },)

const emit = defineEmits(['update:modelValue'])
const updateValue = (event) => {
    emit('update:modelValue', event.target.value)
}
</script>