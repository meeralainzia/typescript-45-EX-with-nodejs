// making a array of countries and print its orginal order
let countriesToVisit: string[] = ["China","Demark","Brazil","Argentina"];
console.log("orginal oder:",countriesToVisit);

// print the array in alphabetical order without modifying the actual array list 
console.log("Alphabetical order:",[...countriesToVisit]. sort());

// show that the array is still in the orginal order
console.log("still in oringnal order:", countriesToVisit)

// print the arrayin reverse order without modifying the actual array list 
console.log("Reverse order:", [...countriesToVisit].reverse());

// print the actual array is still in the orginal order 
console.log("still in the orginal order:", countriesToVisit);

// we have change the orginal array oder now
console.log("orginal array reversed:", countriesToVisit.reverse());

// print the array to show that its back to orginal order 
console.log("back to orgnial order:", countriesToVisit.reverse());

// print the array in the show that its order has been change in alphabetical order now
console.log("sortedc in alphabetical order:", countriesToVisit.reverse());



// we have change the orginal order now in the reverse array again
console.log("orginal array reversed:" , countriesToVisit.reverse());
