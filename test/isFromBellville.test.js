describe('isFromBellville' , function(){
    it('if a registration number is for Bellville' , function(){
        assert.equal(isFromBellville('CYasanga'), true);


    });

    it('if a registration number is not for Bellville' , function(){
        assert.equal(isFromBellville('CTsonke'), false);


    });

});
