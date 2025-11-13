let anything: any;
anything = "sujon biswas"

let result:number = (anything as string).length
console.log(result)



const kgToGMConverter = (input: string | number): string | number | undefined => {
  if (typeof input === "number") {
    return input * 1000;
  } else if (typeof input === "string") {
    const [value] = input.split(" ");
    return `Converted output is: ${Number(value) * 1000}`;
  }
};

const resultk1= kgToGMConverter(2) as number;
console.log(resultk1)

const resultk2 = kgToGMConverter('10 sujon') as string;
console.log(resultk2)



type CustomError = {
  meesage: string;
};

try {
    console.log('sujon biswas')
} catch (err) {
  console.log((err as CustomError).meesage);
}



function getValue(): any {
  return 'Hello, TypeScript!';
}

let strv:number=(getValue() as string).length;
console.log(strv)



let number:number = 1
const num= number as number;
console.log(num)

