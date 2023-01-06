// 属性的封装
(() => {
  interface classInterface{
    name: string
    age?: number
    gender?: string
    [propsName: string]: any
  }
  class Person implements classInterface{
    // 可以在属性前添加修饰符： public（默认）、private（私有属性，只能在类的内部访问）、protected（受保护的属性）
    // name: string
    _age: number
    constructor(public name: string, age: number) {
      this._age = age
    }

    // getter、setter
    // getAge() {
    //   return this._age
    // }
    // setAge(value: number) {
    //   if(value >= 0) {
    //     this._age = value
    //   }
    // }

    // ts 中的 getter 与 setter
    get age() {
      return this._age
    }
    set age(value) {
      if(value > 0) {
        this._age = value
      }
    }
}
  const per1 = new Person('zs', 24)
  per1.age = -22

  console.log('encapsulation begin ============================================')

  console.log(per1, per1.age)

  console.log('encapsulation end ============================================')
})()
