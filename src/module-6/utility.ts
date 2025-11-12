// interface User {
//     Id: string;
//     email: string;
// }

interface User {
    Id: string;
    email: string;
}

type PartialUser = Partial<User>

const data:PartialUser={Id:"10"}
console.log(data)

type requreType = Required<User>
const Result1:requreType = {Id:'100',email:"sujon@gmail.com"}
console.log(Result1)

type readonlyUser = Readonly<User>
const result2:readonlyUser={Id:'101',email:"sujon@gmail.com"}
console.log(result2)

type Pickdata = Pick<User,'email'>
const result3:Pickdata={email:"sujon biswas"}
console.log(result3)


type Fruit = 'apple' | 'banana' | 'orange';
type Inventory = Record<Fruit, number>;

const inventory: Inventory = {
    apple: 10,
    banana: 15,
    orange: 20
};
console.log(inventory)


type previewTodo = Omit<User,'email'>
const data3:previewTodo={Id:'101'}
console.log(data3)

