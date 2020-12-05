console.log("app is running"); 
const todoList = [{title: 'to do', done: false}]; 

const onTodoFormSubmit = (event) => {
event.preventDefault();
console.log("form submit"); 
const $todo = $('input[name="todo"]');
console.log($todo.val()); 
const todoItem = { title: $todo.val(), done: false}; 
todoList.push(todoItem);
console.log("todoList", todoList);
}; 

$("#todo-form").on ("submit", onTodoFormSubmit); 
