const express = require("express");
const TarefaController = require("../src/controllers/TarefaController");
const routes = express.Router()

try{
    routes.get("/tarefas",TarefaController.index)
    }catch(error){
        console.error(error)
    }
try{
    routes.post("/add_tarefa", TarefaController.store);
    }catch(error){
        console.error(error)
    }
try{
    routes.delete(`/tarefas/:id`, TarefaController.delete)
    }catch(error){
        console.error(error)
    }

module.exports = routes;