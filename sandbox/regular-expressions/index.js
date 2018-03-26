/////////////////////////////////////
//Fitst part
/////////////////////////////////////

// let re;
// re = /hello/i;

//Flags
//i - case insensetive
//g - global search (search not just first match)

// console.log(re);
// console.log(re.source);
// console.log(typeof re);

//exec() - Return result in arry or null
// const result = re.exec('yo world hello'); //[ 'hello', index: 9, input: 'yo world hello' ]
// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// confirm.log(result.input);

//test() - Returns true or false
// const result = re.test('Hello');
// console.log(result);

//match() - Return result array or null
// const str = 'Hello There';
// const result = str.match(re); 
// console.log(result);

//search() - Return index of the first match if not found returns -1
// const str = 'Yo Hello There';
// const result = str.search(re);
// console.log(result);

//replace() - Return a new string with some or all matches of a pattern
// const str = 'Hello There';
// const newStr = str.replace(re, 'Hi');
// console.log(newStr);


/////////////////////////////////////
//Second part
/////////////////////////////////////
let re;
//Literal Characters
re = /hello/; 
re = /hello/i;

//Metacharacter Symbols
re = /^h/i; //^ Must start with 
re = /World$/i //Must ends with d
re = /^hello$/i //start-end
re = /h.llo/i //Matches any One character
re = /h*llo/i //Mathes any character 0+ times
re = /gra?e?y/i; //Optional character e and a
re = /gra?e?y\?/i; //Escape character
//Brackets [] - Character sets
re = /gr[ae]y/i; // a or e
re = /[GF]ray/;
re = /[^GF]ray/i //Match anything exept a G or F
re = /[A-Z]ray/ //Match any uppercase letter
re = /[A-Za-z]ray/ //Match any letter
re = /[0-9][0-9]ray/ //Match any digit

//Braces {} - Quantifiers
re = /Hel{2}o/i //Must occur exactly {l} amount of times
re = /Hel{2,4}o/i //2 or 4 l
re = /Hel{2,}o/i //At least 2 times

//Paretheses () - Grouping
re = /^([0-9]x){3}$/ //Has to be exactly '3x3x3x'

//Shorthacn character classes
re = /\w/; //Word character - letter, num or _
re = /\w+/ //+ = one or more
re = /\W/ //NON word character
re = /\d+/ //Match any digit
re = /\D/ //Match any Non-digit
re = /\s/ //Match whitespace char
re = /\S/ //NONwhitespace char
re = /Hell\b/i //Word boundary (exact part)

//Assertions 
re = /x(?=y)/; //Match x only if followed by y
re = /x(?!y)/; //Match x only if not followed by y


//String to match
const str = 'Hello, x welcome to Hell';


//Log Results
const result = re.exec(str);
console.log(result);

function reTest(re,str) {
    if(re.test(str)) {
        console.log(`${str} matches ${re.source}`);
    }
    else {
        console.log(`${str} does NOT match ${re.source}`);
    }
}

reTest(re, str);