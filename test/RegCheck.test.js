describe('Checking Reg. is from CPT' , function(){
    it('confirm tht RegNO is from CPT' , function(){
        assert.equal(RegCheck("CA0123"), true);


    });
        it('confirm that RegNO is not from CPT' , function(){
            assert.equal(RegCheck("CP012"), false);

    });

});
