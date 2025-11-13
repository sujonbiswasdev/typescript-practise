
// Generic Function

// function identity<Type>(arg: Type): Type {
//   return arg;
// }

function arrFun<T>(arg:T):T{
    return arg
}

console.log(arrFun(10))


const createArrayWithString = (value: string) => [value];
console.log(createArrayWithString('sujon biswas'))


const createArrayWithNumber = (value:number)=>[value]
console.log(createArrayWithNumber(20))



const createArrrayWithGeneric = <T>(value: T) => {
  return [value];
};

console.log(createArrrayWithGeneric<number>(10))

console.log(createArrrayWithGeneric<string>('sujon'))
console.log(createArrrayWithGeneric<boolean>(true))

const arrObj = createArrrayWithGeneric({
  id: 123,
  name: "sujon",
});

console.log(arrObj)

const createArrayWithTuple=(params:string,params1:string)=>[params,params1]

console.log(createArrayWithTuple('sujon','biswas'))

// createArrayWithGeneric

const createArrayWithGeneric=<T>(arr1:T,arr2:T)=>{
    return [arr1,arr2]
}
console.log(createArrayWithGeneric<string>('sujon','biswas'))
console.log(createArrayWithGeneric<number>(10,20))
console.log(createArrayWithGeneric<boolean>(true,false))


const addStudentToCourse=<T>(studentInfo:T)=>{
    return {
        course:"next level",
        ...studentInfo}
}

const student1={
    name:"sujon biswas",
    age:20,
    subject:"cst"
}

const student2={
    name:"sujon developer",
    age:20,
    subject:"cst"
}


console.log(addStudentToCourse(student1))
console.log(addStudentToCourse(student2))



function userInfo<T>(arg:T):T{
    return arg
}

console.log(userInfo<string>('sujon biswas'))


interface IName<T>{
    name:string;
    bike:T
}

const data:IName<string>={
    name:"sujon biswas",
    bike:"i hasn't a bike"
}
console.log(data)