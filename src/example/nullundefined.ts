let s = 'foo'
s = null

// null 是不能赋值给 undefined 的

let sn: string | null = 'bar'
sn = null
sn = undefined

class C {
  public a: number
  public b?: number
}

let c = new C()

c.a = 123
c.a = undefined // number类型
c.b = 123
c.b = null // null 不能赋值给 undefined

// 为null  类型保护 类型断言
// 感叹号
function broken(name: string | null): string {
  function postfix(epi: string) {
    // 类型保护
    return name!.charAt(0) + '. this name' + epi
  }

  name = name || 'jack'
  return postfix(name)
}
