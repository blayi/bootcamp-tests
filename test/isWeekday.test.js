describe('isWeekday' , function(){
    it('confirms if its a weekday' , function(){
assert.equal(isWeekday('Monday'), true);

  });

    it('confirm that its not a weekday ' , function(){
assert.equal(isWeekday('Saturday'), false);
  });
});
