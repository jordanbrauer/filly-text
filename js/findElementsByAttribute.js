const findElementsByAttribute = (attribute) => {
  const nodeList = document.querySelectorAll(`[${attribute}]`);
  const nodeArray = [];

  // loop through the node list that is generated
  for (let i = 0; i < nodeList.length; i += 1) {
    nodeArray.push(nodeList[i]); // push each found elemnt into an array
  }

  // console.log(nodeArray);
  return nodeArray;
};

// export default { findElementsByAttribute };
