// define  a function to print each magician name from an array 
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//define an array containging magicians name 
var magician_name = ["hussain", "alain", "yasub"];
// call the function to print each magicin name
show_magicians(magician_name);
