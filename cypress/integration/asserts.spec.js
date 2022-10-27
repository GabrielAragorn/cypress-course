
//Veryfing some simple variables
it('Equality', () => {
    const a = 1

    expect(a).equal(1)
    expect(a, 'Deveria ser 1').equal(1)
    expect(a).to.be.equal(1) 
});

//Verifying boolean, null and undefined variables
it('Truthy', () => {
    const a = true
    const b = null
    let c;

    expect(a).to.be.true
    expect(true).to.be.true
    expect(b).to.be.null
    expect(a).not.to.be.null
    expect(c).to.be.undefined 
});

//Verifying objects
it('Object Equality', () => {
    const obj = {
        a: 1,
        b: 2
    }
    
    expect(obj).equal(obj)
    expect(obj).equals(obj)
    expect(obj).eq(obj)
    expect(obj).to.be.equal(obj)
    expect(obj).to.be.deep.equal({a: 1, b: 2})
    expect(obj).eql({a: 1, b: 2})
    expect(obj).include({a: 1})
    expect(obj).to.have.property('b')
    expect(obj).to.have.property('b', 2)
    expect(obj).to.not.be.empty
    expect({}).to.be.empty
})


//Verifying arrays
it('Arrays', () => {
    const arr = [1,2,3]
    expect(arr).to.have.members([1,2,3])
    //Verifies if the array has a specific content
    expect(arr).to.include.members([1, 3])
    expect(arr).to.not.be.empty
    expect([]).to.be.empty
});

//Verifying types
it('Types', () => {
    const num = 1
    const str = 'Aragas'

    expect(num).to.be.a('number')
    expect(str).to.be.a('string')
    expect({}).to.be.an('object')
    expect([]).to.be.an('array')
})

//Verifying strings
it('String', () => {
    const str = 'String de teste'

    expect(str).to.be.equal('String de teste')
    expect(str).to.have.length(15)
    expect(str).to.contains('de')
    //Veryfying using Regex
    expect(str).to.match(/de/) //includes
    expect(str).to.match(/^String/) //starts with
    expect(str).to.match(/teste$/) //ends with
    expect(str).to.match(/.{15}/) //has 15 letters
    expect(str).to.match(/\w+/) //only has letters
    expect(str).to.match(/\D+/) //doesn't has letters

});

//Verifying numbers

it('Numbers', () => {
    const number = 4; 
    const floatNumber = 5.2123

    expect(number).to.be.equal(4)
    expect(number).to.be.above(3)
    expect(number).to.be.below(7)
    expect(floatNumber).to.be.equal(5.2123)
    expect(floatNumber).to.be.closeTo(5.2, 0.1)
    expect(floatNumber).to.be.above(5)
});


