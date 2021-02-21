const url = "https://api.spacexdata.com/v2/launchpads";

//The d3.json() returns a JavaScript promise: it places an API call to the URL and executes subsequent lines of code only when the API call is complete.
// Once the data is retrieved, it is assigned the arbitrary parameter name receivedData by the arrow function and printed in the console. The d3.json().then() 
//method ensures that the data is received before executing the arrow function. In summary, a JavaScript promise in this case waits for the data retrieval to finish
// before moving on to the next code.

d3.json(url).then(receivedData => console.log(receivedData));

// retrieve the first element in the list, and get the name 
d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));

// retrieve the latitude (an element from a list within the json file)
d3.json(url).then(spaceXResults =>
    console.log(spaceXResults[0].location.latitude));

d3.json("url").then(function(data){
        console.log(data);
    });