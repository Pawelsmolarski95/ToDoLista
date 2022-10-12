
const 
  inputSearch = document.querySelector('.inputSearch'),
  searchBTN = document.querySelector('.serachBtn'),
  noTaskDiv = document.querySelector('.noTask'),
  // toDoTask = document.querySelector('.toDoTask'),
  taskContainer = document.querySelector('.taskContainer');
  // agree = document.querySelector('.agree'),
  // edit = document.querySelector('.edit'),
  // close = document.querySelector('.close');
  
  
  
const main = () => {
//   prepareDOMElements(); 
  prepareDOMEvents();
};


// const  prepareDOMElements = () => {
//   const 
// //     inputSearch = document.querySelector('.inputSearch'),
// //     searchBTN = document.querySelector('.serachBtn'),
// //     noTaskDiv = document.querySelector('.noTask'),
// //     taskContainer = document.querySelector('.taskContainer'),
// //     agree = document.querySelector('.agree'),
// //     edit = document.querySelector('.edit'),
// //     close = document.querySelector('.close');
// // };
 
const  prepareDOMEvents = () => {
    
  searchBTN.addEventListener('click',addNewTask);
  
};

const addNewTask = () => {
  if(inputSearch.value != '') {
    let toDoListTask = document.createElement('div');
    toDoListTask.classList.add('toDoTaskBox');
    
    taskContainer.append(toDoListTask);
    
    toDoListTask.innerHTML =  
    `
    <div class="toDoTask">
        <p>${inputSearch.value}</p>
    </div>
    <div class="toDoAgree">
        <i class="agree fas fa-check"></i>
        <a href="" class="edit"><p>EDIT</p></a>
        <i class=" close fas fa-times"></i>
    </div>
`;
    inputSearch.value = '';
    
  } else {
    noTaskDiv.innerHTML = 'Brak zadań na liście';
  }
};

document.addEventListener('DOMContentLoaded', main);