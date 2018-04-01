const md5 = require('../index')
const expect = require('chai').expect
    
describe('md5.js', () => {
    it('sign', async () => {
        const md5_value = '202cb962ac59075b964b07152d234b70'
        const res = await md5.sign('123')
        console.log(res)
        expect(res).to.be.a('string')
        expect(res).to.equal(md5_value)
    })
    it('verify true', async () => {
        const md5_value = '202cb962ac59075b964b07152d234b70'
        const res = await md5.verify('123', md5_value)
        console.log(res)
        expect(res).to.equal(true)
    })
    it('verify false', async () => {
        const md5_value = '202cb962ac59075b964b07152d234b701'
        const res = await md5.verify('123', md5_value)
        console.log(res)
        expect(res).to.equal(false)
    })
});