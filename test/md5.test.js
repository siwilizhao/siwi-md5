const md5 = require('../index')
const expect = require('chai').expect
    
describe('md5.js', () => {
    it('md5', async () => {
        const md5_value = '202cb962ac59075b964b07152d234b70'
        const res = await md5.sign('123')
        console.log(res)
        expect(res).to.be.a('string')
        expect(res).to.equal(md5_value)
    })
});