/*
 * @Author      : Jerrychan
 * @Date        : 2019-08-27 00: 00: 02
 * @LastEditors : Jerrychan
 * @LastEditTime: 2019-08-27 13: 16: 53
 * @Description : symbols
 */

// 基本数据类型  表示独一无二的值
let sym1 = Symbol('key')

let sym2 = Symbol('key')

console.log(sym2 === sym1);


const s4 = Symbol('jack')
console.log(s4);

// console.log(s4 + 1);

console.log(s4.toString());




let   prop = 'name'
const info = {
  [`my${prop}is`]: 'lison'
}

console.table(info);


// symbol作为属性值 就是独一无二的

let   prop2 = Symbol('jack')
const info2 = {
  [prop2]: 'lison',
  id     : '1',
  age    : '99'
}
console.table(info2);
// console.table('info2.proop2',info2[prop2]);
// console.table('info2.proop2',info2[prop2]);
info2.proop2 = 'hahah'
console.table(info2);

//获取不到symbol值的方法
for (const key in info2) {
  console.log(key);
}
// console.log('keys', Object.keys(info2));
// console.log('keys', JSON.stringify(info2));


//获取symbol的值
console.log(Object.getOwnPropertySymbols(info2)); //返回使用symbol的属性名

console.log(Reflect.ownKeys(info2)); //返回数组  所以对象的属性名包括symbol


//静态方法
let name2 = Symbol.for('jack')

let name3 = Symbol.for('jack')  //全局范围保护当前页面 （ifram serverWork） 它会去找之前有没有创建过symbol 如果有则不会创建新的

console.log(name2 === name3);


let name4 = Symbol.keyFor(name3)  //查询是否已经创建sysmbol值
console.log(name4); // 返回属性名


//Symbol.hasInstance
let sobj1 = {
  [Symbol.hasInstance](otherobj: any) {
    console.log(otherobj);

  }
}

console.log({ a: 'a' } instanceof (sobj1 as any));


//Symbol.isConcatSpreadable

let newArr: any = [1, 2]
console.log(newArr.concat(3, 5));
console.log(newArr[Symbol.isConcatSpreadable]);
























