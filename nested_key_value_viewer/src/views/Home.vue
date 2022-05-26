<script setup>
import { ref, watch, computed } from 'vue'
import Pair from '@/components/Pair.vue'
import TreeItem from '@/components/TreeItem.vue'
const treeData = ref({
  name: 'My Tree',
  children: [
    { name: 'hello' },
    { name: 'world' },
    {
      name: 'child folder',
      children: [
        {
          name: 'child folder',
          children: [{ name: 'hello' }, { name: 'world' }]
        },
        { name: 'hello' },
        { name: 'world' },
        {
          name: 'child folder',
          children: [{ name: 'hello' }, { name: 'world' }]
        }
      ]
    }
  ]
})
// https://stackoverflow.com/questions/50736351/make-nested-object-structure-from-flat-structure-and-reverse
const inputArray = ref([{path:'x',name:'1'},{path:'y',name:'2'},{path:'z',name:'3'},{path:'z.aa',name:'4'},{path:'z.qq',name:'5'},{path:'z.aa.cc',name:'6'},{path:'z.aa.ss',name:'7'},{path:'s',name:'8'}]);
const result = computed(() => {
  return inputArray.value.reduce((a,c) => {
    let t = c.path.split(".");
    addChildren(a,c,t);
    return a;
  }, [])
})

watch(inputArray, (curVal, oldVal) => { 
   console.log(curVal)
   console.log(oldVal)
},{ 
   immediate:true,
   deep:true
  })
// const result = inputArray.reduce((a,c) => {
//   let t = c.path.split(".");
//   addChildren(a,c,t);
//   return a;
// }, []);
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
    }
  }
}
console.log(result)
</script>

<template>
  <div class="bg-gray-100 h-full flex ">
    <div

      class="mx-auto px-4 py-12 sm:px-6  lg:py-16 lg:px-8"
    >
    <div v-for="(pair, index) in inputArray" :key="index">
      <Pair :keyModel="pair.path" :valueModel="pair.name"/>
    </div>
    </div>
    <div
    class="mx-auto px-4 py-12 sm:px-6  lg:py-16 lg:px-8"
    >
      <ul v-for="(t, index) in result" :key="index" class="list-disc list-outside m-2">
        <TreeItem class="item"  :model="t"></TreeItem>
      </ul>
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
