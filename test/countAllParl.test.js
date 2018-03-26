describe('countAllParl' , function(){
    it('confirms that plates  are from Paarl' , function(){
assert.equal(allPaarl ('CJ 123'), true);

  });

    it('confirm that plates are not from Paarl ' , function(){
assert.equal(allPaarl ('CK 123'), false);
  });
});
