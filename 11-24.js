// 数组去重

const unique = (arr) => [...new Set(arr)]

 const quchong = (arr) => {
      const hash = {};
        arr = arr.reduce(function (item, next) {
          hash[next] ? '' : hash[next] = true && item.push(next);
          return item;
        }, []);
        return arr;
    };