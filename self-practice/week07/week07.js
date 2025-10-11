// console.log(window.document) //root node
// console.log(document) //root node
// console.log(typeof document)
// console.log(document.getElementById("123"))
// const htmlElement = document.documentElement
// console.log(htmlElement)

// console.log(htmlElement.parentElement) //null (อยู่สูงสุดแล้วสูงกว่านี้ไม่มีเลยได้ null)
// console.log(htmlElement.parentNode) //root node
// if (htmlElement.parentNode === document) {
//   console.log("parent of html is a root node")
// } //เพราะ parentNode อยู่สูงสุดแล้ว

// console.log(document.firstChild) //<!DOCTYPE html>
// console.log(document.firstChild.nextSibling)
// //<!-- sample comment #1 -->
// console.log(document.firstChild.previousSibling) //null (เป็น firstChild สูงกว่านี้ไม่มีเลยเป็น null)
// console.log(document.firstElementChild) //<html>
// console.log(document.firstElementChild.previousSibling) //<!-- sample comment #1 -->
// console.log(document.lastChild) //<!-- sample comment #3 -->
// console.log(document.lastElementChild) //<html lang="en">

/* ทวนการquery */

//--------------------

const p = document.createElement("p");
p.setAttribute("format", "italic");
 
const p1 = document.createElement("p");
p1.innerHTML = "<i>Sample Italic Text</i>";
p1.setAttribute("method", "innerHTML");
 
const p2 = document.createElement("p");
p2.innerText = "<i>Sample Italic Text</i>";
p2.setAttribute("method", "innerText");
 
const p3 = document.createElement("p");
p3.textContent = "<i>Sample Italic Text</i>";  
p3.setAttribute("method", "textContent");
 
const div = document.getElementById("demo");
div.appendChild(p);    
div.appendChild(p1);  
div.appendChild(p2);  
div.appendChild(p3);    