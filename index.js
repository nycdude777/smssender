const {MongoClient} = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'optin';

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

async function main(){
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    
    // Create a new MongoClient
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
 
    // Database Name
    const dbName = 'myproject';


    // Use connect method to connect to the Server
    client.connect(function(err) {
        assert.equal(null, err);

        console.log("Connected successfully to server");

        const db = client.db(dbName);

        console.log("Connected successfully to " + dbName);

        listDatabases(client);

        client.close();
    });

}

main().catch(console.error);
