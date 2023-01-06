import { hi } from "./m1"

// import './class/index' // class的基本使用
// import './Interface/index' // interface的基本使用
// import './class/encapsulation' // 属性的封装
import './Generic/index'
function sum(a: number, b: number): number{
  return a + b
}

const obj: {
  name: string,
  age?: number,
  [propName: string]: any
} = {
  name: 'zs'
}
console.log(obj)

obj.age = 24
console.log(obj)

console.log(sum(123, 456))
console.log("hello")
console.log(hi)
