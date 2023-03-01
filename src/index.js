let input = document.getElementById("add-input")
let agregar = document.getElementById("add-btn")
let ul = document.getElementById('list')
let clear = document.getElementById("clear")
let todo = [{ todo: "Ir al super", id: 0 }]
let count = 0

agregar.addEventListener("click", function (e) {
    const item_task = input.value;
    count = count + 1

    todo.push({ todo: item_task, id: count })
    const li = document.createElement("li");
    li.innerHTML = `${item_task}   <button class="delete-btn" name="eliminar" id=${count}>
    Eliminar
    </button>`

    ul.appendChild(li);
    input.value = ""


    e.preventDefault();
})

ul.addEventListener("click", function (e) {
    let element = e.target
    if (element.name === 'eliminar') {
        element.parentElement.remove();
        let filtro = todo.filter(item => item.id !== Number(element.id))
        todo = filtro
    }
    console.log(todo)

    e.preventDefault();
})

clear.addEventListener("click", function (e) {
    todo.length = 0;
    ul.innerHTML = "";

})

