//------------------------------------------------MAIN
var mainPhotoContainer = document.getElementById("mainPhotoContainer");
var mainPhoto = document.getElementById("mainPhoto");

mainPhoto.addEventListener("mouseover", () => {

    mainPhoto.setAttribute("src", "images/fotos/misato2.png");
    }
)

mainPhoto.addEventListener("mouseout", () => {

    mainPhoto.setAttribute("src", "images/fotos/misato.png");
})


//------------------------------------------------MY PORTFOLIO

var deckWindow = document.getElementById("deckWindow");
var btnWindow = document.getElementById("btnWindow");

var imgWindow = document.getElementById("imgWindow");
var titleWindow = document.getElementById("titleWindow");
var numberWindow = document.getElementById("numberWindow");

var imagesForWindow = ["p1.png", "p2.png", "p3.png", "p4.png", "p5.png", "p6.jpg"];
var titlesForWindow = ["DEVELOPMENT", "APPLICATION", "PHOTOSHOP", "FIGMA", "WEB DESIGN", "WEB DESIGN"];
var numbersForWidnow = ["600", "750", "630", "360", "280", "690"];

//------------botones
var btnDevelopment = document.getElementById("btnDevelopment");
var btnApplication = document.getElementById("btnApplication");
var btnPhotoshop = document.getElementById("btnPhotoshop");
var btnFigma = document.getElementById("btnFigma");
var btnWeb = document.getElementById("btnWeb");
var btnWeb2 = document.getElementById("btnWeb2");



var expand = (img, title, number) => {
    imgWindow.setAttribute("src", `images/fotos/${img}`);
    titleWindow.innerText = title;
    numberWindow.innerText =  number;
    deckWindow.style.display = "flex";
    setTimeout(() => {
        deckWindow.style.opacity = "100";
    }, 100)
    }

btnDevelopment.addEventListener("click", () => expand(imagesForWindow[0], titlesForWindow[0], numbersForWidnow[0]));
btnApplication.addEventListener("click", () => expand(imagesForWindow[1], titlesForWindow[1], numbersForWidnow[1]));
btnPhotoshop.addEventListener("click", () => expand(imagesForWindow[2], titlesForWindow[2], numbersForWidnow[2]));
btnFigma.addEventListener("click", () => expand(imagesForWindow[3], titlesForWindow[3], numbersForWidnow[3]));
btnWeb.addEventListener("click", () => expand(imagesForWindow[4], titlesForWindow[4], numbersForWidnow[4]));
btnWeb2.addEventListener("click", () => expand(imagesForWindow[5], titlesForWindow[5], numbersForWidnow[5]));

btnWindow.addEventListener("click", () => {
    deckWindow.style.opacity = "0";
    setTimeout(() => {
        deckWindow.style.display = "none";
    }, 300)
})



//------------------------------------------------CONTACT WITH ME
var formContact = document.getElementById("formContact");
var btnContact = document.getElementById("btnContact");
var imgCheck = document.createElement("img");
imgCheck.setAttribute("src", "images/icons/checked.png");

var txtEnviado = document.createElement("p");
txtEnviado.innerText = "Mensaje enviado con exito!";
txtEnviado.setAttribute("class", "menessageSended")

btnContact.addEventListener("click", (event) => {
    event.preventDefault();
    btnContact.classList.toggle("form_send");
    btnContact.classList.toggle("form_sended");
    btnContact.innerText = "";
    btnContact.appendChild(imgCheck);
    formContact.appendChild(txtEnviado);
    setTimeout(()=>{
        btnContact.classList.toggle("form_sended");
        btnContact.classList.toggle("form_send");
        btnContact.innerText = "SEND MESSAGE";
        formContact.removeChild(txtEnviado);
        btnContact.removeChild();
    }, 3000)
});



//------------------------------------------------WHAT I DO
var deck2 = document.querySelector(".deck2")
const slider = document.querySelector(".slider-deck");
var sliderCard = document.querySelectorAll(".slider--card");
var sliderCardLast = sliderCard[sliderCard.length - 1];
var btnNext = document.getElementById("btnNext");
var btnPrev = document.getElementById("btnPrev");

slider.insertAdjacentElement('afterbegin', sliderCardLast);

var next = () =>{
    if(deck2.offsetWidth > 768){
        var sliderCardFirst = document.querySelectorAll(".slider--card")[0];
        slider.style.marginLeft = "-83%";
        slider.style.transition = "all 1s";
        setTimeout(()=>{
            slider.style.transition = "none";
            slider.insertAdjacentElement("beforeend", sliderCardFirst);
            slider.style.marginLeft = "-50%";
        }, 1000)
    }
    else{
        var sliderCardFirst = document.querySelectorAll(".slider--card")[0];
        slider.style.marginLeft = "-112%";
        slider.style.transition = "all 1s";
        setTimeout(()=>{
            slider.style.transition = "none";
            slider.insertAdjacentElement("beforeend", sliderCardFirst);
            slider.style.marginLeft = "-50%";
        }, 1000)
    }
}

var prev = () =>{
    if(deck2.offsetWidth > 768){
        var sliderCard = document.querySelectorAll(".slider--card");
        var sliderCardLast = sliderCard[sliderCard.length-1];
        slider.style.marginLeft = "-17%";
        slider.style.transition = "all 1s";
        setTimeout(()=>{
            slider.style.transition = "none";
            slider.insertAdjacentElement("afterbegin", sliderCardLast);
            slider.style.marginLeft = "-50%";
        }, 1000)
    }
    else{
        var sliderCard = document.querySelectorAll(".slider--card");
        var sliderCardLast = sliderCard[sliderCard.length-1];
        slider.style.marginLeft = "12%";
        slider.style.transition = "all 1s";
        setTimeout(()=>{
            slider.style.transition = "none";
            slider.insertAdjacentElement("afterbegin", sliderCardLast);
            slider.style.marginLeft = "-50%";
        }, 1000)
    }
}

btnNext.addEventListener("click", () => next());
btnPrev.addEventListener("click", () => prev());
