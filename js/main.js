//imports go at the top of JS
import { getData } from "./modules/dataMiner.js";


(() => {
    console.log('fired');

    // test the module

    //get a referemce to the tempalates contents and target the container
    //into which we will clone a copy of the markup
    let theTemplate = document.querySelector("#user-template").content,
        theTeam = document.querySelector(".team-section");

    function changeCopy(profs) {
        //parse the top level props from the profs object (the prof names)
        let theProfs = Object.keys(profs);
        
        theProfs.forEach(prof =>{
            //make a copy of the contents of the templte tag
            let panel = theTemplate.cloneNode(true),
                containers = panel.firstElementChild.children; //the section tags contents
                // put the prof data where it needs to go
                containers[0].querySelector('img').src = `images/${profs[prof].biopic}`;

                containers[1].textContent = profs[prof].name;
                containers[2].textContent = profs[prof].role;

                // paste the prof markup into the team selection on the page
                theTeam.appendChild(panel);
                
        })
    }

    function showJoke(data) {
        // show the random Chuck Norris joke in the UI
        let theJoke = document.querySelector('.joke-text');

        theJoke.textContent = data.value;
    }

    function retrieveJoke() {
        getData(`https://api.chucknorris.io/jokes/random`, showJoke)
    }
    let jokeButton = document.querySelector('#get-joke');

    jokeButton.addEventListener('click', retrieveJoke);
    // retrieve our prof data, and then build out the content
    getData('./data.json', changeCopy);
    getData(`https://api.chucknorris.io/jokes/random`, showJoke)
})();