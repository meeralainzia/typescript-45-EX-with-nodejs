function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "the great ".concat(name); });
}
var magician_names = ["hussain", "alain", "yasub"];
var great_magicians = make_great(magician_names);
console.log(great_magicians);
