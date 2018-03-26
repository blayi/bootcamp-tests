describe('findItemsOver20' , function(){
    it('confirms that plates  are from Paarl' , function(){
assert.deepEqual(findItemsOver20 ([{name : 'apples', qty : 10},
    {name : 'pears', qty : 37}]),[ {"name" : 'pears', "qty" : 37}])

  });

    it('confirm that plates are not from Paarl ' , function(){
assert.deepEqual(findItemsOver20([ {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3}]), [ {"name" : 'bananas', "qty" : 27}]);
  });
});
