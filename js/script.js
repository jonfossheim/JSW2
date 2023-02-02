const todoInput = document.querySelector('.todo-input');
const addTodo = document.querySelector('.add-todo');
const todoList = document.querySelector('.todo-list');
const message = document.querySelector('.message');

addTodo.onclick = () => {
  const value = todoInput.value.trim();
  if (value === '') {
    const li = document.createElement('li');
    li.innerHTML = 'Please provide a string';
    todoList.appendChild(li);
    setTimeout(() => {
      li.remove();
    }, 2000);
  } else {
    const li = document.createElement('li');
    li.innerHTML = `${value} <button>Toggle</button>`;
    li.onclick = (event) => {
      event.currentTarget.style.color = 'red';
      li.classList.toggle('done');
    };
    todoList.appendChild(li);
  }
};
