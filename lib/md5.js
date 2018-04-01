const crypto = require('crypto')
let instance = null
class MD5 {
    constructor() {
        if (!instance) {
            instance = this
        }
        return instance
    }
    /**
     * MD5 加密
     * @param {*} data 
     */
    async sign (data) {
        if (typeof data == 'object') {
            return crypto.createHash('md5').update(JSON.stringify(data)).digest('hex')
        }
        return crypto.createHash('md5').update(data).digest('hex')
    }

    /**
     * 验证MD5 
     * @param {*} data 
     * @param {*} md5 
     */
    async verify (data, md5) {
        if (typeof data == 'object') {
            return crypto.createHash('md5').update(JSON.stringify(data)).digest('hex') == md5
        }
        return crypto.createHash('md5').update(data).digest('hex') == md5
    }
    
}
module.exports = new MD5()