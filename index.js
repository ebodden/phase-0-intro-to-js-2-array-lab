// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
cats.push(name)
}

function  destructivelyPrependCat(name) {
    cats.unshift(name)
} 

function destructivelyRemoveLastCat() {
    cats.pop()
}
function destructivelyRemoveFirstCat() {
cats.shift()
}

function appendCat(name) {
    cats.slice()
}


function appendCat(name) {
    const newArray = cats.slice();
    newArray.push(name);
    return newArray;
}
function prependCat(name) {
    const newArray = cats.slice()
    newArray.unshift(name)
    return newArray;
}

function removeLastCat(name){
    const newArray = cats.slice()
    newArray.pop(name)
    return newArray;
}

function removeFirstCat() {
    const newArray = cats.slice()
    newArray.shift(name)
    return newArray;
}