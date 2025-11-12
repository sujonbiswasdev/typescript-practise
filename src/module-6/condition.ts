type A = null
type B = undefined

type C = A extends number ?true:B extends undefined?true:false
const cost:C=true
console.log(cost)


type RichPeoplesVehicle = {
  bike: string;
  car: string;
  ship: string;
};

type verchenal<T>= T extends keyof RichPeoplesVehicle?true:false
const data:verchenal<boolean> = false
console.log(data)