// 使用 class 关键字定义类
class Person {
  // 包含属性、方法

  // 定义属性
  name: string = 'zs' // 实例属性 必须实例化后才能访问
  static age: number = 24 // 静态属性 在属性前加 static 关键字定义的属性就是静态属性， 静态属性 可以通过 类名.静态属性 访问
  readonly id: number = 202301060001 // 只读属性 在属性前加 readonly 关键字定义的属性就是制度属性， 不可修改
  // static readonly 可配合使用，表示只读静态属性

  // 定义方法
  sayHello() {
    console.log('我是实例方法')
  } // 实例方法

  static sayAge() {
    console.log('我是静态方法')
  } // 静态方法

  gender: string
  // 构造函数 会在对象创造时使用
  constructor(gender: string) {
    // this 表示当前对象实例， 可通过this向新建的对象中添加属性
    this.gender = gender
  }
}

// 抽象类，不能用来创建对象 用来被继承的父级，可以添加抽象方法
abstract class Animal {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  // 抽象方法
  abstract sayHello(): void
}

class Dog extends Animal{
  run() {
    console.log('小黑在跑')
  }

  sayHello() {
    console.log(`我是${this.name}, 我今年${this.age}了，汪汪汪~`)
  }
}

enum Gender {
  girl = '女',
  boy = '男'
}

class Cat extends Animal{
  gender: Gender
  constructor(name: string, age: number, gender: Gender) {
    super(name, age)
    this.gender = gender
  }
  sayHello() {
    console.log(`我是${this.name}, 我今年${this.age}了，我是${this.gender}孩子哦，喵~`)
  }
}

console.log('class begin =================================================')

// console.log(Person.age)
// Person.sayAge()
//
// const per = new Person('男')
//
// console.log(per)
// per.sayHello()

const dog1 = new Dog('小黑', 2)
dog1.sayHello()
dog1.run()

const cat = new Cat('小白', 2, Gender.boy)
cat.sayHello()

console.log('class end =================================================')
