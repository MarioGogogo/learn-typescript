/*
 * @Author      : Jerrychan
 * @Date        : 2019-08-27 00: 00: 02
 * @LastEditors : Jerrychan
 * @LastEditTime: 2019-08-27 10: 34: 09
 * @Description : 这里填写页面信息
 */
//number

let num: number = 123

num = 0b1111011
num = 0o173
num = 0x7b

//string
let str: string
str = 'abc'
str = '数值'
// str = 123


//array

let arr: number[]
arr = [1, 2, 3]
// arr = [1,2,'st']
let arr2: Array<number>
let arr3: (string | number)[]
arr3 = [1, 2, 'st']

// arr3 = [1, 2,'st',{a:1}]
//枚举
enum Roles { SUPER_ADMIN, ADMIN = 4, USER }
let role: string = Roles[1];

console.log(role);  // 显示'Green'因为上面代码里它的值是2

//any类型

let value: any
                  value       = 'abc'
                  value       = 123
                  value       = { a: 1 }
            const arr4: any[] = ['1', 3];

console.log(arr4);

//void类型
function getName(test: string): void {
  console.log('test');

}

let v: void
v = undefined
// v = 1;
console.log(v);

getName('123')


//null 或 undefined

let u: undefined = undefined;
let n: null      = null;

// u = '123'
// n = undefined


//Never  never类型表示的是那些永不存在的值的类型
const errorFun = (msg: string): never => {
  throw new Error(msg);

}
// errorFun('err')
const dedFunc = ((): never => {
  while (true) {

  }
})


//object
let obj = {
  name: 'lison'
}

let obj2 = obj;

obj2.name = 'c'

console.log(obj);

function getObject(ojb: object): void {
  console.log(ojb);
}

function getObject2(ojb: object): string {
  return "'{q:'234'}'"
}

getObject({ a: 2 })

//类型断言   后面自定义类型保护

const getLen = (target: string | number): number => {
  if ((<string>target).length || (target as string).length === 0) {
    return (target as string).length
  } else {
    return target.toString().length
  }
}

getLen(234)
getLen('len')
// getLen({s:'234'})




