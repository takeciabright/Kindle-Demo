//Get drop down menu list 
let dropdownMenu = document.querySelector(".dropDownMenuList");

//Get drop down menu toggle button
let btn = document.querySelector(".toggleBtn");

//Create toggle function
function toggle() {
    dropdownMenu.classList.toggle("active");
}

//Add event to toggle button
btn.addEventListener("click", toggle);