import { createPublicKey } from 'crypto'

// this
function add1(x: any, y: any): number {
  return x + y + 234
}

// 函数类型 == 参数类型 + 返回值类型
const myAdd: (x: number, y: number) => number = function(x: number, y: number): number {
  return x + y
}
// 返回值类型 必须写 '=> number'

// 推断类型
const myAdd1: (x: number, y: number) => number = function(x, y) {
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

const res3 = buildName2('jack')

// 默认参数
function buildName3(first = 'jack', last?: string) {
  return first + ',' + last
}

const res4 = buildName3()
const res5 = buildName3(undefined, '😄')
const res6 = buildName3('ಥ_ಥ')
console.log(res4, res5, res6)

function buildName4(first = 'jack', ...rest: string[]): string {
  return first + ',' + rest
}

const res7 = buildName4(undefined, 'kobe', 'onal', 'mc')

//  this 重载  通知我们错误调用的地方
const deck = {
  suits: ['hearts', 'spades', 'clubs', 'diamonds'],
  cards: Array(52),
  createCardPicker() {
    // return function() {
    console.log(this)
    return () => {
      const pickerCard = Math.floor(Math.random() * 52)
      const pickedSuit = Math.floor(pickerCard / 13)
      return {
        suit: this.suits[pickedSuit], // this=>指向全局 global undefined
        card: pickerCard % 13,
      }
    }
  },
}

const cardPicker = deck.createCardPicker()

const pickerCard = cardPicker()

console.log('card:' + pickerCard.card)

// 重构上面函数
interface card {
  suit: string
  card: number
}

interface deck {
  suits: string[]
  card: number[]
  createCardPicker(this: deck): () => card
}

const deck1 = {
  suits: ['hearts', 'spades', 'clubs', 'diamonds'],
  cards: Array(52),
  createCardPicker() {
    console.log('this', this)
    return function(this: deck) {
      const pickerCard = Math.floor(Math.random() * 52)
      const pickedSuit = Math.floor(pickerCard / 13)
      return {
        suit: this.suits[pickedSuit], // this=>指向全局 global undefined
        card: pickerCard % 13,
      }
    }
  },
}

// 继续讲一个例子
interface UIElement {
  addClickListener(onclick: (this: void, e: Event) => void): void
}

class Hadnler {
  public type: string | undefined
  public onClickBad = (e: Event) => {
    this.type = e.type
  }
}

const h = new Hadnler()

const uiElement: UIElement = {
  addClickListener() {
    // dosomething
  },
}

uiElement.addClickListener(h.onClickBad)

// ==========>重载============
// 函数声明 ==> 去判断某一个方法智能闯入数组或数字,如果传入数字 则就报错
