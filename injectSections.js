// 请你给字符串都添加上原型方法 spacify，可以让一个字符串的每个字母都多出一个空格的间隔

String.prototype.spacify = function () {
    return this.split('').join(' ');
}

// 现在有一个数组存放字符串数据：

// ['item1', 'item2', 'item3', 'item4', 'item5']
// 有另外一个数组存放一组对象：

// [
//   { content: 'section1', index: 0 },
//   { content: 'section2', index: 2 }
// ]
// 它每个对象表示的是会往原来的数组的 index 坐标插入 content 数据（index 不会重复）：

//        0      1      2      3      4
//      item1  itme2  item3  item4  item5
//     ^             ^ 
//     |             |
//  section1     section2  
 
// 最后结果是：['section1', 'item1', 'item2', 'section2', 'item3', 'item4', 'item5']
// 请你完成 injectSections 函数，可以达到上述的功能：

// injectSections(
//   ['item1', 'item2', 'item3', 'item4', 'item5'],
//   [
//     { content: 'section1', index: 0 },
//     { content: 'section2', index: 2 }
//   ]
// ) // => ['section1', 'item1', 'item2', 'section2', 'item3', 'item4', 'item5']

const injectSections = (items, sections) => {
    if(!items) {
        return [];
    }
    sections.sort((a, b) => {
        return b.index - a.index;
    })
    // 后入式
    sections.map((item) => {
        items.splice(item.index, 0 ,item.content);
    })
    return items
}

const injectSections1 = (items, sections) => {
    sections.forEach(
        (v,i)=>{
            items[v.index]=[v.content,items[v.index]]
        }
    );
    // 数组拍平
    return [].concat.apply([],items);
}

const injectSections2 = (items, sections) =>
[].concat.apply(
    [],
    sections.reduce(
        (o,s)=>(o[s.index]=[s.content,o[s.index]]) && o,
        items
    )
);