'use strict';

const findElementsByAttribute = (attribute) => {
  let nodeList = document.querySelectorAll('[' + attribute + ']');
  let nodeArray = [];

  for (let i = 0; i < nodeList.length; i++) {
    nodeArray.push(nodeList[i]);
  }

  return nodeArray;
}
