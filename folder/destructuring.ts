// function printUser({ name, age }
//   : { name: string, age: number }) {
//   console.log(`Name: ${name}, Age: ${age}`);
// }

// const user =
// {
//   name: "Alice",
//   age: 25
// };

// printUser(user);


function printUser({name,age}:User){
    console.log(`Name is ${name} and Age ${age} years old`)

}
type User ={
    name:string;
    age:number;
}

const user={
    name:"sujon",
    age:20
}

printUser(user)





const user1 = {
  id: 123,
  name: {
    firstName: "Mezbaul",
    middleName: "Abedin",
    lastName: "Forhan",
    dog:{
        color:"red"
    }
  },
  gender: "male",
  favouriteColor: "black",
};

//const myFavouriteColor = user.favouriteColor
//const myMiddleName = user.name.middleName

const {favouriteColor,name: { middleName: myMiddleName ,dog:{color}}} = user1;
console.log(
    favouriteColor,myMiddleName,color
)

// array destructuring


const friends = ["karim", "Rahim", "Mahim"];

const [, , myBestFriend] = friends;

console.log(myBestFriend);

