// Reference elements in the DOM
const listGroupElement = document.getElementById("todo-items");
const todoItemElement = document.getElementById("todo-text");
const saveBtn = document.getElementById("saveBtn");

// create DOM elements and append them
const itemList = [];
saveBtn.addEventListener("click", (event) =>{
    const todoItemElementValue = todoItemElement.value;

    if (todoItemElementValue === "") {
        alert("Please enter a task!");
      } else {
        if (itemList.length < 5) {
        //Create new li element
        const listItemElement = document.createElement("li");
        listItemElement.className = "list-group-item";
        listItemElement.appendChild(document.createTextNode(todoItemElementValue));
        listGroupElement.appendChild( listItemElement);
        itemList.push( listItemElement);
        todoItemElement.value = "";

        //Create delete and success buttons
        const dangerBtn = document.createElement("button");
        dangerBtn.classList.add("btn","btn-danger","float-right");
        dangerBtn.innerHTML = "❌";
        listItemElement.appendChild(dangerBtn);

        const successBtn = document.createElement("button");
        successBtn.classList.add("btn","btn-success","float-right");
        successBtn.innerHTML = "✔";
        listItemElement.appendChild(successBtn); 
        }
       else {
         alert("You can only have 3 items");
       }
      }
    });

    listGroupElement.addEventListener("click", (event)=>{
      if (event.target.classList.contains("btn-danger")) {
         if (confirm("Are you sure you want to delete this task?")) {
          listGroupElement.removeChild(event.target.parentElement);
          itemList.pop(event.target.parentElement);
          } 
         }
        });
    
        listGroupElement.addEventListener("click", (e) => {
          if (e.target.classList.contains("btn-success")){
            if (confirm("Task complete?")) {      
            const liElement = (e.target.parentElement);
            liElement.style.textDecoration = "line-through";    
         }

          }
      });
