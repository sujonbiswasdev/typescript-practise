// enum enum_name {
    // values......
 // }

//  Numeric enums

// enum direction{
//     top,
//     middle,
//     down,
//     under
// }

// console.log(direction)

enum fruitsName {
    Apple = "APPLE",
    Banana = "Banana",
    Mango = "Mango",
    Papaya = "Papaya"
}
console.log(fruitsName);

// console.log("Fruit name is : " + fruitsName.Apple);

enum CarName {
    Honda = 10,
    Toyota,
    Alto,
    Swift,
}
console.log(CarName);
console.log("Value of Alto is :"+CarName.Alto);


enum studentInfo{
    name='sujon biswas',
    roll='0000',
    department='cst',
    profession='developer',
}
console.log(studentInfo)






enum userRole{
    admin="Admin",
    editor="Editor",
    manager="Manager"
}

function roles(role:userRole){
    if(role===userRole.admin || role=== userRole.editor){
        return true
    }else{
        return false
    }
}
console.log(
    roles(userRole.admin)
)



// this is main power



const UserRoles={
    Admin:"Admin",
    Editor:"Editor",
    Viwer:"Viewer"
}as const;
console.log(UserRoles)


const UserRoles1={
    Admin:"ADMIN",
    Editor:"EDITOR",
    Viwer:"VIWER"
}as const;

// 1.typeof operator
// 2.keyof operator

const canEdit=(role:(typeof UserRoles1)[keyof typeof UserRoles1])=>{
    if(role===UserRoles1.Admin || role===UserRoles1.Editor){
        return {
            course:"Next level web developmet",
            role:role
        }
    }else{
        return false
    }
}
console.log(canEdit(UserRoles1.Admin))