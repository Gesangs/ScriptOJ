// 从某数据库接口得到如下值：

// {
//   rows: [
//     ["Lisa", 16, "Female", "2000-12-01"],
//     ["Bob", 22, "Male", "1996-01-21"]
//   ],
//   metaData: [
//     { name: "name", note: '' },
//     { name: "age", note: '' },
//     { name: "gender", note: '' },
//     { name: "birthday", note: '' }
//   ]
// }
// rows 是数据，metaData 是对数据的说明。现写一个函数 parseData，将上面的对象转化为期望的数组：

// [
//   { name: "Lisa", age: 16, gender: "Female", birthday: "2000-12-01" },
//   { name: "Bob", age: 22, gender: "Male", birthday: "1996-01-21" },
// ]

// reduce(callback, initialValue)
// callback(previousValue, currentValue, currentIndex, array1)
// previousValue: 通过上一次调用回调函数获得的值。如果向 reduce 方法提供 initialValue，则在首次调用函数时，previousValue 为 initialValue。
// currentValue: 当前数组元素的值。
// currentIndex: 当前数组元素的数字索引。
// array1: 包含该元素的数组对象。


// 箭头函数 箭头后无{}为默认返回值，有{}的话需要手动return


const data = {
    rows: [
        ["Lisa", 16, "Female", "2000-12-01"],
        ["Bob", 22, "Male", "1996-01-21"]
      ],
      metaData: [
        { name: "name", note: '' },
        { name: "age", note: '' },
        { name: "gender", note: '' },
        { name: "birthday", note: '' }
    ]
}


const parseData = (data) => {
    return data.rows.map((row) => 
        row.reduce((preArr, value, index) => {
            preArr[data.metaData[index].name] = value;
            return preArr;
        }, {}))
}

const parseData = (data) => {
    const arr = [];
    const rows = data.rows;
    const metaData = data.metaData;
    for(let i = 0; i < rows.length; i++) {
        const temp = {}
        rows[i].forEach((value, index) => {
            temp[metaData[index].name] = value
        })
        arr.push(temp)
    }
    return arr;
}