const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to Mongodb Server')
  };
  console.log('Connect to Mongodb Server')
  const db = client.db('TodoApp') // Connecting the the DB
  // db.collection('Todos').deleteMany({ text: 'going to Mall' }).then((result) => {
  // console.log(result)
  // db.collection('Todos').deleteOne({ text: 'going to Mall' }).then((result) => {
  // console.log(result)

  db.collection('Todos').findOneAndDelete({ text: 'Something to do' }).then((result) => {
    console.log(result)
  })
  // client.close();
  // console.log('connection to Mongodb Server Closed');
})
