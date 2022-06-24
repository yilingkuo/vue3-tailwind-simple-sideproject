<script setup>
import { ref, watch, computed } from 'vue'
import Pair from '@/components/Pair.vue'
import TreeItem from '@/components/TreeItem.vue'
import { useTreeNodesStore } from '@/stores/treenodes'
// https://stackoverflow.com/questions/50736351/make-nested-object-structure-from-flat-structure-and-reverse

const result = computed(() => {
  return store.inputArray.reduce((a,c) => {
    let t = c.path.split(".");
    addChildren(a,c,t);
    return a;
  }, [])
})
const store = useTreeNodesStore()
JSON.unflatten = function(data) {
    "use strict";
    if (Object(data) !== data || Array.isArray(data))
        return data;
    var result = {}, cur, prop, parts, idx;
    for(var p in data) {
        cur = result, prop = "";
        parts = p.split(".");
        for(var i=0; i<parts.length; i++) {
            idx = !isNaN(parseInt(parts[i]));
            cur = cur[prop] || (cur[prop] = (idx ? [] : {}));
            prop = parts[i];
        }
        cur[prop] = data[p];
    }
    return result[""];
}
// watch(result, (curVal, oldVal) => { 
//    console.log(curVal)
// },{ 
//    immediate:true,
//    deep:true
//   })
function findParentNode (a,c,t) {
  let val = t.shift();
  const isParent = ({path}) => path.split(".").pop() === val;
  var i = a.findIndex(isParent);
  if (i !== -1) {
    addChildren(a[i].children, c, t);
  } else {
    a.push({ path: val, children : []})
    findParentNode(a,c,t)
  }
}
function addChildren(a, c, t) {
  let val = t.shift();
  if(!t.length) {
    a.push({...c, children : []});
  } else {
    // 兩層以上 需要取path最尾端的node
    const isParent = ({path}) => path.split(".").pop() === val;
    var i = a.findIndex(isParent);

    if (i !== -1) {
      addChildren(a[i].children, c, t);
    } else {
      console.log('t.shift:', val)
      console.log('parent node:', a)
      console.log(c)
      console.log(t)
      let removeparentnode = {}
      // let newt = c.path.split(".");
      // console.log('newt', newt)
      // newt.shift();
      // pathNode.path.split(".").pop()
      a.push({ path: val, children : []})
      var i = a.findIndex(isParent);
      console.log(a)
      addChildren(a, c, t)
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
function setRemovePair(index) {
  store.$patch((state) => {
    state.inputArray.splice(index, 1)
    // state.inputArray[index].name = v
  })
}
</script>

<template lang="pug">
div(class='bg-gray-100 h-full flex')
  div(class='mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8')
    div(v-for='(pair, index) in store.inputArray' :key='index')
      Pair(:key-model='pair.path' :value-model='pair.name' @update:key-model='value => setKey(value, index)' @update:value-model='value => setValue(value, index)' @remove-pair='setRemovePair(index)')

    div(class='py-1 w-full')
      button(class='block w-full mr-4 py-2 px-4 rounded-full border-0 text-sm font-semibold bg-red-200 text-red-700 hover:bg-red-100' @click='addpair') 新增節點
  div(class='mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8')
    TreeItem(class='item' v-for='(t, index) in result' :key='index' :path-node='t')
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
