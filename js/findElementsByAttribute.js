var findElementsByAttribute = function(attribute) {
  var nodeList = document.querySelectorAll('[' + attribute + ']');
  var nodeArray = [];

  for (var i = 0; i < nodeList.length; i++) {
    nodeArray.push(nodeList[i]);
  }

  return nodeArray;
}
