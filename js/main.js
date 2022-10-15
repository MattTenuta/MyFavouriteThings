//imports go at the top of JS
import { getData } from "./modules/dataMiner.js";

(() => {
    console.log('fired');

    
    // GreenSock Animations
    gsap.from(".getHobby", { 
        x: -2000,
        duration: 5
    })

    gsap.from(".getHobby2", { 
        x: 2000,
        duration: 5
    })

    gsap.from(".header", {
        y: -200,
        duration: 2
    })


    
    let theTemplate = document.querySelector("#user-template").content,
        theThings = document.querySelector("#team-section"),
        faveData,
        lightbox = document.querySelector(".lightbox"),
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

            let thePicture =  containers[0].querySelector('img');

                thePicture.src = `images/${data[thing].hobbyPic}`;


                thePicture.id = thing;
                thePicture.addEventListener('click', showThing);

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

    function removeLightbox() {
        lightbox.classList.remove("show-lightbox");
    }

   // function showBox() {
     //   childChecker();

     //   lightbox.classList.add("show-lightbox");
    //}

    function showThing() {
        debugger;

        let currentThing = faveData[this.id];

       // These below are my attempts at getting the data to show up on a click, all have failed and im out of ideas

       // hobbyIMG = lightbox.getElementsByClassName("IMG")[this.id];
       // headText = lightbox.getElementsByClassName("head")[this.id];

       // headText.append(currentThing);
       // hobbyIMG.src = `images/${currentThing.hobbyPic}`

        lightbox.classList.add("show-lightbox");

        lightbox.addEventListener("click", removeLightbox);

    }

    getData('./data.json', buildThings);
    


    cookImg.addEventListener("click", showThing);
    vacaImg.addEventListener("click", showThing);
    gamerImg.addEventListener("click", showThing);

})();