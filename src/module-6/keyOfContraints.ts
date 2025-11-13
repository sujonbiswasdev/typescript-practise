// keyof constraint

type RichPeoplesVehicle={
    car:string;
    bike:string;
    cng:string;
}
type MyVehicle = keyof RichPeoplesVehicle;


// keyOf constraint

type User = {
    id:number;
    name:string;
    address:{
        city:string;
    }
}

const user:User={
    id:222,
    name:"sujon",
    address:{
        city:"sylhet"
    }
}

const myId = user.id
const myId1 = user['id']
console.log(myId,myId1)


const getPropertyFrobObj=(obj:User,key:keyof User)=>{
    return obj[key]
}

const result = getPropertyFrobObj(user,'address')
console.log(result)