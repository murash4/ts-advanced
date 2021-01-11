"use strict";
const promise = new Promise(resolve => {
    setTimeout(() => {
        resolve('resolved');
    }, 2000);
});
const promise2 = new Promise(resolve => {
    setTimeout(() => {
        resolve(42);
    }, 2000);
});
promise.then(data => {
    console.log(data.toLowerCase());
});
promise2.then(data => {
    console.log(data.toFixed());
});
function mergeObjects(a, b) {
    return Object.assign({}, a, b);
}
const merged = mergeObjects({ name: 'vlad' }, { age: 26 });
const merged2 = mergeObjects({ model: 'ford' }, { year: 2010 });
function withCount(value) {
    return {
        value,
        count: `В этом объекте ${value.length} символов`
    };
}
console.log(withCount('Ho ho ho'));
console.log(withCount(['i', 'am', 'array']));
console.log(withCount({ length: 20 }));
function getObjectValue(obj, key) {
    return obj[key];
}
const person = {
    name: 'vlad',
    age: 26
};
console.log(getObjectValue(person, 'name'));
console.log(getObjectValue(person, 'age'));
class Collection {
    constructor(_items = []) {
        this._items = _items;
    }
    add(item) {
        this._items.push(item);
    }
    remove(item) {
        this._items = this._items.filter(i => i !== item);
    }
    get items() {
        return this._items;
    }
}
const strings = new Collection(['i', 'am', 'strings']);
strings.add('!');
strings.remove('am');
console.log(strings.items);
const numbers = new Collection([1, 2, 3]);
numbers.add(6);
numbers.remove(3);
console.log(numbers.items);
function createAndValidateCar(model, year) {
    const car = {};
    if (model.length > 3) {
        car.model = model;
    }
    if (year > 2000) {
        car.year = year;
    }
    return car;
}
const cars = ['Ford', 'Audi'];
console.log(cars[1]);
const ford = {
    model: 'Ford',
    year: 2020
};
//# sourceMappingURL=generic.js.map