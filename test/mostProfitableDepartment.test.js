describe('mostProfitableDepartment' , function(){
    it('confirms that plates  are from Paarl' , function(){
assert.deepEqual(mostProfitableDepartment ([{department : 'hardware', sales : 7500, day : 'Tuesday'},
    {department : 'outdoor', sales : 2505, day : 'Tuesday'}]), 'hardware')

  });

    it('confirm that plates are not from Paarl ' , function(){
assert.deepEqual(mostProfitableDepartment([ {department : 'outdoor', sales : 12006, day : 'Friday'},
    {department : 'carpentry', sales : 16109, day : 'Friday'}]),"carpentry" );
  });
});
