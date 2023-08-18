// Initialize an empty string for the result
// Define the alphabet
// Iterate through each character of the input string
// Check if the character is a question mark
// Initialize a variable for the random character

// Choose a random character from the alphabet
// Repeat if adjacent characters match the random character
// Add the random character to the updated string
// Add the original character to the updated string

// Return the modified string

function solution(riddle) {
  let updatedString = "";
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < riddle.length; i++) {
    if (riddle[i] === "?") {
      let randomCharacter;
      do {
        randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)];
      } while (
        riddle[i - 1] === randomCharacter ||
        riddle[i + 1] === randomCharacter
      );
      updatedString += randomCharacter;
    } else {
      updatedString += riddle[i];
    }
  }

  return updatedString;
}

solution();

solution("ab?ac?");
solution("rd?e?wg??");
solution("????????");
