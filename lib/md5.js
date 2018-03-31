const crypto = require('crypto')
let instance = null
class MD5 {
    constructor() {
        if (!instance) {
            instance = this
        }
        return instance
    }
    async sign (data) {
        if (typeof data == 'object') {
            return crypto.createHash('md5').update(JSON.stringify(data)).digest('hex')
        }
        return crypto.createHash('md5').update(data).digest('hex')
    }
    
}
module.exports = new MD5()