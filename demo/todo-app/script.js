const input = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

let todos = JSON.parse(localStorage.getItem("mimo_todos") || "[]");

function saveTodos() {
  localStorage.setItem("mimo_todos", JSON.stringify(todos));
}

function renderTodos() {
  todoList.innerHTML = "";

  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.className = todo.completed ? "completed" : "";

    const span = document.createElement("span");
    span.textContent = todo.text;

    const actions = document.createElement("div");
    actions.className = "actions";

    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = todo.completed ? "恢复" : "完成";
    toggleBtn.onclick = () => {
      todos[index].completed = !todos[index].completed;
      saveTodos();
      renderTodos();
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "删除";
    deleteBtn.onclick = () => {
      todos.splice(index, 1);
      saveTodos();
      renderTodos();
    };

    actions.appendChild(toggleBtn);
    actions.appendChild(deleteBtn);
    li.appendChild(span);
    li.appendChild(actions);
    todoList.appendChild(li);
  });
}

function addTodo() {
  const text = input.value.trim();
  if (!text) return;

  todos.push({
    text,
    completed: false,
    createdAt: new Date().toISOString()
  });

  input.value = "";
  saveTodos();
  renderTodos();
}

addBtn.addEventListener("click", addTodo);
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") addTodo();
});

renderTodos();
