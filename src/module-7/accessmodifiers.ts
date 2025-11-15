// class Person{
//     public name:string;
//     private phone:number;
//     protected email:string;

//     constructor(name:string,phone:number,email:string){
//         this.name = name;
//         this.phone = phone;
//         this.email = email
//     }

//      private UserInfo(numOf:number){
//         console.log(`${this.name} and  ${this.phone} and ${this.email} and number is ${numOf}`);
//     }
// }

// class Student extends Person{
//     constructor(name:string,phone:number,email:string){
//         super(name,phone,email)
//     }
//     protected takeStudent(){
//         console.log(`${this.name} ${this.email} # ${this.phone}`);
//     }
// }
// const student = new Student('sujon biswas',1000,'sujon@gmail.com')
// student.takeStudent()
// console.log(student);
// const person = new Person('sujon biswas',10,'sujon@gmail.com')
// console.log(person);













class BankAccount {
  public readonly userId: number;
  public userName: string;
  protected _userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this._userBalance = userBalance;
  }

  protected addBalance(balance: number) {
    this._userBalance = this._userBalance + balance;
  }
}

class StudentBankAccount extends BankAccount {
  test() {
    this._userBalance;
  }
}

const mezbaBhaiAccount = new BankAccount(111, "Mezba", 20);
mezbaBhaiAccount.addBalance(10);
mezbaBhaiAccount.addBalance(70);
console.log(mezbaBhaiAccount);