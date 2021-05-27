const { Model, DataTypes } = require("sequelize");

class Tarefa extends Model{
    static init(sequelize){
        super.init({
            titulo: DataTypes.STRING,
            notas: DataTypes.STRING,
        }, {
            sequelize
        })
    } 
}

module.exports = Tarefa;