// creating a guestList array
let guestList = ["meer", "yasub", "zia", "tehreem"];
// making variable for those guest who cant come
let dontCome = guestList[0];
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
let middleIndex: number = Math.floor(guestList.length / 2);
// adding a new guest to middle iindex of arry
guestList.splice(middleIndex, 0, "fariya");
// print message of updated list  
console.log("updated list of our guest");
// sending a invitation message to our guestone by one with their names 
guestList.forEach(oneguest => console.log(`asaalamualikum, ${oneguest},would you like to dinner with me?`));