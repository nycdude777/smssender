const {MongoClient} = require('mongodb');

const url = 'mongodb://cbmongodb03.cb:27017';
const dbName = 'optin';

async function listDatabases(client){

    console.log("========================");
    console.log("Databases:");

    databasesList = await client.db().admin().listDatabases();
    
    console.log(databasesList);
    
    for(let db of databasesList.databases) {
        console.log(` - ${db.name}`);
    }
    
    console.log("========================");
};


async function connectToDb(client){

    console.log("========================");
    console.log("Collections of  " + dbName + ":");

    const db = client.db(dbName);
    
    db.collections(function(err, collections){
        for(let c of collections) {
            console.log('- ' + JSON.stringify(c));
        }
    });
    
    console.log("========================");
};

async function main(){
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    
    console.log("Connecting to " + url);
    
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

        console.log("Connected successfully!");

        listDatabases(client);
        
        connectToDb(client);
        
        

        client.close();
    });

}

main().catch(console.error);
