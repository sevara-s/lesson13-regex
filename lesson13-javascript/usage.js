// Basic:
let text = "The cat is cute.";
let regex = /cat/;
console.log(regex.test(text));

// i - case insensitive

let text2 = "Cat is here";
let regex2 = /cat/i;
console.log(regex2.test(text2));

// g - global match.

let regfex3= /cat/g;
console.log("cat Cat cat".match(regfex3));

