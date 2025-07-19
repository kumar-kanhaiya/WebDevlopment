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
let div = document.querySelector("h1");
let button = document.querySelector("#Submit")
butoon = div.innerText = "kanhaiya kumar ";