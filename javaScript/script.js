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

 for(let i = 0 ; i<5 ; i++){
    console.log("value of i " , i);
 }

 // for of loops and for in loops 
// for of loop used in string and array 
// syntex 
// for(let variable of strval){
//     // code
// }

let str = "kanhaiya kumar"
for(let i of str){ // same as for each 
    console.log( "i = ", i)
}
// for in used for arrays and object 

let student = {
    name : "kanhaiya",
    age: 20,
    cgpa: 8.5
};
for (let key in student){
    console.log(student[key])
}