const slider = document.querySelector(".slider");
var div = document.querySelectorAll(".div");
var divLast = div[div.length - 1];

slider.insertAdjacentElement('afterbegin', divLast);

var next = () =>{
    var divFirst = document.querySelectorAll(".div")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(()=>{
        slider.style.transition = "none";
        slider.insertAdjacentElement("beforeend", divFirst);
        slider.style.marginLeft = "-100%";
    }, 500)
}

setInterval(next, 2000);
