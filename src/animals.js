//an example of classes
//https://babeljs.io/docs/learn-es6/#classes
export class Animal {
  speak() {
    throw Error("Not Implemented")
  }
}

export class Cat extends Animal {
  speak() {
    return "meow"
  }
}

export class Dog extends Animal {
  speak() {
    return "wolf"
  }
}
