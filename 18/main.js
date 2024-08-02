var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// making a array of countries and print its orginal order
var countriesToVisit = ["China", "Demark", "Brazil", "Argentina"];
console.log("orginal oder:", countriesToVisit);
// print the array in alphabetical order without modifying the actual array list 
console.log("Alphabetical order:", __spreadArray([], countriesToVisit, true).sort());
// show that the array is still in the orginal order
console.log("still in oringnal order:", countriesToVisit);
// print the arrayin reverse order without modifying the actual array list 
console.log("Reverse order:", __spreadArray([], countriesToVisit, true).reverse());
// print the actual array is still in the orginal order 
console.log("still in the orginal order:", countriesToVisit);
// we have change the orginal array oder now
console.log("orginal array reversed:", countriesToVisit.reverse());
// print the array to show that its back to orginal order 
console.log("back to orgnial order:", countriesToVisit.reverse());
// print the array in the show that its order has been change in alphabetical order now
console.log("sortedc in alphabetical order:", countriesToVisit.reverse());
// we have change the orginal order now in the reverse array again
console.log("orginal array reversed:", countriesToVisit.reverse());
