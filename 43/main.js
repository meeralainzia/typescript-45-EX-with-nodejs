function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "the great ".concat(name); });
}
var magician_names = ["hussain", "alain", "yasub"];
// making a copy of orignal array through .slice()function
var copy_magicians_names = magician_names.slice();
//modify the copy array to include the great with their names
var Copy_great_magicians = make_great(copy_magicians_names);
// show both array orignal and copied
console.log("original array");
show_magicians(magician_names);
console.log("copied array");
show_magicians(Copy_great_magicians);
