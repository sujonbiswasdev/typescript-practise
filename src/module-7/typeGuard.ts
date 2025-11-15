// typeof guard

type Alphaneumeric = number | string;
function add(num1:Alphaneumeric,num2:Alphaneumeric){
    if(typeof num1==='number' && typeof num2==='number'){
        console.log(num1+num2);
    }else{
        console.log(num1.toString()+num2.toString());
    }
}

add(2,'2')
add(2,2)
add('2',2)

// type guard in

type normal={
    name:string;
    
}
type AdminUser = {
    name:string;
    role:"Admin"
}

const getUserFun=(user:normal | AdminUser)=>{
    if('role' in user){
        console.log(`${user.name} and ${user.role}`);
    }else{
        console.log(`${user.name}`);
    }
}
getUserFun({name:"sujon biswas",'role':"Admin"})



type UserInfo = {
    name:string;
}

type UserAdmin={
    name:string;
    role:"Admin"
}
console.log('.........................................\n\n\n');
function userInfo(user:UserInfo | UserAdmin){
    if('role' in user){
        console.log(`this is ${user.name} and my working at nextgen programmer and role is ${user.role}`);
    }else{
        console.log(`${user.name}`);
    }
}

userInfo({name:"sujon biswas",'role':"Admin"})