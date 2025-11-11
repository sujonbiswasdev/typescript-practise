function addNormal(num1: number, num2: number): number {
  return num1 + num2;
}

const addArrow = (num1: number, num2: number): number => num1 + num2;

console.log(addNormal(2, 2))

function add(x: number, y: number): number {
  return x + y;
}

console.log(add(20,30))

 
let myAdd = function (x: number, y: number): number {
  return x + y;
};
console.log(myAdd(10,20))

console.log(addArrow(10,2))