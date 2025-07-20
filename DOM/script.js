/*
DOM manipulation 
1. Selecting with id 
document.getElementbyId("id name ")
2. Selecting with class 
document.getElementByClassName("class name ")
3. Selecting with tag
document.getElementByTagName("here is the tag name ")

*/
// document.getElementById("submit") check=>{
//     document.getElementById("name").innerHTML = "kanhaiya singh";
// }

// query selector 

/*
document.querySelector("myId/myclass/tag")
// return first element 
document.querySelectorALl(my id / my class / tag)
return a n

/*
properties 
tagName = return tag for element nodes
ineerText : return the text content of the element and all its childeren 
innerHTML : return the plain text or html contents in the element 
textContent : return textual content even for hidden elements

*/
// let div = document.querySelector("h1");
// let button = document.querySelector("#Submit")
// butoon = div.innerText = "kanhaiya kumar ";

// part -2
/*
dom atributes 
getAttribute(attr) // to get the attribute value
setAttribute(attr , value ) // to set the attribute val th 
style
node.style
// inset element 
1. node.append(el) // adds at the end of node
2. node.prepend(el) // adds at the start of node
3.  node.before(el) // adds before the node(outside)
4. node.agter(el) // adds after the node (outside )
 
delete element 
node.remove

*/
// let newBtn = document.createElement("button");
// newBtn.innerText = "click me ";
// let div = document.querySelector("div");
// div.append(newBtn)
// first problem 
// let btn = document.createElement("button");
// let body = document.querySelector("body");
// btn.innerText = "click me !"
// btn.style.backgroundColor = "red";
// btn.style.color = "White";

// body.prepend(btn);
// let p = document.querySelector(".main");
// let para = document.createElement("p");
// para.style.backgroundColor = "red";
// para.style.color = "white";
// p.append(para);


// Event in jS
/*
The changes in the state of an object is known as an event
events are fired to notify code of "interseting changes " that may 
affect code execution /

. mouse event (click , double click etc .)
. keyboard event (keypress , keyup , keydown )
. form event (Submit etc.)
. print event & many more
*/

let but = document.querySelector("#btn1");
// but.onclick = function fun(){
// console.log("its ok ")
// }
// let val = document.querySelector("p");

// but.onclick = ()=>{
//     val.innerText = "after changing by kanhaiya kumar "
// }
// let docc = document.querySelector("#box");

// // docc.onmouseover = () => {
// //     // doc.style.backgroundColor ="red"
// //     console.log("ok")
// // };
// docc.addEventListener("onmouseover", ()=>{
//     let doc = document.getElementById("#box");
//     if(doc){
//         doc.onmouseover = ()=>{
//             doc.style.fontSize = "200px";
//         }

//     }
//     else{
//         console.warn("Element not found ")
//     }
// })
document.addEventListener("click",()=>{
    let val = document.getElementById("btn1");
    let body = document.querySelector("body");
    if(body.style.backgroundColor === "black"){
        body.style.backgroundColor = "white";
        body.style.color = "black";
    }
    else{
        body.style.backgroundColor = "black";
        body.style.color = "white";
    }
})