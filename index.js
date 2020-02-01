var MongoClient = require('mongodb').MongoClient;

const dbHost = 'localhost:27017';
const dbName = 'optin';
const dbUrl = 'mongodb://' + dbHost + '/';

console.log('Connecting to ' + dbUrl + '...')

// Connect to the db
const client = MongoClient.connect(dbUrl, {
   useUnifiedTopology: true
});

console.log('typeof client: ' + typeof client);

console.log(Object.keys(client).map(key => ' key=' + client[key] + '\n'));

return;

client.connect().then((mongo) => {
    
    console.log('Connection successful!')

    console.log('Fetching top 10...')

    

    const dbo = mongo.db(dbName);
    dbo.collection("zip_alert")
        .find()
        .limit(10)
        .toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            dbo.close();
      });          
});



