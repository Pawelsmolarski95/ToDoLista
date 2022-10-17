
const 
  inputSearch = document.querySelector('.inputSearch'),
  searchBTN = document.querySelector('.serachBtn'),
  noTaskDiv = document.querySelector('.noTask'),
  // toDoTask = document.querySelector('.toDoTask'),
  taskContainer = document.querySelector('.taskContainer'),
  toDoTaskP = document.querySelector('.toDoTaskP');
  // edit = document.querySelector('.edit'),
  // close = document.querySelector('.close');
  
  
  
const main = () => {
//   prepareDOMElements(); 
  prepareDOMEvents();
};
 
const  prepareDOMEvents = () => {
  
  searchBTN.addEventListener('click',addNewTask);

};

const addNewTask = (e) => {
  e.preventDefault();
  
  if(inputSearch.value != '') {
    let toDoListTask = document.createElement('div');
    toDoListTask.classList.add('toDoTaskBox');
    
    taskContainer.append(toDoListTask);
    
    toDoListTask.innerHTML =  
    `
    <div class="toDoTask">
        <p class="toDoTaskP">${inputSearch.value}</p>
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
  taskContainer.addEventListener('click', (event) => {
    event.preventDefault();
    
    const clicked = event.target;
    if(clicked.classList.contains('agree')){
      console.log('fsdfsdf');
      
      toDoTaskP.classList.add('line-through');
      
    }
  });
};

  
document.addEventListener('DOMContentLoaded', main);
