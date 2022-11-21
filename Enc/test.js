const cesar = require('./index')

var message = Buffer.from('I am in your walls')

console.log('Message: ', message)

var encMessage = cesar.encrypt(10, message)

console.log('Encrypted Message: ', Buffer.from(encMessage))

console.log('Decrypted Message: ', Buffer.from(cesar.decrypt(10, encMessage)))