var months = [{
    name: 'January',
    days: 31
}, {
    name: 'February',
    days: 28
}, {
    name: 'March',
    days: 31
}, {
    name: 'April',
    days: 30
}, {
    name: 'May',
    days: 31
}, {
    name: 'June',
    days: 30
}, {
    name: 'July',
    days: 31
}, {
    name: 'August',
    days: 31
}, {
    name: 'September',
    days: 30
}, {
    name: 'October',
    days: 31
}, {
    name: 'November',
    days: 30
}, {
    name: 'December',
    days: 31
}];

// 1. Write a set of loops that will print out each day of each month in the following format:
//
// January 1
// January 2
// ...
// January 30
// January 31
// February 1
// February 2
// ...
// February 27
// February 28
// March 1
// March 2
// ...
// Dec 30
// Dec 31
//
// There should be 365 print statements, one for each day in a year.

console.log('test');

for (var i = 0; i < months.length; i++) {
    for (var d = 1; d <= months[i].days; d++) {
        console.log(`${months[i].name} ${d}`)
    }
};

// 2. Write a set of loops that will print out each second of each hour in a day (in 24 hour clock format).
//
// For example, your output should look like the following:
//
// 0:0:0
// 0:0:1
// ...
// 0:0:58
// 0:0:59
// 0:1:0
// 0:1:1
// ...
// 0:1:58
// 0:1:59
// ...
// 23:0:0
// 23:0:1
// ...
// 23:59:58
// 23:59:59
//
// There should be 24 * 60 * 60 = 82,800 print statements.
for (var hindex = 0; hindex < 24; hindex++) {
    for (var mindex = 0; mindex < 60; mindex++) {
        for (var sindex = 0; sindex < 60; sindex++) {
            console.log(`${hindex}:${mindex}:${sindex}`);
        }
    }
}
