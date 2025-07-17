// // types of variables 
// console.log("hello world !!")
// // its helpp to print something 
// // let name = "kanhaiya"
// // let radius = 6;
// // x = null;
// // y = undefined;
// // null means kuch to hai lakin pata nhi filhal
// // undefined matlab pata nhi kya hai 
// // alert(radius)
// // isfollow = true;
// // isfollow = false; //bollean type 
// // console.log( " hello " + name)
// // Variable types
// // var : variable can be re-declared & updated . A global scope variable 
// // let : Variable cannot be re-declared but can be updated. A block scope variables. 
// //  const : variable cannot be re-declared or updated. A block scope variable 
// let name = "kanhaiya"
// console.log("hello " + name)
// // Data type

// // number , string , boolean , undefined , null , bigint , symbol
// // premitive data types upper are all premitive datat ypes

// // Non premitive array object 
// const student = {
//     Name: "kanhaiya singh ",
//     age: 20 ,
//     cgps: 8.2,
// };
// console.log(student)
// // this is comment it is not a part of the code 

// // operators in Js 
// // used to perform some operation on data 
// // Arithmetic operators +,-,*,/,%
// // increment a++ , decrement a-- 
// // it is also known as unary operator 
// // console.log(5%9)
// let a = 5 ;
// let b = 2 ;
// console.log("a =" , a , "& b =",b)
// // increment 
// a++;
// console.log("now a =",a)
// // decrement 
// b--;
// console.log("after decrement b =",b)

// // conditional statement 
// // let age = 25;
// // if(age>18){
// //     console.log("You can drive ")
// // }
// // else{
// //     console.log("You cant go ")
// // }

// let mode = "light"
// let color;
// if(mode === "dark"){
//     color = "black"
// }
// if(mode === "light"){
//     color = "white";
// }
// console.log(color);
// // if else if leader 
// // syntex 
// // if(condition){
// //     // code
// // }
// // else if (condition){
// //     //code
// // }
// // else{
// //     code
// // }
// // for example 
// let mod = "dark"
// let col;
// if(mod === "dark"){
//     col = "black"
// }
// else if(mod == "white"){
//     col = "white"
// }
// else{
//     col = "not defined"
    
// }
// console.log(col)
// if(mod === "dark") console.log("dark");

// question - 1
// let number = prompt("Enter your number ");
// if(number%5 === 0){
//     console.log(number ,"Yes multiple of 5")
// }
// else{
//     console.log(number ,"Not a multiple of 5")
// }
// second question 
// let score = prompt("Enter your total Marks")
// if(score>=80 && score<=100){
//     console.log("A");
// }
// else if(score>=70 && score<80){
//     console.log("B");
// }
// else if(score>=60 && score<70){
//     console.log("C");
// }
// else if(score>=50 && score<60){
//     console.log("D");
// }
// else{
//     console.log("Fail")
// }

// let us start loops and strings 

//  for(let i = 0 ; i<5 ; i++){
//     console.log("value of i " , i);
//  }

 // for of loops and for in loops 
// for of loop used in string and array 
// syntex 
// for(let variable of strval){
//     // code
// }

// let str = "kanhaiya kumar"
// for(let i of str){ // same as for each 
//     console.log( "i = ", i)
// }
// for in used for arrays and object 

// let student = {
//     name : "kanhaiya",
//     age: 20,
//     cgpa: 8.5
// };
// for (let key in student){
//     console.log(student[key] )
// }

// question 1 
// print all even numbers from 0 to 100 
// for(let i = 0 ; i<= 100 ; i++){
//     if(i%2 === 0){
//         console.log("i = " , i)
//     }
// }

// second question 
// let gameNumber = 25;
// let userNumber = prompt("Guess the number : ")
// while(userNumber != gameNumber){
//     userNumber = prompt("Enter correct number : ")
//     if(userNumber == gameNumber){
//         break;
//     }
// }
// console.log("congratulations , you win ")

// strings
// let str = "kanhaiya kumar "
// console.log(str.length)
// // inbuild properties and inbuild functions
// // str[index] -- access the character just like array 
// console.log(str[5]) 

