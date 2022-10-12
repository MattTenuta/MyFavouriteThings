//imports go at the top of JS
import { getData } from "./modules/dataMiner.js";

(() => {
    console.log('fired');

    
    let theTemplate = document.querySelector("#user-template").content,
        theTeam = document.querySelector(".team-section"),
        lightbox = document.querySelector("#lightbox"),
        cookImg = document.querySelector("#cookingImg"),
        vacaImg = document.querySelector("#travelImg"),
        mainImages = document.querySelector("#whateverWant"),
        gamerImg = document.querySelector("#gameImg");

    function changeCopy(hobbies) {

        let theHobbies = Object.keys(hobbies);
        faveData = hobbies;
        
        theHobbies.forEach(hobby =>{

            let panel = theTemplate.cloneNode(true),
                containers = panel.firstElementChild.children,
                theMainImg = containers[0].querySelector('img');

                theMainImg.src = `images/${hobbies[hobby].activeThing}`;
                theMainImg.dataset.key = hobby;

                theMainImg.addEventListener('click', function(hobby) {
                    createLightBoxContent(hobbies[hobby.target,dataset.key]);
                })

                containers[1].textContent = hobbies[hobby].title;
                containers[2].textContent = hobbies[hobby].subheading;
                containers[3].textContent = hobbies[hobby].text;


                theTeam.appendChild(panel);
                
        })
    }

    function createLightBoxContent(hobby) {
        debugger;

        activeThing = faveData[this.id];

        //retrieve the lightbox, change its content with data, show it

        let lightbox = document.querySelector('#lightbox');
        lightbox.classList.add('show-lightbox');

        lightbox.querySelector('img').src = hobby.hobbyPic
    }

    function childChecker() {
        if(lightbox.classList > 1) {
            lightbox.classList.remove("show-lightbox");
        }
    }


    function removeLightbox() {
        lightbox.classList.remove("show-lightbox");
    }

    function showBox(hobby) {
        childChecker();

        lightbox.classList.add("show-lightbox");

        lightbox.addEventListener("click", removeLightbox);
    }

    mainImages.forEach(image => image.addEventListener('click', createLightBoxContent));


    getData('./data.json', changeCopy);

    cookImg.addEventListener("click", showBox);
    vacaImg.addEventListener("click", showBox);
    gamerImg.addEventListener("click", showBox);

})();