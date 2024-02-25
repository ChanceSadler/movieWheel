const processList = document.querySelector('.processList');
import { props} from '/wheel.js';
export var fakeDB = [
  {
    label: 'One',
  },
  {
    label: 'Two',
  },
  {
    label: 'Three',
  },
  {
    label: 'Four',
  },
  {
    label: 'Five',
  },
  {
    label: 'Six ',
  },
  {
    label: 'Seven',
  },
  {
    label: 'Eight',
  },
  {
    label: 'Nine',
  },
  {
    label: 'Ten',
  },
];

var userArray = []; // Array to store user input
 window.addEventListener('click', (e) => {
  // Listen for click event on spin button:
  if (e.target === processList) {
   // Get the input value from the user
   var userInput = document.getElementById('listInput').value;

   // Split the input into an array using newline characters as separators
   var itemList = userInput.split('\n');

   // Remove any empty items
   itemList = itemList.filter(item => item.trim() !== '');

   // Store the array in the userArray variable
   userArray = itemList.map(item => item.trim());
    convertToLabel();
  }
});

export var labeling = [{label:'boop'}];
var items = [{items: labeling}];
function convertToLabel()
{

 let i = 0
 for(i in userArray)
 {
  labeling[i] = {label: userArray[i]};
  i= i+1;
 }
props.pop();
props.push({items: labeling})
 
};