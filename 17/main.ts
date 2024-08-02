// creating a guestList array
var guestList = ["meer", "yasub", "zia", "tehreem"];
// making variable for those guest who cant come
var dontCome = guestList[0];
// printing the name of the guest who cant come
console.log(dontCome, "nhi aa skta h");
// add or remove values from guest list array
guestList.splice(0, 1, "alain");
// meesage print for bigger table
console.log("Good news! We have found a bigger table for dinner.");
// adding a new guest at strating index of array
guestList.unshift("ali");
// adding a new guest at ending index of array
guestList.push("hyzin");
// get a middle index of our guest array
var middleIndex = Math.floor(guestList.length / 2);
// adding a new guest to middle iindex of arry
guestList.splice(middleIndex, 0, "fariya");
// print message of updated list  
console.log("updated list of our guest");
// sending a invitation message to our guestone by one with their names 
guestList.forEach(function (oneguest) { return console.log("asaalamualikum, ".concat(oneguest, ",would you like to dinner with me?")); });
// inform that only two guest cacn be invited for dinner
console.log("unfortunately, the new dinner table wont arrive on time, so i can invite only two guest to dinner with me.");
// using while-loop to remove form the array until only two names remain
while(guestList.length > 2){
    let removeguest = guestList.pop();
    console.log(`sorry, ${removeguest} i cant invite you for dinner`);
}
 console.log("Invitations to the last two guests");
 guestList.forEach(lasttwo => console.log(`luckly ${lasttwo}, you are still invited to dinner`));
 // removing last two guests from the list
 guestList.pop();
 guestList.pop();
console.log("empty list:", guestList);


