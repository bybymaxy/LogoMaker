class Circle {
    constructor() {
      this.color = '';
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
      return `<circle cx="50%" cy="50%" r="20%" fill="${this.color}" />`;
    }
  }
  
  class Triangle {
    constructor() {
      this.color = '';
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
      return `<polygon points="900,300 750,500 1050,500" fill="${this.color}" />`;
    }
  }
  
  class Square {
    constructor() {
      this.color = '';
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
      return `<rect x="720" y="220" width="25%" height="50%" fill="${this.color}" />`;
    }
  }

  module.exports = {
    Circle,
    Triangle,
    Square,
  };