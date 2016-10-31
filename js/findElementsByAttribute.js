'use strict';

const findElementsByAttribute = (attribute) => {
  let nodeList = document.querySelectorAll('[' + attribute + ']');
  let nodeArray = [];

  // loop through the node list that is generated
  for (let i = 0; i < nodeList.length; i++) {
    nodeArray.push(nodeList[i]); // push each found elemnt into an array
  }

  console.log(nodeArray);
  return nodeArray;
}
