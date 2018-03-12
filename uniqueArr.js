// 数组去重

const unique = (arr) => [...new Set(arr)]


// 新建一个hash对象来记录已存在的值；
// 参数含义：
// item： 上一次运算后 return 的值
// value：当前值
// index：当前值的索引
// a：    当前值所属的数组
// []：   运算初始值


 const quchong = (arr) => {
      const hash = {};
        arr = arr.reduce(function (item, value, index, a) {
          hash[value] ? '' : hash[value] = true && item.push(value);
          return item;
        }, []);
        return arr;
    };
