// 泛型
// 变量 +  类型 + 类  +

function identity<T>(arg: T): T {
  return arg
}

identity('234')
identity(234)

// 变量
function textLen<T>(arg: T[]): T[] {
  console.log(arg.length)
  return arg
}

// textLen('234')
// =========泛型接口
type GenericIdenityFn<T> = (arg: T) => T
// 变量
let myIdentity: GenericIdenityFn<number> = identity

// ========== 泛型类
class GenierNumber<T> {
  public value: T
  public add: (x: T, y: T) => T
}

let myGNumber = new GenierNumber<number>()
myGNumber.value = 0
myGNumber.add = function(x, y) {
  return x + y
}

let myGString = new GenierNumber<string>()

myGString.value = 'hello typescript'

myGString.add = function(x, y) {
  return x + y
}

// 泛型 约束
interface LenRules {
  length: number
}
// 继承 LenRules 约束
function loginMethods<T extends LenRules>(arg: T): T {
  // 获取长度
  console.log(arg.length)
  return arg
}

// 参数a b  b存在a 的属性中的情况
function addMethods<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}

// 类 类型在工厂函数中的应用
function create<T>(c: new () => T): T {
  return new c()
}
