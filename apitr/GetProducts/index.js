const cosmos = require("@azure/cosmos");

module.exports = async function (context, req) {
    
    const client = new cosmos.CosmosClient(process.env.CONNECTION_STRING);
    const database = client.database("tailwind");
    const container = database.container("products");

    const response = await container.items.readAll().fetchAll();
    //creating so async, so slight changes from 03

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: response.resources
    };
}