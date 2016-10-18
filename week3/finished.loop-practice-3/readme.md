Loop Practice #3
===============

Requirements
----------
For each problem below, write a loop that prints the given output. Some of the problems will require you to write an if statement in the loop. Assume a global array called students is defined as follows:


var students = [{
 name: 'Liz',
 age: 25,
 city: 'Boulder'
},{
 name: 'Meghan',
 age: 27,
 city: 'Denver'
},{
 name: 'Trent',
 age: 32,
 city: 'Boulder'
},{
 name: 'Chelsea',
 age: 24,
 city: 'Boulder'
},{
 name: 'Amir',
 age: 18,
 city: 'Denver'
}];



Example Problem:

Liz
Meghan
Trent
Chelsea
Amir

Solution:


for(var i=0; i < students.length; i++) {
 console.log(students[i].name);
}


Problems:
----------
- 25 27 32 24 18
- Liz, Boulder Meghan, Denver Trent, Boulder Chelsea, Boulder Amir, Denver
- Liz is from Boulder Trent is from Boulder Chelsea is from Boulder
- Meghan is older than 25 Trent is older than 25
