const addTaskButton = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const modal = document.getElementById("taskModal");
const closeButton = document.getElementById("closeModal");
const taskHeading = document.getElementById("modalTitle");
const form = document.getElementById("taskForm");
const taskTitleInput = document.getElementById("taskTitle");
const taskDescription = document.getElementById("taskDesc");
const dueDate = document.getElementById("taskDue");
const saveButton = document.getElementById("saveTask");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
tasks.forEach(function(task){
    createTask(task);
})

let isEditing = false;
let taskBeingEdited = null;

addTaskButton.addEventListener("click", function(){
    modal.style.display = "block"; 
})

closeButton.addEventListener("click", function(){
    modal.style.display = "none";
})

function createTask(task){
    const li = 
     document.createElement("li");
     li.textContent = `${task.title} - ${task.description} - ${task.date}`
     taskList.appendChild(li);

     //   mark as complete button
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.style.background = "rgba(241, 133, 241, 0.4)";
    completeBtn.addEventListener("click", function(){
        li.classList.toggle("completed");
        if(li.classList.contains("completed")){
            completeBtn.textContent = "undo"
        }else{
            completeBtn.textContent = "complete"
        }
    })
     // delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.backgroundColor = '#fa776e'; // red for delete
    deleteBtn.addEventListener("click", function(){
       li.remove();
  })
      

    // edit button
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
     editBtn.style.backgroundColor = '#95eeee'; // green for delete

    editBtn.addEventListener("click", function(){
        modal.style.display = "block";
        taskTitleInput.value = task.title;
        taskDescription.value =task.description;
        dueDate.value = task.date;

        isEditing = true;
        taskBeingEdited = li;
    })

    li.appendChild(deleteBtn);
    li.appendChild(editBtn);
    li.appendChild(completeBtn);
    taskList.appendChild(li);

}

form.addEventListener("submit", function(event){
    event.preventDefault();

    const task = { 
        title: taskTitleInput.value,
        description: taskDescription.value,
        date: dueDate.value
    }

    tasks.push(task);
    let taskString = JSON.stringify(tasks);
    localStorage.setItem("tasks", taskString);

     

    if(isEditing){
        taskBeingEdited.firstChild.textContent = `${task.title} - ${task.description} - ${task.date}`
        isEditing = false;
        taskBeingEdited = null;
        modal.style.display = "none"
        form.reset();
        
        return;
    }
      createTask(task)

      form.reset();
     modal.style.display = "none";
     
    })

    
     

    

     


