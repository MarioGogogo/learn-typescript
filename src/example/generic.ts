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

// 类型
