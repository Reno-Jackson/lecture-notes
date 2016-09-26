var word = prompt(`Please enter a word`)
    window.alert(
        `You chose the word ${word}`
        + "\n" + `There are  ${word.length} characters in ${word}`
        + "\n" + `The 3rd character in your word is ${word.charAt(2)}`
        + "\n" + `Your word in lower case is ${word.toLowerCase()}`
        + "\n" + `Your word in upper case is ${word.toUpperCase()}`
        + "\n" + `I chose the word ${word} for a sentence`
        + "\n" + `The 3 letters of my word is ${word.substring(1,4)}`
        + "\n" + `Please close out the Prompt Box`
    );
