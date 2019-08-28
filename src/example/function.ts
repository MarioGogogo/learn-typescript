// this
function add1(x: any, y: any): number {
  return x + y + 234
}

// 函数类型 == 参数类型 + 返回值类型
let myAdd: (x: number, y: number) => number = function(x: number, y: number): number {
  return x + y
}
// 返回值类型 必须写 '=> number'

// 推断类型
let myAdd1: (x: number, y: number) => number = function(x, y) {
  return x + y
}

// 可选参数  函数参数个数与要传入的参数个数一致
function buildName(first: string, last: string) {
  return first + ',' + last
}

// let res1 = buildName('jack')
// let res2 = buildName('hello','jack','  haha ')

function buildName2(first: string, last?: string) {
  return first + ',' + last
}

let res3 = buildName2('jack')

// 默认参数
function buildName3(first = 'jack', last?: string) {
  return first + ',' + last
}

let res4 = buildName3()
let res5 = buildName3(undefined, '😄')
let res6 = buildName3('ಥ_ಥ')
console.log(res4, res5, res6)

function buildName4(first = 'jack', ...rest: string[]): string {
  return first + ',' + rest
}

let res7 = buildName4(undefined, 'kobe', 'onal', 'mc')

//  this 重载
