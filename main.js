window.onscroll = function() {myFunction()};

var navbar = document.getElementById("seccond__header");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

  
 // open/close modal when click menu/close
menu = document.querySelector(".menu")
modal = document.querySelector(".modal")
modalClose = document.querySelector(".content__close")
modalContent = document.querySelector(".content__modal")

function openModal(){
  modal.classList.add("open")
  modalContent.classList.add("open2")
}
function closeModal(){
   modal.classList.remove("open")
   modalContent.classList.remove("open2")
}
// add more background
menu.addEventListener("click",openModal)
modalClose.addEventListener("click",closeModal)

menu2 = document.querySelector(".menu")
modal2 = document.querySelector(".modal")
background = document.querySelector(".background")

function openModal(){
  modal.classList.add("open")
  background.classList.add("open2")
}
function closeModal(){
   modal.classList.remove("open")
   background.classList.remove("open2")
} 
menu.addEventListener("click",openModal)
modalClose.addEventListener("click",closeModal)

// toTOp



changeColor1 = document.querySelector(".nav__box li:nth-child(2)")
changeColor2 = document.querySelector(".nav__box li:nth-child(1)")
changeColor3 = document.querySelector(".nav__box li:nth-child(3)")
function changebackground(){
  changeColor1.setAttribute("class", "change__color-3")
  changeColor2.removeAttribute("class", "change__color-2")
  changeColor3.removeAttribute("class", "change__color-2")
}
function changebackground2(){
  changeColor2.setAttribute("class", "change__color-2")
  changeColor1.removeAttribute("class", "change__color-3")
  changeColor3.removeAttribute("class", "change__color-3")
}
function changebackground3(){
  changeColor3.setAttribute("class", "change__color-2")
  changeColor2.removeAttribute("class", "change__color-3")
  changeColor1.removeAttribute("class", "change__color-3")
}
changeColor1.addEventListener("click",changebackground)
changeColor2.addEventListener("click",changebackground2)
changeColor3.addEventListener("click",changebackground3)
console.log(changeColor1);