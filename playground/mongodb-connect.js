const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
    if(err){
        return console.log('Unable to connect to Mongodb Server');
    }
        console.log('Connect to Mongodb Server');
        client.close();
});
