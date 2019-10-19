var mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/TodoApp')

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    require: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
})

/*
var newTodo = new Todo({
  text: 'Cook dinner'
})
newTodo.save().then((doc) => {
  console.log('save todo', doc)
}, (e) => {
  console.log('Unable to save', e)
})
*/
var otherTodo = new Todo({
  text: 'Feed the Dog',
  completed: true,
  completedAt: 123
});

otherTodo.save().then((doc) => {
  console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
  console.log('Unable to save', e)
})

