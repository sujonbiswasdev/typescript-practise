// class class_name { 
   //class scope 
// }

class Animal{
    name: string;
  species: string;
  sound: string;
  constructor(name:string,species:string,sound:string){
    this.name=name;
    this.species = species;
    this.sound = sound;
  }
  makeSound(){
    console.log(`${this.name} is sound : ${this.sound}`);
  }
}

// instants

const cat = new Animal('cat','','maw maw')
console.log(cat);

const dog = new Animal('dog','','gaw gaw')
dog.makeSound()