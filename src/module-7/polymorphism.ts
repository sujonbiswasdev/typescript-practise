class Person1{
    getSleep(){
        console.log('sujon biswas is working.....');
    }
    
}
class Student1 extends Person1{
    getSleep(){
        console.log('sujon biswas is studying....');
    }
}

class Teacher2 extends Person1{
    getSleep(){
        console.log(`sujon biswas is teaching.....`);
    }
}

const person1 = new Person1()

person1.getSleep()


const student1 = new Student1()
student1.getSleep()


const teacher2 = new Teacher2()
teacher2.getSleep()