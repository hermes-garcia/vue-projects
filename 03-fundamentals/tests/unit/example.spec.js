
//Test subject suite
describe('Example component', () => {
  test('Must be greater than 10', () => {

    //Arrange
    let value = 9;

    //Act
    value = value + 2;

    //Assertion
    expect(value).toBeGreaterThan(10);
  });
});