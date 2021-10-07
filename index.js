function isPalindrome(word) {
  // Write your algorithm here
  //checks if word backwards matches word forward
const wordBackward = makesBackward(word);
return wordBackward === word;
 }
 
//Makes a backwards word
function makesBackward(word){
 let wordArray = word.split('')
 let array = [];
   for(let i= wordArray.length-1; i>=0; i--){
     array.push(wordArray[i]);
   }
   return array.join('');
 //return word.split('').reverse().join('') (shorter solution)
}



/* 
  Add your pseudocode here
  create function that deals w palindrome{
	
      takes word and makes it backwards by running through each letter in 
      the word starting from the last letter and concatenating it into a 
      new string (function)

        if backwardsWord == word{
        return true
        }

        else{
          return false
        }

*/

/*
  Add written explanation of your solution here

  First I made the word backwords. Then, I compared the backwards word to
  the original to see if they were the same. If they were, I returned true,
  if not, false.
*/



// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log('Expecting: true');
  console.log('=>', isPalindrome('mom'));
}

module.exports = isPalindrome;
