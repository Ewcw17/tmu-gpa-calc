// import {Course,Semester,Year,DegreeTerm,Assessment} from './tmu-gpa.js'
// import{GradeTable}  from './GradeTable.js'


const {Course,Semester,Year,DegreeTerm,Assessment} = require('./tmu-gpa.js');
const {GradeTable} = require('./GradeTable.js');

const gr = new GradeTable();
console.log(gr);

// add_gpa_marker  selectors
const gpa_name_input = document.querySelector(".coursecode-inputs");
const gpa_desc_input = document.querySelector(".gradepoint-inputs");
// const actual_gpa_input = document.querySelector(".actual_gpa-inputs");
const todoButton = document.querySelector(".addcourse-button");
const todoList = document.querySelector(".addcourse-list");
const filterOption = document.querySelector(".filter-addcourses");
const list_of_GPAMarkers = new Array();
let display_gpa_name = document.querySelector(".display_gpa_name");
let display_gpa_desc = document.querySelector(".display_gpa_desc ");
let display_actual_gpa = document.querySelector(".display_gpa");
const gpa_name_item = document.querySelector(".gpa_name_item")
let number = 0;

console.log(number);
// Home html query selects
const select = document.getElementById("basic-select");
const menu = document.getElementById("option-select");
const dropdowns = document.querySelectorAll(".dropdown");
const cart = document.querySelector(".carpet");
const options = document.querySelectorAll(".options .options__item");
const selected = document.getElementById("select-title");
var active = document.querySelector(".options__item--active");
const animTime = 120;

//filterOption.addEventListener("click", filterTodo);



// function add gpa markers
function add_gpa_markers(e) {
  
  e.preventDefault();
  console.log("here: dfs"  + gpa_name_input.value + " " );
  // take input from inputs 

  list_of_GPAMarkers.push(g);
  console.log(list_of_GPAMarkers)
  //tododiv
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("addcourse");

  //new todo
  const new_gpa_list_element = document.createElement("li");
  new_gpa_list_element.classList.add("gpa_name_item");
  new_gpa_list_element.innerText = gpa_name_input.value;
  todoDiv.appendChild(new_gpa_list_element);

  //checked button
  const compleatedButton = document.createElement("button");
  compleatedButton.innerHTML = '<i class="fas fa-check"><i>';
  compleatedButton.classList.add("complete-btn" + number);
  number+=1
  todoDiv.appendChild(compleatedButton);
  //trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"><i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  // appened list
  todoList.appendChild(todoDiv);
  gpa_name_input.value = "";
  gpa_desc_input.value ="";
  actual_gpa_input.value = "";
}

//delete gpa marker
function deleteCheck(e) {
  const items = e.target;

  //delete todo
  if (items.classList[0] === "trash-btn") {
    const todo = items.parentElement.li;

    //todo animation
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  //completed btn
  if (items.classList[0].startsWith("complete-btn")) {
    
    const todo = items.parentElement;
    g = list_of_GPAMarkers[parseInt((items.classList[0]).match(/(\d+)/)[0])]
    console.log(g);
 display_gpa_marker(g)
  todo.classList.toggle("completed");
    
  

  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}
function getTodos() {
  //check
  let todos = [];

  todos.forEach(function (todo) {
    //todoDiv
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //create li
    const new_gpa_list_element = document.createElement("li");
    new_gpa_list_element.classList.add("todo-item");
    new_gpa_list_element.innerText = todo;
    todoDiv.appendChild(new_gpa_list_element);

    //checked button
    const compleatedButton = document.createElement("button");
    compleatedButton.innerHTML = '<i class="fas fa-check"><i>';
    compleatedButton.classList.add("complete-btn");
    todoDiv.appendChild(compleatedButton);
    //trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"><i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //append list
    todoList.appendChild(todoDiv);
  });
}





//event listeners
document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", add_gpa_markers);
todoList.addEventListener("click", deleteCheck);




// event listeners for 
select.addEventListener('mouseenter', function(){
  select.classList.add("selected--open");
  cart.classList.add("carpet--open");
  setTimeout(function(){
    select.classList.add("selected--delay");
  }, animTime);
})
select.addEventListener('mouseleave', function(){
  select.classList.remove("selected--open");
  cart.classList.remove("carpet--open");
  setTimeout(function(){
    select.classList.remove("selected--delay");
  }, animTime);
})
menu.addEventListener('mouseenter', function(){
  select.classList.add("selected--open");
  cart.classList.add("carpet--open");
  setTimeout(function(){
    select.classList.add("selected--delay");
  }, animTime);
})
menu.addEventListener('mouseleave', function(){
  select.classList.remove("selected--open");
  cart.classList.remove("carpet--open");
  setTimeout(function(){
    select.classList.remove("selected--delay");
  }, animTime);
})
options.forEach(option => {
  option.addEventListener("click", function(){
    selected.innerText = option.innerText;
    active.classList.remove("options__item--active");
    option.classList.add("options__item--active");
    active = document.querySelector(".options__item--active");
  });
});

function display_gpa_marker(GPAMarker){
display_gpa_name.innerText = GPAMarker.gpa_name;
display_gpa_desc.innerText = GPAMarker.gpa_desc;
display_actual_gpa.innerText = GPAMarker.actual_gpa;
}