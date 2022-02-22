
//Defining of a filter function that accepts an array of # and returns a new array of odd numbers
function isOdd(number) {
    return number % 2 != 0;
}

function filter(number, fn) {
    let results = [];
    for (const number of numbers) {
        if (fn(number)) {
            results.push(number);
        }
    }
    return results;
}
let numbers = [1, 2, 3, 4, 7, 3, 5, 6];
console.log(filter(numbers, isOdd));





// filter function to return even numbers

function isOdd(number) {
    return number % 2 != 0;

}
function is Even(number) {
    return number % 2 == 0;
}

function filter(number, fn) {
    let results = [];
    for (const number of numbers) {
        if (fn(number)) {
            results.push(number);
        }
    }
    return results;
}
let numbers = [1, 2, 3, 4, 7, 3, 5, 6];
console.log(filter(numbers, isOdd));
console.log(filter(numbers, isEven));


//Callback as an anonymous function
function filter(numbers, callback) {
    let results = [];
    for (const number of numbers) {
        if (callback(number)) {
            results.push(number);
        }
    }
    return results;
}
let numbers = [1, 2, 3, 4, 7, 3, 5, 6];

let oddNumbers = filter(numbers, function (number) {
    return number % 2 != 0;
;});

console.log(oddNumbers);


// Use of arrow function
function filter(numbers, callback) {
    let results = [];
    for (const number of numbers) {
        if (callback(number)) {
            results.push(number);
        }
    }
    return results;
}
let numbers = [1, 2, 3, 4, 7, 3, 5, 6];

let oddNumber = filter(numbers, (number) => number % 2 != 0);
console.log(oddNumbers);


//Asynchronous Function
function download(url) {
   
}

function process(picture) {

}

//Asynchronous function setTimeout 
function donwload(url) {
    setTimeout(() => {
        console.log(`Downloading ${url}...`);

    },1000);
}

function process( picture)  {
    console.log(`Processing ${picture}`);
}

