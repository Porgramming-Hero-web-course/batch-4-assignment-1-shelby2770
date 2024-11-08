Type Guards are necessary because these enable safe type narrowing when dealing with variables whose type can vary because of using union types. Also runtime errors can be prevented by ensuring that specific properties or methods are accessed only when it is checked by type guards.


Various Types of Type Guards and Their Use Cases:

1. typeof param === "T" (to check primitive data types)

const add = (a: string | number, b: string | number): string | number => {
  if (typeof a == "number" && typeof b == "number") return a + b;
  if (typeof a == "string" && typeof b == "string") return a + b;
  return "Invalid";
};


2. key in object (to check the presence of properties in an object) 

type Circle = {
  shape: string;
  radius: number;
};

type Rectangle = {
  shape: string;
  width: number;
  height: number;
};

type Shape = Circle | Rectangle;
const calculateShapeArea = (obj: Shape): number => {
  if ("radius" in obj) return (Math.PI * obj.radius ** 2).toFixed(2);
  return obj.height * obj.width;
};

3. x instanceof y (to check object type based on constructor)

class Animal {
  makeSound() {
    console.log("Random sound");
  }
}

class Cat extends Animal {
  meow() {
    console.log("Meow");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof");
  }
}

const handleAnimal = (animal: Animal) => {
  if (animal instanceof Cat) animal.meow();
  else if (animal instanceof Dog) animal.bark();
  else animal.makeSound();
};
