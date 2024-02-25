export const fakeDB = [{label:'one',}]
var x = 0;
//   {
//     label: 'One',
//   },
//   {
//     label: 'Two',
//   },
//   {
//     label: 'Three',
//   },
//   {
//     label: 'Four',
//   },
//   {
//     label: 'Five',
//   },
//   {
//     label: 'Six ',
//   },
//   {
//     label: 'Seven',
//   },
//   {
//     label: 'Eight',
//   },
//   {
//     label: 'Nine',
//   },
//   {
//     label: 'Ten',
//   },
// ];

 var userArray = []; // Array to store user input

 export function processList() {
     // Get the input value from the user
     var userInput = document.getElementById('listInput').value;

     // Split the input into an array using newline characters as separators
     var itemList = userInput.split('\n');

     // Remove any empty items
     itemList = itemList.filter(item => item.trim() !== '');

     // Store the array in the userArray variable
     userArray = itemList.map(item => item.trim());

     console.log(userArray[1]);
};

function convertToLabel()
{

};