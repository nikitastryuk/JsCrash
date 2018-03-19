//indexOf
var indexStr = "Please locate where 'locate' occurs!";
var indexOf = indexStr.indexOf("locate"); //7
var lastIndexOf = indexStr.lastIndexOf("locate"); //21
console.log(indexOf);
console.log(lastIndexOf);

//search
var search = indexStr.search("where"); //14
console.log(search);

//charAt
console.log(indexStr.charAt(0) + " " + indexStr.charCodeAt(0)); //P 80


var fruitStr = "Apple, Banana, Kiwi";

//includes
console.log(fruitStr.includes('Apple')); //true

//endsWith, startsWith
console.log(fruitStr.endsWith("Kiwi")); //true

//slice
var sliceBack = fruitStr.slice(-12, -6); //Banana
console.log(sliceBack);
var sliceForward = fruitStr.slice(7, 13); //Banana
console.log(sliceForward);

//substr
//The difference is that the second parameter specifies the length of the extracted part.
var subStr = fruitStr.substr(7, 6);
console.log(subStr); //Banana

//concat
var text1 = "Hello";
var text2 = "World";
var concatStr = text1.concat(" ", text2);
console.log(concatStr); //Hello World

// split
var lettersStr = "a,b,c,d,e";
console.log(lettersStr.split(",")) // Split on commas []

//match
var matchArr = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЬЫЪЭЮЯабвгдеёжзийклмнопрстуфхцчшщьыъэюя';
var regexp = /[А-Д]/gi;
console.log(matchArr.match(regexp)); //[А-Д, а-д]

//padEnd, padStart
console.log('abc'.padStart(10)); // "       abc"

//repeat 
console.log('abc'.repeat(2)); //abcabc

//replace
var replaceStr = 'Twas the night before Xmas...';
var newstr = replaceStr.replace(/xmas/i, 'Christmas');
console.log(newstr); // Twas the night before Christmas...

//trim, trimLeft, trimRight
var trimStr = " testStr  ";
console.log(trimStr.trim());