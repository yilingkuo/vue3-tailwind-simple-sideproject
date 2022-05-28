// stores/counter.js
import { defineStore } from 'pinia'
import {addChildren} from './commonFunction.js'
export const useTreeNodesStore = defineStore('treenodes', {
  state: () => {
    return {
        inputArray: [
            {path:'x',name:'1'},
            {path:'y',name:'2'},
            {path:'z',name:'3'},
            {path:'z.aa',name:'4'},
            {path:'z.qq',name:'5'},
            {path:'z.aa.cc',name:'6'},
            {path:'z.aa.ss',name:'7'},
            {path:'s',name:'test'}
        ]
    }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    addpair () {
        this.inputArray.push({path: '', name: ''})
    },
  },
  getters: {
    flat2tree: (state) => {
        return state.inputArray.reduce((a,c) => {
          let t = c.path.split(".");
          console.log('flat2tree t:',t)
          addChildren(a,c,t);
          return a;
        }, [])
      }
  },
//   addChildren(a, c, t) {
//     let val = t.shift();
//     if(!t.length) {
//       a.push({...c, children : []});
//     } else {
//       // 兩層以上 需要取path最尾端的node
//       const isParent = ({path}) => path.split(".").pop() === val;
//       var i = a.findIndex(isParent);
//       if (i !== -1) {
//         addChildren(a[i].children, c, t);
//       }
//     }
//   }
})