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

const array = ["a"]  

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

/ const john = {
    health: 50
}

// john.__proto__ = soldier;

Object.setPrototypeOf(john, soldier); /

const john = Object.create(soldier)

console.log(john.armor);

john.sayHello(); 

console.log(typeof(String(null)));
console.log(typeof(5 + '1'));

const num = 5;
console.log('https://vk.com/catalog/' + num)

const fontSize = 26 + 'px';

console.log(typeof(Number('1')));
console.log(typeof(+'5'))
console.log(Number('g'))

// 0, '', null, undefined, NaN == false
// 1)
let switcher = null;

if (switcher) {
    console.log('Working...');
}

switcher = 'd'; // 43, ' '

if (switcher) {
    console.log('Working...');
}

// 2)
console.log(Boolean('w'))

// 3)
console.log(!!'true') 
test(1);
function test(arg) {
    console.log(arg)
}

function createCounter() {
    let counter = 0;

    const myFunction = function () {
        counter += 1;
        return counter;
    }

    return myFunction;
}

const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();

console.log(c1, c2, c3); 

const firstArray = [1, 2, 3];
const secondArray = firstArray.slice();
secondArray[3] = 1;
console.log(firstArray, secondArray);

const video = ['youtube.com', 'vimeo.com', 'rutube.ururu'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'test'];

video[0] = '123123'

console.log(internet);

function sum(a, b, c) {
    console.log(a + b + c)
}

sum(...[1, 2, 3])

const array = ['a', 'b'];
const second_array = [...array];

array[0] = 1;
console.log(array, second_array);

const q = {
    one: 1,
    two: 2,
    test: {
        x: 1
    }
}

const newObj = {...q}
newObj.two = 3
q.test.x = 100
newObj.test.x = 13
console.log(q, newObj)



let str = "some";
let strObj = new String(str);

console.log(typeof(str), str);
console.log(typeof(strObj), strObj);



const soldier = {
    health: 150, 
    armor: 0,
    sayHello: function() {
        console.log('hello')
    }
};

const john = {
    armor: 100
};
const johnSecond = Object.create(soldier);

// john.__proto__ = soldier; --- depcrecated

Object.setPrototypeOf(john, soldier);

console.log(john, john.health);
john.sayHello();

console.log(null || 2 && 3 || 4);

const a = [1, 2, 3],
      b = [1, 2, 3];

console.log(a == b);

console.log(0 || "" || 2 || undefined || true || false);



const test_element = document.getElementById('test');
console.log(test_element);

const get_divs = document.getElementsByTagName('div');
console.log(get_divs, `first: ` , get_divs[0]);

const get_elements = document.querySelectorAll('.circle > .circle2');
console.log(get_elements);

const get_first_div = document.querySelector('div');
console.log(get_first_div);



const box = document.querySelector('.box');
box.style.cssText = 'border: 5px solid gray;';
box.style.width  = '100px';
box.style.height = '100px';
box.style.backgroundColor = 'blue';

const circles = document.querySelectorAll('.circle__list > .circle__list-item');

circles.forEach(item => {
    item.style.width = '50px';
    item.style.height = '50px';
    item.style.borderRadius = '100%';
    item.style.backgroundColor = 'black';
});

const div = document.createElement('div');
const text = document.createTextNode('123123test');

div.classList.add('black');

document.body.append(div);
document.body.append(div);
document.body.append(div);
circles[1].remove();

*/