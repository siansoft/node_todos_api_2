const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
    if(err){
        return console.log('Unable to connect to Mongodb Server');
    }
        console.log('Connect to Mongodb Server');
        const db = client.db('TodoApp'); // Connecting the the DB
        //fetch all data
        db.collection('Todos').find().count().then((count)=>{
           console.log('ToDos Count');
           console.log(count);
        },(err)=>{
            console.log('Unable to get data', err);
        })
        client.close();
       
    });