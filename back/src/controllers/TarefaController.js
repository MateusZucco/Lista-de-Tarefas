const Tarefa = require("../models/Tarefa")

module.exports = {
    async index(req,res){
        const tarefas = await Tarefa.findAll();
        return res.json(tarefas);
    },

    async store(req, res){
        const {titulo, notas} = req.body
        const tarefa = await Tarefa.create({titulo, notas})
        return res.json(tarefa)
    },

    async delete(req, res){
        console.log("vtnc")
        const { id } = req.params;
        const tarefa = await Tarefa.findByPk(id);
        if (tarefa){
            Tarefa.destroy({where: {id: id}})
        }else {
          return res.status(400).json({ error: 'Tarefa não encontrada' });
        }
        return res.json("deletado")
    }
}