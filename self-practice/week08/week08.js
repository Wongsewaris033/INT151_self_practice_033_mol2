const nodes = document.querySelector("appetizer").childNodes;
console.log(nodes);

const nodes = document.getElementById("appetizer").childNodes;
console.log(nodes);

//--------------------

const first = document.querySelector('#appetizer, #soup')
console.log(first)

const appMeat = document.querySelectorAll('#appetizer .meat')
const soupMeat = document.querySelectorAll('#soup .meat')
const allMeat = [...appMeat,...soupMeat]

allMeat.forEach((all) => console.log(all.textContent))

//--------------------

const soup = document.querySelectorAll(".meat");
soup.forEach((s) => {
    if (s.textContent.toLowerCase().includes("soup")){
        console.log(s)
    }
})

//-----

const meatAllElement = document.querySelectorAll(".meat")
 
const meatSoupElements = Array.from(meatAllElement).filter(ele =>
  ele.textContent.toLowerCase().includes("soup")
)
console.log(meatSoupElements)

//--------------------

const soupElement = document.querySelector("#soup");
 
let current = soupElement.firstElementChild

while (current !== null) {
    console.log(current)
    current = current.nextElementSibling
}

//--------------------

const first = document.querySelector('#appetizer, #soup')
console.log(first)

const appMeat = document.querySelectorAll('#appetizer .meat')
const soupMeat = document.querySelectorAll('#soup .meat')
const allMeat = [...appMeat,...soupMeat]

allMeat.forEach((all) => console.log(all.textContent))

//--------------------

const buttons = document.getElementsByTagName("button")
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", () => { 
    if (button.id === "add") {
        box.classList.add("bordered");
      }
      else if (button.id === "remove") {
        box.classList.remove("bordered");
      }
      else if (button.id === "toggle") {
        box.classList.toggle("bordered");
      }
  })
})

//--------------------

const buttons = document.getElementsByTagName("button")
const box = document.getElementById("box");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", () => {
    const color = button.dataset.color; //ดึงค่าจาก data attribute ของปุ่มนั้น(เข้าถึงผ่าน button.dataset.color)
    if (color === "red") {
        box.style.backgroundColor = "red";
      }
      else if (color=== "blue") {
        box.style.backgroundColor = "blue";
      }
      else if (color === "green") {
        box.style.backgroundColor = "green";
      }
  })
})