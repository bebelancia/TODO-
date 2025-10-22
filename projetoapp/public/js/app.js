let add = document.getElementById("add")
let tarefa = document.getElementById("tarefa")
let listaTarefas = document.getElementById("tarefas")

let tarefas = []


add.addEventListener("click", () => {
    if (tarefa.value != "") {

        adicionarTarefa(tarefa.value)

        tarefa.value =""

    } else {
        alert("Você deve digitar uma tarefa!")
    }
})

function adicionarTarefa(descricao) {
    let novaTarefa = {
        descricao: descricao,
        resolvido: false
    }

    tarefas.push(novaTarefa)
    
    atualizarListaTarefas()

}

function atualizarListaTarefas() {
    limparListaTarefas
    tarefas.forEach(t => {
        let li = document.createElement("li")
        let label = document.createElement("label")

        label.textContent = t.descricao
        li.appendChild(label)

        listaTarefas.appendChild(li)
        
    })
}

function limparListaTarefas () {
    listaTarefas.innerHTML =""
}
