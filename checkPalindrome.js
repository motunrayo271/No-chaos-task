
const prompt = require ("prompt-sync")();
word = prompt("Enter word: ");
reverse =""
for (character of word){
	reverse = character + reverse;
}
if (reverse !== word){
	console.log("it is not a palindrome");
	}
    else if (reverse === word){
	    console.log("it is a palindrome");

