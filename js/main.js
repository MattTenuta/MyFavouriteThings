//imports go at the top of JS
import { getData } from "./modules/dataMiner.js";

(() => {
    console.log('fired');

    
    // GreenSock Animations
    gsap.from(".getHobby", { 
        x: -2000,
        duration: 5
    })

    gsap.from(".header", {
        y: -200,
        duration: 2
    })


    
    let faveData,
        lightbox = document.querySelector(".lightbox"),
        cookImg = document.querySelector("#Cooking"),
        vacaImg = document.querySelector("#Travel"),
        gamerImg = document.querySelector("#Games");
        

    function buildThings(data) {
        debugger;

        faveData = data;
    }

    function removeLightbox() {
        lightbox.classList.remove("show-lightbox");
    }

    function showThing() {
        debugger;

        let currentThing = faveData[this.id];

        let hobbyIMG = lightbox.querySelector('img'),
            headText = lightbox.querySelector('h1'),
            subheadText = lightbox.querySelector('h2'),
            paraText = lightbox.querySelector('p')

        hobbyIMG.src = `images/${currentThing.hobbyPic}`
        headText.textContent = currentThing.title;
        subheadText.textContent = currentThing.subheading;
        paraText.textContent = currentThing.text;

        debugger;

        lightbox.classList.add("show-lightbox");

        lightbox.addEventListener("click", removeLightbox);

    }

    getData('./data.json', buildThings);
    


    cookImg.addEventListener("click", showThing);
    vacaImg.addEventListener("click", showThing);
    gamerImg.addEventListener("click", showThing);

})();