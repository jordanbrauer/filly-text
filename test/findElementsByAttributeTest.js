/** command line testing
 */
// var chai                = require('chai'),
//     expect              = chai.expect,
//     sinon               = require('sinon'),
//     findElementsToFill  = require('../js/findElementsToFill.js').findElementsToFill;

/** browser testing
 */
var expect = chai.expect;

describe('findElementsToFill', function() {
  it('should return an array of elements within the body', function() {
    var foundElements = new findElementsByAttribute();

    expect(foundElements).to.be.a('array');
    expect(foundElements).to.not.be.a('string');
  });

  it('should not contain elements without the specified selector', function() {
    var foundElements = new findElementsByAttribute('data-fillytext');

    expect(foundElements[0].hasAttribute('data-fillytext')).to.equal(true);
    expect(foundElements[1].hasAttribute('data-fillytext')).to.equal(true);
    expect(foundElements[2].hasAttribute('data-fillytext')).to.equal(true);
    expect(foundElements[3].hasAttribute('data-fillytext')).to.equal(true);
    expect(foundElements[4].hasAttribute('data-fillytext')).to.equal(true);
    expect(foundElements[5].hasAttribute('data-fillytext')).to.equal(true);
  });
});
