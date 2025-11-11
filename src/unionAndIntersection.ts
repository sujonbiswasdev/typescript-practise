// union

type UserRole = 'admin'|'maneger'

function genarate(pos:UserRole){
    if(pos==='admin'){
        console.log('admin dashboard')
    }else{
        console.log('maneger dashboard')
    }
}
genarate('admin')


// intersection

type Employee = {
    name:string;
    age:number;
    city:string;
    phone:string;
}

type Manager = {
    name:string;
    pos:string;
}

type employeeManeger = Employee & Manager;

const user:employeeManeger={
    name:'sujon',
    age:10,
    city:"sylhet",
    phone:"015454544",
    pos:"developer"
}
console.log(user)