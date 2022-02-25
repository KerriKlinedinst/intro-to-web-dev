// When this function is called, it takes the user's answer to the first
// question and uses if statements to check whether it's correct.
function submitAnswerOne() {
  // Get answer one's input element
  const answerOneInput = document.getElementById('answer-one-input');
  // Get the text from answer one's input element
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

function show(id) {
  const element = document.getElementById(id);
  element.style.display = 'block';
}

function hide(id) {
  const element = document.getElementById(id);
  element.style.display = 'none';
}
