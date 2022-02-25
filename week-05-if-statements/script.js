// When this function is called, it takes the user's answer to the first
// question and uses if statements to check whether it's correct.
function submitAnswerOne() {
  // Get answer one's input element
  const answerOneInput = document.getElementById('answer-one-input');
  // Get the text from answer one's input element
  const answerOne = answerOneInput.value;

  if(answerOne == 'bellbird') {
    alert('That's right! The Bellbird, specifically the White Bellbird has the loudest call that can get up to 116 decibels!');
    hide('question-one');
    show('question-two');
  } else if(answerOne == 'eagle') {
    alert('Almost. This bird is tropical. But, it needs to be more than flashy to attract a mate. It will leave your ears ringing!');
  } else {
    alert('Wrong answer. Bell is a contrdictary word to call this bird call.')
  }
}

function submitAnswerTwo() {
  // Get answer two's input element
  const answerTwoInput = document.getElementById('answer-two-input');
  // Get the number from answer two's input element
  const answerTwo = answerTwoInput.value;

if(answerTwo == 'green') {
  alert('That is right! Mirrors use float glass, which are green once they reflect light onto another mirror!');
  hide('question-two');
  show('done');
} else if(answerTwo == 'red') {
  alert('The answer is a complimentary color of red.');
} else {
  alert('The answer is a color yellow and blue combined.')
 }
}

function submitAnswerThree() {

  const answerThreeInput = document.getElementById('answer-three-input');

  const answerThree = answerThreeInput.value;

  if (answerThree == 'March')
  alert('Right! March 20th is the first day of spring in 2022.' )
  hide('question-three')
  show('done')
  } else if(answerThree == 'Feburary') {
    alert('Almost, the answer is the upcoming month.');
  } else {
    alert('Not quite. The answer is the upcoming month')
   }
  }


  function submitAnswerFour() {

  const answerFourInput = document.getElementById('answer-four-input');

  const answerFour = answerFourInput.value;

if (answerFour == 'Cookie Monster')
alert('Correct! A Cookie Monster geode was incovered in the Rio Grande do Sul region of Brazil. It costs up to $100,000!')
hide('question-four')
show('done')
} else if(answerFour == 'Elmo') {
  alert('Just about. This monster loves cookies!');
} else {
  alert('Not quite. The answer is a blue monster loves to eat what baked goods?')
 }
}

function submitAnswerFive() {

const answerFiveInput = document.getElementById('answer-five-input');

const answerFive = answerFiveInput.value;

if (answerFive == 'Charlie')
alert('Correct! Charlie is beagel-mixed, and has been a part of his fur-ever home since 2015.')
hide('question-five')
show('done')
} else if(answerFive == 'Charles') {
  alert('Almost. The answer is a name that starts with C with seven letters total');
} else {
  alert('Not quite, he answer is a name that starts with C and ends with lie')
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
