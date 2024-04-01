let doneList = document.querySelectorAll(".doneTaskList li");
let todos = document.querySelectorAll(".task-list li");
let dropAt = document.querySelectorAll(".drop-area");
let flag = true;

todos.forEach((elem, index) => {
    elem.addEventListener("dragstart", function (e) {
        e.dataTransfer.setData("index", index);
    });
});

dropAt.forEach(elem => {
    elem.addEventListener("dragover", function (e) {
        e.preventDefault();
    });
});

dropAt.forEach(elem => {
    elem.addEventListener("drop", function (e) {
        let index = e.dataTransfer.getData("index");
        
        if(flag){
            elem.querySelector("ul").appendChild(todos[index]);
            todos[index].classList.add("done");
        } else {
            elem.querySelector("ul").appendChild(todos[index]);
            todos[index].classList.remove("done");
        }
        
        flag = !flag; 
    });
});
