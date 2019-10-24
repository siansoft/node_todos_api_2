var { mongoose } = require('./../server/db/mongoose')
var { User } = require('./../server/models/user')

var id = '5dac187d4174610f7018cb04'

User.findById(id).then((user) => {
  if (!user) {
    return console.log('User not found')
  }
  console.log(JSON.stringify(user, undefined, 2))
}, (e) => {
  console.log(e)
})
