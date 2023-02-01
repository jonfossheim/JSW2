const todoInput = document.querySelector('.todo-input');
const addTodo = document.querySelector('.add-todo');
const todoList = document.querySelector('.todo-list');
const message = document.querySelector('.message');

todoInput.maxLength = 18;
message.innerHTML = 0;

todoInput.onkeyup = () => {
  let inLen = todoInput.value.length;
  message.innerHTML = inLen;
  if (inLen === 18) {
    message.style.color = 'red';
    setTimeout(() => {
      message.style.cssText = 'display: none';
    }, 1000);
  } else {
    message.style.color = 'black';
    message.style.cssText = 'display: inline-block';
  }
};
