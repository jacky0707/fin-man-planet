describe('dreamShowUp', function () {
    it('check dream was created and add into planet element', function () {
        chai.expect(viewThings.dreamShowUp("house").id).to.equal("house0");
        chai.expect(document.getElementsByClassName('planet')[0].childNodes[0].id).to.equal("house0");
    });
});