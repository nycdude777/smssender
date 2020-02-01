var MongoClient = require('mongodb').MongoClient;

const dbHost = 'localhost:27017';
const dbName = 'optin';
const dbUrl = 'mongodb://' + dbHost + '/';

console.log('Connecting to ' + dbUrl + '...')

// Connect to the db
const client = MongoClient.connect(dbUrl, {
   useNewUrlParser: true,
   useUnifiedTopology: true
});

client.connect().then((mongo) => {
    
    console.log('Connection successful!')

    console.log('Fetching top 10...')

    console.log('typeof db: ' + typeof mongo);

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



