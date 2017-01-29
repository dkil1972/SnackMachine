var should = require('chai').should();

describe("SnackMachine", () => {
    describe("inserting Money", () => {
        it("should be one pound1 when one pound coin is inserted", function() {
            SnackMachine.insert(Money.penny);
            SnackMachine.insert(Money.fivePence);
            SnackMachine.insert(Money.tenPence);
            SnackMachine.insert(Money.pound);
            SnackMachine.getTotal().should.equal(1.16);
        });
    });

    describe("returning Money", () => {
        it("should implemented", function() {
            //Implement assertions
        });
    });
});

let SnackMachine = (function () {
    let totalAmount = 0;
    return {
        getTotal: function(){
            return Math.round(totalAmount * 1e2) / 1e2;
        },
        insert : function(amount) {
            totalAmount += amount;
        }
    };
}());

let Money = (function (){
    return {
        penny: 0.01,
        fivePence:0.05,
        tenPence:0.10,
        pound:1.0,
        fivePound:5.0,
        tenPound:10.0,
        twentyPound:20.0,
    }
}());
