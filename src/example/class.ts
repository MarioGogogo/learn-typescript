/*
 * @Author      : Jerrychan
 * @Date        : 2019-08-27 21: 52: 47
 * @LastEditors : Jerrychan
 * @LastEditTime: 2019-08-28 00: 34: 52
 * @Description : 这里填写页面信息
 */

//  protected
class Preson {
  //受保护的只有自己可以访问
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

  getEle() {
    return `hello ${this.name},呵呵,${this.department}`
  }
}


const emp = new Empolvee('jack', 'doctor')
console.log(emp.getEle());

// const np = new Preson('json');  无法访问

// console.log(emp.name);

//===========》readonly 只读 修饰符

class PresonOnly{
    readonly name: string
    constructor(name:string){
       this.name = name
    }
}

let john = new PresonOnly('jon')
    // john.name = ''  不能修改


//==========》参数属性  是一种简写
class PresonOnlySmart {
  constructor(readonly name: string) {
  }
}

let john1 = new PresonOnlySmart('jon')
console.log(john1.name);
// 不易读  建议还是 上面的写法


//======》 存储器

const PASS_WORD = "123";
class GetPass {
   private _fullname!: string
   get     fullName(): string{
      return this._fullname
   }
   set fullName(newName:string){
     if (PASS_WORD && PASS_WORD === '123'){
        this._fullname = newName
     }else{
        console.log('Error:update of fail');
        
     }
   }
}

let getpass = new GetPass()

getpass.fullName = 'jack chen'
if(getpass.fullName){
    console.log(getpass.fullName);
    
}

//========>静态属性  static; 没有this 直接用 类.属性名.属性值

class Grid{
   static origin = {x:0,y:0}
    
   scale: number

   constructor(scale:number){
      this.scale = scale  //缩放比例
   }

    testLenght(point:{x:number,y:number}){
      let X = point.x = Grid.origin.x;
      let Y = point.y = Grid.origin.y;
      return Math.sqrt(X*X+Y*Y)*this.scale
    }
}

let grid1 = new Grid(1.0)
let grid2 = new Grid(4.0)

// 当我们定义静态属性 可以通过类的本身去对应属性可以访问


//==========> 抽象类





























