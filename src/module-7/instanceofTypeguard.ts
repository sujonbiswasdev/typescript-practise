
class Person{
    name:string;
    constructor(name:string){
        this.name = name;
    }
    sleep(numOf:number){
        console.log(`${this.name} ${numOf} gonta gumay`);
    }
}

class Student extends Person{
    constructor(name:string){
        super(name)
    }

    study(numOf:number){
        console.log(`${this.name} ${numOf} gonta study kore`);
    }
}

class Teacher extends Person{
    constructor(name:string){
        super(name)
    }
    takeClass(numOf:number){
        console.log(`${this.name} ${numOf} gonta class niya taken`);
}
}


const IsStudent=(user:Person)=>{
    return user instanceof Student
}
const IsTeacher =(user:Person)=>{
    return user instanceof Teacher
}
function PersonData(user:Person){
    if(IsStudent(user)){
        user.sleep(10)
    }else if(IsTeacher(user)){
        user.takeClass(8)
    }
}
const student = new Student('sujon biswas')
PersonData(student)


const teacher = new Teacher('sujon biswas')
PersonData(teacher)