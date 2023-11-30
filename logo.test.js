const { Circle, Triangle, Square } = require('./shapes');

describe('circle', () => {
  test('render() method should return the correct SVG string', () => {
    const circle = new Circle();
    circle.setColor('blue');
    expect(circle.render()).toEqual('<circle cx="50%" cy="50%" r="20%" fill="blue" />');
  });
});

describe('triangle', () => {
  test('render() method should return the correct SVG string', () => {
    const triangle = new Triangle();
    triangle.setColor('blue');
    expect(triangle.render()).toEqual('<polygon points="900,300 750,500 1050,500" fill="blue" />');
  });
});

describe('square', () => {
  test('render() method should return the correct SVG string', () => {
    const square = new Square();
    square.setColor('blue');
    expect(square.render()).toEqual('<rect x="720" y="220" width="25%" height="50%" fill="blue" />');
  });
});
