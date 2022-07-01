
let modalTriger = document.querySelector(".about_me_trigger");
let modal = document.querySelector('.modal');
let modalClose = document.querySelector('.modal_close');
let modalContent = document.querySelector(".modal_content");
let modalAbout = document.querySelector(".modal_about_me");

modalTriger.addEventListener("click", function(){
        toggleModal();
});

modalClose.addEventListener("click", e => toggleModal());

modal.addEventListener("click", e => {
    if(e.target.classList.contains("modal")){
        toggleModal();
    }
});

function toggleModal(){
    
    if(getComputedStyle(modal).display==="flex"){
        setTimeout(function(){
            modal.style.display = "none";
            document.body.style.overflow = "initial";
        }, 500)
        modalContent.style.transform = "translate(0, -200%)";
        modalAbout.style.transform = "translate(0, -200%)";
    }
    else {
        modal.style.display = "flex";
        setTimeout(function(){
            modalContent.style.transform = "translate(0)";
            modalAbout.style.transform = "translate(0)";
            document.body.style.overflow = "hidden";
        }, 500)

    }
}



window.onload = function (){
    let preloader = document.querySelector(".loader-wrapper");
    setTimeout(function(){
        preloader.style.transform = "translate(-200%)";
        document.documentElement.style.overflowY = "scroll";
    }, 500)
};



// ПАРАЛАКС

var scene = document.querySelector('.scen');
var parallaxInstance = new Parallax(scene);

// ПАРАЛАКС