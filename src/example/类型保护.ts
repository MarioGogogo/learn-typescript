import { brotliDecompress } from "zlib";

interface Bird {
  fly()
  layEggs()
}

interface Fish {
  swim()

  layEggs()
}

function getSmallPet(): Fish | Bird {}

let pet = getSmallPet()

pet.layEggs()

// pet.swim()

// 类型词

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim != undefined
}

// typeof 类型保护


// installceof 类型保护

function getAdd():Fish | Bird{
    return true ? new Bird(): new Fish()
}

let pet = getAdd()


if(pet instanceof Fish){
  pet.swim()
}

if(pet instanceof Bird){
  pet.fly()
}

















