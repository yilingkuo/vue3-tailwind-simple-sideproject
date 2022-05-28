<script setup>
import { ref, watch, computed } from 'vue'
import Pair from '@/components/Pair.vue'
import TreeItem from '@/components/TreeItem.vue'
import { useTreeNodesStore } from '@/stores/treenodes'
// https://stackoverflow.com/questions/50736351/make-nested-object-structure-from-flat-structure-and-reverse
const inputArray = ref([{path:'x',name:'1'},{path:'y',name:'2'},{path:'z',name:'3'},{path:'z.aa',name:'4'},{path:'z.qq',name:'5'},{path:'z.aa.cc',name:'6'},{path:'z.aa.ss',name:'7'},{path:'s',name:'8'}]);
const result = computed(() => {
  return store.inputArray.reduce((a,c) => {
    let t = c.path.split(".");
    console.log(t)
    addChildren(a,c,t);
    return a;
  }, [])
})
const store = useTreeNodesStore()
// watch(result, (curVal, oldVal) => { 
//    console.log(curVal)
// },{ 
//    immediate:true,
//    deep:true
//   })

function addChildren(a, c, t) {
  let val = t.shift();
  if(!t.length) {
    a.push({...c, children : []});
  } else {
    // 兩層以上 需要取path最尾端的node
    const isParent = ({path}) => path.split(".").pop() === val;
    var i = a.findIndex(isParent);
    console.log('t.shift:', val)
    console.log('parent node:', i)
    if (i !== -1) {
      addChildren(a[i].children, c, t);
    }
  }
}
console.log(result)
function addpair () {
  // inputArray.value.push({path: '', name: ''})
  store.addpair()
}
function setKey(v, index) {
  console.log(v)
  console.log(store.inputArray)
  store.$patch((state) => {
    state.inputArray[index].path = v
    console.log(store.inputArray)
  })
}
function setValue(v, index) {
  store.$patch((state) => {
    state.inputArray[index].name = v
  })
}
</script>

<template>
  <div class="bg-gray-100 h-full flex ">
    <div

      class="mx-auto px-4 py-12 sm:px-6  lg:py-16 lg:px-8"
    >
      <div v-for="(pair, index) in store.inputArray" :key="index">
        <Pair :keyModel="pair.path" :valueModel="pair.name" @update:keyModel="value => setKey(value, index)" @update:valueModel="value => setValue(value, index)"/>
      </div>
      <div class="py-1 w-full">
        <button @click="addpair" class="block w-full 
          mr-4 py-2 px-4
          rounded-full border-0
          text-sm font-semibold
          bg-red-200 text-red-700
          hover:bg-red-100
        ">新增節點</button>
      </div>
    </div>
    <div
    class="mx-auto px-4 py-12 sm:px-6  lg:py-16 lg:px-8"
    >
        <TreeItem class="item" v-for="(t, index) in result" :key="index" :pathNode="t"></TreeItem>
    </div>
  </div>
</template>

<style>
.item {
  cursor: pointer;
  line-height: 1.5;
}
.bold {
  font-weight: bold;
}
</style>
