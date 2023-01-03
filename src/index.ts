import { hi } from "./m1"
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
