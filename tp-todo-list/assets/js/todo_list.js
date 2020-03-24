

// Get today's date
date = new Date();
document.getElementById("date").innerHTML = date.toLocaleDateString();


// Initialaize localStorage key "taskX" counter
let index;
if (!localStorage.getItem("index")) {
    localStorage.setItem("index", 0);
    index = 0;
}
else
    index = localStorage.getItem("index");


// Display the ToDo list from LocalStorage data
for (const task in localStorage) {
    console.log(typeof(task));
    console.log(task);    
    if (task.startsWith("task")) {
        // Create a new item <li class="task"></li> and add it to the list
        li = document.createElement("li");
        li.setAttribute("class", "task");
        document.getElementById("todo_list").appendChild(li);
        
        // Assign the value to the new item
        li.innerHTML = localStorage.getItem(task);
    }
}


/**
 * Add a new task to the list
 */
document.getElementById("btn_plus").addEventListener("click", () => {
    // Get user input
    let input_todo = document.getElementById("input_todo"); 
    
    // Create a new item <li class="task"></li> and add it to the list
    li = document.createElement("li");
    li.setAttribute("class", "task");
    document.getElementById("todo_list").appendChild(li);
    
    // Assign the value to the new item
    li.innerHTML = input_todo.value;
    
    // Store the task in localStorage
    localStorage.setItem("task" + index, li);
    localStorage.setItem("index", index++);
    
});


/**
 * Clear ToDo list
 */
document.getElementById("btn_clear_list").addEventListener("click", () => {
    let todo_list = document.getElementById("todo_list");
    document.querySelectorAll("li").forEach( (li) => {
        todo_list.removeChild(li);
    });
    
    localStorage.clear();
});