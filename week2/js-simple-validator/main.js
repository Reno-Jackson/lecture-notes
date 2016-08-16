// Typical Questions from Basic FL Creeps

// Phone Number
function digitz2() {
    var digitz = prompt("Yo gurll lemme get them digitz frum u, 10 of em wif dashes");
    if (digitz.charAt(3) === '-' && digitz.charAt(7) === '-' && digitz.length === 12){
        alert("Damn Gurl, u smart");
        console.log("True");
        birfday2();
    }   
    else {
        console.log("Damn Gurl, that info tho. Try again!!")
        alert("Damn Gurl, that info tho. Try again!!");
        digitz2();
    }
}
digitz2();

// Birthday
function birfday2() {
    var birfday = prompt("True, that's whatsup shawtie, preciate that now lemme getcha 6 digit birf date wif slashes \n yknow tha day you was born and whatnot, SHIIIIEETT")
    if (birfday.charAt(2) === '/' && birfday.charAt(5) === '/' && birfday.length === 8){
        alert("That's hot!!");
        console.log("True")
        datzip2();
    }
    else {
        console.log("Damn Gurl, that info tho. Try again!!")
        alert("Damn Gurl, that info tho. Try again!!");
        birfday2();
    }
}
birfday2();

// Zipcode
function datzip2() {
    var datzip = prompt("Yeah gurl, you just my style...quick question tho, what is ur zip code, just 5 tho")
    if (( datzip.length === 5)){
        alert("Aye Mami");
        console.log("True")
        statez2();
    }
    else {
        console.log("Damn Gurl, that info tho. Try again!!")
        alert("Damn Gurl, that info tho. Try again!!");
        datzip2();
    }
}
datzip2();

// States
 function statez2() {
     var statez = prompt("That ansur was on fleek what state u frum bae?? Just 2 tho, in Big letters")
     if ((statez.length === 2) &&  statez.toUpperCase()){
     alert("U must be collage edugated");
     console.log("True")
         wifey();
        
     }
     else {
         console.log("Damn Gurl, that info tho. Try again!!")
         alert("Damn Gurl, that info tho. Try again!!");
            statez2();
     }
 }
statez2();

// Marriage
function wifey() {
    var wifey = prompt("Gurl... U're just perfect, good enuf to Mary, btw is you? YES or NO")
    if ((wifey.toUpperCase()) && wifey.toLocaleLowerCase()){
    alert("Mary me, don't run!!");
    console.log("True")
        
    }
    else {
        console.log("Damn Gurl, that info tho. Try again!!")
        alert("Damn Gurl, that info tho. Try again!!");
    }
};
alert("Next please")