// // template literals
// let sentence = `this is a template literals `; // it is a special type of string 
// console.log(sentence);
// let output = `my name is ${str}`
// console.log(output)
// place holder ${expression} 
// string methods 
/* str.toUpperCase()
str.toLowerCase()
str.trim() remove whitespaces from starting and ending
 str.slice(start ,end) // where ending is exculded 
 str1.concat(str) // ading two string
 str.replace(searchVal , newval)
 str.charAt(index)
*/
// str = str.toUpperCase();
// console.log(str)
// string are immutable in js  
// let str = prompt("Enter your name ");
// let username = `@${str}${str.length}`
// console.log(username)

// let us start Arrays 
 
// let arr = [1,2,34,5,67,8,9,5,0]
// console.log(arr)
// // we can change the value of array by using index
// // printing all element of array by using loops 
// for(let i = 0 ; i <arr.length ; i++){
//     console.log(arr[i]);
    
// }
// console.log("by using for of method ")
// // by using for of similar to for each 
// for(let element of arr){
//     console.log(element);
// }

// practise problem 
// let marks = [85,97,44,37,76,60];
// let sum = 0;
// for(let element of marks){
//     sum += element;
// }
// let average = sum/marks.length;
// console.log("Average of marks is : " +  average)

// // second practise problem 
// console.log("Before applying offer ")
// let arr = [250,645,300,900,50];
// console.log(arr)
// for(let i = 0 ; i<arr.length ; i++){
//     arr[i] = arr[i] - (arr[i]/10);
// }
// console.log("After applying offer ")
// console.log(arr)
// array methods
/* push() to add something
pop() to remove somthing
toString() to convert array to string 
conact() joins multiple array and return result
unshift() add to start 
shift() delte from start & return 
slice() give starting and ending index 

*/

// let us start functions 

// // syntex
// function printingName(){
//     console.log("kanhaiya kumar ")
    
// }
// printingName();
// function myFun(msg){ // parameter passing message 
//     console.log(msg);
// }
// let name = "kanhaiya kumar "
// myFun(name); // argument 

// // arrow functions
// // sum function 
// function sum(a,b){
//     return a+b;
// }
// const sum2 = (a,b) =>{
//     return a + b;
// }
// // arrow function of multiplication 
// const multiply = (a,b) =>{
//     return a*b;
// }

// // let us solve some practise question 
// function noOfVowels(str){
//     let count = 0;
//     let i = 0;
//     while(i < str.length){
        
//         ch = str.charAt(i);
//         if(ch === 'a' || ch === 'e' || ch === 'i' || 
//             ch === 'o' || ch=== 'u' ){
//             count++;
//         }
//         i++;
//     }
//     return count;
// }
// const ans =  (str)=>{
//     let count = 0;
//     let i = 0;
//     while(i < str.length){
        
//         ch = str.charAt(i);
//         if(ch === 'a' || ch === 'e' || ch === 'i' || 
//             ch === 'o' || ch=== 'u'
//         ){
//             count++;
//         }
//         i++;
//     }
//     return count;
// }

// console.log(noOfVowels("kanhaiya"))

// for each loop in array 
let array = [4,5,6,8,5,9,6,2]

// for(let element in array ){
//     console.log(element)
// }
// array.forEach(function printvalue(val){
//     console.log(val)
// })
// console.log("new printing")

// array.forEach(myFun)

// // third
// array.forEach((val) =>{
//     console.log(val+2)
// })

// console.log("Printing square of given array ")

// array.forEach((val) =>{
//     console.log(`square of ${val} is ${val*val}`)
// })
/* some array methods
map method 
 cretate a new array with the results of some operatiopn.
 The value its callback returns are used to form new array 
 arr.map(vallbackfnx(value,index,array)}

 - same as for each but it create a new array 

 filter method 
 creates a new array of element that give true for
 a condition 
 reduce
 perform some operation & reduce the array to a single value 
 it return that single value


*/
let nums= [12,15,17];
let newArr = nums.map((val) =>{
    return val;
})
console.log(newArr)
 
const ans = nums.reduce((result , current ) => {
    return result + current;
})
console.log(ans);
