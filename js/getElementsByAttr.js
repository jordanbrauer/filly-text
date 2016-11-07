const getElementsByAttr = (attribute = '*') => {
  // create a nodelist of elements and an empty array.
  const nl = document.querySelectorAll(attribute);
  const arr = [];

  // loop through the node list that is generated
  // and push each matching elemnt into the empty array.
  for (let i = 0; i < nl.length; i += 1) {
    arr.push(nl[i]);
  }

  // return the now full array.
  return arr;
};

// export default { getElementsByAttr };
