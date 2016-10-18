console.log('test');

// Write a function firstReverse that takes a single string parameter and returns the string in reverse order.
function firstReverse(str) {
    var word = '';
    for (var i = str.length - 1; i >= 0; i--)
        word += str[i];
    return word;
}
console.log(firstReverse('em evag yeht taht esac eht si redrum'))


// Write a function swapCase that takes a single string parameter and swaps the case of each character.
// For example: if a string is "Hello World" the output should be "hELLO wORLD".
// Let numbers and symbols stay the way they are.

function swapCase(letters) {
    var newLetters = '';
    for (var i = 0;
        var i < letters.length; i++) {
        if (letters[i] === letters[i].toLowerCase()) {
            newLetters += letters[i].toUpperCase();
        } else {
            newLetters += letters[i].toLowerCase();
        }
    }
    console.log(newLetters);
    return newLetters;
}

var letters = 'Ham Sandwhich'
