// type KeysOfType = keyof ObjectType;

interface Person {
      name: string;
      age: number;
      gender: string;
}
type PersonKeys = keyof Person;
const nav:PersonKeys="name"
console.log(nav)


type RichPeoplesVehicle = {
  car: string; // key: value
  bike: string;
  cng: string;
};

type Myvehicle2 = keyof RichPeoplesVehicle;
const myVehicle: Myvehicle2 = "car";
console.log(myVehicle)



type User = {
  id: number;
  name: string;
  address: {
    city: string;
  };
};

const user: User = {
  id: 222, // key: value
  name: "Mezba",
  address: {
    city: "ctg",
  },
};


const getPropertyFromObj = <X>(obj: X, key: keyof X) => {
  return obj[key];
};

const result1 = getPropertyFromObj(user, "id");
console.log(result1);


const product = {
  brand: "HP",
};

const student = {
  id: 123,
  class: "four",
};

const result2 = getPropertyFromObj(product, "brand");
console.log(result2)
const result3 = getPropertyFromObj(student,'class')
console.log(result3)

type keyvalue = 'car' | 'cng'
const data:keyvalue='car'
console.log(data)


type info = {
    name:string;
    email:string;
}

type data1 =keyof info;
const result4:data1 ='email';
console.log(result4)



// genaric with keyof

type User1={
    name:string;
    email:string;
}
const user1:User1={
    name:"sujon biswas",
    email:"sujon@gmail.com"
}
const genaricwithkeyOf=<X>(obj:X,key:keyof X)=>{
    return obj[key]

}

console.log(genaricwithkeyOf(user1,'email'))