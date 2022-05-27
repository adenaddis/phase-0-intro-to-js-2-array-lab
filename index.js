// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat() {
    cats.push('Ralph');
} 
function destructivelyPrependCat() {
    cats.unshift('Bob');
} 
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
// function appendCat() {
//     cats.slice();

function appendCat() {
    const CopyOfCats = cats.slice();
    CopyOfCats.push('Broom');
    return CopyOfCats
}
function prependCat() {
    const CopyOfCats = cats.slice();
    CopyOfCats.unshift('Arnold');
    return CopyOfCats
}
function removeLastCat() {
    const CopyOfCats = cats.slice();
    CopyOfCats.pop();
    return CopyOfCats
}
function removeFirstCat() {
    const CopyOfCats = cats.slice();
    CopyOfCats.shift();
    return CopyOfCats
}
