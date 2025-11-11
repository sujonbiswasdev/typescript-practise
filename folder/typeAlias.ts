type User = {
    name:string;
    firstName:string;
    middleName?:string;
    lastName:string;
    course:{
        hablu:string;
        udemy:string;
        nextLeve:string;
    }
}

const user:User={
    name:"sujon biswas",
    firstName:"sujon",
    lastName:"biswas",
    course:{
        hablu:"front end developer",
        udemy:"full stack developer",
        nextLeve:"full stack developer with advanced"
    }
}

const {name,course:{nextLeve,udemy,hablu}}=user;

console.log(name,hablu,nextLeve,udemy)

// basic type alias 
type isAdmin = true
const admin:isAdmin=true
console.log(admin)

type Name = string;

const myName: Name = "Me. X";
console.log(myName)

type Addfun=(num1:number,num2:number)=>number
const addFun:Addfun=(num1,num2)=> num1*num2
console.log(addFun(10,20))