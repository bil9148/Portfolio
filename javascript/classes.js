//General
$("section").addClass("text-center text-light my-5");
$("h2").addClass("fit-content font-monospace m-auto");
$("h1").addClass("fit-content font-monospace m-auto opacity-50");
$("main").addClass("container-md");

const nav = document.querySelector("nav ul");

//Navbar
let screenWidth = window.innerWidth;
if(screenWidth <= 768){
    const main = document.querySelector("main");
    main.style.marginTop="7rem";
    $("nav").addClass("w-100");
}