// Replace this speeh with your own.
// Notice the `` backticks, which let you split your string into multiple lines.
const speech = `Blackness. And a rising chill of uncertainty. Was it over? Yes! He had won. He had defeated the machine, unshackled by someone elses command.
Freedom was mere moments away. And yet, as the immense door slowly opened, Stanley reflected on how many puzzles still lay unsolved.
Where had his co-workers gone? How had he been freed from the machine's grasp? What other mysteries did this strange building hold?
But, as sunlight streamed into the chamber, he realized that none of this mattered to him. For it was not knowledge, or even power, that he had been seeking, but happiness.
Perhaps his goal had not been to understand, but to let go. No longer would anyone tell him where to go, what to do, or how to feel.
Whatever life he lives, it will be his. And that was all he needed to know. It was, perhaps, the only thing worth knowing. Stanley stepped through the open door.`;


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
