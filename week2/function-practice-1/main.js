// triple 5
function fiveTres(){
    for (var tripleFive = 0; tripleFive < 3; tripleFive++) {
        console.log("Five!")
        }
}
fiveTres();

// lastLetter
lastLetter("string")

function lastLetter(string) {
    console.log(string.substring(string.length - 1, string.length))
}
lastLetter();

// square

function square(num) {
    return num * num
}

// negate

function negate(neg) {
    return neg * -1
}

// toArray
function toArray(num1, num2, num3) {
    return [num1, num2, num3]
}

// startsWithA
function startsWithA(word) {
    if (word.substring(0, 1) == "a" || word.substring(0, 1) == "A") {
        console.log("true");
    }
    else {
        console.log("Use word with an A or a");
    }
}
// excite
function excite(words) {
    return words + "!!!"
}

// sun
function sun(word) {
    for (i = 0; i < word.length; i++) {
        if (word.substring(i, i + 3) == "sun") {
            console.log("True");
            return true
        } else {
            return false
        }
    }
    console.log("Type word with sun in it");
}
// tiny
function tiny(number) {
    if (number > 0 && number < 1){
        console.log("True")
        return true
    }
    else {
        return false
    }
}

// getSeconds
function getSeconds(time) {
    var str=time.split(":")
    console.log ((str[0]*60)+(str[1]*1))
}
