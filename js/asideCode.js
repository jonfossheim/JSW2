const heading = document.querySelector('.heading');

heading.onmouseover = (e) => {
  e.target.style.color = 'red';
};

heading.onmouseout = (e) => {
  e.target.style.color = 'black';
};

addTodo.onclick = () => {
  const value = todoInput.value.trim();
  if (value === '') {
    message.innerHTML = 'Empty String Provided';
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

listItems.forEach((li) => {
  console.log(li);
  li.onclick = () => {
    li.classList.toggle('done');
  };
});

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
