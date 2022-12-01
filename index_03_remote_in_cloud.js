//Interact with services such as a database.
//He uses a cosmosdb database with products and brands in his own area.
//10 min in.
//Created an API to do it
//npm install @azure/cosmos
//
//Bring it in and start to use it
const cosmos = require("@azure/cosmos");

//Need a new client, api shows up the options
//Get connection string by hovering over db and right click, copy connectionstring
const client = new cosmos.CosmosClient("AccountEndpoint=https://tailwind-traders-tr01.documents.azure.com:443/;AccountKey=AnVfIqE33Gp9jPfu0UwjLNFjBzwV0Axfcp7VJaXqpPnhjFaVF5Zy2qDemaybqBm70THlUCJcN7mBACDb1P4G9Q==;");

//create a new database
const database = client.database("tailwind");
//pick a container
const container = database.container("products");

//Then lets show what is there - api helping with options 
container.items.readAll().fetchAll().then(response => {
    console.log(response.resources);
});

//To run just type node index.js and it displays them
//This is how use api to call a service that is remote and in the cloud.