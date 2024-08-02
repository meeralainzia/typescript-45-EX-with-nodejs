var guestList = ["meer", "yasub", "zia"];
var dontCome = guestList[3];
console.log(dontCome, "nhi aa skta");
guestList.splice(0, 1, "alain");
guestList.forEach(function (guest) { return console.log("assalamualikum ".concat(guest, ", WOULD YOU LIKE TO HAVE A DINNER WITH ME?")); });
