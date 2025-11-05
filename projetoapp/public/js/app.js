let add = document.getElementById("add")
let remover = document.getElementById("remover")
let tarefa = document.getElementById("tarefa")
let listaTarefas = document.getElementById("tarefas")

let tarefas = []

let indexContador = 1




add.addEventListener("click", () => {
    if (tarefa.value != "") {

        adicionarTarefa(tarefa.value)

        tarefa.value =""

    } else {
        alert("Você deve digitar uma tarefa!")
    }
})

remover.addEventListener("click", () => {
    localStorage.removeItem("tarefas")
    tarefas = []
    atualizarListaTarefas()
})

function adicionarTarefa(descricao) {
    let novaTarefa = {
        id:indexContador,
        descricao: descricao,
        resolvido: false
    }

    tarefas.push(novaTarefa)

    indexContadorContador++

    salvarDados()
    
    atualizarListaTarefas()

}

function atualizarListaTarefas() {
    limparListaTarefas
    tarefas.forEach(t => {
        let li = document.createElement("li")
        let label = document.createElement("label")
        let checkbox = document.createElement("input")

        checkbox.type = "checkbox"
        checkbox.value = t.id
        checkbox.checked = t.resolvido
        
        checkbox.addEventListener("click", checkboxClick)

        label.textContent = t.descricao

        li.appendChild(checkbox)
        li.appendChild(label)

        listaTarefas.appendChild(li)
        
    })
}

function limparListaTarefas () {
    listaTarefas.innerHTML =""
}

function marcarResolvido (id) {
    let index = tarefas.findIndex(item => item.id === id)
    tarefa[index].resolvido = !taredas[index].resolvido

    salvarDados()
}

function checkboxClick(el) {
    const item = el.target.value

    if (item != null && item != undefined) {
        marcarResolvido(parseInt(item))

    }
}

function salvarDados () {
    localStorage.setItem("tarefas", JSON.stringify (tarefas))
}

function carregarDados () {
    let tarefaTemp = localStorage.getItem("tarefas")
    if (tarefaTemp != null) {
        tarefas = JSON.parse(tarefaTemp)      

    }
    indexContador = tarefas.length
    atualizarListaTarefas()
}

document.addEventListener("DOMContentLoaded", () => {
    carregarDados ()

})
