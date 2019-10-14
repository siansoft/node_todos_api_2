const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', p , (err, client)=>{
    if(err){
        return console.log('Unable to connect to Mongodb Server');
    }
        console.log('Connect to Mongodb Server');
        const db = client.db('TodoApp'); // Connecting the the DB

        //Connecting to collaction Todos Table and insert data
        db.collection('Todos').insertOne({
                text: 'going to Mall',
                completed: 'false'
            }, (err, result)=>{
                if(err){
                    return console.log('Unable to insert todo', err);
                }   
            console.log(JSON.stringify(result.ops, undefined, 2));
            client.close();
        });
         /*db.collection('Users').insertOne({
            name: 'Mohd',
            age: 52,
            location: 'Kuwait'
        }, (err, result) => {
            if (err) {
                return console.log('Unable to insert todo', err);
            }
                console.log(result.ops);
                console.log(result.ops[0]._id);
                console.log(result.ops[0]._id.getTimestamp());
                console.log(result.ops[0].name);
                var obj = new ObjectID();
                console.log(obj);
                console.log(obj.getTimestamp());
        });
        */     
    });