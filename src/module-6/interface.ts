
// interface : object type: array, object , function

type User = {
  name: string;
  age: number;
};

type Role = {
  role: "admin" | "user";
};

type UserWithRole = User & Role;

const user1:UserWithRole={
    name:"sujon biswas",
    age:20,
    role:'admin'
}
console.log(user1)

const user2:UserWithRole={
    name:"sujon developer",
    age:20,
    role:"admin"
}

console.log(user2)


// interface : object type: array, object , function

interface IUser {
  name: string;
  age: number;
}

interface IUserWithRole extends IUser {
  role: "admin" | "user";
}

const userI1: IUserWithRole = {
  name: "Mr.X",
  age: 100,
  role: "admin",
};

console.log(userI1)


interface IUser1{
    name:string;
    age:number;
}

interface IuserwithPhone extends IUser1{
    Phone:string;
}

const userI2:IuserwithPhone = {
    name:"sujon",
    age:20,
    Phone:"018000000"
}
console.log(userI2)



type IsAdmin=boolean;
const isAdmin:IsAdmin=true
console.log(isAdmin)

// ?function

type Add=(num1:number,num2:number)=>number

const sum:Add = (num1,num2)=>num1+num2

console.log(sum(10,20))

interface IAdd {
    (num1:number,num2:number):number
}

const sumI:IAdd=(num1,num2)=>num1+num2;
console.log(sumI(20,30))

interface IFriend{
    [index:number]:string;
}

const arrFriend:IFriend=["sujon","rajon","ridoy","madob"]
console.log(arrFriend)
const arrFriend1:IFriend =['sujon','riyed','alice','karim','rahim']
console.log(arrFriend1)


interface InfoName{
  name:string;
  age:number
}

const result4:InfoName={
  name:"sujon biswas",
  age:20
}

console.log(result4)
