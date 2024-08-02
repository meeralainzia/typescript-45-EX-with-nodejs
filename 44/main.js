// define a funtion with a rest perameter that accept item arrugment representing our sandwich
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nmaking a sandwich with the following items\n");
    items.forEach(function (single_item) { return console.log(single_item); });
    console.log("\nnow enjoy sandwich");
}
//call the function three types with three diffrent number of arguments
make_sandwich("chicken", "cheese", "mayo", "egg");
make_sandwich("bread", "butter");
make_sandwich("bread", "butter", "mayo", "cheese", "chicken", "tomato", "lettuce");
