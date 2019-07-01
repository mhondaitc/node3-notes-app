const validator = require('validator')

const getNotes = require('./notes.js')
const msg = getNotes()

console.log(msg)

console.log(validator.isEmail('11abc@example.com'))
console.log(validator.isURL('https://abc.co.jp'))

// const add = require('./utils.js')
// const sum = add(4, -3)
// console.log(sum)
// console.log(name)

