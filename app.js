// App data:
let puzzles = ['great minds think alike', 'puppies are cute', 'weather is bad, so no walk', 'Money is the root of all evil', 'The end justifies the means', 'Rome wasn’t built in a day', 'The beauty is the power']
let vouales = ['a', 'e', 'o', 'u', 'i']

// Global variables:
var index=0
// Global selectors
let model=document.getElementById('model');
let next=document.getElementById("nextId");
let answer=document.getElementsByClassName("textfeald");
// Model:
function hideModel() {
  model.style.display = "none";
  overlay.style.display = "none";
}
overlay=document.getElementById('overlay');

let choise = () => {
  index = Math.floor(Math.random() * 5);
}

let pickTask = (id) => {
  let task=document.getElementById(id);
  task.innerText=drop(puzzles)[index];
}

let drop = (input) => input.map(x=>x.replace( /[aeiou]/g, '' ));

let cypher = drop(puzzles);
//get first task
choise();
pickTask('task');
next.addEventListener('click', function() {

  model.style.display='flex';
  overlay.style.display='block';

  // result can only be selected when the model active
  let message=document.querySelector('#model > h2');
  let shut=document.getElementById("shut");

  if (answer[0].value.toLowerCase().trim()===puzzles[index].toLowerCase().trim()) {
     message.innerHTML='Correct!';
  } else {
    message.innerHTML='Good luck with the next one.';
  }

answer[0].value=''
choise()
pickTask('task'); //get next task
})
shut.addEventListener('click', hideModel);
