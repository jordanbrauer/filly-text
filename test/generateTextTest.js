describe('generateText', () => {
  // test case 1
  it('should return a string with a length greater than 0', () => {
    const dataFillyText = findElementsByAttribute('data-fillytext');

    dataFillyText.forEach(generateText);

    expect(dataFillyText[0].innerHTML.length).to.be.above(0);
    expect(dataFillyText[1].innerHTML.length).to.be.above(0);
    expect(dataFillyText[2].innerHTML.length).to.be.above(0);
    expect(dataFillyText[3].innerHTML.length).to.be.above(0);
    expect(dataFillyText[4].innerHTML.length).to.be.above(0);
    expect(dataFillyText[5].innerHTML.length).to.be.above(0);
  });
});
