const {MongoClient} = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'optin';

async function listDatabases(client){
    console.log("Databases:");
    
    databasesList = await client.db().admin().listDatabases();
    
    console.log('databaseList: ');
    console.log(databasesList);
    
    console.log('Enumerating db list: ');
    
    for(let db of databasesList.databases) {
        console.log(` - ${db.name}`);
    }
    
};

async function main(){
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    
    console.log("Begin mongo db connection test");
    
    // Create a new MongoClient
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
     
    console.log("MongoClient is " + typeof client);
    
    // Use connect method to connect to the Server
    client.connect(function(err) {
    
        if(err) {
            console.log(err);
            console.log("Exiting");
            return;
        }

        console.log("Connected successfully to server");

        listDatabases(client);
        
        client.close();
        
        return;
        
        const db = client.db(dbName);

        console.log("Connected successfully to " + dbName);

        

        
    });

}

main().catch(console.error);