console.log("sujon biswas")

// function functionName<T extends ConstraintType>(param: T): ReturnType {
      // Function implementation
// }

const student1={
    id:200,
    name:"sujon biswas",
    age:20
}


const student2={
    id:10,
    name:"sujon biswas",
    age:20
}


function GetConstraints<T extends {id:number; name:string;}>(obj:T){
    return {
        course:"next level web developer",
        ...obj
    }
}
console.log(GetConstraints(student1))
console.log(GetConstraints(student2))