const menu = document.getElementById("menu")
const navlist = document.getElementById("navlist")
menu.addEventListener("click",()=>{
    navlist.classList.toggle("navlist-active")
})