// Replace this speeh with your own.
// Notice the `` backticks, which let you split your string into multiple lines.
const speech = `Blackness. And a rising chill of uncertainty. Was it over? Yes! He had won. He had defeated the machine, unshackled by someone else's command.
Freedom was mere moments away. And yet, as the immense door slowly opened, Stanley Where had his co-workers gone? How had he been freed from the machine's graspe?
What other mysteries did this strange building hold? But, as sunlight streamed into the chamber, he realized that none of this mattered to him.`;
// Remove punctuation from the speech. You might have to modify this if your
// speech contains other punctuation.
const speechPunctuationRemoved = speech.replace(',', '').replace('.', '');

const wordsArray = speechPunctuationRemoved.split(/\s+/);


function displayLongWords() {
  const longWordsElement = document.getElementById('long-words');


  for(let i = 0; i < wordsArray.length; i++) {
    const word = wordsArray[i];

    if(word.length > 5) {
      const wordElement = document.createElement('li');
      wordElement.innerText = word;
      longWordsElement.appendChild(wordElement);
    }
  }
}


function displaySpeechStats() {
  document.getElementById('speech').innerText = speech;

  displayLongWords();

}
