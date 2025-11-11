// interface InterfaceName<T> 
// {    
//      Interface members
// }

interface User<T>{
    name:T;
}
const info:User<string>={
    name:"sujon biswas"
}
console.log(info)


interface Developer<T, X = null> {
  name:string;
  email:string;
  device:{
    brand:string;
    model:string;
    releseYear:string;
  }
  smartPhone:T;
  bike?:X;
}

const profileInfo:Developer<boolean>={
    name:"sujon biswas",
    email:"sujon@gmail.com",
    device:{
         brand: "Apple",
         model: "iPhone 15 Pro",
         releseYear: '2023'
    },
    smartPhone:true
}

console.log(profileInfo)

type smartP = {
    name:string;
    company:string;
    email:string;
}

type biker = {
    model: string;
    name: string;
    brand: string;
}

const profileInfo1:Developer<smartP,biker>={
    name:"sujon biswas",
    email:"sujon@gmail.com",
    device:{
         brand: "Apple",
         model: "iPhone 15 Pro",
         releseYear: '2023'
    },
    smartPhone:{
        name: "Sujon",
       company: "TechCorp",
       email: "sujon@example.com"
    },
    bike:{
        model: "R15 V4",
        name: "R15",
        brand: "Yamaha"
    }
}

console.log(profileInfo1)


const add = (num1: number, num2: number = 0) => num1 + num2;
console.log(add
    (2)
)