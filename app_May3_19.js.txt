// const validator = require('validator')
const chalk = require('chalk')

// const getNotes = require('./notes.js')
// const msg = getNotes()

// console.log(msg)

// console.log(validator.isEmail('11abc@example.com'))
// console.log(validator.isURL('https://abc.co.jp'))

const GreenMsg = chalk.green('Success!')
// console.log(chalk.green('Success!'))
console.log(GreenMsg)
const boldMsg = chalk.red.bgBlue.bold.inverse('Error!')
// console.log(chalk.bgBlue.bold.inverse('Warning.'))
console.log(boldMsg)

// const add = require('./utils.js')
// const sum = add(4, -3)
// console.log(sum)
// console.log(name)

