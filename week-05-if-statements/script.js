function submitAnswerOne() {
  
  const answerOneInput = document.getElementById('answer-one-input');
 
  const answerOne = answerOneInput.value;

  if(answerOne == 'Bellbird') {
    alert("That's right! The Bellbird, specifically the White Bellbird has the loudest call that can get up to 116 decibels!");
    hide('question-one');
    show('question-two');
  } else if(answerOne == 'Eagle') {
    alert('Almost. This bird is tropical. But, it needs to be more than flashy to attract a mate. It will leave your ears ringing!');
  } else {
    alert('Wrong answer. Bell is a contrdictary word to call this bird call.')
  }
}
