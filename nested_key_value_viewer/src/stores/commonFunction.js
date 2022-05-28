export const addChildren = function (a, c, t) {
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