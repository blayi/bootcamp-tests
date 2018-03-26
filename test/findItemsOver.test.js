describe('findItemsOver' , function(){
    it('confirms that plates  are from Paarl' , function(){
assert.deepEqual(findItemsOver([{name : 'apples', qty : 10},
    {name : 'pears', qty : 37}],20),[ {"name" : 'pears', "qty" : 37}])

  });

    it('confirm that plates are not from Paarl ' , function(){
assert.deepEqual(findItemsOver([ {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3}],20), [ {"name" : 'bananas', "qty" : 27}]);
  });
});
