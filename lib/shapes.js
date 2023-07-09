// define class Shape as constructor to intialize color and set color value
class Shape {
    constructor() {
        this.color = ""
    }
    setColor(color) {
        this.color = (color);
    }
};

// Triangle class that extends Shape and renders an SVG Triangle based on constructor.
class Triangle extends Shape{
    render(){
        return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}">`
    }
};

// Circle class that extends Shape and renders an SVG Circle based on consturctor.
class Circle extends Shape{
    render(){
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}">`
    }
};

// Square class that extends Shape and renders an SVG Square based on constructor.
class Square extends Shape{
    render(){
        return `<rect x="50" height="200" width="200" fill="${this.color}">`
    }
};

module.exports = {Triangle, Circle, Square};