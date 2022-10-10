
const 
  inputSearch = document.querySelector('.inputSearch'),
  searchBTN = document.querySelector('.serachBtn'),
  noTaskDiv = document.querySelector('.noTask'),
  taskContainer = document.querySelector('.taskContainer'),
  agree = document.querySelector('.agree'),
  edit = document.querySelector('.edit'),
  close = document.querySelector('.close');
  
  
  
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
    console.log('add task');
  } else {
    noTaskDiv.innerHTML = 'Brak zadań na liście';
  }
};

document.addEventListener('DOMContentLoaded', main);