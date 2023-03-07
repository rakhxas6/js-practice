// consolelog ko lagi clg
// variables in js
// case sensitive

// let a = 67   a contains 67   for locally declared value//  cant be redeclaared // block scoped
// var b = 50  for value that is defined globally can be redecalred
// const c = 58   for number that is constant can't be redeclared

// differences between var const and let
// const  e = "Harry"
//e = 10 // it cant be happen
// var a = 45
// let b = "harry"
// let c = null
// let d = undefined
// {
//     let b = "this"
//     console.log(b); // it prints this
// }
// console.log(b); // while this prints harry

// primitives and non primitive data types
// nn bb ss u

//  null   let a = null
//  Number 1 2 3
//  boolean true or false
//  BigInt large integers
//  Symbol   symbols @#$%
//  string   "harry"
//  undefined  let g

// let  a = null
// let b = 345
// let c = true // also can be false
// let d = BigInt("345") + BigInt("3")
// let e = "Harry"
// let f = Symbol("Harry")
// let g
// console.log(a, b, c, d , e , f, g)
// console.log(typeof c)   // typeof is used to know type of data types
// console.log(typeof a)

// objects or non primitive data types

// an example of object iten

// const item = {
//     "harry": true,
//     "subh": false,
//     "subh2": "harry",
//     "Rohan": undefined
// }
// console.log(item.subh);   // items can be called or refrenced in object in two ways with parenthesis and "."
//   console.log(item["subh2"]);

//   // practice eg

//   let x = "harry"
//   let y = 6
//   console.log(x+y);   //  number + sting = string
//   console.log(typeof (x+y));

//   const obj = {
//     name : "harry",
//     age: 18,
//     address: "Butwal",
//     gender: false,
//   }

// obj['friend'] = "Subham" // add name value pair to object obj
// console.log(obj);
// console.log(obj.age);  // prints age

// const dictionary = {
//  a : "ten",
//  b : 10,
//  c : "fifty",
//  d : false
// }
// console.log(dictionary.c);
// dictionary['hey'] = "World"
// console.log(dictionary);

// Expressions and operators in a JS

// Assign the value 5 to x
let x = 5;
// Assign the value 2 to y
let y = 2;
// Assign the value x + y to z:
let z = x + y;
let za = x * y;

// javascript arthimetic operators

// Operator 	Description
//  +            Addition
//  -            Subtraction
//  *            Multiplication
//  **            Exponentiation (ES2016)
//  /            Division
//  %            Modulus (Division Remainder)
//  ++            Increment
//  --            Decrement

// JavaScript Assignment Operators

// The Addition Assignment Operator (+=) adds a value to a variable.

//       Operator 	Example 	Same As
//       = 	         x = y 	    x = y
//       += 	     x += y 	x = x + y
//       -= 	     x -= y 	x = x - y
//       *= 	     x *= y 	x = x * y
//       /= 	     x /= y 	x = x / y
//       %= 	     x %= y 	x = x % y
//       **= 	     x **= y 	x = x ** y

// Adding JavaScript Strings
// The + operator can also be used to add (concatenate) strings.

// let text1 = "John";
// let text2 = "Doe";
// let text3 = text1 + " " + text2;

// let text11 = "What a very ";
// text11 += "nice day";

// Adding Strings and Numbers

// Adding two numbers, will return the sum, but adding a number and a string will return a string:

// let xx = 5 + 5;
// let yy = "5" + 5;
// let zz = "Hello" + 5;

// console.log(xx,yy,zz);

// JavaScript Comparison Operators

// Operator 	Description
// == 	        equal to
// === 	        equal value and equal type
// a!= 	        not equal
// aa!==        not equal value or not equal type
// > 	        greater than
// < 	        less than
// >= 	        greater than or equal to
// <= 	        less than or equal to
// a? 	        ternary operator

// JavaScript Logical Operators

// Operator 	Description
// && 	        logical and
// || 	        logical or
// a! 	        logical not

// JavaScript Type Operators
// Operator 	Description
// typeof 	Returns the type of a variable
// instanceof 	Returns true if an object is an instance of an object type

// let hey = document.getElementById('Hey')
// hey.innerHtml = "hello" + " " + "world!"

// examples

// let a = 10
// let b = 4
// console.log("a + b =", a+b);
// console.log("a * b =", a*b);
// console.log("a ** b = ", a**b);
// console.log("a / b =", a/b);
// console.log("a - b =", a-b);
// console.log("a % b =", a%b);

// incrementel and decremental operators

// console.log("++a =", ++a);   // prints 11 as it increments on previously incremented value 11
// console.log("a++ = ", a++); // prints a = 11  after it is called will be 11
// console.log("--a = ", --a); // prints 11 but value was 12
// console.log("a-- = ", a--); // prints 11

// console.log("a = ", a);  // prints 10

// let xxx = 10
// xxx+=15
// console.log(xxx);

// comparision operators

// let comp1 = 6
// let comp2 = 8
// console.log("comp1 == comp2 is ", comp1 == comp2);
// console.log("comp1 !== comp2 is ", comp1 !== comp2);
// console.log("comp1 > comp2 is ", comp1 > comp2);
// console.log("comp1 < comp2 is ", comp1 < comp2);

