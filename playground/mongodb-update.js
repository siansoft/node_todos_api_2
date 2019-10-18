const MongoClient = require('mongodb').MongoClient
const ObjectID = require('mongodb').ObjectID
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to Mongodb Server')
  }
  console.log('Connect to Mongodb Server')
  const db = client.db('TodoApp') // Connecting the the DB
  db.collection('Todos').findOneAndUpdate(
    { _id: new ObjectID('5da4a62ff87a0956648b6ccc') },
    { $set: { completed: true } }, { returnOriginal: false }).then((result) => {
    console.log(result)
  })
  client.close()
})
// console.log('connection to Mongodb Server Closed');
