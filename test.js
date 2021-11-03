import { createElement } from "react";



const word = 10
const word2 = "universe"
let test = john`hello ${word + 50} and ${word2}`;

john`hello ${word + 40} and ${word2}`;


function john(a, ...b) {
    if (!john.dom) john.dom = createElement("template");
    let maindiv = document.querySelector("#mainDiv")
    console.log("a", a); 
    console.log("b", b); 
    maindiv.innerText = b[0];
}
john.dom = null;

console.log(test); 

