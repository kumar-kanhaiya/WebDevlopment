// types of variables 
console.log("hello world !!")
// its helpp to print something 
// let name = "kanhaiya"
// let radius = 6;
// x = null;
// y = undefined;
// null means kuch to hai lakin pata nhi filhal
// undefined matlab pata nhi kya hai 
// alert(radius)
// isfollow = true;
// isfollow = false; //bollean type 
// console.log( " hello " + name)
// Variable types
// var : variable can be re-declared & updated . A global scope variable 
// let : Variable cannot be re-declared but can be updated. A block scope variables. 
//  const : variable cannot be re-declared or updated. A block scope variable 
let name = "kanhaiya"
console.log("hello " + name)
// Data type

// number , string , boolean , undefined , null , bigint , symbol
// premitive data types upper are all premitive datat ypes

// Non premitive array object 
const student = {
    Name: "kanhaiya singh ",
    age: 20 ,
    cgps: 8.2,
};
console.log(student)
// this is comment it is not a part of the code 

// operators in Js 
// used to perform some operation on data 
// Arithmetic operators +,-,*,/,%
// increment a++ , decrement a-- 
// it is also known as unary operator 
// console.log(5%9)
let a = 5 ;
let b = 2 ;
console.log("a =" , a , "& b =",b)
// increment 
a++;
console.log("now a =",a)
// decrement 
b--;
console.log("after decrement b =",b)

// conditional statement 
// let age = 25;
// if(age>18){
//     console.log("You can drive ")
// }
// else{
//     console.log("You cant go ")
// }

let mode = "light"
let color;
if(mode === "dark"){
    color = "black"
}
if(mode === "light"){
    color = "white";
}
console.log(color);