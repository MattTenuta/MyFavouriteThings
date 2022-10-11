//imports go at the top of JS
import { getData } from "./modules/dataMiner.js";

(() => {
    console.log('fired');

    // test the module

    //get a referemce to the tempalates contents and target the container
    //into which we will clone a copy of the markup
    let theTemplate = document.querySelector("#user-template").content,
        theTeam = document.querySelector(".team-section"),
        lightbox = document.querySelector("#lightbox"),
        cookImg = document.querySelector("#cookingImg"),
        vacaImg = document.querySelector("#travelImg"),
        gamerImg = document.querySelector("#gameImg");

    function changeCopy(profs) {
        //parse the top level props from the profs object (the prof names)
        let theProfs = Object.keys(profs);
        
        theProfs.forEach(prof =>{
            //make a copy of the contents of the templte tag
            let panel = theTemplate.cloneNode(true),
                containers = panel.firstElementChild.children; //the section tags contents
                // put the prof data where it needs to go
                containers[0].querySelector('img').src = `images/${profs[prof].hobbyPic}`;

                containers[1].textContent = profs[prof].title;
                containers[2].textContent = profs[prof].subheading;
                containers[3].textContent = profs[prof].text;

                // paste the prof markup into the team selection on the page
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

    // retrieve our prof data, and then build out the content
    getData('./data.json', changeCopy);

    cookImg.addEventListener("click", showBox);
    vacaImg.addEventListener("click", showBox);
    gamerImg.addEventListener("click", showBox);

})();