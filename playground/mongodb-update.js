const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to Mongodb Server')
  };
  console.log('Connect to Mongodb Server')
  const db = client.db('TodoApp') // Connecting the the DB
  
  })
  // client.close();
  // console.log('connection to Mongodb Server Closed');
})
