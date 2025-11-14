// class ChildClass extends ParentClass {
//     // Methods and fields
// }
console.log('inheritance');

class Vehicle{

    honk(): void{
        console.log("Vehicle Honks");
    }
}
class Car extends Vehicle{

    display(): void{
        console.log("This is a Car");
    }
}
let car = new Car();
car.honk();
car.display();


class Person{
    name: string; // common
  age: number; // common
  address: string;

  constructor(name:string,age:number,address:string){
    this.name = name;
    this.age =age;
    this.address = address;
  }

  getsleep(numOF:number){
    console.log(`${this.name} ${numOF} gonta gumay`);

  }
}

class Student extends Person{
    RollNo:number;
    constructor(name:string,age:number,address:string,RollNo:number){
        super(name,age,address)
        this.RollNo = RollNo;
    }
}

const student= new Student('sujon',20,'sylhet',7777)
student.getsleep(6)
console.log(student);

class Teacher extends Person{
    designation:string;
    constructor(name:string,age:number,address:string,designation:string){
        super(name,age,address)
        this.designation = designation;
    }

    takeClass(numOf:number){
        console.log(`${this.name} ${numOf} class niye taken`);
    }
}

const teacher = new Teacher('sujon',20,'sylhet','developer')
teacher.takeClass(5)
console.log(teacher);

class Teacher1 extends Teacher{
    position:string;
    constructor(name:string,age:number,address:string,designation:string,position:string){
        super(name,age,address,designation)
        this.position = position

    }

    makeTeacher(numOf:number){
        console.log(`${this.name} ${numOf} gonta coding koren`);
    }
}

const newTecher = new Teacher1('sujon biswas',20,'sylhet','developer','developer')
newTecher.makeTeacher(7)
console.log("this is new : ",newTecher);