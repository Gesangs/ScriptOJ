// 编写一个 JavaScript 函数 uniqueNums，该函数有一个参数 n（一个不大 31 的整数），其返回值是一个数组，该数组内是 n 个随机且不重复的整数，且整数取值范围是 [2, 32]。

// 请你完成 uniqueNums 的编写。

// Array.includes
const uniqueNums = (n) => {
    const arr = []
    while(arr.length !== n) {
      const num = Math.random()*30 + 2;
      if(!arr.includes(num)) arr.push(num)
    }
    return arr
  }

// Set 自动去重
const uniqueNums1 = (n) => {
    const set = new Set()
    while(set.size !== n) {
      const num = Math.random()*30 + 2;
      set.add(num)
    }
    return [...set]
  }
  
// 无循环
const uniqueNums2 = (n) => 
[...(new Array(31)).keys()]
  .map((i) => i + 2)
  .sort(() => Math.random() - Math.random()) // 打乱
  .slice(0, n)