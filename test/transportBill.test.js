describe('transportBill' , function(){
    it('that returns the right price based on the shift you are working. ' , function(){
      assert.equal(transportFee('morningShift'),20);
    });

    it('that returns the right price based on the shift you are working. ' , function(){
      assert.equal(transportFee('afternoonShift'),10 );
    });
    it('that returns the right price based on the shift you are working. ' , function(){
    assert.equal(transportFee('otherShift'),0);
    });
});
