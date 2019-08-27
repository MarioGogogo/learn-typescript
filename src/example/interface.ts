/*
 * @Author      : Jerrychan
 * @Date        : 2019-08-27 13: 17: 57
 * @LastEditors : Jerrychan
 * @LastEditTime: 2019-08-27 14: 06: 43
 * @Description : 这里填写页面信息
 */
console.log('interface')

interface NameInfo {
  firstname: string,
  lastname : string
}


const getFullName = ({ ...obj }: NameInfo): string => {
  return obj.firstname + obj.lastname
};

console.log(getFullName({
  firstname: 'kac',
  lastname : '123'
}));



//接口定义支持可选属性，是否可以少写属性
interface Vegetables {
  color?        : string,
  type          : string,
  [prop: string]: any
}

const getVegetables = ({ color, type }: Vegetables) => {
  return color ? `color,+${color},${type}`: '没有传颜色'
}

console.log(getVegetables({
  color: 'red',
  type : '看可是你',
}));


console.log(getVegetables({
  type: '123'
}));

// 添加多余属性的检查  
// console.log(getVegetables({
//   color: 'red',
//   type : '看可是你',
//   size : 22
// } as Vegetables));

//索引签名
console.log(getVegetables({
  color: 'red',
  type : '看可是你',
  size : 22
}));

// 类型兼容性

//只读属性
interface Vegetables1 {
                                      color?: string,
                             readonly type  : string
}

let veg: Vegetables1 = {
  type: 'tomato'
}

// veg.type = 'apple'

// 限制读数组 不能修改数组
interface ArrInter {
                                      0: number,
                             readonly 1: string
}

let narr: ArrInter = [1, 'a']
// narr[1]             = 'abc'
console.log('narr', narr);


//函数的接口类型

interface AddFunc {
  (num1: number,
    num2: number,
    num3: number): number
}

// 类型别名

type AddFunc1=（num1:number,num2:number)=>number

const add；AddFunc1 = (n1,n2) => n1 + n2









































