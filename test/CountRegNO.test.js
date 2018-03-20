describe('CountRegNO  From Gauteng' , function(){
    it('confirm tht RegNO is from Gauteng' , function(){
        assert.equal(CountRegNO("0123GP"), true);


    });
        it('RegCheck is Not From Gauteng' , function(){
            assert.equal(CountRegNO("CP012"), false);

    });

});
