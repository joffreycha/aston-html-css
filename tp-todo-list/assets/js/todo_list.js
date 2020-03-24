

// Get today's date
date = new Date();
document.getElementById("date").innerHTML = date.toLocaleDateString();


// Initialize localStorage key "taskX" counter
let index;
if (!localStorage.getItem("index")) {
    localStorage.setItem("index", 0);
    index = 0;
} else
    index = localStorage.getItem("index");


// Load ToDo list from LocalStorage data
for (const task in localStorage) {
    if (task.startsWith("task"))
        addTask(localStorage.getItem(task));
}


// Add a task button click
document.getElementById("btn_plus").addEventListener("click", () => {
    // Get user input
    let input_todo = document.getElementById("input_todo"); 
    addTask(input_todo.value);
});


// Clear ToDo list
document.getElementById("btn_clear_list").addEventListener("click", () => {
    let todo_list = document.getElementById("todo_list");
    document.querySelectorAll("li").forEach( (li) => {
        todo_list.removeChild(li);
    });
    
    localStorage.clear();
});






/******* FUNCTIONS *********/


/**
 * Add a new task to the list
 */
function addTask(input_todo) {
    let todo_list = document.getElementById("todo_list");
    
    addButton("check", todo_list);
    
    let li = addListItem(todo_list);
    
    // Assign the value to the new item
    li.innerHTML = input_todo;

    // Store the task in localStorage
    localStorage.setItem("index", index++);
    localStorage.setItem("task" + index, li);

    addButton("delete_item", todo_list);
}


/**
 * Add a button
 * btn_type String: "check" or "delete_item"
 */
function addButton(btn_type, parentNode) {
    let btn = document.createElement("img");
    btn.setAttribute("class", btn_type);
    btn.setAttribute("alt", btn_type);
    btn.setAttribute("src", "./assets/images/" + btn_type + ".svg");

    if (btn_type == "check") 
        btn.setAttribute("checked", "unchecked"); 

    parentNode.appendChild(btn);
}


/**
 * Create a new item <li class="task"></li> 
 * and add it to the list
 * return the created li node
 */
function addListItem(parentNode) {
    let li = document.createElement("li");
    li.setAttribute("class", "task");
    
    parentNode.appendChild(li);

    return li;
}