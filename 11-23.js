// 完成 extname 函数，它会接受一个文件名作为参数，你需要返回它的扩展名。
// 例如，输入 emoji.png，返回 .png。

const extname = (filename) => {
    const index = filename.indexOf('.')
    if(index > -1 && index !== 0) {
        const a = filename.split(".");
        return `.${a[a.length-1]}`;
    } else {
        return '';
    }
}

console.log(extname('.holle')) // ''
console.log(extname('exname.png')) // '.png'
console.log(extname('ho.l.le.jpeg')) // '.jpeg'