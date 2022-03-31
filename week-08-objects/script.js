// Array of objects representing a todo list.
// Modify this array to contain your own list.
const taskArray = [
  {label: 'Food Editors Favorites: Treasured Reciepes - Barbara Gibbs Ostmann & Jane Baker', time: 160},
  {label: 'Magnificient Obssession - Lloyd C. Douglas', time: 330},
  {label: "Reader's Digest Condensed Books: Number 2. 1960", time: 575},
  {label: 'Raintree County - Ross Lockridge Jr.', time: 1066},
  {label: 'A Place to Call Home - Cynthia Reese', time: 362},
  {label: 'Deep Down Dark - Hector Tobar', time: 309},
  {label: 'The Invertebrates: Volume VI Mollusca I - Libbie H. Hyman', time: 792},
  {label: 'We, The Drowned - Carsten Jensen', time: 678},
  {label: 'A Tale for the Time Being - Ruth Ozeki', time: 422},
  {label: 'The Urantia Book - Author Unknown', time: 2097},
];

// Loads the content into the page.
function loadContent() {
  // This line of code sorts the array alphabetically by the task labels.

  taskArray.sort((a, b) => compare(a.label, b.label));

  loadTable();
  loadShortestTask();
  loadLongestTask();
  loadAverage();
}

// Adds a task to the array and reloads the page content.
function addNewTask() {
  const newTaskLabel = document.getElementById('label-input').value;
  const newTaskTime = document.getElementById('time-input').value;
  const newTask = {label: newTask, time: newTaskTime };
  taskArray.push(newPage);

  loadContent();
}

// Iterates over the data array to create a table.
function loadTable() {
  const tableElement = document.createElement('table');

  // Create a header row.
  const headerRowElement = document.createElement('tr');
  headerRowElement.appendChild(createElement('th', 'Books'));
  headerRowElement.appendChild(createElement('th', 'Title and Author'));
  headerRowElement.appendChild(createElement('th', 'Pages'));
  tableElement.appendChild(headerRowElement);

  // Iterate over the array and create a table row for each object.
  for (let i = 0; i < taskArray.length; i++) {
    const task = taskArray[i];
    const rowElement = document.createElement('tr');
    rowElement.appendChild(createElement('td', i));
    rowElement.appendChild(createElement('td', task.label));
    rowElement.appendChild(createElement('td', task.time));
    tableElement.appendChild(rowElement);
  }

  const tableContainer = document.getElementById('table-container');
  tableContainer.innerHTML = '';
  tableContainer.appendChild(tableElement);
}

// Displays the name of the shortest task.
function loadShortestTask(){
  // Assume the first task is shortest
  let shortestTask = taskArray[0];

  // Starting with the second task, look for a shorter task
  for (let i = 1; i < taskArray.length; i++) {
    const task = taskArray[i];
    // If this task is shorter than the previous shortest, it's now the shortest
    if(task.time < shortestTask.time) {
      shortestTask = task;
    }
  }
  document.getElementById('shortest-task').innerText = shortestTask.label;
}

// Helper function that creates an element that contains text content.
function createElement(tag, text) {
  const element = document.createElement(tag);
  element.innerText = text;
  return element;

}
// Helper function that compares two values.
// Works on strings, numbers, and dates.
function compare(valueOne, valueTwo) {
  // valueOne comes before valueTwo
  if (valueOne < valueTwo) {
    return -1;
  }

  // valueOne comes after valueTwo
  if (valueOne > valueTwo) {
    return 1;
  }

  // valueOne and valueTwo are equal
  return 0;
}

// Displays the name of the longest task.
function loadLongestTask(){
  // Assume the first task is longest
  let longestTask = taskArray[0];


  for (let i = 1; i < taskArray.length; i++) {
    const task = taskArray[i];

    if(task.time > longestTask.time) {
      longestTask = task;
    }
  }
  document.getElementById('longest-task').innerText = longestTask.label;
}
