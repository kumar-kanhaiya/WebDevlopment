// // // const student = {
// // //     fullName: "kanhaiya kumar",
// // //     marks: 94.4,
// // //     printMarks: function (){
// // //         console.log("marks " + this.marks);
// // //     }
// // // }

// // // // prototype in js 
// // // /* 
// // // A javascript object is and entity having state and 
// // // behavior 
// // // js objects have a special property called prototype
// // // we can set prototype by using 
// // // __proto__
// // // if object & prototype have same method,
// // // object method will be used .
// // // */

// // // // const emplooye ={
// // // //     currentTex () {
// // // //         console.log("Tax is 15%")
// // // //     }
// // // // }

// // // // const karanArjun ={
// // // //     name: karan,
// // // //     salary : 50000
// // // // }
// // // // // use of prototype 
// // // // karanArjun.__proto__ = emplooye;

// // // class Car {
// // //     constructor(brand){
// // //         this.brand = brand;
// // //         console.log("Creating new object ")
// // //     }
// // //     start(){
// // //         console.log("Start")
// // //     }
    
// // //     stop(){
// // //         console.log("Stop")
// // //     }

// // // }

// // // let fortuner = new Car("fortuner");
// // // // constructor is a reserved word 

// // // //inheritance in js
// // // // inheritance is passing down properties 
// // // // & methods from parent class to child class
// // // /* 
// // // class parent {
// // // }
// // // class child extends parent {
// // // }
// // // */
// // // class parent {
// // //     hello(){
// // //         console.log("hello")
// // //     }
// // // }
// // // class child extends parent{
    
// // // }

// // // async programming 

// // console.log("one")
// // console.log("two")
// // setTimeout(()=>{
// //     console.log("Hello")
// // },4000);
// // console.log("three")
// // console.log("four")
// // // done without waiting 

// // // callback 
// // function sum(a,b){
// //     console.log(a+b)
// // }
// // function calculator(a,b,sumCallback){
// //     sumCallback(a,b);
// // }
// // calculator(1,2,sum);

// // // data 1
// // // data 2
// // // data 3

// // function getData(data){
// //     setTimeout(()=>{
// //         console.log("ID",data);
// //     },2000);
// // }
// // getData(1)

// // /// waiting approach 
// // function getData(dataId , getNextData){
// //     setTimeout(()=>{
// //         console.log("data",dataId)
// //         if(getNextData){

// //             getNextData();
// //         }

// //     },2000);
// // }
// // // callback hell -- nested callbacks 
// // getData(1,()=>{
// //     getData(2,()=>{
// //         getData(3)
// //     })
// // })

// // promishes 
// /*
// promise is for "eventual" completion of task . It is an object 
// in JS.
// It is a solution to callback hell 
// let promise = new Promise((resolve,reject)=>{
//     .. some code
//     })
// */
// // let promise = new Promise((resolve,reject)=>{
// //     console.log("I am a promise ")
// // })
// // pending state fulfilled state - resolved 
// // rejected 
// // funtions for promise 
// /*
// .then(); -> fulkffiled
// .catch() -> rejected 
// promise.then((res)=>{
//     .. some code
//     })
// */
// const getPromise = ()=>{

//     return  new Promise((resolve,reject)=>{
//         console.log("I am a promise ")
//         resolve("sucess");
//     })}

// let promise = getPromise();
// promise.then(()=>{
//     console.log("promise fullfileed ")
// })

// // promise chain 
function asynFunc(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("SOme data ");
            resolve("Sucess!!")
        },5000)
    })
}
console.log("Fetching data 1")
let p1 = asynFunc();
p1.then((res)=>{
    console.log(res)
})