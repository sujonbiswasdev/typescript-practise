// ? : ternary opearator : decision making
// ?? : nullish coalescing operator : null/undefined
// ?. optional chaining

const biyerJonnoEligible = (age: number) => {
  //   if (age >= 21) {
  //     console.log("You are eligible");
  //   } else {
  //     console.log("You are not eligible !");
  //   }

  const result = age >= 21 ? "You are eligible" : "You are not eligible !";

  console.log(result);
};

biyerJonnoEligible(21);


const useTheme = null
const result = useTheme??'data found'
console.log(result)


//optional chaining

const user: {
  address: {
    city: string;
    town: string;
    postalCode?: string;
  };
} = {
  address: {
    city: "Dhaka",
    town: "Banani",
    postalCode:"3190"
  },
};

const postalCode = user?.address?.postalCode;
console.log(postalCode);