// 多维数组拍平：使多维数组转化为一维数组

// [].concat.apply([], arr);
const flatten = (arr) => {
    const result = []
    arr.forEach((item)=> {
      if (Array.isArray(item)) {
        result = result.concat(flatten(item));
      } else {
        result.push(item)
      }
    })
    return result
}


// join()、toString()
const flatten1 = (arr) => {
    return arr.length ? arr.join().split(',').map(x => Number.parseInt(x)) : [];
}


// 返回一个迭代器
function* flatten1(arr) {
    arr = arr.length ? arr.toString().split(',').map(x => Number.parseInt(x)) : [];
    for(let result of arr) {
        yield result;
    }
}