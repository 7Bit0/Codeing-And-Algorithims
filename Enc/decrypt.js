/**
 * 
 * @param {number} key 
 * @param {ArrayBuffer} message 
 */
function decrypt(key, message) {
    var k = key % 62

    for (var i in message) { message[i]-=k }

    return message
}

module.exports = decrypt