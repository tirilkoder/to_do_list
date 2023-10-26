// Henter HTML element 
const inputText = document.querySelector("#input_text");
const taskList = document.querySelector("#task_list");
const todoForm = document.querySelector("#todo_form");
const list = document.querySelector('ul');

// Funksjon som legger til ny oppgave med button og input i taskList
function addTask() {
    if (inputText.value) {
        const newTask = document.createElement("li");
        const deleteButton = document.createElement("button");
        const checkBox = document.createElement("input");
        
        deleteButton.textContent = "🗑️";
        newTask.textContent = inputText.value;
        checkBox.type = "checkbox";
        checkBox.classList = "check";
        
        // Legger til elementa vi har laga til nettsida
        taskList.appendChild(newTask);
        newTask.appendChild(deleteButton);
        newTask.appendChild(checkBox);
        
    } else {
        alert("Please enter a task");
    }
    saveData();
}


// Markerer at oppgaven er utført når den blir klikka på
list.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
  }
}, false);

// Fjerner oppgaven frå oppgavelisten når button blir klikka på
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