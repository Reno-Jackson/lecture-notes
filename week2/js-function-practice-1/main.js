// triple 5
function tripleFive(){
    var fiveCubed;
    for (fiveCubed = 0; fiveCubed < 3; fiveCubed++){
  // Run 3 times, with values of step 0 through 3.
        console.log('Five!');
    }
}
tripleFive();


// Last Letter
function lastLetter(word){
    console.log(word.charAt(word.length-1))
}
lastLetter('word');

// Sqaure Function

function square(num){
    console.log(num*num);
}
square(12);

// Negate
function negate(num){
    console.log(num *(-1))
}
negate(88);

// toArray
function toArray(arg1, arg2, arg3){
    return([arg1, arg2, arg3])
}


// startwithA
function startWithA(word){
    if(word.startsWith('A') || word.startsWith('a')){
        return true
    } else{
        return false
    }
}
console.log(startWithA('qwerty'));
console.log(startWithA('acetabulum'));
console.log(startWithA('appendix'));

// excite
function excite(word){
    return(word +'!!!')
}

// Sun function
function sun(){

}
// tiny function
function tiny(num){
    if (num > 0 && num < 1){
        return true;
    }else {
        return false;
    }
}

// getSeconds Function
function getSeconds(time){
    time.split(':')

}
console.log(`Your time in seconds is`)
