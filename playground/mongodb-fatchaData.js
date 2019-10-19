const MongoClient = require('mongodb').MongoClient
const ObjectID = require('mongodb').ObjectID
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to Mongodb Server')
  }
  console.log('Connect to Mongodb Server')
  const db = client.db('TodoApp') // Connecting the the DB
  // fetch all data
  /* db.collection('Todos').find().toArray().then((doc)=>{
           console.log('ToDos');
           console.log(doc);
        },(err)=>{
            console.log('Unbale to get data', err);
        })
        */

  // fetch certrin values query
  /* db.collection('Todos').find({ completed: 'false' }).toArray().then((doc) => {
    console.log('.....ToDos.....')
    console.log(doc)
  }, (err) => {
    console.log('Unable to get data', err)
  })
  */
  db.collection('Todos').find({
    _id: new ObjectID('5da4a62ff87a0956648b6ccc')
  }).toArray().then((doc) => {
    console.log('ToDos')
    console.log(doc)
  }, (err) => {
    console.log('Unable to get data', err)
  })
  client.close()
})
