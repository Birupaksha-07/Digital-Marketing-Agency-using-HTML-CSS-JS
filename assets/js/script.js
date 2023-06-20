let flag = 0;

function controller(x){
    flag = flag + x;
    slideShow(flag);
}

function slideShow(num){
    let slides = document.getElementsByClassName("slide");
    if(num == slides.length){
        flag = 0;
        num = 0;
    }
    if(num < 0){
        flag = slides.length - 1;
        num = slides.length - 1;
    }

    for(let y of slides){
        y.style.display = "none"; 
    }
    slides[num].style.display = "block";
}

//  for mobile navbar

let menu = document.getElementById("menu");
let close = document.getElementById("close");
let sideNav = document.getElementById("side-nav");

menu.addEventListener("click",()=>{
    sideNav.classList.toggle("active");
})
close.addEventListener("click",()=>{
    sideNav.classList.remove("active");
})
