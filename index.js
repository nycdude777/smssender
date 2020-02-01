var MongoClient = require('mongodb').MongoClient;

const dbHost = 'localhost:27017';
const dbName = 'optin';
const dbUrl = 'mongodb://' + dbHost + '/' + dbName;

console.log('Connecting to ' + dbUrl + '...')

// Connect to the db
MongoClient.connect(dbUrl, function (err, db) {
    
    console.log('Connection successful!')

    console.log('Fetching top 10...')

    db.collection("zip_alert")
        .find()
        .limit(10)
        .toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
      });          
});



