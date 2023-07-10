const { Triangle, Circle, Square } = require('./shapes');

describe('Triangle', () => {
    test('properly creates shape', () => {
        const shape = new Triangle();
        var color = ('pink')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<triangle height="100%" width="100%" points="0,200 300,200 150,0" fill="${color}">`);
    });
});

describe('Circle', () => {
    test('properly creates shape', () => {
        const shape = new Circle();
        var color = ('blue')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}">`);
    });
});

describe('Square', () => {
    test('properly creates shape', () => {
        const shape = new Square();
        var color = ('green')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${color}">`);
    });
});