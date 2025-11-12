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
var fruitsName;
(function (fruitsName) {
    fruitsName["Apple"] = "APPLE";
    fruitsName["Banana"] = "Banana";
    fruitsName["Mango"] = "Mango";
    fruitsName["Papaya"] = "Papaya";
})(fruitsName || (fruitsName = {}));
console.log(fruitsName);
// console.log("Fruit name is : " + fruitsName.Apple);
var CarName;
(function (CarName) {
    CarName[CarName["Honda"] = 10] = "Honda";
    CarName[CarName["Toyota"] = 11] = "Toyota";
    CarName[CarName["Alto"] = 12] = "Alto";
    CarName[CarName["Swift"] = 13] = "Swift";
})(CarName || (CarName = {}));
console.log(CarName);
console.log("Value of Alto is :" + CarName.Alto);
var studentInfo;
(function (studentInfo) {
    studentInfo["name"] = "sujon biswas";
    studentInfo["roll"] = "0000";
    studentInfo["department"] = "cst";
    studentInfo["profession"] = "developer";
})(studentInfo || (studentInfo = {}));
console.log(studentInfo);
var userRole;
(function (userRole) {
    userRole["admin"] = "Admin";
    userRole["editor"] = "Editor";
    userRole["manager"] = "Manager";
})(userRole || (userRole = {}));
function roles(role) {
    if (role === userRole.admin || role === userRole.editor) {
        return true;
    }
    else {
        return false;
    }
}
console.log(roles(userRole.admin));
// this is main power
var UserRoles = {
    Admin: "Admin",
    Editor: "Editor",
    Viwer: "Viewer"
};
console.log(UserRoles);
var UserRoles1 = {
    Admin: "ADMIN",
    Editor: "EDITOR",
    Viwer: "VIWER"
};
// 1.typeof operator
// 2.keyof operator
var canEdit = function (role) {
    if (role === UserRoles1.Admin || role === UserRoles1.Editor) {
        return {
            course: "Next level web developmet",
            role: role
        };
    }
    else {
        return false;
    }
};
console.log(canEdit(UserRoles1.Admin));
