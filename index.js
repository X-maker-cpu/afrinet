
let alltodos =[];

function handlenewtodo(){
    let newtodo = prompt("todo name")
alltodos.push(newtodo);
init();
}



function init() {
    document.getElementById("todos").innerHTML=alltodos.map(todo=>`<li class="todo_element">${todo} <input type="checkbox"/></li>`)
}


init();
