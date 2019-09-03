/*
 * @Author      : Mario
 * @Date        : 2019-08-27 21: 52: 47
 * @LastEditors : Mario
 * @LastEditTime: 2019-08-28 17: 27: 58
 * @Description : 这里填写页面信息
 */

//  protected
class Preson {
  // 受保护的只有自己可以访问
  protected name: string
  protected constructor(name: string) {
    this.name = name
  }
}

class Empolvee extends Preson {
  private department: string

  constructor(name: string, department: string) {
    super(name)
    this.department = department
  }

  public getEle() {
    return `hello ${this.name},呵呵,${this.department}`
  }
}

const emp = new Empolvee('jack', 'doctor')
console.log(emp.getEle())

// const np = new Preson('json');  无法访问

// console.log(emp.name);

// ===========》readonly 只读 修饰符

class PresonOnly {
  public readonly name: string
  constructor(name: string) {
    this.name = name
  }
}

let john = new PresonOnly('jon')
// john.name = ''  不能修改

// ==========》参数属性  是一种简写
class PresonOnlySmart {
  constructor(readonly name: string) {}
}

let john1 = new PresonOnlySmart('jon')
console.log(john1.name)
// 不易读  建议还是 上面的写法

// ======》 存储器

const PASS_WORD = '123'
class GetPass {
  private _fullname!: string
  get fullName(): string {
    return this._fullname
  }
  set fullName(newName: string) {
    if (PASS_WORD && PASS_WORD === '123') {
      this._fullname = newName
    } else {
      console.log('Error:update of fail')
    }
  }
}

let getpass = new GetPass()

getpass.fullName = 'jack chen'
if (getpass.fullName) {
  console.log(getpass.fullName)
}

// ========>静态属性  static; 没有this 直接用 类.属性名.属性值

class Grid {
  public static origin = { x: 0, y: 0 }

  public scale: number

  constructor(scale: number) {
    this.scale = scale // 缩放比例
  }

  public testLenght(point: { x: number; y: number }) {
    const X = (point.x = Grid.origin.x)
    const Y = (point.y = Grid.origin.y)
    return Math.sqrt(X * X + Y * Y) * this.scale
  }
}

let grid1 = new Grid(1.0)
let grid2 = new Grid(4.0)

// 当我们定义静态属性 可以通过类的本身去对应属性可以访问

// ==========> 抽象类 一般不能被实例化
abstract class Department {
  public name: string

  constructor(name: string) {
    this.name = name
  }
  public printName(): void {
    console.log('print the name...')
  }

  // 抽象方法
  public abstract printMeeting(): void
}

class ChildDepartment extends Department {
  constructor() {
    super('smsmsms')
  }

  public printMeeting(): void {
    console.log('每天都要开会')
  }

  public callBoss(): void {
    console.log('每天给老板汇报工作')
  }
}

// let dearp = new Department()

// 声明类型(是某个特殊父类)
let dearp: Department
dearp = new ChildDepartment()

dearp.printMeeting()
dearp.printName()
// dearp.callBoss()  因为是Department类型

// =============>类的高级技巧
// typeof
// xxx typeof A 表示取A的类型

class Greeter {
  public static standGreeting = '😄word'
  // 参数可能有值 可能undefined
  public greeting: string | undefined

  constructor(msg?: string) {
    this.greeting = msg
  }

  public greet() {
    if (this.greeting) {
      return 'hello>>' + this.greeting
    } else {
      return Greeter.standGreeting
    }
  }
}

let greeter: Greeter
// 重新实例化
greeter = new Greeter('word')

console.log(greeter.greet())

let greetCopy: typeof Greeter = Greeter
// 实例化后修改属性
greetCopy.standGreeting = 'helo copy'

let greet2: Greeter = new greetCopy()
console.log(greet2.greet())
