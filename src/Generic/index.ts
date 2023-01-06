// 泛型
(() => {
  // 在定义函数/类不确定时（类型不明确）,可以使用泛型， 可指定多个
  function fn<T>(a: T): T {
    console.log(a)
    return a
  }

  interface Inter {
    length: number
  }
  function fn2<T extends Inter>(a: T): number {
    return a.length
  }

  class MyClass<T> {
    name: T
    constructor(name: T) {
      this.name = name
    }
  }
  const myClass = new MyClass<string>('zs')


  console.log('Generic begin ============================================')

  const b: number = fn(123)
  console.log('我是返回值', b)
  // 可直接调用（自动判断）
  fn(10)
  // 指定泛型
  fn<string>('zs')

  console.log(fn2('456'))
  console.log(myClass)

  console.log('Generic end ============================================')
})()
