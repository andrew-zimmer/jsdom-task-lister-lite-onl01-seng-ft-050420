document.addEventListener("DOMContentLoaded", () => {
  // your code here
});
const submit = document.querySelector("div#main-content form#create-task-form")[1]
const input = document.querySelector("div#main-content form#create-task-form")[0]
const todoList = document.getElementById("tasks")

submit.addEventListener("click", function(event){
    event.preventDefault()
    if (input.value){
        todoList.innerHTML += `<li> ${input.value} </li>`
        input.value = ''
    }

})
