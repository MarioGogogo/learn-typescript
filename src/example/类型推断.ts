let x = [0, 1, null]

// 如何推断类型

// window.onmousedown = function (event){
//    console.log(event.clickTime);

// }

window.onmousedown = function(event: any) {
  console.log(event.clickTime)
}

class Animal {
  public numLen: number
}

class Bee extends Animal {}

class Lion extends Animal {}

function createZoo(): Animal[] {
  return [new Bee(), new Lion()]
}
