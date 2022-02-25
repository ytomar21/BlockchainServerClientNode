
// ./routes/newtransaction.js

// * Creates a new mock transaction and adds it to the system


/// * Imports

const Transaction = require("../src/transaction");

function newtransaction(app) {

    // Create a new transaction 

    app.get("/newtransaction", function (request, response) {
 
        // Create a new Transaction object
        console.log("Hi!");
        let tx = new Transaction();


        // Add the transaction to the global transactions array

        global.transactions.push(tx);

        // Send the response for creating a new transaction

        console.log(tx.prettify());

        response
        
            .status(418) // HTTP status code 200: OK
            .send(tx.prettify()); // Response message
       
    });
}

module.exports = newtransaction;