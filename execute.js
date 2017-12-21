// 在开发前端框架、模版引擎的时候，经常会需要我们在特定的上下文中，动态分析、执行特定的表达式。例如：在 { x: 1, y: 2, z: 3 } 的上下文中执行表达式 x + y 那么就会得到 3，执行 z - x 就会得到 2。

// 请你完成 execute 函数，接受一个字符串和对象作为参数，它可以在特定的上下文中执行任意的表达式，例如：

// execute(`'My name is ' + name`, { name: 'Jerry' }) // => My name is Jerry
// execute('monkeys.length + 1', { monkeys: [1, 2, 3] }) // => 4
// execute('user.name + user.age', { user: { name: 'Jerry', age: 12 } }) // => Jerry12
// execute('run()', { run: () => 'Good Night' }) // => Good Night
// ...


// `${}` {}中可以放任意 JavaScript 表达式，并执行
// new Function()的参数前面为形参(字符串)，最后一个为函数体

const execute = (str, data) => {
    return new Function(...Object.keys(data), `return ${str}`)(...Object.values(data))
}