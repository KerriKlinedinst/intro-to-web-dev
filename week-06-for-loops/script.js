// Replace this speeh with your own.
// Notice the `` backticks, which let you split your string into multiple lines.
const speech = `Blackness...and a rising chill of uncertainty...Was it over? Yes! He had won. He had defeated the machine, unshackled himself from someone elses command. Freedom was mere moments away. And, yet, even as the immense door slowly opened, Stanley reflected on how many puzzles still lay unsolved.
Where had his co-workers gone? How had he been freed from the machines grasp? What other mysteries did this strange building hold? But as sunlight streamed into the chamber, he realized none of this mattered to him. For it was not knowledge, or even power, that he had been seeking, but happiness. Perhaps his goal had not been to understand, but to let go. No longer would anyone tell him where to go, what to do, or how to feel. Whatever life he lives, it will be his. And that was all he needed to know. It was, perhaps, the only thing worth knowing. Stanley stepped through the open door.`;
// Remove punctuation from the speech. You might have to modify this if your
// speech contains other punctuation.
const speechPunctuationRemoved = speech.replace(',', '').replace('.', '');

// Use a regular expression to split the speech into individual words. You
// shouldn't need to change this, unless you want to split on characters other
// than whitespace.
const wordsArray = speechPunctuationRemoved.split(/\s+/);

// Displays words that have more than 5 characters.
function displayLongWords() {
  const longWordsElement = document.getElementById('long-words');

  // Loop over every word in the array.
  for(let i = 0; i < wordsArray.length; i++) {
    const word = wordsArray[i];
    // If the word has more than 5 characters, display it in the page.
    if(word.length > 5) {
      const wordElement = document.createElement('li');
      wordElement.innerText = word;
      longWordsElement.appendChild(wordElement);
    }
  }
}

<<<<<<< HEAD

=======
>>>>>>> 86d68df9c2179ad8819f296432655458cb30df33
function displaySpeechStats() {
  document.getElementById('speech').innerText = speech;

  displayLongWords();

  // TODO: Call your functions here!
}
