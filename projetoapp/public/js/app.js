let add = document.getElementById("add")
let tarefa = document.getElementById("tarefa")
let listaTarefas = document.getElementById("tarefas")

add.addEventListener("click", () => {
    if (tarefa.value != "") {
        let li = document.createElement("li")
        li.textContent = tarefa.value

        listaTarefas.appendChild(li)

        tarefa.value =""

    } else {
        alert("Você deve digitar uma tarefa!")
    }
})