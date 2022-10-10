function getData(targeturl, callback) {
    console.log('fired from the data miner module')

    // fetch is a JS API that runs AJAX requests
    // and gets data from a resource
    fetch(targeturl) //pass in the path to the data source
        .then(res => res.json()) //convert JSON to plain JS object
        // the res is in the data that we are retrieving from the resource
        .then(data => { // data is the converted JSON object -> now its just data (JS object)
            console.log(data);

            // run the callback when we get all our data back and ready to go
            // this gets passed in by reference when we invoke the dataMiner in main.js
            callback(data);
        })
    .catch(error => console.error(error)); // catch any errors that might happen and report them to the dev
}

export { getData }