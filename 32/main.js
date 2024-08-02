// array of current user
var current_user = ["ayyan", "yasub", "mamoon", "rayyan"];
//array of new user
var new_user = ["mohib", "ali", "yasub", "mamoon", "ayyan"];
// loop through new_user to check for usernames avaibility
new_user.forEach(function (new_one_user) {
    //making a comdition for username already exist and save in oue_condition variable
    var our_condition = current_user.some(function (current_one_user) { return current_one_user.toLocaleLowerCase() === new_one_user.toLocaleLowerCase(); });
    //print different meesageusing if-else statments
    if (our_condition) {
        console.log("sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("this username ".concat(new_one_user, " is avaiable"));
    }
});
