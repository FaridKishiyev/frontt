const galery = document.getElementById("galery")
const leftbtn = document.getElementById("leftbtn")
const rightbtn = document.getElementById("rightbtn")
let x = 0;
leftbtn.addEventListener("click", function(){
    x += 200;
    console.log(x)
    galery.style.marginLeft = x+"px";
})