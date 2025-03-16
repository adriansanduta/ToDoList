{/*<li>
          Finish Frontend Simplified
          <button class="todo__delete">
            x
          </button>
        </li> */}

const list = document.querySelector('.list');  

let todoList = [
    {
        id: 1,
        task: 'Finish Frontend Simplified'
    },
    {
        id: 2,
        task: 'Finish Interview Questions'
    },
    {
        id: 3,
        task: 'Land $100k Job'
    },
];

function deleteTodo(id) {
    todoList = 
  todoList.filter((todo) => {return todo.id !== id});
}

function renderTodos() {
list.innerHTML = todoList.map((element) => 
    `<li>
        ${element.task}
        <button class="todo__delete" onclick="deleteTodo(${element.id})">
            x
        </button>
    </li>`
).join('');
}