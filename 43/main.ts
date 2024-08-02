function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
   }
   function make_great(magicians: string[]){
    return magicians.map(name => `the great ${name}`);
   }
   let magician_names = ["hussain", "alain","yasub"]
    // making a copy of orignal array through .slice()function
    let copy_magicians_names = magician_names.slice()
   
    //modify the copy array to include the great with their names
   let Copy_great_magicians = make_great(copy_magicians_names);
// show both array orignal and copied
console.log("original array")
show_magicians(magician_names);
console.log("copied array")
show_magicians(Copy_great_magicians);
