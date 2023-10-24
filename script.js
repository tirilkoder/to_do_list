// Hente HTML element 
const inputText = document.querySelector("#input_text");
const taskList = document.querySelector("#task_list");
const todoForm = document.querySelector("#todo_form");

// Funksjon som legger til ny oppgave i oppgavelisten
function addTask() {
    if(inputText.value) {
        const newTask = document.createElement("li");
        const deleteButton = document.createElement("button");

        deleteButton.textContent = "🗑️";
        newTask.textContent = inputText.value;

        taskList.appendChild(newTask);
        newTask.appendChild(deleteButton);
        
    }else {
        alert("Please enter a task");
    }
    saveData();
}

// Fjerner oppgaven frå oppgavelisten når den blir klikka på
taskList.addEventListener("click", function(event) {
    event.target.tagName === "BUTTON" && event.target.parentElement.remove()
    saveData();
});

// Hindrer vanlig virkemåte for skjema innsending og kaller adTask()
// Vanlig virkemåte for innsending oppdaterer siden, noe vi ikke ønsker. Det fører til bugs
todoForm.addEventListener("submit", function(event) {
    event.preventDefault();
    addTask();
});

// Lagrer dataene til localStorage
// Utløses av funksjonen saveData
function saveData() {
    localStorage.setItem("taskList", taskList.innerHTML);
}

// Laster inn dataene frå localStorage
function loadData() {
    taskList.innerHTML = localStorage.getItem("taskList");
}

loadData();