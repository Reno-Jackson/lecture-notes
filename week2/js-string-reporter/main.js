var word = prompt("What's your favorite word?");
window.alert("Great Word choice Mate!!"
    + "\n" + "Number of letters in your word is " + word.length
    + "\n" + "The 3rd letter in your word is " + word.charAt(2) 
    + "\n" + "this is your word in lower case " + word.toLowerCase()
    + "\n" + "this is your word in UPPER case " + word.toUpperCase() 
    + "\n" + "Subword is " + word.substring(1,4)
    + "\n" + "My favorite word is " + word);