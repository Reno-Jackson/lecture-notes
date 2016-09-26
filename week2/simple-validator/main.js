//How to catphish dumb dudes from a girl on the Interweb

// Phone number info
telephone();
function telephone(){
    var number = prompt(`Thanks for the Kombucha babe, can I get your number ;-)`);
    if (number.charAt(3) === `-` && number.charAt(7) === `-` && number.length === 12){
        alert(`Thanks babe, you're the best`);
        console.log (`True`);
        birthdate();
    } else{
        alert(`C'mon baby, give it to me straight`);
        telephone();
    }
}

// Birthday info
function birthdate(){
var birthday = prompt(`Tell me your Birthday baby & I'll get you something nice <3`);
    if (birthday.charAt(2) === `/` && birthday.charAt(5) === `/` && birthday.length === 8){
        alert(`Thanks babe, you're the best`);
        console.log (`True`);
        postal();
    } else{
        alert(`C'mon baby, give it to me straight`);
        birthdate();
    }
}
//Postal Code info
function postal(){
var zip = prompt(`Hey Bae, what's ur 5-digit zip code? Yeah, that's a normal question`);
    if (zip.length === 5){
        alert(`Awe sweetie, you're amazing`);
        console.log (`True`);
        abbrev();
    } else{
    alert(`C'mon baby, just give me it, the info`);
    postal();
    }
}
// State info
function abbrev(){
var state = prompt(`Lovey!? What state do you stay in? Abbreviate it pls`);
    if (state.length === 2 && state.toUpperCase()){
        alert(`Thanks babe, you're the best`);
        console.log (`True`);
    status();
    } else{
    alert(`C'mon baby, give it to me straight`);
    abbrev();
    }
}
//Marriage info
status();
function marriage(){
var status = prompt(`Baby, I know we aren't dating! But are you single or married?`)
    if (status.toUpperCase() && status.toLowerCase()){
        alert("Mary me, don't run!!");
        console.log("True")
        } else {
            console.log(`C'mon baby, give it to me straight`)
            alert(`C'mon baby, give it to me straight`);
    };
    alert(`Gotcha Bitch!`)
}
