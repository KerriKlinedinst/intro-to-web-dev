
const speech = `Blackness...and a rising chill of uncertainty...Was it over?`;

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
