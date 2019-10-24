var { mongoose } = require('./../server/db/mongoose')
var { Todo } = require('./../server/models/todo')
const { ObjectID } = require('mongodb')
//var id = '6daddcf57e4b3428c43bbf48'
var id = '6daddcf57e'
/*
Todo.find({
  _id: id  
}).then((todos) => {
  // console.log('Todos', todos)
  console.log(JSON.stringify(todos, undefined,2))
})
Todo.findOne({
  _id: id  
}).then((todos) => {
// console.log('Todos', todos)
  console.log(JSON.stringify(todos, undefined,2))
})
*/
Todo.findById(id).then((todos) => {
  if (!todos) {
    return console.log('Id not found')
  }
  if (!ObjectID.isValid(id)) {
    console.log('ID not valid')
  }
  console.log(JSON.stringify(todos, undefined, 2))
}).catch((e) => console.log(e))
