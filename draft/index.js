"use strict";

/* const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        background: 'red'
    },
    log: function() {
        console.log('test_log');
    }
};

console.log(options);

delete options.name;

console.log(options);

for (let key in options) {
    console.log(`property ${key}, value - ${options[key]}`);
}

console.log(Object.keys(options));
options.log();

const {border, background} = options.colors;
console.log(border, background); 

let arr = [1, 2, 3, 4, 5, 6, 7];
arr.pop();

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let value of arr) {
    console.log(value, 'for ... of');
}

// arr[99] = 0;

console.log(arr);

let new_arr = arr.forEach((item, i, arr) => {console.log(item + 5)});

console.log(new_arr);

let string = 'QWR;FQW;QWR;AWR';
console.log(string.split(';'));

let names = ['James', 'John', 'Erick', 'Ann'];
console.log(names.join(', '));

let num_array = [1, 3, 4, 13, 51, 9, 10];
console.log(num_array);
num_array.sort();
console.log(num_array);
num_array.sort((a, b) => {return a - b});
console.log(num_array); 

let a = 5, 
    b = a;

b += 5;

console.log(b);
console.log(a);

const obj = {
    a: 5, 
    b: 1
}

const copy = obj; // link

copy.a = 10;
console.log(copy);
console.log(obj);

function copy(mainObject) {
    let newObject = {};
    
    for (let key in mainObject) {
        newObject[key] = mainObject[key];
    } 

    return newObject;
}

let obj = {
    a: 1,
    b: 2
};

let newObj = copy(obj);

newObj.a = 111;
console.log(obj);
console.log(newObj);

const video = ['youtube', 'rutube', 'tiktok'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'test'];

function log (a, b, c) {
    console.log(a, b, c);
}

log(...[3, 4, 99]);

const array = ["a"]  */

let str = "some";
let strObj = new String(str);

console.log(typeof(str));
console.log(typeof(strObj));

console.dir([1, 2, 3])

const soldier = {
    health: 100,
    armor: 100,
    sayHello: function () {
        console.log('hello');
    }
};

/* const john = {
    health: 50
}

// john.__proto__ = soldier;

Object.setPrototypeOf(john, soldier); */

const john = Object.create(soldier)

console.log(john.armor);

john.sayHello();
