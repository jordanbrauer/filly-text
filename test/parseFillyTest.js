describe('parseSyntaxTest', () => {
  // test case 1
  it('should return the dataset value of each found element', () => {
    const parsed = parseFilly();

    expect(parsed).to.be.a('string');
  });
});
