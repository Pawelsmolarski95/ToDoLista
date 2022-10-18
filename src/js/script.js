let inputSearch, searchBtn, noTask, ulList, tools;
  
const main = () => {
  prepareDOMElements(); 
  prepareDOMEvents();
};
 
const prepareDOMElements = () => {
  inputSearch =  document.querySelector('.inputSearch');
  searchBtn =  document.querySelector('.searchBtn');
  noTask =  document.querySelector('.noTask');
  ulList = document.querySelector('.taskWrapper ul');
  tools = document.querySelector('.tools');
  
};

const  prepareDOMEvents = () => {
  searchBtn.addEventListener('click', createTask);
  ulList.addEventListener('click', checkClick);
};

const createTask = () => {
  if(inputSearch.value !== '') {
    const newTask = document.createElement('li');
    newTask.textContent = inputSearch.value;
    createTools(newTask);
    ulList.append(newTask);
    inputSearch.value = '';
    noTask.textContent = '';
  } else {
    noTask.textContent = 'Wpisz prawidłowy task';
  }
};
const createTools = (newTask) => {
  tools = document.createElement('div');
  tools.classList.add('tools');
  
  const completeBtn = document.createElement('button');
  completeBtn.classList.add('complete');
  completeBtn.innerHTML = '<i class="fas fa-check"></i>';
  
  const editBtn = document.createElement('button');
  editBtn.classList.add('edit');
  editBtn.textContent = 'EDIT';
  
  const closeBtn = document.createElement('button');
  closeBtn.classList.add('close');
  closeBtn.innerHTML = '<i class="fas fa-times"></i>';
  
  tools.append(completeBtn, editBtn, closeBtn);
  newTask.append(tools);
  
  
};

const checkClick = e => {
  console.log(e.target);
  if(e.target.matches('.complete')) {
    console.log('complete');
  } else if (e.target.matches('.edit')) {
    console.log('edit');
  } else if (e.target.matches('.close')) {
    console.log('close');
  }
};

document.addEventListener('DOMContentLoaded', main);
