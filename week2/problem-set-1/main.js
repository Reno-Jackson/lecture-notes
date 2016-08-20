// JS. Problem Set #1
console.log("asdfghjkl")
    // Question 1.) funtion letterCapitalize
var newstring = "";

function letterCapitalize(word) {
    var array = (word.split(" "));
    for (var index = 0; index < array.length; index++) {
        console.log(array[index]);
        var string = array[index].charAt(0).toUpperCase() + array[index].substring(1);
        console.log(string);
        newstring = newstring + " " + string;
    }
    console.log(newstring);
}

// Question 2.) Word Count total

function wordCount(string) {
    var array = string.split(" ");
    console.log(array.length)
}
