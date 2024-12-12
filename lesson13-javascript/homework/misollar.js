// 1-misol : Telefon raqamini tekshiring:
let regex1 = /^\d{3}[-)]?\d{3}-\d{4}$/;
let num = "123-8999";
console.log(regex1.test(num));
// 2-misol: URL ni tekshiring:
let regex2 = /^https?/;
let url = "https://hello_world";
console.log(regex2.test(url));
// 3-misol:Faqat raqamlar:
let regex3 = /[0-9]/;
let num2 = "234324";
console.log(regex3.test(num2));
// 4-misol:Bsohalnish va tugash harflari:
let regex4 = /^AZ$/;
let letter = "AbdZ";
console.log(regex4.test(letter));
// 5-misol:HTML taglarini topish:
let regex5 = /<.*>/;
let tag = "<hr>";
console.log(regex5.test(tag));
// 6-misol:Passport uchun format:
let regex6 = /^[A-Z]{2}\d{6}$/;
let passport = "AD299085";
console.log(regex6.test(passport));
