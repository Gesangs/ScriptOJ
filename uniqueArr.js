// 数组去重

const unique = (arr) => [...new Set(arr)]


// 新建一个hash对象来记录已存在的值；
// 参数含义：
// item： 上一次运算后 return 的值
// value：当前值
// index：当前值的索引
// a：    当前值所属的数组
// []：   运算初始值
// Map结构的key值可以是任意类型，而普通对象的key值是字符串类型，无法区分字符‘1’和数字1

 const quchong = (arr) => {
      let hash = new Map();
      arr = arr.reduce((item, value) => {
          hash.has(value) ? '' : hash.set(value, true) && item.push(value)
          return item;
      }, [])
      return arr;
    };
