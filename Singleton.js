// 单例模式（Singleton）是一种常用的软件设计模式，它保证我们系统中的某一个类在任何情况实例化的时候都获得同一个实例。例如：

// const root1 = new Root()
// const root2 = new Root()
// const root3 = new Root()

// root1 === root2 // true
// root2 === root3 // true
// 我们构造一个名为 singletonify 方法，可以传入一个用户自定义的类，可以返回一个新的单例模式的类。例如：

// class A () {}
// const SingleA = singletonify(A)

// const a1 = new SingleA()
// const a2 = new SingleA()
// const a3 = new SingleA()

// a1 === a2 // => true
// a2 === a3 // => true
// 注意，你要保证 singletonify 返回的类的实例也是原来的类的实例：

// a1 instanceof A // => true
// a1 instanceof SingleA // => true
// 自定义的类属性也要保持一致，例如：

// class A () {}
// A.staticMethod = () => {}

// const SingleA = singletonify(A)
// SingleA.staticMethod === A.staticMethod // => true
// 请你完成 singletonify 的编写。


// https://baike.baidu.com/item/%E5%8D%95%E4%BE%8B%E6%A8%A1%E5%BC%8F/5946627?fr=aladdin

const singletonify = (OriginalClass) => {
    const one = new OriginalClass();
    return new Proxy(OriginalClass, {
      construct() {
        return one
      }
    })
  }

  
  const singletonify = OriginalClass => {
    const one = new OriginalClass()
    class NewClass extends OriginalClass {
      constructor() {
        super();
        return one;
      }
    }
    // 将 one 的原型链指向 NewClass 的原型对象
    Object.setPrototypeOf(one, NewClass.prototype);
    return NewClass;
  }