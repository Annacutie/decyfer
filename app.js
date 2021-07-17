// App data:
let puzzles = ['great minds think alike', 'puppies are cute', 'weather is bad, so no walk', 'Money is the root of all evil', 'The end justifies the means', 'Rome wasn’t built in a day', 'The beauty is the power']
let vouales = ['a', 'e', 'o', 'u', 'i']

// Global costants:
const LEN = puzzles.length;

// Global variables:
let numbers = 0

// Global selectors
let model=document.getElementById('model');
let next=document.getElementById("nextId")
let answer=document.getElementsByClassName("textfeald")
// Model:
function hideModel() {
  model.style.display = "none"
  overlay.style.display = "none"
}
overlay=document.getElementById('overlay')

let pickTask = (id) => {
  let task=document.getElementById(id)
  task.innerText=drop(puzzles)[choise()]
//CHECK THIS FUNCTION THERE MIGHT BE A PROBLEM
}

let choise = () => Math.floor(Math.random() * 5);
let drop = (input) => input.map(x=>x.replace( /[aeiou]/g, '' ));
var index=0 //!!!

//value=document.getElementById('textfeald').value
let cypher = drop(puzzles)

pickTask('task') //get first task
next.addEventListener('click', function() {
  pickTask('task')

  model.style.display='flex'
  overlay.style.display='block'

  // result can only be selected when the model active
  let message=document.querySelector('#model > h2');
  let shut=document.getElementById("shut")


console.log(`answer: ${answer[index].value.toLowerCase().trim()} ${index}`);
console.log(`puzzle: ${puzzles[index].toLowerCase()}`);
  if (answer[index].value.toLowerCase().trim()===puzzles[index].toLowerCase().trim()) {
     message.innerHTML='correct'
    console.log('Correct');
  } else {
    message.innerHTML='Good luck with the next one'
    console.log('Good luck with the next one');
  }

  if (LEN>numbers) {
        answer[index].value=''
        numbers=numbers+1
        task.innerHTML=cypher[numbers]
  }
})
shut.addEventListener('click', hideModel)
