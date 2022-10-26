/// references types = "cypress" />

//only indicates that only a specified test will run
it.only('An external test...', () => {
    
});

//describe creates a group of tests
describe('Should group tests...',() => {
    //skip skips a test
    it.skip('A internal test...', () => {
        
    });

    describe.skip('Should group more specific tests...', () => {
        it('A specific test...', () => {
            
        });
    })
})