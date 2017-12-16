// 完成 toCamelCaseVar 函数，它可以接受一个字符串作为参数，可以把类似于 is_good 这样的变量名替换成 isGood。

// 变量名首尾的下划线不需要做处理，中间的下划线全部删除并且处理成驼峰。

// replace的第二个参数作为函数时 
// 函数的第一个参数是匹配到的内容，第二个为开头索引，第三个是源字符串

const toCamelCaseVar = (variable) =>
{
  return variable.replace(/_+[a-zA-Z]/g, (str, index, vari) => {
    // 匹配除开头下划线以外的
  	if(index) return (str.match(/[a-zA-Z]/)[0].toUpperCase());
  	else return str;
  })
}

console.log(toCamelCaseVar("__a_sdf_aa__"))
