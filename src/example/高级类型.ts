// 可为null得类型
// 交叉类型
function extend<T, U>(a: T, b: U): T & U {
  const result = {} as T & U

  for (const id in a) {
    result[id] = a[id] as any
  }

  for (const id in b) {
    if (!result.hasOwnProperty(id)) {
      result[id] = b[id] as any
    }
  }

  return result
}

// 字符串字面量类型

// 联合类型 ===> function(a:string,b:string | number)几种类型之一

// 交叉类  ====> 几种类型之和

// 错误实例

interface Bird {
  fly()
  layEggs()
}

interface Fish {
  swim()
  layEggs()
}

function getSmallP(): Bird | Fish {
  // dosomething....
}

let pet = getSmallP()

pet.layEggs() // 共有成员
pet.swim() // 不是共有成员
