let input = document.querySelector("input")
let addTarefa = document.getElementById("add-tarefa");
let ul = document.querySelector("ul");

addTarefa.addEventListener("click", function criaTarefa (params) {
    const txt = input.value;
    if (txt === "") {
        return
        
    } else {
        let div = document.createElement("div")
        div.classList.add("tarefa")
        div.innerHTML = 
        `
        <li contenteditable="true">${txt}</li>
        <i class="excluir fa-solid fa-circle-xmark"></i></li>
        `
        ul.appendChild(div)
        input.value = "";

        let excluir = div.querySelector(".excluir")
        excluir.addEventListener("click", function removeTarefa(params) {
            div.classList.add("efect")
            setTimeout(() => {
                div.remove()
                salvaTarefas()
                
            }, 200);
            
        })

        salvaTarefas()
        
    }
    
})

function salvaTarefas(params) {
    let tarefas = document.querySelectorAll(".tarefas")
    let listaTarefas = [];

    for(let tarefa of tarefas) {
        

    }
    
}



