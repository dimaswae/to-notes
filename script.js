// Tab Switching
const tabTodo = document.getElementById("tab-todo");
const tabNotes = document.getElementById("tab-notes");
const todoContainer = document.getElementById("todo-container");
const notesContainer = document.getElementById("notes-container");

tabTodo.addEventListener("click", () => {
  tabTodo.classList.add("active");
  tabNotes.classList.remove("active");
  todoContainer.classList.add("active");
  notesContainer.classList.remove("active");
});

tabNotes.addEventListener("click", () => {
  tabNotes.classList.add("active");
  tabTodo.classList.remove("active");
  notesContainer.classList.add("active");
  todoContainer.classList.remove("active");
});

// --- TO-DO LOGIC ---
const todoInput = document.getElementById("todo-input");
const addTodoBtn = document.getElementById("add-todo");
const todoList = document.getElementById("todo-list");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

function renderTodos() {
  todoList.innerHTML = "";
  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span style="text-decoration:${todo.done ? 'line-through':'none'}">${todo.text}</span>
      <div>
        <button onclick="toggleTodo(${index})">Done</button>
        <button onclick="deleteTodo(${index})">Delete</button>
      </div>
    `;
    todoList.appendChild(li);
  });
}
function addTodo() {
  if (todoInput.value.trim() === "") return;
  todos.push({ text: todoInput.value, done: false });
  todoInput.value = "";
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos();
}
function toggleTodo(i) {
  todos[i].done = !todos[i].done;
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos();
}
function deleteTodo(i) {
  todos.splice(i, 1);
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos();
}
addTodoBtn.addEventListener("click", addTodo);
renderTodos();

// --- NOTES LOGIC ---
const noteTitle = document.getElementById("note-title");
const noteContent = document.getElementById("note-content");
const addNoteBtn = document.getElementById("add-note");
const notesList = document.getElementById("notes-list");

let notes = JSON.parse(localStorage.getItem("notes")) || [];

function renderNotes() {
  notesList.innerHTML = "";
  notes.forEach((note, index) => {
    const div = document.createElement("div");
    div.className = "note-card";
    div.innerHTML = `
      <h3>${note.title}</h3>
      <p>${note.content}</p>
      <button onclick="deleteNote(${index})">Delete</button>
    `;
    notesList.appendChild(div);
  });
}
function addNote() {
  if (noteTitle.value.trim() === "" || noteContent.value.trim() === "") return;
  notes.push({ title: noteTitle.value, content: noteContent.value });
  noteTitle.value = "";
  noteContent.value = "";
  localStorage.setItem("notes", JSON.stringify(notes));
  renderNotes();
}
function deleteNote(i) {
  notes.splice(i, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  renderNotes();
}
addNoteBtn.addEventListener("click", addNote);
renderNotes();
