<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  pathNode: Object
})

const isOpen = ref(false)
const isFolder = computed(() => {
  return props.pathNode.children && props.pathNode.children.length
})

function toggle() {
  isOpen.value = !isOpen.value
}

function changeType() {
  if (!isFolder.value) {
    props.pathNode.children = []
    addChild()
    isOpen.value = true
  }
}

function addChild() {
  props.pathNode.children.push({ name: 'new stuff' })
}
</script>

<template>
<ul class="list-disc list-outside m-2">
  <li>
    <div
      :class="{ 'font-bold': isFolder }"
      @click="toggle"
      @dblclick="changeType">
      {{ pathNode.path }}: {{ pathNode.name }}
      <span v-if="isFolder">[{{ isOpen ? '-' : '+' }}]</span>
    </div>
    <ul  class="list-disc list-outside m-2" v-show="isOpen" v-if="isFolder">
      <!--
        A component can recursively render itself using its
        "name" option (inferred from filename if using SFC)
      -->
      <TreeItem
        class="item"
        v-for="(x, index) in pathNode.children"
        :key="index"
        :pathNode="x">
      </TreeItem>
      <!-- <li class="add" @click="addChild">+</li> -->
    </ul>
  </li>
</ul>
</template>