// let f = 10
// let g = 15
// console.log(f<g && f==5); // duitai match garna paryo
// console.log(f<g || f==5); // kunai aauta
// console.log( f != 5);

// let compp = 6
// let comp = "6"
// console.log("compp == comp is ", compp == comp); // value lai compare garxa
// console.log("compp === comp is ", compp === comp);  // === strictly equal herxa type pani herxa
// console.log("compp !== comp is ", compp !== comp);




// conditional statements

// let a = prompt("Hey, whats your age?")
// a = Number.parseInt(a)     // converting the string to a number
// // console.log(typeof a);

// if (a<0){
//     alert("This is not a valid age.")
// }else if(a>9) {
//     alert("You are a kid. You can't Drive!")
// } else if (a<18 && a>9){
//     alert("You are a teenager. You can Drive after 18")
// }else{
//     alert("You can drive as you are above 18")
// }






// use of ternary operator

// 18// condition? exp1 : exp2

// switch statements







// let b = prompt("Enter a number")

// switch (b){
//     case 0:
//         console.log("Sunday");
//     break;
//     case 1:
//       console.log("Monday");
//     break;
//     case 2:
//         console.log("Tuesday");
//     break;
//     case 3:
//     console.log("Wednesday");
//     break;
//     case 4:
//         console.log("Thursday");
//     break;
//     case 5:
//        console.log("Friday");
//     break;
//     case 6:
//         console.log("Saturday");
//     break;
//     default:
//         text = "Enter a number between 0 to 6"
// }






// practice







// let age = prompt("Whats your age?")

// if(age<20 && age>10){
//     console.log(alert("Age lies between 10 and 20"));
// }

// switch statements

// switch (exp){
//     case 1:
//         code
//     break;
//     default:
//      text = console.log("hey");
// }

// let age = prompt("Whats your age?")
// // age = Number.parseInt(age)

// switch(age){
//     case '1':
//         console.log("Your age is 1");
//     break;
//     case '2':
//         console.log("Your age is 2");
//     break;
//     default:
//         console.log("age must be between 0 and 3");
// }





// to find a number divisible by 2 and 3

// let b = prompt("Enter a number");
// b = Number.parseInt(b);
// // logical and == && and logical or === ||
// if (b % 2 == 0 && b % 3 == 0) {
//   console.log("Number is divisible by 2 and 3");
// } else {
//   console.log("Number not divisible by 2 and 3");
// }

// let age = 19
// let a = age > 18 ? "You can Drive" : "You Cant Drive"
// console.log(a);




// for loops -- for-in, for-of




// let block level 
// let sum = 0
// let n = prompt("Enter the value of n")
// n = Number.parseInt(n)
// for (let i = 1; i<=n; i++){
//     sum += i
// }
// console.log("Sum of first " + n + " natural numbers is " + sum);
// console.log(i); // i value cant be printed here , it will be if var will be used

// let n = prompt("Enter the value of n");
// n = Number.parseInt(n);
// let fact = 1;
// for (let i = 1; i <= n ; i++) {

// fact = fact * i
// }
// console.log("Factorial of " + n + "," + " numbers is " + fact);

// for in // it can be used with arrays too

// let obj ={
//     harry : 90,   // here a are key obj[a] is value
//     Surat : 20,
//     shiva : 50,
// }
// for(let a in obj){
//     console.log("Marks of " + a + " are " + obj[a]);
// }


// // for-of loops  // loops through values of  an object 
// // if the value is iterable

// for (let b of "Harry"){
//     console.log(b);
// }




// while , do-while loop

// let a = prompt("Enter the value of N")
// a = Number.parseInt(a)

// let i = 0; // if a = 1 which is greater than 0  so true so 1 will be printed 
// while(i<a){
//     console.log(i);
//     i++;
// }





// do-while loop
// let b = prompt("Enter the value of N")
// b = Number.parseInt(b)

// block run hunxa ani balla condition check hunxa

// let j = 0
// do{
//     console.log(j);
//     j++
// }while(j<b)




// functions in JS

// let a = 1
// let b = 2
// let c = 3
// // arrow function with no parameter
// const hello = () => {
//  console.log("Hello i am fine");
// }

// function onePlusAvg(x,y){
//     console.log("done");
//     return 1 + (x + y)/ 2
// }
// // arrow function with parameter
// const sum = (p,q) => {
//     return p + q
// }

// console.log("One plus Average of a and b is ", onePlusAvg(a,b));
// console.log(sum(9,5));
// hello()



// practice set 3

// let marks = {
//     harry: 90,
//     subham: 45,
//     lovish: 56,
//     Monika: 4
// }
// for (i=0; i<=Object.keys(marks).length; i++){
//     console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
// }


// // for in 

// for (let key in marks){
   
//     console.log("The marks of " + key + " are " + marks[key]);
// }

// while loop 


// let cn = 43
// let i
// while( i != cn){
//     console.log("try again");
//     i = prompt("Enter a number")
// }
// console.log("You have enter a correct number");


// to find the mean of 5 numbers
 
const mean = (a,b,c,d) => {
    return (a+b+c+d)/4
}
console.log("Mean of 4 numbers is " + mean(4,5,6,7));




// strings