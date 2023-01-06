// 接口（Interface）
(() => {
  // 描述一个对象的类型有两种方式： 使用 type 类型别名； 使用接口 Interface
  type myType = {
    name: string,
    age: number
  }

  const obj: myType = {
    name: 'zs',
    age: 24
  }

  // 接口用来定义一个类的结构, 只定义结构不能有实际值
  interface myInterface {
    name: string,
    age: number
  }

  interface myInterface {
    gender?: string
  }

  const obj2: myInterface = {
    name: 'ww',
    age: 20,
    gender: '男'
  }

  // 定义类时可以使用类去实现一个接口
  class MyClass implements myInterface {
    age: number;
    gender?: string;
    name: string;

    constructor(name: string, age: number, gender?: string) {
      this.name = name
      this.age = age
      this.gender = gender
    }
  }

  const interfaceClassObj = new MyClass('zs', 24)

  console.log('Interface begin ============================================')

  console.log(obj, obj2, interfaceClassObj)

  console.log('Interface end ============================================')
})()
