var should = require('chai').should();

describe("SnackMachine", () => {
    describe("inserting Money", () => {
        it("should be one pound1 when one pound coin is inserted", function() {
            SnackMachine.insert(Money.pound());
            SnackMachine.getTotal().should.equal(1.0);
        });
    });

    describe("returning Money", () => {
        it("should be one pound1 when one pound coin is inserted", function() {
            //Implement assertions
        });
    });
});

let SnackMachine = (function () {
    let totalAmount;
    return {
        getTotal: function(){
            return totalAmount;
        },
        insert : function(amount) {
            totalAmount = amount;
        }
    };
}());

let Money = (function (){
    return {
        pound: function () {
            return 1.0;
        }
    };
}());
