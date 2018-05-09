// 记一次阿里笔试题
// 找出区间的相交区间如：
// [2,5]和[1,3]的相交区间是[2,3]; 
// 区间个数不限，若传入非法参数返回null;


function TypeOf(any, type) {
    if(Object.prototype.toString.call(any) === `[object ${type}]`) {
        return true;
    } else {
        return false;
    }
}

function getSection (...args) {
    // 相交区间的右区间取决于参数中最小的右区间
    let left = args[0][0];
    let right = args[0][1];
    let arr = [];
    args.map((item) => {
        // if(!TypeOf(item[0], "Number") || !TypeOf(item[1], "Number")) return null;
        if(left > item[0]) left = item[0];        
        if(right > item[1]) right = item[1];
    })
    
    // 生成长度为right的数组：
    // [2,5] => [ , ,1,1,1,1, ]
    // [1,3] => [ ,1,1,1, , , ]
    args.map((item) => {
        const a = new Array(right).fill(1, item[0])
        arr.push(a);
    })

    // 找出相交区间的左区间
    let i = left;
    left = "";
    for(; i <= right; i++) {
        let flag = true;
        arr.map((item) => {
            if(!item[i]) {
                flag = false;
            } 
        })
        if(!left && flag) left = i;
    }
    if(left !== "") return [left, right];
    else return null;
}

// test
console.log(getSection([3,6], [1,4], [2,9])) // [3,4]



// 写出深度优先遍历算法
// 树的结构：
// const tree = [
//     {
//         id: 1,
//         children: [
//             {
//                 id: 2,
//                 children: [
//                     {
//                         id: 3
//                     }
//                 ]
//             }
//         ]
//     },
//     {
//         id: 4
//     }
// ]

function treeMap(t, fun) {
    if(!TypeOf(fun, "Function") || !TypeOf(t, "Array")) {
        return t;
    }

    t.map((i) => {
        if(i.children) {
            treeMap(i.children, fun)
        }
        fun(i)
    })
    return t;
}

// test
    const a = treeMap(tree, (node) => {
        console.log(node.id);
    }) // 3 2 1 4