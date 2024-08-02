// define variables
let apple = "apple";
let uppercaseApple = "APPLE";
let ten = 10;
let twenty = 20;
let fruits = ["apple", "banana" , "watermelon"];

//test for equality and inequality with strings
console.log("is apple iis equall to apple");
console.log(apple == "apple");
 
console.log("is apple iss not equal to apple?");
console.log(apple != "apple");

//tests using lowercase function 
console.log("Is APPLE is equall to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");

console.log("is APPLE is not equall to apple after converting to lowerCase?");
console.log(uppercaseApple.toLocaleLowerCase() != "apple");

//numerical tests
// equall to
console.log("Is ten is equall to twenty?");
console.log(10 == twenty);
// not equall to 
console.log("is ten is not equall to twenty?");
console.log(ten != twenty);
// greater then 
console.log("Is ten is greater then zero?");
console.log(ten > 0);
 // less then
console.log("Is twenty is less then ten?");
console.log(20 < 10);

// greater than or equall to 
console.log("ten is greater than or equall to 5?");
console.log(10 >= 5);
 
//less than or equall to 
console.log("twenty is less or eqyall to 10?");
console.log(20 <= 10);
 // tests using "and" & "or" operators

 //using (and) &&
 console.log("twenty is not equall to 10 and twenty is greater then 10");
 console.log(20 != ten && 20 > 10);

 console.log("twenty is not equall to 10 and twenty is greater than 30");
 console.log(twenty != 10 && twenty > 30);

 // using || (oR)
console.log("20 is greator than 50 or 20 is equall to 20");
console.log(20 > 50 || 20 == 20);

console.log("20 is greator than 20 or 20 is not equall to 20");
console.log(20 > 20 || 20 != 20);

//tests whether and item is inculde in arry 

console.log("is watermelon include in my fruits arry");
console.log(fruits.includes("watermelon")); 
// not include 
console.log("is orange is include in my fruit arry");
console.log(!fruits.includes("orange"));



