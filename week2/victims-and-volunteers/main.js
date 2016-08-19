// Victims and Volunteers

// Victims

var victim = 0;
victim = prompt("How many disaster victims do you wish to enter?");
alert("You have entered " + victim + " Victims");

// Name, Address, Phone Number

var victimsarray = [];
victimsarray.push;
for (var i = 0; i < victim; i++) {
    var name = prompt("Please enter the name of each victim");
    var address = prompt("Please enter the Address of each victim");
    var phone = prompt("Please enter the Phone number of each victim");

    victimsarray.push(name, address, phone);
    console.log(victimsarray);
}
// Volunteers

var volunteer = 0;
volunteer = prompt("How many volunteers do you wish to enter?");
alert("You have entered " + volunteer + " Volunteers");

// Name, Address, Phone Number

var volunteerarray = [];
volunteerarray.push();
for (var i = 0; i < volunteer; i++) {
    var name = prompt("Please enter the name of each volunteer");
    var address = prompt("Please enter the Address of each volunteer");
    var phone = prompt("Please enter the Phone number of each volunteer");

    volunteerarray.push(name, address, phone);
    console.log(volunteerarray);
}
prompt("Your victims are " + victimsarray);
prompt("Your volunteers " + volunteerarray);