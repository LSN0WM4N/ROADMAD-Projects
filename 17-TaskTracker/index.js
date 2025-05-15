let tasksList = [];
let taskRelativeIndex = 0;

const renderTasks = () => {
  const tasks = document.querySelector('.tasks');

  while (tasks.firstChild !== null) {
    tasks.removeChild(tasks.firstChild);
  }

  tasksList.forEach((item, index) => {
    const checkButtom = document.createElement('button');
    const text = document.createElement('p');
    const deleteItem = document.createElement('p');
   
    text.textContent = item.text;
    text.classList.add('text')
    deleteItem.textContent = '🗑';
    deleteItem.classList.add('trash');

    const newTask = document.createElement('div');
    newTask.classList.add('task-item');
    newTask.classList.add(item.finished ? 'completed' : 'incomplete')
    newTask.appendChild(checkButtom);
    newTask.appendChild(text);
    newTask.appendChild(deleteItem);

    checkButtom.addEventListener('click', () => {
      tasksList[index].finished = !tasksList[index].finished;
      renderTasks();
    });

    deleteItem.addEventListener('click', () => {
      tasksList = tasksList.filter(item => item != tasksList[index]);
      renderTasks();
    });
    
    tasks.appendChild(newTask);
  });
}

document.addEventListener('DOMContentLoaded', () => {

  const inputForm = document.querySelector('form');
  const inputText = inputForm.querySelector('input');

  inputForm.addEventListener('submit', (e) => {
    e.preventDefault();
    tasksList = tasksList.concat({
      text: inputText.value, 
      finished: false,
    });

    inputText.value = "";
    renderTasks();
  })
});
