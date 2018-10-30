const tools = require('../tools')
const should = require('chai').should()
const jsdom = require('mocha-jsdom')


describe('#createElement',() => {
    jsdom()
    it('should equal className:test', done =>{
        let body = document.createElement('body')
        let newElement = tools.tools.createElement("DIV",{atrs:{
            className:"test"
        }},document.getElementsByTagName('body')[0])
        newElement.className.should.equal('test')
        done()
    })
})