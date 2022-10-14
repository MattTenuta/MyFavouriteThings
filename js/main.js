//imports go at the top of JS
import { getData } from "./modules/dataMiner.js";

(() => {
    console.log('fired');

    
    let theTemplate = document.querySelector("#user-template").content,
        theTeam = document.querySelector(".team-section"),
        lightbox = document.querySelector("#lightbox"),
        cookImg = document.querySelector("#cookingImg"),
        vacaImg = document.querySelector("#travelImg"),
        gamerImg = document.querySelector("#gameImg");
        

    function changeCopy(hobbies) {

        let theHobbies = Object.keys(hobbies);
        
        theHobbies.forEach(hobby =>{

            let panel = theTemplate.cloneNode(true),
                containers = panel.firstElementChild.children;

                containers[0].querySelector('img').src = `images/${hobbies[hobby].hobbyPic}`;

                containers[1].textContent = hobbies[hobby].title;
                containers[2].textContent = hobbies[hobby].subheading;
                containers[3].textContent = hobbies[hobby].text;


                theTeam.appendChild(panel);
                
        })
    }

    function childChecker() {
        if(lightbox.classList > 1) {
            lightbox.classList.remove("show-lightbox");
        }
    }

    function removeLightbox() {
        lightbox.classList.remove("show-lightbox");
    }

    function showBox() {
        childChecker();

        lightbox.classList.add("show-lightbox");

        lightbox.addEventListener("click", removeLightbox);
    }


    getData('./data.json', changeCopy);

    cookImg.addEventListener("click", showBox);
    vacaImg.addEventListener("click", showBox);
    gamerImg.addEventListener("click", showBox);

})();