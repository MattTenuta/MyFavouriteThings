//imports go at the top of JS
import { getData } from "./modules/dataMiner.js";

(() => {
    console.log('fired');

    
    let theTemplate = document.querySelector("#user-template").content,
        theThings = document.querySelector("#team-section"),
        faveData,
        lightbox = document.querySelector("#lightbox"),
        cookImg = document.querySelector("#Cooking"),
        vacaImg = document.querySelector("#Travel"),
        gamerImg = document.querySelector("#Games");
        

    function buildThings(data) {
        debugger;

        faveData = data;

        const things = Object.keys(data);
        
        things.forEach(thing =>{

            let panel = theTemplate.cloneNode(true);

            let containers = panel.firstElementChild.children;

                containers[0].querySelector('img').src = `images/${data[thing].hobbyPic}`;


                containers[0].querySelector('img').id = thing;
                containers[0].querySelector('img').addEventListener('click', showThing);

                containers[1].textContent = data[thing].title;
                containers[2].textContent = data[thing].subheading;
                containers[3].textContent = data[thing].text;


                theThings.appendChild(panel);
                
        })
    }

   // function childChecker() {
    //    if(lightbox.classList > 1) {
     //       lightbox.classList.remove("show-lightbox");
      //  }
   // }

   // function removeLightbox() {
     //   lightbox.classList.remove("show-lightbox");
   // }

   // function showBox() {
     //   childChecker();

     //   lightbox.classList.add("show-lightbox");
    //}

    function showThing() {
        debugger;

        let currentThing = faveData[this.id];

        hobbyIMG = lightbox.getElementsByClassName("IMG")[this.id];
        headText = lightbox.getElementsByClassName("head")[this.id];

        headText.append(currentThing);
        hobbyIMG.src = `images/${currentThing.hobbyPic}`

        lightbox.classList.add("show-lightbox");

    }

    getData('./data.json', buildThings);


    cookImg.addEventListener("click", showThing);
    vacaImg.addEventListener("click", showThing);
    gamerImg.addEventListener("click", showThing);

})();