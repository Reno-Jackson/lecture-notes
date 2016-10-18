////////////////Function Practice 2- Bring on the Funk//////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
//- Write a function called 'getName' which takes a single object argument and returns
//the value of the 'name' property of the given object.
//- <code>getName({ name: 'Luisa', age: 25 })</code> should return 'Luisa'.

function getName(person) {
    return person.name;
};
console.log(getName({
    name: 'Luisa',
    age: 25
}))



// Write a function called 'totalLetters'
// which takes an array of strings and returns the total number of
//letters in all strings.
// <code>totalLetters(['javascript', 'is', 'awesome'])</code> should return 19.
// <code>totalLetters(['what', 'happened', 'to', 'my', 'function'])</code> should
//return 24.
var words = ['Here', 'are', 'some', 'words'];

function totalLetters() {
    var smush = words.join('');
    console.log(smush.length)
};

// Write a function called 'keyValue'
// which takes two arguments and
// returns a new object with a key of the first argument
// and the value of the second argument.
// <code>keyValue('city', 'Denver')</code> should return Object {city: "Denver"}.

function keyValue(key, value) {
    var obj = {};
    obj[key] = value;
    return obj;
}
console.log(keyValue('city', 'Denver'));

// Write a function called 'negativeIndex'
// which takes an array and a negative number,
// and returns the value from the array at the given negative index,
// as if the array was circular, i.e. arr.length+num.
// <code>negativeIndex(['a', 'b', 'c', 'd', 'e'], -2)</code> should return 'd'.
// <code>negativeIndex(['jerry', 'sarah', 'sally'], -1)</code> should return 'sally'.

function negativeIndex(magic, doobie) {
    var i = magic.length + doobie;
    return magic[i];
};
console.log(negativeIndex(['a', 'b', 'c', 'd', 'e'], -2));

// - Write a function called 'removeM' which takes a single string argument and removes all 'm' characters from the string.
// The function won't actually modify.
// - <code>removeM('family')</code> should return 'faily'.
// - <code>removeM('memory')</code> should return 'eory'.

function removeM(word) {
    return word.split('m').join('');
}
console.log(removeM('marmoset'))

// - Write a function called 'printObject'
// which takes a single object argument and console.log's
// each key-value pair in the format <code>key is value</code> on separate lines.
// - <code>printObject({ a: 10, b: 20, c: 30 })</code> should print: a is 10 b is 20 c is 30.
// - <code>printObject({ firstName: 'pork', lastName: 'chops' })</code> should print: firstName is pork lastName is chops.

function printObject(value) {
    for (print in value) {
        console.log(`${print} is ${value[print]}`);
    }
}


// - Write a function called 'vowels' which takes a string
// and returns an array of all the vowels in the string, including duplicates.
// - <code>vowels('alabama')</code> should return ['a', 'a', 'a', 'a'].
// - <code>vowels('What evil odd ducks!')</code> should return ['a', 'e', 'i', 'o', 'u'].

function vowels(str) {
    var result = [];
    for (var i = 0; i < str.length; i++) {
        if (str[i] === 'a' ||
            str[i] === 'e' ||
            str[i] === 'i' ||
            str[i] === 'o' ||
            str[i] === 'u') {
            result.push(str[i])
        }
    }
    return result;
}
console.log(vowels('dickbutt loves pussyass'))
