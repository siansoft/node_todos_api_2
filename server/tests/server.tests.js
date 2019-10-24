const expect = require('expect')
const request = require('supertest')

const { app } = require('./../server')
const { Todo } = require('./../models/todo')

describe('POST/todos', (done) => {
  var text = 'Test todo text'
  request(app)
    .post('/todos')
    .send({ text })
    .expect(200)
    .expect((res) => {
      expect(res.body.text).toBe(text)
    })
})
