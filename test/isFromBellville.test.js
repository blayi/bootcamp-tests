describe('tells if its frm bellville' , function(){
    it('confirm tht reg num is frm bellville' , function(){
        assert.equal(isFromBellville('CYasanga'), true);


    });

    it('confirm reg is not frm bellville' , function(){
        assert.equal(isFromBellville('CTsonke'), false);


    });

});
