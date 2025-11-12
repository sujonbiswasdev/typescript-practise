type User = {
  id: number;
  name: string;
  email: string;
};

type PartialUser = {
  [P in keyof User]?: User[P];
};

const user = {
    id:22
}
console.log(user['id'])



type AreaOfNum={
    height:number;
    weight:number;
}

type AreaOfString = {
    [key in keyof AreaOfNum]:string;
}

const result1:AreaOfString={height:'10',weight:'10'}
console.log(result1)

type Areaboolean={
    [key in keyof AreaOfNum]:boolean | string;
}

const result2:Areaboolean={weight:"true data",height:"true data"}
console.log(result2)



type Person = {
  firstName: string;
  lastName: string;
};

type PrefixedPerson = {
  [P in keyof Person as `person1${Capitalize<P>}`]: Person[P];
};

const person: PrefixedPerson = { person1FirstName: "John", person1LastName: "Doe" };
console.log(person)