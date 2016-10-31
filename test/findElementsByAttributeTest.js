'use strict';

const expect = chai.expect;

describe('findElementsToFill', () => {
  it('should return an array of elements within the body', () => {
    let foundElements = new findElementsByAttribute();

    expect(foundElements).to.be.a('array');
    expect(foundElements).to.not.be.a('string');
  });

  it('should not contain elements without the specified selector', () => {
    let foundElements = new findElementsByAttribute('data-fillytext');

    expect(foundElements[0].hasAttribute('data-fillytext')).to.equal(true);
    expect(foundElements[1].hasAttribute('data-fillytext')).to.equal(true);
    expect(foundElements[2].hasAttribute('data-fillytext')).to.equal(true);
    expect(foundElements[3].hasAttribute('data-fillytext')).to.equal(true);
    expect(foundElements[4].hasAttribute('data-fillytext')).to.equal(true);
    expect(foundElements[5].hasAttribute('data-fillytext')).to.equal(true);
  });
});
