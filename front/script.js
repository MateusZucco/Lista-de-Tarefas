var adicionar = document.getElementById("adc")
adicionar.addEventListener("click", criar)
CarregarBanco() 


///TRABALHANDO COM O BANCO DE DADOS
async function CarregarBanco(){
    const tarefas_carregadas = await GetTarefas()
    console.log(tarefas_carregadas)
    for(i=0; i< tarefas_carregadas.length; i++ ){
        criarElemento(tarefas_carregadas[i].titulo, tarefas_carregadas[i].notas)
    }
}
async function GetTarefas(){ 
    try{
        const response = await fetch("http://localhost:7000/tarefas")
        const data = await response.json()
        return data   
    }catch(error){
        console.error(error)
    }
}
function AdicionarNoBanco(titulo, anotação){
    const itens = { 
        titulo: titulo,
        notas: anotação}
    const options = {
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(itens),
    }
    try{
        fetch("http://localhost:7000/add_tarefa", options)
    }catch(error){
        console.error(error);
    }
}
async function DeleteNoBanco(titulo){
    const tarefas_carregadas = await GetTarefas()
    for(i=0; i< tarefas_carregadas.length; ){
        if (tarefas_carregadas[i].titulo == titulo){
            var id = tarefas_carregadas[i].id
        }
        i++
    }
    const options = {
        method:"DELETE",
        headers:{
            "Content-Type": "application/json"
        },
    }
    try{
        fetch(`http://localhost:7000/tarefas/${id}`, options )
    }catch(error){
        console.error(error);
    }
}

/// TRABALHANDO COM A PAGINA
function criar(){
    var titulo = document.getElementById("titulo")
    var anotação = document.getElementById("notas")
    adicionar.addEventListener("click", AdicionarNoBanco(titulo.value, anotação.value))
    if ((titulo.value != null && titulo.value != "") && (anotação.value != null && anotação.value !="")){
        criarElemento(titulo.value, anotação.value)
    }else{
        window.alert("PREENCHA TODOS OS DADOS ANTES DE ADICIONAR A TAREFA")
    }
}
function criarElemento(titulo, anotação){
    var tarefa_criada = document.createElement("div")       /// criando elemento
    var tituloNaTarefaCriada = document.createElement("div")        /// criando elemento
    var anotaçãoNaTarefaCriada = document.createElement("div")      /// criando elemento
    var bot_remover = document.createElement("input")      ///criando elemento
    var criadas = document.getElementById("tarefa_criada")      ///criando elemento
    var subtitulo = document.getElementById("subtitulo")    ///criando elemento

    tarefa_criada.className = "tarefa_criada"       ///atribuindo classe    
    tituloNaTarefaCriada.className = "titulo_tarefa"    ///atribuindo classe   
    anotaçãoNaTarefaCriada.className = "notas_tarefa"   ///atribuindo classe   
    bot_remover.type = "button"
    bot_remover.value = "REMOVER"
    bot_remover.className = "bot_remover"    ///atribuindo classe   
    
    tituloNaTarefaCriada.innerText = titulo     ///inserindo texto
    anotaçãoNaTarefaCriada.innerText = anotação      ///inserindo texto
    
    subtitulo.innerHTML = "<h1>TAREFAS ADICIONADAS</h1>"
    criadas.insertAdjacentElement("afterbegin", tarefa_criada)     ///adicionando bloco da tarefa
    criadas.appendChild (tarefa_criada) 

    tarefa_criada.appendChild(tituloNaTarefaCriada)   ///adicionando titulo a tarefa
    tarefa_criada.appendChild(anotaçãoNaTarefaCriada)       ///adicionando anotações a tarefa
    tarefa_criada.appendChild(bot_remover)          ///adicionando botão de remover a tarefa

    bot_remover.addEventListener("click", remover)

    function remover(){
        criadas.removeChild(tarefa_criada) ///remove da pagina
        DeleteNoBanco(titulo)   ///remove do banco
        
    }
}
function apagar(){
    var titulo = document.querySelector("textarea.titulo")
    titulo.innerHTML = ""
}
function apagar2(){
    var notas = document.querySelector("textarea.notas")
    notas.innerHTML = ""
} 
