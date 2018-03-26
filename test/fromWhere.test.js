describe('fromWhere' , function(){
    it('a car registration number as a parameter and returns the town the car is from. ' , function(){
      assert.equal(fromWhere('CY'),'Bellville');
    });

    it('a car registration number as a parameter and returns the town the car is from.' , function(){
      assert.equal(fromWhere('CJ'),'Paarl');
    });
    it('a car registration number as a parameter and returns the town the car is from.' , function(){
      assert.equal(fromWhere('CA'),'Cape Town');
    });

});
