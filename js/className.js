var addClass = function addClass(el, newClass) {
  if (el.className.indexOf(newClass) === -1) {
    el.className += newClass;
  }
}

// mocha node environment
if (!typeof exports !== 'undefined') {
  exports.addClass = addClass;
}
