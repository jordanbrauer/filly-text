var chai    = require('chai'),
    assert  = chai.assert;

var addClass = require('../js/className.js').addClass;

describe('addClass', function() {
  // case 1
  it('should add a class to an element', function() {
    var element = { className: '' };

    addClass(element, 'test-class');

    assert.equal(element.className, 'test-class');
  });

  // case 2
  it('should not add a class which already exists');
});
