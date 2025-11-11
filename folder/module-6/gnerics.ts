
//  function functionName<T>(parameterName: T): ReturnType {
// the implementation
//}


function generic<T>(params:T){
    return params
}

const result1:number = generic<number>(20)
console.log(result1+2)

const result2:string = generic<string>('sujon biswas')
console.log(result2)


// type genericName<value>=Array<value>
type GenericArray<T> = Array<T>

const friend:GenericArray<string> = ['sujon','rajon','ridoy','madob']
console.log(friend)

const RollNumber:GenericArray<number> = [1,2,3,4,5,6]
console.log(RollNumber)

const Iselligible:GenericArray<boolean>=[true,false,true,true]
console.log(Iselligible)


interface UserList{
    name:string;
    age:number;
}

const userList:GenericArray<UserList> = [
    {
        name:"sujon biswas",
        age:20
    },{
        name:"rajon biswas",
        age:15
    }
]
console.log(userList)


type Coordinates<X, Y> = [X, Y];

const cordinator:Coordinates<number,number>=[20,30]
console.log(cordinator)

const cordinator1:Coordinates<string,string>=["30","40"]
console.log(cordinator1)