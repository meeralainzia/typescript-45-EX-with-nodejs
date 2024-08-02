let guestList = ["meer", "yasub", "zia"];
let dontCome = guestList [3];
console.log(dontCome,"nhi aa skta");
guestList.splice(0, 1, "alain");
guestList.forEach(guest => console.log(`assalamualikum ${guest}, WOULD YOU LIKE TO HAVE A DINNER WITH ME?`)); 