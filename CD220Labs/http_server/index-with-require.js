// Import the HTTP module
const http = require('http');

// Import the 'today' module
const today = require('./today');

// Define the request listener function
const requestListener = function (req, res) {
    res.writeHead(200); // Set the status code to 200 (OK)
    // Send the response with the current date from the 'today' module
    res.write(`Hello, World! The date today is ${today.getDate()} \n`);

    let os = require('os'); //can check for "path, util, fs, os, http, url, crypto, querystring" etc.
    res.write("Computer OS Platform Info : " + os.platform() + "\n");

    //written in console, where "server listening on port:8080" ... not sent to client
    console.log("Computer OS Architecture Info: " + os.arch()); 

    let dateVal =new Date(today.getDate()); // Get the current date from the 'today' module
    // Determine the appropriate greeting based on the current time
    let greeting = "It is still not morning";

    if (dateVal.getHours() > 6 && dateVal.getHours() < 12) { dateVal.
        greeting = "Good morning!";
    } else if (dateVal.getHours() >= 12 && dateVal.getHours() < 18) {
        greeting = "Good afternoon!";
    } else if (dateVal.getHours() >= 18 && dateVal.getHours() < 21) {
        greeting = "Good evening!";
    } else if (dateVal.getHours() >= 21 && dateVal.getHours() < 24) {
        greeting = "Good night!";
    }

    // Send the response with the appropriate greeting
    res.end(`Hello, ${greeting}`);

};

// Define the port number
const port = 8080;

// Create an HTTP server using the request listener function
const server = http.createServer(requestListener);

// Start the server and listen on the specified port
server.listen(port);
console.log('Server listening on port: ' + port);
