const { binarySearch, bubbleSort } = require('./dist');

describe('binarySearch tests', () => {
  test('Should return 5', () => {
    expect(binarySearch([1,2,4,8,16,32,64,128], 32)).toBe(5);
  });

  test('Should return 0', () => {
    expect(binarySearch([1,3,5,7,9], 1)).toBe(0);
  });

  test('Should return 1', () => {
    expect(binarySearch([1,3,5,7,9], 3)).toBe(1);
  });

  test('Should return 3', () => {
    expect(binarySearch([1,3,5,7,9], 7)).toBe(3);
  });

  test('Should return 4', () => {
    expect(binarySearch([1,3,5,7,9], 9)).toBe(4);
  });

  test('Should return null', () => {
    expect(binarySearch([1,3,5,7,9], 10)).toBe(null);
  });

  test('Should return null', () => {
    expect(binarySearch([1,3,5,7,9], 0)).toBe(null);
  });
});

describe('bubbleSort tests', () => {
  test('Should sort array', () => {
    const result = bubbleSort([1,8,2,4,32,64,16,128]);
    expect(result).toEqual([1,2,4,8,16,32,64,128]);
  });
});
