var should = require('chai').should();

describe("SnackMachine", () => {
    describe("inserting Money", () => {
        it("should be one pound1 when one pound coin is inserted", function() {
            pound().should.equal(1.0);
        });
    });

    describe("returning Money", () => {
        it("should be one pound1 when one pound coin is inserted", function() {
            //Implement assertions
        });
    });
});

let SnackMachine = (function () {
    return {
        insert : function(pennyCount, tenPenceCount, fiftyPenceCount, poundCount, fivePoundCount, tenPoundCount) {
            return (pennyCount * 0.01) + (tenPenceCount * 0.1) + (fiftyPenceCount * 0.5) + poundCount + (fivePoundCount * 5.0) + (tenPoundCount * 10.0);  
        }
    };
}());


function pound() {
    return SnackMachine.insert(0, 0, 0, 1, 0, 0, 0);
}
