const friends:string[] = ["Rahim", "Karim"];

const schoolFriends:string[] = ["pintu", "chintu", "bulbul"];

const collegeFriends = ["Mr. Smart", "Mr very very smart"];

// const friends = ["Rahim", "Karim", ["pintu", "chintu", "bulbul"]];

friends.push(...schoolFriends)
friends.push(...collegeFriends)

console.log(friends);

const user = { name: "Mezba", phoneNo: "0170000000" };

const otherInfo = { hobby: "outing", favouriteColor: "Black" };

const userInfo = { ...user, ...otherInfo };

console.log(userInfo);

function sendInvite(...friend:string[]){
   friend.map((char:string)=>{
        console.log(`my best friend ${char}`)
    })

}
sendInvite('sujon','rajon','ridoy','madob')