const hamburgerBtn = document.querySelector(".hamburger")
const white = document.querySelectorAll(".white")
const navBar = document.querySelector(".nav-bar")

hamburgerBtn.addEventListener("click", () =>{
   navBar.classList.toggle("active")
})