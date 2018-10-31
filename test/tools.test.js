
describe('createElement', function () {
    let newObj = tools.createElement("DIV",{atrs:{
        className:"test-class-name"
    }},document.getElementsByTagName('body')[0])
    let newObjChild = tools.createElement("BUTTON",{atrs:{
        id:"new-button",
        name:"my-button"
    }},newObj)
    it('create new div. ClassName:test-class-name', function () {
        chai.expect(newObj.className).to.equal("test-class-name");
    });
    it('create new button under new div. Id:new-button', function () {
        chai.expect(newObjChild.id).to.equal("new-button");
    });
    it('new button. name:my-button', function () {
        chai.expect(newObjChild.name).to.equal("my-button");
    });
});
describe('formatNumber', function () {
    it('12345678 to "12,345,678"', function () {
        chai.expect(tools.formatNumber(12345678)).to.equal("12,345,678");
    });
    it('1234567 to "1,234,567"', function () {
        chai.expect(tools.formatNumber(1234567)).to.equal("1,234,567");
    });
    it('123456 to "123,456"', function () {
        chai.expect(tools.formatNumber(123456)).to.equal("123,456");
    });
});
describe('delComma', function () {
    it('"87,654,321" to "87654321"', function () {
        chai.expect(tools.delComma("87,654,321")).to.equal("87654321");
    });
});